// The offline install does not pre-download the 28 extra languages (see vite.config.ts). The service worker caches
// a language when it loads, but on the very first visit the language file loads before the worker is running, so
// copy every language file this page loaded into the same cache once the worker is ready.
const LANG_CHUNK = /\/assets\/[a-z]{2}-[\w-]+\.js$/;
const CACHE = 'langs';

export function cacheLoadedLanguages(): void {
  if (typeof PerformanceObserver === 'undefined' || !('serviceWorker' in navigator) || !('caches' in window)) return;
  const copy = (url: string) => {
    if (!LANG_CHUNK.test(new URL(url).pathname)) return;
    navigator.serviceWorker.ready
      .then(() => caches.open(CACHE))
      .then(async cache => {
        if (!(await cache.match(url, { ignoreVary: true }))) await cache.add(url);
      })
      .catch(() => {
        /* offline or storage blocked: the language stays online-only */
      });
  };
  try {
    new PerformanceObserver(list => list.getEntries().forEach(e => copy(e.name))).observe({ type: 'resource', buffered: true });
  } catch {
    /* old browser */
  }
}
