import { useEffect, useRef, useState } from 'react';
import { LANGS, LANG_NAMES, type L, type Lang } from '../content/types';
import { useLang } from '../i18n';

/** Language menu: scales to any number of languages, each shown in its own name. */
export function LangMenu() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !box.current?.contains(e.target as Node)) setOpen(false);
    };
    addEventListener('mousedown', close); addEventListener('keydown', close);
    return () => { removeEventListener('mousedown', close); removeEventListener('keydown', close); };
  }, [open]);
  const pick = (l: Lang) => { setLang(l); setOpen(false); };
  return (
    <div className="menu" ref={box}>
      <button type="button" className="chip" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>
        {lang.toUpperCase()}
        <svg viewBox="0 0 24 24" className="caret" aria-hidden="true"><path d="M7 10l5 5 5-5" /></svg>
      </button>
      {open && (
        <ul className="menu-list surface" role="listbox" aria-label="Language">
          {LANGS.map(l => (
            <li key={l}>
              <button type="button" role="option" aria-selected={l === lang} onClick={() => pick(l)}>
                <span>{LANG_NAMES[l]}</span><span className="code">{l.toUpperCase()}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

type Theme = 'system' | 'light' | 'dark';
const THEME_KEY = 'aff-theme';
const readTheme = (): Theme => { try { const t = localStorage.getItem(THEME_KEY); return t === 'light' || t === 'dark' ? t : 'system'; } catch { return 'system'; } };

/** Applies the saved theme as early as possible (called before the first render). */
export function applySavedTheme() {
  const t = readTheme();
  if (t === 'system') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', t);
}

/** Theme button: system → light → dark → system. */
export function ThemeButton() {
  const { t } = useLang();
  const [theme, setTheme] = useState<Theme>(readTheme);
  useEffect(() => {
    if (theme === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);
  const next: Record<Theme, Theme> = { system: 'light', light: 'dark', dark: 'system' };
  const names: Record<Theme, L> = {
    system: { en: 'system', es: 'sistema', uk: 'системна', ru: 'системная' },
    light: { en: 'light', es: 'claro', uk: 'світла', ru: 'светлая' },
    dark: { en: 'dark', es: 'oscuro', uk: 'темна', ru: 'тёмная' },
  };
  const word = { en: 'Theme', es: 'Tema', uk: 'Тема', ru: 'Тема' };
  const tip = `${t(word)}: ${t(names[theme])}`;
  return (
    <button type="button" className="chip icon tip" aria-label={tip} data-tip={tip} onClick={() => setTheme(next[theme])}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {theme === 'light' && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>}
        {theme === 'dark' && <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />}
        {theme === 'system' && <><circle cx="12" cy="12" r="8" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" /></>}
      </svg>
    </button>
  );
}
