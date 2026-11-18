// Where the reader was, put back on reload — before the first paint, and kept there while photos above load.
//
// The browser's own restore stays on (it puts the page in place before the first paint when it can), and this file
// corrects it: Safari sometimes painted the top first and then jumped, and on reload it preferred an old chapter mark
// in the address (#…) over where the reader really was (scrolled to the top, reload → back down to the chapter).
// - The position is saved per page as "this section + this far into it" (survives layout changes) in sessionStorage
//   (this tab only: a reload or back/forward returns there; a new visit starts at the top or at the link's #chapter).
// - Once the reader scrolls away from the #chapter in the address, the mark is dropped, so a reload doesn't jump to it.
// Tested in WebKit and Chromium at iPhone size (frame-by-frame scroll positions during reload).

type Saved = { y: number; id?: string; off?: number };
const key = () => `aff-scroll:${location.pathname}`;
const navType = () => (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type;

function anchorAt(): { id?: string; off?: number } {
  // the last element with an id whose top is above the top of the screen (chapters, parts, sections)
  let best: HTMLElement | undefined;
  for (const el of document.querySelectorAll<HTMLElement>('main [id], section[id]')) {
    if (el.getBoundingClientRect().top <= 1) best = el;
    else break;
  }
  return best ? { id: best.id, off: -best.getBoundingClientRect().top } : {};
}

function dropStaleHash(): void {
  if (!location.hash) return;
  const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  const r = el?.getBoundingClientRect();
  if (!r || r.bottom < 0 || r.top > innerHeight)
    history.replaceState(history.state, '', location.pathname + location.search);
}

function save(): void {
  dropStaleHash();
  try {
    const s: Saved = scrollY < 4 ? { y: 0 } : { y: scrollY, ...anchorAt() };
    sessionStorage.setItem(key(), JSON.stringify(s));
  } catch {
    /* storage blocked */
  }
}

function target(s: Saved): number {
  const el = s.id ? document.getElementById(s.id) : null;
  return el ? el.getBoundingClientRect().top + scrollY + (s.off ?? 0) : s.y;
}

let saved: Saved | null = null;

/** Call once at start-up, before the first render. */
export function setUpScroll(): void {
  const t = navType();
  if (t === 'reload' || t === 'back_forward') {
    try {
      saved = JSON.parse(sessionStorage.getItem(key()) ?? 'null') as Saved | null;
    } catch {
      saved = null;
    }
  }
  let timer = 0;
  addEventListener(
    'scroll',
    () => {
      clearTimeout(timer);
      timer = window.setTimeout(save, 150);
    },
    { passive: true },
  );
  addEventListener('pagehide', save);
  if (saved) scrollTo({ top: target(saved), behavior: 'instant' }); // on the pre-rendered page, before the app starts
}

/** Call right after the app's first render (layout effect), before the browser paints. */
export function restoreScroll(): void {
  const s = saved;
  if (!s) {
    // a first visit with a #chapter link: the app re-drew the page, so go to the chapter again
    const el = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    return;
  }
  const go = () => scrollTo({ top: target(s), behavior: 'instant' });
  go();
  // Photos and clips above can still change the height for a moment: hold the place until the reader moves.
  let stop = false;
  const end = () => {
    stop = true;
    ro.disconnect();
  };
  const ro = new ResizeObserver(() => {
    if (!stop) go();
  });
  ro.observe(document.body);
  for (const ev of ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const) addEventListener(ev, end, { once: true, passive: true });
  setTimeout(end, 2500);
}
