import { FEDS, fedForRegion, PROFILES, type Fed, type RuleId, type RuleValue } from './content/rules';
import type { Lang } from './content/types';
import { convertQuantities, group, type Units } from './units';

/**
 * School rules (phase 2 of deep localization). Text marks rule numbers right after the quantity:
 * "pull at 5,500 ft{pull}", "13,000{exit} → 5,500 ft{pull}", "1,000 ft{~}" (reviewed: stays USPA's number).
 * The marks live only in the English source: translations are found by value (the same number in the same string),
 * so the 31 translated languages keep working unchanged. Marks are stripped before keys and display.
 */
const KEY = 'aff-rules';
export const MARK = /\{([a-zA-Z]+|~)\}/g;
export const stripMarks = (s: string) => (s.includes('{') ? s.replace(MARK, '') : s);
export const hasMarks = (s: string) => s.includes('{') && /\{(?:[a-zA-Z]+|~)\}/.test(s);

const isFed = (s: string | null): s is Fed => !!s && (FEDS as readonly string[]).includes(s);

/** ?rules=dfv in the link wins (and is remembered), then the saved choice; null = follow the region. */
export function savedRules(): Fed | null {
  const fromUrl = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('rules') : null;
  if (isFed(fromUrl)) { saveRules(fromUrl); return fromUrl; }
  try { const s = localStorage.getItem(KEY); if (isFed(s)) return s; } catch { /* storage blocked */ }
  return null;
}
export function saveRules(f: Fed) { try { localStorage.setItem(KEY, f); } catch { /* ignore */ } }

/** From the browser region (first preferred language that names one), else USPA. */
export function defaultRules(): Fed {
  const prefs = typeof navigator !== 'undefined' ? (navigator.languages?.length ? navigator.languages : [navigator.language]) : [];
  for (const p of prefs) {
    const region = (p || '').split(/[-_]/)[1];
    if (region && /^[A-Za-z]{2}$/.test(region)) return fedForRegion(region);
  }
  return 'uspa';
}

const NUM = String.raw`\d{1,3}(?:[,.   ]\d{3})+|\d+`;
const UNIT = String.raw`ft|feet|mph|фт|футів|футов|футах|футами|футам|фута|фути|фут|миль/ч|миль/год`;
const TOKEN = () => new RegExp(String.raw`(?<![\d.,])(${NUM})(?:(\s?[–-]\s?)(${NUM}))?(?:(\s?)(${UNIT})(?![\p{L}]))?`, 'gu');
const val = (s: string) => Number(s.replace(/[^\d]/g, ''));
const keyFor = (a: string, b?: string) => (b ? `${val(a)}-${val(b)}` : String(val(a)));

/** For each number in the marked English, in order: its rule id, '~', or null (unmarked). */
const cache = new Map<string, Map<string, (string | null)[]>>();
function marksOf(en: string): Map<string, (string | null)[]> {
  let m = cache.get(en);
  if (m) return m;
  m = new Map();
  const re = TOKEN();
  let x: RegExpExecArray | null;
  while ((x = re.exec(en))) {
    const after = /^\{([a-zA-Z]+|~)\}/.exec(en.slice(re.lastIndex));
    const k = keyFor(x[1], x[3]);
    if (!m.has(k)) m.set(k, []);
    m.get(k)!.push(after ? after[1] : null);
  }
  cache.set(en, m);
  return m;
}

const mWord = (lang: Lang) => (lang === 'uk' || lang === 'ru' || lang === 'bg' ? 'м' : 'm');
const ftW = (lang: Lang) => (lang === 'uk' || lang === 'ru' ? 'фт' : 'ft');
const msWord = (lang: Lang) => (lang === 'uk' || lang === 'ru' || lang === 'bg' ? 'м/с' : 'm/s');
/** Feet from metres for a hint, rounded like a person says it. */
export function toFeet(m: number): number { const f = m / 0.3048; return f >= 1000 ? Math.round(f / 100) * 100 : Math.round(f / 10) * 10; }

export interface Shown { v: RuleValue; fallback: boolean; check: boolean }
/** The value the reader's profile gives for a rule, or USPA's with the check flag. */
export function ruleValue(id: RuleId, fed: Fed): Shown {
  const own = PROFILES[fed].values[id];
  if (own) return { v: own, fallback: false, check: !!own.check };
  return { v: PROFILES.uspa.values[id]!, fallback: fed !== 'uspa', check: fed !== 'uspa' };
}

/** A metric (or other non-feet) value as text; feet values go back through the units conversion. */
function metricText(v: RuleValue, lang: Lang, units: Units, bare: boolean, hint: boolean): string {
  const NB = ' ';
  const n = `${group(v.n, lang)}${v.to ? `–${group(v.to, lang)}` : ''}`;
  if (v.unit === 'm') {
    if (bare) return n;
    const ft = hint && units !== 'm' ? ` (≈${group(toFeet(v.n), lang)}${v.to ? `–${group(toFeet(v.to), lang)}` : ''}${NB}${ftW(lang)})` : '';
    return `${n}${NB}${mWord(lang)}${ft}`;
  }
  if (v.unit === 'm/s') return `${n}${NB}${msWord(lang)}`;
  if (v.unit === 'kt') return `${n}${NB}kt`;
  if (v.unit === 'mph') return `${n}${NB}mph`;
  return n;
}

/**
 * Renders a translated string with the reader's school rules and units. `en` is the marked English source of the
 * same string; `raw` is the translation (or the English itself).
 */
export function applyRules(raw: string, en: string, fed: Fed, lang: Lang, units: Units, hint = true): string {
  if (fed !== 'uspa' && en.startsWith('{uspa}')) return '';
  const text = stripMarks(raw);
  if (!hasMarks(en)) return convertQuantities(text, lang, units);
  const queues = new Map([...marksOf(en)].map(([k, v]) => [k, [...v]]));
  const held: string[] = [];
  const out = text.replace(TOKEN(), (whole, a: string, _d, b: string | undefined, _sp, unit: string | undefined) => {
    const q = queues.get(keyFor(a, b));
    const id = q?.length ? q.shift() : null;
    if (!id || id === '~') return whole;
    const { v, fallback, check } = ruleValue(id as RuleId, fed);
    const badge = check ? ' <q-check/>' : '';
    if (fallback || fed === 'uspa') return `${whole}${badge}`;
    if (v.unit === 'ft') return `${group(v.n, lang)}${unit ? ` ${ftW(lang)}` : ''}${badge}`;
    held.push(metricText(v, lang, units, !unit, hint));
    return `${held.length - 1}${badge}`;
  });
  return convertQuantities(out, lang, units).replace(/(\d+)/g, (_m, i: string) => held[Number(i)]);
}

/** Thousands of feet for an altitude string from the content ("5,500 ft{pull}"), following the rules; null if none. */
export function altFt(alt: string, fed: Fed): number | null {
  const m = /^(\d{1,3}(?:,\d{3})*|\d+)\s?ft\{([a-zA-Z]+)\}$/.exec(alt.trim());
  if (!m) return null;
  const { v, fallback } = ruleValue(m[2] as RuleId, fed);
  if (fallback || fed === 'uspa') return val(m[1]) / 1000;
  return v.unit === 'm' ? v.n / 0.3048 / 1000 : v.unit === 'ft' ? v.n / 1000 : null;
}

/** A foot quantity with no rule mark (not even "~"): a USPA-only number such as a scenario or a wrong answer. */
const unmarkedFeet = (en: string) => {
  const re = /(\d{1,3}(?:,\d{3})*|\d+)(?:\s?[–-]\s?(?:\d{1,3}(?:,\d{3})*|\d+))?\s?(?:ft|feet)\b(?!\{)/g;
  return re.test(en);
};
/**
 * Quiz questions for the reader's rules. Under another federation a question that still uses a bare USPA number
 * (a scenario "at 2,100 ft", a wrong answer "5,000 ft") could teach a wrong comparison, so it is left out.
 */
export function forRules<Q extends { q: { en: string }; options: { en: string }[]; why: { en: string } }>(qs: Q[], fed: Fed): Q[] {
  if (fed === 'uspa') return qs;
  return qs.filter(x => ![x.q, ...x.options, x.why].some(s => unmarkedFeet(s.en)));
}

/** Rule marks in `en` that `raw` (a translation of it) has no matching number for: should be [] (tests). */
export function unresolved(raw: string, en: string): string[] {
  if (!hasMarks(en)) return [];
  const queues = new Map([...marksOf(en)].map(([k, v]) => [k, [...v]]));
  const text = stripMarks(raw);
  const re = TOKEN();
  let x: RegExpExecArray | null;
  while ((x = re.exec(text))) queues.get(keyFor(x[1], x[3]))?.shift();
  return [...queues.values()].flat().filter((m): m is string => !!m && m !== '~');
}
