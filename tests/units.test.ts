import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { convertQuantities, toMetres } from '../src/units';
import { ALL_LANGS } from '../src/content/types';

describe('units', () => {
  it('rounds like a person would say it', () => {
    expect(toMetres(10)).toBe(3); expect(toMetres(900)).toBe(270); expect(toMetres(5500)).toBe(1700); expect(toMetres(13000)).toBe(3950);
  });
  it('feet stay untouched in ft mode', () => {
    expect(convertQuantities('pull at 5,500 ft', 'en', 'ft')).toBe('pull at 5,500 ft');
  });
  it('adds or swaps metres, keeps ranges and existing conversions', () => {
    expect(convertQuantities('pull at 5,500 ft.', 'en', 'both')).toBe('pull at 5,500 ft (≈1,700 m).');
    expect(convertQuantities('pull at 5,500 ft.', 'en', 'm')).toBe('pull at ≈1,700 m.');
    expect(convertQuantities('from 1,000–2,000 ft', 'en', 'm')).toBe('from ≈300–610 m');
    expect(convertQuantities('(1,000 ft ≈ 300 m)', 'en', 'm')).toBe('(1,000 ft ≈ 300 m)');
    expect(convertQuantities('на 5 500 футах', 'ru', 'm')).toBe('на ≈1 700 м');
    expect(convertQuantities('bei 5.500 ft', 'de', 'm')).toBe('bei ≈1.700 m');
  });
  it('converts both heights when a word or an arrow joins them (not only the last one)', () => {
    expect(convertQuantities('from 2,000 to 1,000 ft', 'en', 'm')).toBe('from ≈610 to 300\u00a0m');
    expect(convertQuantities('between 1,000 and 300 ft.', 'en', 'both')).toBe('between 1,000 and 300 ft (≈300 and 90\u00a0m).');
    expect(convertQuantities('2,000→1,000 ft', 'en', 'm')).toBe('≈610→300\u00a0m');
    expect(convertQuantities('13,000 → 5,500 ft', 'en', 'm')).toBe('≈3,950 → 1,700\u00a0m');
    expect(convertQuantities('с 2 000 до 1 000 футов', 'ru', 'm')).toBe('с ≈610 до 300 м');
    expect(convertQuantities('на 6 000 і на 5 500 футів', 'uk', 'm')).toBe('на ≈1 850 і на 1 700 м');
    expect(convertQuantities('2.000 bis 1.000 ft', 'de', 'm')).toBe('≈610 bis 300 m');
    expect(convertQuantities('2,000 إلى 1,000 ft', 'ar', 'm')).toBe('≈610 إلى 300 m');
    // A list with one unit at the end: every height converted.
    expect(convertQuantities('Plan it: 2,500, 2,000, 1,000, 900, 600, 300 ft and the flare.', 'en', 'm')).toBe(
      'Plan it: ≈760, 610, 300, 270, 180, 90\u00a0m and the flare.',
    );
    expect(convertQuantities('2.500, 2.000, 1.000, 900 ft', 'de', 'm')).toBe('≈760, 610, 300, 270\u00a0m');
    // Not a range: a question number before the height stays as it is.
    expect(convertQuantities('28 тоже про 300 футов', 'ru', 'm')).toBe('28 тоже про ≈90 м');
  });
  it('in metres mode no bare height is left before a joined, converted one', () => {
    const dir = path.join(__dirname, '../src/content/i18n');
    for (const lang of ALL_LANGS) {
      const file = path.join(dir, `${lang}.json`);
      if (!fs.existsSync(file)) continue;
      const strings: string[] = Object.values(JSON.parse(fs.readFileSync(file, 'utf8')));
      // "2,000 to ≈300 m": a thousands-sized number, a short joiner, then a converted height.
      const left = strings
        .map(s => convertQuantities(s, lang, 'm'))
        .filter(s => /(?<![≈\d,.\s])\d{1,3}[,.\s]?\d{3}\s(?!ft\b|[mм][.,]?\s)\S{1,7}\s≈/u.test(s));
      expect(left.slice(0, 3), lang).toEqual([]);
    }
  });
  it('in metres mode no bare "N ft" is left in any language', () => {
    const dir = path.join(__dirname, '../src/content/i18n');
    for (const lang of ALL_LANGS) {
      const file = path.join(dir, `${lang}.json`);
      if (!fs.existsSync(file)) continue;
      const strings: string[] = Object.values(JSON.parse(fs.readFileSync(file, 'utf8')));
      const left = strings.map(s => convertQuantities(s, lang, 'm')).filter(s => /\d[\s ]?(ft|feet)\b(?!\s*(≈|=|\(≈))/u.test(s));
      expect(left.slice(0, 3), lang).toEqual([]);
    }
  });
});
import { defaultUnits } from '../src/units';
import { vi, afterEach } from 'vitest';
describe('default units', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('metres for Russian and Ukrainian, feet for English', () => {
    vi.stubGlobal('navigator', { languages: ['en'] });
    expect(defaultUnits('ru')).toBe('m'); expect(defaultUnits('uk')).toBe('m'); expect(defaultUnits('en')).toBe('ft');
  });
  it('by region: feet countries, metric countries, everyone else both', () => {
    vi.stubGlobal('navigator', { languages: ['en-DE'] }); expect(defaultUnits('en')).toBe('m');
    vi.stubGlobal('navigator', { languages: ['en-US'] }); expect(defaultUnits('en')).toBe('ft');
    vi.stubGlobal('navigator', { languages: ['en-CA'] }); expect(defaultUnits('en')).toBe('ft');
    vi.stubGlobal('navigator', { languages: ['en-GB'] }); expect(defaultUnits('en')).toBe('ft');
    vi.stubGlobal('navigator', { languages: ['es-MX'] }); expect(defaultUnits('es')).toBe('both');
    vi.stubGlobal('navigator', { languages: ['it-IT'] }); expect(defaultUnits('it')).toBe('both');
    vi.stubGlobal('navigator', { languages: ['th-TH'] }); expect(defaultUnits('th')).toBe('both');
    vi.stubGlobal('navigator', { languages: ['ru-US'] }); expect(defaultUnits('ru')).toBe('m');
  });
});
