import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LangProvider } from './i18n';
import { App } from './App';
import { PlayerProvider } from './components/Player';
import { applySavedTheme } from './components/Settings';
import { setUpOffline } from './pwa';
import './styles.css';

applySavedTheme();
setUpOffline();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider><PlayerProvider><App /></PlayerProvider></LangProvider>
  </StrictMode>,
);
