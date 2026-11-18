import type { Lang } from './content/types';

/**
 * Units are a reader setting, separate from the language: the content is USPA's, written in feet, and every
 * altitude in every language goes through `convertQuantities` (called by `t()` and `num()`), so one place decides
 * how a quantity is shown. Metres are always marked "≈": they are conversions, not the round numbers a metric school
 * teaches (see docs/i18n/DEEP-LOCALIZATION.md).
 */
export type Units = 'ft' | 'm' | 'both';
export const UNITS: readonly Units[] = ['ft', 'both', 'm'];
const KEY = 'aff-units';

/**
 * Regions whose skydiving schools train in metres: the default there is metres (owner 2026-11-17: "no one uses feet") (docs/i18n/units-and-rules.md:
 * federation documents for FR DE RU UA FI DK SE PL CZ EE; likely for AT and post-Soviet / Central European countries).
 */
const METRIC_REGIONS = new Set(['FR', 'DE', 'AT', 'RU', 'UA', 'BY', 'KZ', 'UZ', 'KG', 'FI', 'DK', 'SE', 'PL', 'CZ', 'SK', 'EE', 'LV', 'LT', 'HU', 'MD']);

/** The reader's own choice (from the link or the menu), or null: then the default follows the language. */
export function savedUnits(): Units | null {
  const fromUrl = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('units') : null;
  if (fromUrl === 'ft' || fromUrl === 'm' || fromUrl === 'both') { saveUnits(fromUrl); return fromUrl; }
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'ft' || saved === 'm' || saved === 'both') return saved;
  } catch { /* storage blocked */ }
  return null;
}

/** Languages whose skydiving schools train in metres (docs/i18n/units-and-rules.md). */
const METRIC_LANGS: readonly string[] = ['ru', 'uk', 'fr', 'de', 'fi', 'da', 'sv', 'pl', 'cs', 'sk', 'lt', 'hu'];

/** Default units: metres where schools use metres (by the browser region, else by the app language), else feet. */
export function defaultUnits(lang: Lang): Units {
  const prefs = typeof navigator !== 'undefined' ? (navigator.languages?.length ? navigator.languages : [navigator.language]) : [];
  const region = (prefs[0] || '').split('-')[1]?.toUpperCase();
  if (region && METRIC_REGIONS.has(region)) return 'm';
  return METRIC_LANGS.includes(lang) ? 'm' : 'ft';
}
export function saveUnits(u: Units) { try { localStorage.setItem(KEY, u); } catch { /* ignore */ } }

const SPACE_GROUP: readonly string[] = ['uk', 'ru', 'fr', 'pl', 'sv', 'nb', 'fi', 'cs', 'sk', 'hu', 'bg', 'lt'];
const DOT_GROUP: readonly string[] = ['de', 'it', 'pt', 'da', 'nl', 'ro', 'hr', 'sr', 'sl', 'el', 'tr', 'id'];
const NB = ' ';

/** A whole number with this language's thousands separator. */
export function group(n: number, lang: Lang): string {
  const s = String(Math.round(n));
  if (s.length < 4) return s;
  const sep = SPACE_GROUP.includes(lang) ? NB : DOT_GROUP.includes(lang) ? '.' : ',';
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

/** Metres from feet, rounded the way a person would say them (never more precise than the original). */
export function toMetres(ft: number): number {
  const m = ft * 0.3048;
  if (m < 30) return Math.round(m);
  if (m < 1000) return Math.round(m / 10) * 10;
  return Math.round(m / 50) * 50;
}

const mWord = (lang: Lang) => (lang === 'uk' || lang === 'ru' || lang === 'bg' ? 'м' : 'm');
const NUM = String.raw`\d{1,3}(?:[,.   ]\d{3})+|\d+`;
const FT_UNIT = String.raw`(?:ft|feet|фт|футів|футов|футах|футами|футам|фута|фути|фут)(?![A-Za-z\u0400-\u04FF])`;
// "1,000–2,000 ft" (a range) or "5,500 ft"; not when a conversion already follows ("1,000 ft ≈ 300 m").
const QTY = new RegExp(String.raw`(${NUM})(?:(\s?[–-]\s?|\s?→\s?)(${NUM}))?(\s?)(${FT_UNIT})(?!\s*(?:≈|=|\(≈))`, 'gu');
const parse = (s: string) => Number(s.replace(/[^\d]/g, ''));

/** Rewrites every "N ft" in a text for the reader's units. Feet stay as written; metres are added or swapped in. */
export function convertQuantities(text: string, lang: Lang, units: Units): string {
  if (units === 'ft' || !text) return text;
  return text.replace(QTY, (whole, a: string, dash: string | undefined, b: string | undefined) => {
    const m = `${group(toMetres(parse(a)), lang)}${dash ? `${dash}${group(toMetres(parse(b!)), lang)}` : ''}${NB}${mWord(lang)}`;
    return units === 'm' ? `≈${m}` : `${whole} (≈${m})`;
  });
}
