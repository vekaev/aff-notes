import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { parts } from '../src/content';
import { ui } from '../src/ui';
import { ALL_LANGS, isCore } from '../src/content/types';
import { keyOf } from '../src/content/i18n/key';

const dir = path.join(__dirname, '../src/content/i18n');
const en: Record<string, string> = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));

function collect(o: unknown, out: string[] = []): string[] {
  if (!o || typeof o !== 'object') return out;
  const r = o as Record<string, unknown>;
  if (typeof r.en === 'string' && typeof r.es === 'string') { out.push(r.en); return out; }
  for (const v of Object.values(r)) collect(v, out);
  return out;
}
const tags = (s: string) => (s.match(/<\/?b>|<a |<\/a>|<q-check\s*\/>/g) ?? []).sort().join(' ');
const nums = (s: string) => (s.replace(/(\d)[\s,.  '](?=\d{3}(?!\d))/g, '$1').match(/\d+/g) ?? []).sort().join(' ');

describe('translations', () => {
  it('en.json is up to date (run node scripts/i18n-extract.mjs)', () => {
    const missing = [...new Set(collect([parts, ui]))].filter(s => s.trim() && !en[keyOf(s)]);
    expect(missing.slice(0, 5)).toEqual([]);
  });
  for (const lang of ALL_LANGS.filter(l => !isCore(l))) {
    const file = path.join(dir, `${lang}.json`);
    if (!fs.existsSync(file)) continue;
    const tr: Record<string, string> = JSON.parse(fs.readFileSync(file, 'utf8'));
    it(`${lang}: every string translated, no stray keys`, () => {
      expect(Object.keys(en).filter(k => !tr[k]?.trim()).slice(0, 5)).toEqual([]);
      expect(Object.keys(tr).filter(k => !(k in en))).toEqual([]);
    });
    it(`${lang}: same tags and numbers as English`, () => {
      const bad = Object.keys(tr).filter(k => en[k] && (tags(tr[k]) !== tags(en[k]) || nums(tr[k]) !== nums(en[k])));
      expect(bad.slice(0, 5).map(k => `${en[k]}  ⟶  ${tr[k]}`)).toEqual([]);
    });
  }
});
