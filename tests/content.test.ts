import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parts } from '../src/content';
import { LANGS } from '../src/content/types';
import { ui } from '../src/ui';

// Walks every string in the content and checks the rules the type system can't: no empty or
// leftover-markup translations, every clip file exists, quiz answers point at a real option.
function walk(v: unknown, path: string, out: { path: string; v: Record<string, string> }[]) {
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>;
    if (LANGS.every(l => typeof o[l] === 'string')) out.push({ path, v: o as Record<string, string> });
    else for (const [k, x] of Object.entries(o)) walk(x, `${path}.${k}`, out);
  }
}

const strings: { path: string; v: Record<string, string> }[] = [];
walk(parts, 'parts', strings);
walk(ui, 'ui', strings);

describe('content', () => {
  it('has text in every language', () => {
    const bad = strings.filter(s => LANGS.some(l => !s.v[l].trim()));
    expect(bad.map(b => b.path)).toEqual([]);
  });
  it('has no leftover markup from the old page', () => {
    const bad = strings.filter(s => LANGS.some(l => /class="|CHECK|УТОЧНИТЬ|VERIFICAR|<span/.test(s.v[l])));
    expect(bad.map(b => b.path)).toEqual([]);
  });
  it('has the same inline tags in every language', () => {
    const tags = (t: string) => (t.match(/<b>|<q-check\s*\/>|<a /g) ?? []).sort().join();
    const bad = strings.filter(s => tags(s.v.en) !== tags(s.v.es) || tags(s.v.en) !== tags(s.v.ru));
    expect(bad.map(b => b.path)).toEqual([]);
  });
  it('points every clip at a real file', () => {
    const json = JSON.stringify(parts);
    const names = [...json.matchAll(/"(?:src|clip)":"([a-z0-9_]+)"/g)].map(m => m[1]);
    expect(names.length).toBeGreaterThan(20);
    expect(names.filter(n => !existsSync(`public/media/${n}.mp4`))).toEqual([]);
  });
  it('has quiz answers that exist', () => {
    const qs = [...JSON.stringify(parts).matchAll(/"options":(\[.*?\]),"answer":(\d+)/g)];
    for (const m of qs) expect(Number(m[2])).toBeLessThan(JSON.parse(m[1]).length);
  });
  it('uses unique chapter ids', () => {
    const ids = parts.flatMap(p => [p.id, ...p.chapters.map(c => c.id)]);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
