import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { ALL_LANGS, isCore, RTL, type L, type Lang } from './content/types';
import { keyOf } from './content/i18n/key';
import { convertQuantities, defaultUnits, savedUnits, saveUnits, type Units } from './units';

// Extra languages load on demand (one JSON per language, built from English by the translators).
// The 28 extra languages: plain JSON at fixed addresses next to the app (vite.config.ts, `langFiles`). A fixed name
// still exists after a new deploy, so switching language works on a page that was opened before it (no reload).
const APP_ROOT = new URL('../', import.meta.url); // the built script lives in assets/; in dev this is the site root
export const loadCatalog = (lang: Lang): Promise<Record<string, string>> =>
  fetch(new URL(`i18n/${lang}.json`, APP_ROOT)).then(r => {
    if (!r.ok) throw new Error(`${lang}: ${r.status}`);
    return r.json() as Promise<Record<string, string>>;
  });

const KEY = 'aff-lang';

/** Saved choice, else the browser language, else English. Read once, before the first render. */
/** "pt-BR" → "pt", old or variant codes → ours; null when we don't have that language. */
export function toLang(code: string | null | undefined): Lang | null {
  let base = (code || '').toLowerCase().split(/[-_]/)[0];
  if (base === 'no' || base === 'nn') base = 'nb';
  if (base === 'iw') base = 'he';
  if (base === 'in') base = 'id';
  if (base === 'bs') base = 'hr';
  return (ALL_LANGS as readonly string[]).includes(base) ? (base as Lang) : null;
}

/** "/fr/" (a per-language page, scripts/prerender.mjs) → "fr"; null on the root page or anywhere else. */
export function langFromPath(path: string): Lang | null {
  const m = /\/([a-z]{2})\/(?:index\.html)?$/.exec(path);
  return m && (ALL_LANGS as readonly string[]).includes(m[1]) ? (m[1] as Lang) : null;
}

/** Where the address bar should point for a language: "/fr/", English at the root "/"; null if the app isn't at a
 * root or language folder (e.g. a host that serves it under its own path), then ?lang= is used instead. */
export function langPath(path: string, lang: Lang): string | null {
  let root: string;
  if (langFromPath(path)) root = path.replace(/[a-z]{2}\/(?:index\.html)?$/, '');
  else if (/\/(?:index\.html)?$/.test(path)) root = path.replace(/index\.html$/, '');
  else return null;
  return root + (lang === 'en' ? '' : `${lang}/`);
}

/** ?lang=fr in the link wins (an email can carry the reader's language), then the page's language folder (/fr/),
 * then the saved choice, then the browser. */
export function initialLang(): Lang {
  const fromUrl =
    typeof location !== 'undefined'
      ? toLang(new URLSearchParams(location.search).get('lang')) ?? langFromPath(location.pathname)
      : null;
  if (fromUrl) {
    try { localStorage.setItem(KEY, fromUrl); } catch { /* ignore */ }
    return fromUrl;
  }
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && (ALL_LANGS as readonly string[]).includes(saved)) return saved as Lang;
  } catch { /* storage blocked: fall through */ }
  const prefs = typeof navigator !== 'undefined' ? (navigator.languages?.length ? navigator.languages : [navigator.language]) : [];
  for (const p of prefs) {
    const l = toLang(p);
    if (l) return l;
  }
  return 'en';
}

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string; units: Units; setUnits: (u: Units) => void }
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: s => s.en, units: 'ft', setUnits: () => {} });

/** `initial` is for pre-rendering a language page at build time (scripts/prerender.mjs): no browser, catalogue given.
 *  `preloaded` is the reader's language, fetched before the first render (main.tsx), so a language page never flashes
 *  English while its file loads. */
export function LangProvider({
  children,
  initial,
  preloaded,
}: {
  children: ReactNode;
  initial?: { lang: Lang; catalog?: Record<string, string> };
  preloaded?: { lang: Lang; map: Record<string, string> } | null;
}) {
  const [lang, setLangState] = useState<Lang>(() => initial?.lang ?? initialLang());
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  }, []);
  const [chosenUnits, setChosenUnits] = useState<Units | null>(() => (initial ? null : savedUnits()));
  const units: Units = chosenUnits ?? defaultUnits(lang);
  const setUnits = useCallback((u: Units) => { setChosenUnits(u); saveUnits(u); }, []);
  useEffect(() => {
    try {
      const u = new URL(location.href);
      const path = langPath(u.pathname, lang);
      if (path) { u.pathname = path; u.searchParams.delete('lang'); } else u.searchParams.set('lang', lang);
      if (!chosenUnits) u.searchParams.delete('units'); else u.searchParams.set('units', chosenUnits);
      if (u.href !== location.href) { history.replaceState(history.state, '', u.href); dispatchEvent(new Event('aff:url')); }
    } catch { /* ignore */ }
  }, [lang, chosenUnits]);
  const [cat, setCat] = useState<{ lang: Lang; map: Record<string, string> } | null>(
    initial?.catalog ? { lang: initial.lang, map: initial.catalog } : (preloaded ?? null),
  );
  const catRef = useRef(cat);
  useEffect(() => {
    catRef.current = cat;
  }, [cat]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    if (isCore(lang) || catRef.current?.lang === lang) return; // already loaded (e.g. preloaded before the first render)
    loadCatalog(lang).then(map => setCat({ lang, map })).catch(() => { /* offline and never loaded: stays English */ });
  }, [lang]);
  const value = useMemo(() => {
    const map = cat && cat.lang === lang ? cat.map : null;
    const raw = (s: L) => (isCore(lang) ? s[lang] || s.en : (map && map[keyOf(s.en)]) || s.en);
    const t = (s: L) => convertQuantities(raw(s), lang, units);
    return { lang, setLang, t, units, setUnits };
  }, [lang, setLang, cat, units, setUnits]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Renders a localized string with the few inline tags content may use: <b>, <a href>, <q-check/>. */
export function Rich({ s, className }: { s: L; className?: string }) {
  const { t } = useLang();
  return <span className={className}>{renderInline(t(s))}</span>;
}

const NB = '\u00a0';
/**
 * Keeps a number with its unit and its digit groups on one line: "5 s", "10 ft", "2 500 футов", "SIM 4-1"
 * never break in the middle.
 */
export function glue(text: string): string {
  return text
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NB}`)
    .replace(/(\d) (?=(?:s|ft|m|kt|mph|min|%|°|с|м|мин|сек|футов|футах|футами|футам|футів|фута|фути|фут|км)(?![\p{L}]))/gu, `$1${NB}`)
    .replace(/\bSIM (?=\d)/g, `SIM${NB}`)
    .replace(/(?<![\p{L}\d])([A-H]) (?=\d)/gu, `$1${NB}`);
}

const UNIT: Partial<Record<Lang, Record<string, string>>> = {
  uk: { ft: 'фт', s: 'с' },
  ru: { ft: 'фт', s: 'с' },
};
/** Thousands separator per language: a space (UK, RU, FR, PL, Nordic) or a dot (DE, IT, PT, DA); else a comma. */
const SPACE_GROUP: readonly Lang[] = ['uk', 'ru', 'fr', 'pl', 'sv', 'nb', 'fi', 'cs', 'sk', 'hu', 'bg', 'lt'];
const DOT_GROUP: readonly Lang[] = ['de', 'it', 'pt', 'da', 'nl', 'ro', 'hr', 'sr', 'sl', 'el', 'tr', 'id'];
/** A big number in each language's own format: "2,500 ft" stays in EN/ES, becomes "2 500 фт" in UK/RU. */
export function num(s: string, lang: Lang, units: Units = 'ft'): string {
  if (units !== 'ft' && /\d\s?ft\b/.test(s)) return glue(convertQuantities(numFt(s, lang), lang, units));
  return numFt(s, lang);
}
function numFt(s: string, lang: Lang): string {
  if (DOT_GROUP.includes(lang)) return glue(s.replace(/(\d),(?=\d{3}(?!\d))/g, '$1.'));
  if (!SPACE_GROUP.includes(lang)) return glue(s);
  if (lang !== 'uk' && lang !== 'ru') return glue(s.replace(/(\d),(?=\d{3}(?!\d))/g, '$1 '));
  return glue(s.replace(/(\d),(?=\d{3}(?!\d))/g, '$1 ').replace(/(\d|°) ?(ft|s)\b/g, (_m, d: string, u: string) => `${d}${d === '°' ? '' : ' '}${UNIT[lang]![u]}`));
}
/** The unit word for a bare big number. */
export const ftWord = (lang: Lang) => UNIT[lang]?.ft ?? 'ft';

export function renderInline(raw: string): ReactNode[] {
  const text = glue(raw);
  const out: ReactNode[] = [];
  const re = /<b>(.*?)<\/b>|<a href="([^"]+)"[^>]*>(.*?)<\/a>|<q-check\s*\/>/gs;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    if (m[1] !== undefined) out.push(<b key={i++}>{m[1]}</b>);
    else if (m[2] !== undefined) {
      const internal = m[2].startsWith('#');
      out.push(<a key={i++} href={m[2]} {...(internal ? {} : { target: '_blank', rel: 'noopener' })}>{m[3]}</a>);
    } else out.push(<CheckBadge key={i++} />);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return out;
}

export function CheckBadge() {
  const { lang } = useLang();
  const word = ({ en: 'check', es: 'verificar', ru: 'уточнить', uk: 'уточнити', fr: 'vérifier', de: 'prüfen', it: 'verificare', pt: 'verificar', pl: 'sprawdź', sv: 'kolla', nb: 'sjekk', da: 'tjek', fi: 'tarkista', ar: 'تحقّق', nl: 'controleren', cs: 'ověřit', sk: 'overiť', hu: 'ellenőrizd', ro: 'verifică', bg: 'провери', hr: 'provjeri', sr: 'proveri', sl: 'preveri', el: 'έλεγξε', tr: 'kontrol et', lt: 'patikrinti', he: 'לבדוק', zh: '核实', ja: '確認', ko: '확인', th: 'ตรวจสอบ', id: 'periksa' } as Record<Lang, string>)[lang];
  return <span className="badge" title={word}>{word}</span>;
}

/** Stoic headline: lowercase except acronyms (AFF, PLF, USPA), ending with a period. */
export function headline(s: string): string {
  const words = s.split(' ').map(w => (/^[A-ZÁÉÍÓÚÑА-ЯЁІЇЄҐ0-9]{2,}[.,!?:]?$/u.test(w) || /\d/.test(w) ? w : w.toLowerCase()));
  const h = words.join(' ');
  return /[.!?…]$/.test(h) ? h : h + '.';
}
