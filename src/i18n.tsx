import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LANGS, type L, type Lang } from './content/types';

const KEY = 'aff-lang';

/** Saved choice, else the browser language, else English. Read once, before the first render. */
export function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && (LANGS as readonly string[]).includes(saved)) return saved as Lang;
  } catch { /* storage blocked: fall through */ }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').slice(0, 2);
  return (LANGS as readonly string[]).includes(nav) ? (nav as Lang) : 'en';
}

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: s => s.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: (s: L) => s[lang] || s.en }), [lang, setLang]);
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
    .replace(/(\d) (?=(?:s|ft|m|kt|mph|min|%|°|с|м|мин|сек|футов|футах|футів|фута|фути|фут|км)(?![\p{L}]))/gu, `$1${NB}`)
    .replace(/\bSIM (?=\d)/g, `SIM${NB}`);
}

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
  const word = { en: 'check', es: 'verificar', ru: 'уточнить', uk: 'уточнити' }[lang];
  return <span className="badge" title={word}>{word}</span>;
}

/** Stoic headline: lowercase except acronyms (AFF, PLF, USPA), ending with a period. */
export function headline(s: string): string {
  const words = s.split(' ').map(w => (/^[A-ZÁÉÍÓÚÑА-ЯЁІЇЄҐ0-9]{2,}[.,!?:]?$/u.test(w) || /\d/.test(w) ? w : w.toLowerCase()));
  const h = words.join(' ');
  return /[.!?…]$/.test(h) ? h : h + '.';
}
