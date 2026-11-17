import { afterEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { parts } from '../src/content';
import { ui } from '../src/ui';
import { ALL_LANGS, isCore, LANGS } from '../src/content/types';
import { keyOf } from '../src/content/i18n/key';
import { FEDS, PROFILES, RULE_IDS, fedForRegion } from '../src/content/rules';
import { applyRules as apply, defaultRules, forRules, stripMarks, unresolved } from '../src/rules';

const nb = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const applyRules = (...a: Parameters<typeof apply>) => nb(apply(...a));
const dir = path.join(__dirname, '../src/content/i18n');
function walk(o: unknown, out: { L: Record<string, string>[]; raw: string[] }) {
  if (!o || typeof o !== 'object') return out;
  const r = o as Record<string, unknown>;
  if (typeof r.en === 'string' && typeof r.es === 'string') { out.L.push(r as Record<string, string>); return out; }
  for (const [k, v] of Object.entries(r)) {
    if ((k === 'big' || k === 'alt') && typeof v === 'string') out.raw.push(v);
    else walk(v, out);
  }
  return out;
}
const all = walk([parts, ui], { L: [], raw: [] });

describe('rule profiles', () => {
  it('every value has a source, and USPA has every rule', () => {
    for (const f of FEDS) for (const v of Object.values(PROFILES[f].values)) {
      expect(v!.src.label.length, f).toBeGreaterThan(3);
      expect(v!.src.href, f).toMatch(/^(https?:\/\/|#)/);
    }
    for (const id of RULE_IDS) expect(PROFILES.uspa.values[id], id).toBeTruthy();
  });
  it('unofficial RU/UA numbers are marked check', () => {
    const v = PROFILES.ruua.values;
    expect([v.exit?.check, v.pull?.check, v.decision?.check, v.hardDeck?.check]).toEqual([true, true, true, true]);
  });
  it('defaults from the browser region', () => {
    expect([fedForRegion('US'), fedForRegion('de'), fedForRegion('AT'), fedForRegion('FR'), fedForRegion('GB'), fedForRegion('IE'), fedForRegion('UA'), fedForRegion('KZ'), fedForRegion('BR'), fedForRegion(undefined)])
      .toEqual(['uspa', 'dfv', 'dfv', 'ffp', 'bs', 'bs', 'ruua', 'ruua', 'uspa', 'uspa']);
  });
});

describe('rendering rules', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('region of the first language that has one', () => {
    vi.stubGlobal('navigator', { languages: ['ru', 'ru-RU', 'en-US'] }); expect(defaultRules()).toBe('ruua');
    vi.stubGlobal('navigator', { languages: ['en'] }); expect(defaultRules()).toBe('uspa');
  });
  it('shows the profile value in its own unit', () => {
    const en = 'Pull at 5,500 ft{pull}, decide by 2,500 ft{decision}.';
    expect(applyRules(en, en, 'uspa', 'en', 'ft')).toBe('Pull at 5,500 ft, decide by 2,500 ft.');
    expect(applyRules(en, en, 'dfv', 'en', 'm')).toBe('Pull at 1,500 m, decide by ≈760 m <q-check/>.');
    expect(applyRules(en, en, 'dfv', 'en', 'ft')).toBe('Pull at 1,500 m (≈4,900 ft), decide by 2,500 ft <q-check/>.');
    expect(applyRules(en, en, 'ruua', 'en', 'm')).toBe('Pull at 1,500 m <q-check/>, decide by 600 m <q-check/>.');
    expect(applyRules('Wind 14 mph{wind}.', 'Wind 14 mph{wind}.', 'ffp', 'en', 'm')).toBe('Wind 7 m/s.');
  });
  it('finds the number in a translation by value, in any order', () => {
    const en = 'We pull at 5,500 ft{pull}, not 5,000 ft. 6,000 ft{lockOn} is lock on.';
    expect(applyRules('Раскрываемся на 5 500 футах, а не на 5 000 футах. На 6 000 футов — только высотомер.', en, 'dfv', 'ru', 'm'))
      .toBe('Раскрываемся на 1 500 м, а не на ≈1 500 м. На 1 700 м — только высотомер.');
    expect(applyRules('<b>カテゴリーA</b>では5,000 ftではなく<b>5,500 ft</b>で開傘。', '{uspa}On category A we pull at <b>5,500 ft{pull}</b>, not 5,000 ft.', 'uspa', 'ja', 'ft'))
      .toBe('<b>カテゴリーA</b>では5,000 ftではなく<b>5,500 ft</b>で開傘。');
  });
  it('USPA-only sentences disappear under other rules', () => {
    const en = '{uspa}From 6,000 ft{lockOn} you have about 3 seconds.';
    expect(applyRules(en, en, 'uspa', 'en', 'ft')).toBe('From 6,000 ft you have about 3 seconds.');
    expect(applyRules(en, en, 'dfv', 'en', 'ft')).toBe('');
  });
  it('quiz questions with bare USPA numbers are left out under other rules', () => {
    const q = (s: string) => ({ en: s });
    const qs = [
      { q: q('Pull altitude?'), options: [q('5,000 ft'), q('5,500 ft{pull}')], why: q('') },
      { q: q('Lock on?'), options: [q('6,000 ft{lockOn}'), q('5,500 ft{pull}')], why: q('') },
    ];
    expect(forRules(qs, 'uspa').length).toBe(2);
    expect(forRules(qs, 'dfv').map(x => x.q.en)).toEqual(['Lock on?']);
  });
});

describe('rule marks in the content', () => {
  const KEY_ALT = /(?<![\d,–])(13,000|6,000|5,500|2,500|1,000) ?ft(?!\{)/;
  it('every key altitude (exit, lock on, pull, decision, hard deck) is marked or reviewed ({~})', () => {
    const bad = [...all.L.map(l => l.en), ...all.raw].filter(s => KEY_ALT.test(s));
    expect(bad).toEqual([]);
  });
  it('every mark finds its number in every language', () => {
    const marked = all.L.filter(l => /\{[a-zA-Z]+\}/.test(l.en));
    expect(marked.length).toBeGreaterThan(50);
    const bad: string[] = [];
    for (const lang of ALL_LANGS) {
      const tr: Record<string, string> = isCore(lang) ? {} : JSON.parse(fs.readFileSync(path.join(dir, `${lang}.json`), 'utf8'));
      for (const l of marked) {
        const raw = isCore(lang) ? l[lang as (typeof LANGS)[number]] : tr[keyOf(stripMarks(l.en))];
        if (!raw) continue;
        const left = unresolved(raw, l.en);
        if (left.length) bad.push(`${lang}: ${left.join(',')} in "${raw.slice(0, 80)}"`);
      }
    }
    expect(bad.slice(0, 10)).toEqual([]);
  });
});
