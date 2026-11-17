import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { convertQuantities, toMetres } from '../src/units';
import { ALL_LANGS, type Lang } from '../src/content/types';

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
  it('in metres mode no bare "N ft" is left in any language', () => {
    const dir = path.join(__dirname, '../src/content/i18n');
    for (const lang of ALL_LANGS) {
      const file = path.join(dir, `${lang}.json`);
      if (!fs.existsSync(file)) continue;
      const strings: string[] = Object.values(JSON.parse(fs.readFileSync(file, 'utf8')));
      const left = strings.map(s => convertQuantities(s, lang as Lang, 'm')).filter(s => /\d[\s ]?(ft|feet)\b(?!\s*(≈|=|\(≈))/u.test(s));
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
  it('a metric browser region wins over an English app language', () => {
    vi.stubGlobal('navigator', { languages: ['en-DE'] }); expect(defaultUnits('en')).toBe('m');
    vi.stubGlobal('navigator', { languages: ['ru-US'] }); expect(defaultUnits('es')).toBe('ft');
  });
});
