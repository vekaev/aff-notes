import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ALL_LANGS, isCore, RTL, type L, type Lang } from './content/types';
import { keyOf } from './content/i18n/key';

// Extra languages load on demand (one JSON per language, built from English by the translators).
const CATALOGS = import.meta.glob<Record<string, string>>('./content/i18n/*.json', { import: 'default' });

const KEY = 'aff-lang';

/** Saved choice, else the browser language, else English. Read once, before the first render. */
export function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && (ALL_LANGS as readonly string[]).includes(saved)) return saved as Lang;
  } catch { /* storage blocked: fall through */ }
  const prefs = typeof navigator !== 'undefined' ? (navigator.languages?.length ? navigator.languages : [navigator.language]) : [];
  for (const p of prefs) {
    let base = (p || '').toLowerCase().split('-')[0];
    if (base === 'no' || base === 'nn') base = 'nb';
    if ((ALL_LANGS as readonly string[]).includes(base)) return base as Lang;
  }
  return 'en';
}

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: s => s.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  }, []);
  const [cat, setCat] = useState<{ lang: Lang; map: Record<string, string> } | null>(null);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    if (isCore(lang)) return;
    const load = CATALOGS[`./content/i18n/${lang}.json`];
    if (load) load().then(map => setCat({ lang, map })).catch(() => { /* stays English */ });
  }, [lang]);
  const value = useMemo(() => {
    const map = cat && cat.lang === lang ? cat.map : null;
    const t = (s: L) => (isCore(lang) ? s[lang] || s.en : (map && map[keyOf(s.en)]) || s.en);
    return { lang, setLang, t };
  }, [lang, setLang, cat]);
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
const SPACE_GROUP: readonly Lang[] = ['uk', 'ru', 'fr', 'pl', 'sv', 'nb', 'fi'];
const DOT_GROUP: readonly Lang[] = ['de', 'it', 'pt', 'da'];
/** A big number in each language's own format: "2,500 ft" stays in EN/ES, becomes "2 500 фт" in UK/RU. */
export function num(s: string, lang: Lang): string {
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
  const word = ({ en: 'check', es: 'verificar', ru: 'уточнить', uk: 'уточнити', fr: 'vérifier', de: 'prüfen', it: 'verificare', pt: 'verificar', pl: 'sprawdź', sv: 'kolla', nb: 'sjekk', da: 'tjek', fi: 'tarkista', ar: 'تحقّق' } as Record<Lang, string>)[lang];
  return <span className="badge" title={word}>{word}</span>;
}

/** Stoic headline: lowercase except acronyms (AFF, PLF, USPA), ending with a period. */
export function headline(s: string): string {
  const words = s.split(' ').map(w => (/^[A-ZÁÉÍÓÚÑА-ЯЁІЇЄҐ0-9]{2,}[.,!?:]?$/u.test(w) || /\d/.test(w) ? w : w.toLowerCase()));
  const h = words.join(' ');
  return /[.!?…]$/.test(h) ? h : h + '.';
}
