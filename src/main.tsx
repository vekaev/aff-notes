import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initialLang, LangProvider, loadCatalog } from './i18n';
import { isCore } from './content/types';
import { App } from './App';
import { PlayerProvider } from './components/Player';
import { applySavedTheme } from './components/Settings';
import { setUpOffline } from './pwa';
import { setUpScroll } from './scroll';
import './styles.css';

applySavedTheme();
setUpOffline();
setUpScroll();

// An extra language (e.g. /de/) is fetched before the first render: the pre-rendered page is already on screen in that
// language, and starting the app in English while the file loads made it flash English → German. Give up after 4 s.
async function start() {
  const lang = initialLang();
  let preloaded: { lang: typeof lang; map: Record<string, string> } | null = null;
  if (!isCore(lang)) {
    const timeout = new Promise<null>(r => setTimeout(() => r(null), 4000));
    const map = await Promise.race([loadCatalog(lang).catch(() => null), timeout]);
    if (map) preloaded = { lang, map };
  }
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LangProvider preloaded={preloaded}><PlayerProvider><App /></PlayerProvider></LangProvider>
    </StrictMode>,
  );
}
void start();
