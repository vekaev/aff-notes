// Build-time renderer for the per-language pages (scripts/prerender.mjs). Not part of the browser bundle.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { PlayerProvider } from './components/Player';
import { LangProvider } from './i18n';
import type { Lang } from './content/types';

export { ALL_LANGS, LANG_NAMES, RTL } from './content/types';

export function render(lang: Lang, catalog?: Record<string, string>): string {
  return renderToString(
    <StrictMode>
      <LangProvider initial={{ lang, catalog }}>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </LangProvider>
    </StrictMode>,
  );
}
