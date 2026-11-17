// Offline support next to the service worker that vite-plugin-pwa generates (see vite.config.ts).
//
// 1. Register the worker at the app's root, also from a language page (/fr/): the root is where the built script
//    lives (assets/..), so this works on the site root and in any folder.
// 2. The offline install does not pre-download the 28 extra languages. The worker caches a language when it loads,
//    but on the very first visit the language file loads before the worker is running, so copy every language file
//    this page loaded into the same cache once the worker is ready.
// 3. Keep the reader's language page (/fr/) for offline use: the worker caches language pages as they are opened
//    (NetworkFirst); the first one, and the one the language menu moves to, are copied here.

const ROOT = new URL('../', import.meta.url);
const LANG_CHUNK = /\/assets\/[a-z]{2}-[\w-]+\.js$/;
const LANG_PAGE = /\/[a-z]{2}\/$/;

function copyToCache(cacheName: string, url: string): void {
  navigator.serviceWorker.ready
    .then(() => caches.open(cacheName))
    .then(async cache => {
      if (!(await cache.match(url, { ignoreVary: true }))) await cache.add(url);
    })
    .catch(() => {
      /* offline or storage blocked: stays online-only */
    });
}

export function setUpOffline(): void {
  if (!('serviceWorker' in navigator) || !('caches' in window)) return;
  addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('sw.js', ROOT), { scope: ROOT.pathname }).catch(() => {
      /* no worker in dev or on hosts without sw.js */
    });
  });
  try {
    new PerformanceObserver(list =>
      list.getEntries().forEach(e => {
        if (LANG_CHUNK.test(new URL(e.name).pathname)) copyToCache('langs', e.name);
      }),
    ).observe({ type: 'resource', buffered: true });
  } catch {
    /* old browser */
  }
  const keepPage = () => {
    if (LANG_PAGE.test(location.pathname)) copyToCache('pages', location.origin + location.pathname);
  };
  keepPage();
  addEventListener('aff:url', keepPage);
}
