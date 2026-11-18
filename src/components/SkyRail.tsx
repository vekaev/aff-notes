import { useEffect, useRef, useState } from 'react';

// Reading progress as a jump: a small skydiver falls down a rail on the right edge as you scroll.
// In the plane he sits by the door, in freefall he flies the box, under canopy he hangs under a wing,
// and at the bottom (trees, houses) he lands, throws his arms up, and a small burst of confetti goes off.
// Poses swap with a short fade; nothing swings, so it never pulls the eye from the text.

type Pose = 'sit' | 'box' | 'canopy' | 'reserve' | 'stand' | 'cheer';

/**
 * Scroll position drives the jumper directly (transform on a ref, no React render per frame);
 * React only re-renders when the pose changes (a new part, or landing at the very bottom).
 */
function useRail(jumper: React.RefObject<HTMLDivElement | null>, altEl: React.RefObject<HTMLSpanElement | null>) {
  const [state, set] = useState({ part: 'top', landed: false });
  useEffect(() => {
    let raf = 0;
    let parts: { id: string; top: number }[] = [];
    const measure = () => {
      parts = [...document.querySelectorAll<HTMLElement>('[data-part]')].map(el => ({ id: el.dataset.part!, top: el.getBoundingClientRect().top + scrollY }));
    };
    const read = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      const el = jumper.current;
      if (el) {
        const track = (el.parentElement?.clientHeight ?? 0) - el.offsetHeight - 22;
        el.style.transform = `translate3d(0, ${Math.max(0, p * track)}px, 0)`;
      }
      let part = 'top';
      const mid = scrollY + innerHeight * 0.5;
      for (const x of parts) if (x.top < mid) part = x.id;
      if (altEl.current) altEl.current.textContent = (Math.round(altitudeAt(mid, parts) / 100) * 100).toLocaleString('en-US');
      const landed = p > 0.985;
      set(prev => (prev.part === part && prev.landed === landed ? prev : { part, landed }));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(read); };
    const onResize = () => { measure(); on(); };
    measure(); read();
    const ro = new ResizeObserver(onResize); ro.observe(document.body);
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', onResize);
    return () => { ro.disconnect(); removeEventListener('scroll', on); removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, [jumper, altEl]);
  return state;
}

/**
 * The altitude the reader is "at", by chapter rather than by page length: the plane climbs through Part I
 * (0 → 13,000), freefall runs 13,000 → 5,500 through Part II, the canopy 5,500 → 0 through Part III, the reserve
 * ride again 5,500 → 0 through Part IV, and Part V is on the ground.
 */
const SPANS: Record<string, [number, number]> = { top: [0, 0], part1: [0, 13000], part2: [13000, 5500], part3: [5500, 0], part4: [5500, 0], dz: [0, 0] };
function altitudeAt(y: number, parts: { id: string; top: number }[]): number {
  const all = [{ id: 'top', top: 0 }, ...parts, { id: 'end', top: document.documentElement.scrollHeight }];
  for (let k = 0; k < all.length - 1; k++) {
    const a = all[k], b = all[k + 1];
    if (y < b.top || k === all.length - 2) {
      const [from, to] = SPANS[a.id] ?? [0, 0];
      const f = Math.min(1, Math.max(0, (y - a.top) / Math.max(1, b.top - a.top)));
      return from + (to - from) * f;
    }
  }
  return 0;
}

function poseFor(part: string, landed: boolean): Pose {
  if (landed) return 'cheer';
  if (part === 'top' || part === 'part1') return 'sit';
  if (part === 'part2') return 'box';
  if (part === 'part3') return 'canopy';
  if (part === 'part4') return 'reserve';
  return 'stand';
}

/** The jumper in each pose, drawn in ink on a 40×48 box. */
function Jumper({ pose }: { pose: Pose }) {
  const ink = { stroke: 'var(--ink)', strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const head = (x: number, y: number) => <circle cx={x} cy={y} r="4.2" fill="var(--ink)" />;
  switch (pose) {
    case 'sit': // side view of the plane; the jumper sits in the open door, legs out
      return (<g>
        <path d="M6 18 L3 9 L10 17 Z" fill="var(--faint)" />
        <path d="M4 22 Q4 17 11 17 H31 Q38 17 39.5 22 Q38 27 31 27 H11 Q4 27 4 22 Z" fill="var(--card)" stroke="var(--faint)" strokeWidth="1.5" />
        <path d="M13 25 h13" stroke="var(--faint)" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="22" y="18.5" width="8" height="8" rx="1.5" fill="var(--sky-tint)" stroke="var(--line-strong)" strokeWidth="1" />
        <line x1="40" y1="18" x2="40" y2="26" stroke="var(--faint)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="26" cy="21" r="2.6" fill="var(--ink)" />
        <path d="M26 23.5 v3 M26 26.5 l3 7 M26 26.5 l5 6" {...ink} strokeWidth={2.2} />
      </g>);
    case 'box': // the classic skydiver from above: arms and legs bent, belly to earth
      return (<g>{head(20, 15)}<path d="M20 19 v12 M20 22 h-8 l-3 -7 M20 22 h8 l3 -7 M20 31 l-7 5 v6 M20 31 l7 5 v6" {...ink} /></g>);
    case 'canopy':
    case 'reserve':
      return (<g>
        <path d="M5 13 Q20 1 35 13 Q20 9 5 13 Z" fill={pose === 'reserve' ? 'var(--red)' : 'var(--acc-canopy)'} />
        <path d="M7 13 L18 30 M33 13 L22 30" stroke="var(--muted)" strokeWidth="1" />
        {head(20, 31)}<path d="M20 35 v7 M17 36 l3 -2 l3 2 M20 42 l-3 5 M20 42 l3 5" {...ink} />
      </g>);
    case 'stand':
      return (<g>{head(20, 22)}<path d="M20 26 v10 M20 29 l-5 4 M20 29 l5 4 M20 36 l-4 9 M20 36 l4 9" {...ink} /></g>);
    case 'cheer':
      return (<g>{head(20, 22)}<path d="M20 26 v10 M20 28 l-7 -9 M20 28 l7 -9 M20 36 l-4 9 M20 36 l4 9" {...ink} /></g>);
  }
}

const CONFETTI = ['var(--acc-free)', 'var(--acc-canopy)', 'var(--red)', 'var(--ok)', 'var(--acc-dz)'];

export function SkyRail() {
  const jumper = useRef<HTMLDivElement>(null);
  const altEl = useRef<HTMLSpanElement>(null);
  const { part, landed } = useRail(jumper, altEl);
  const pose = poseFor(part, landed);
  const [burst, setBurst] = useState(0);
  const celebrated = useRef(false);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (landed && !celebrated.current) { celebrated.current = true; if (!reduce) setBurst(b => b + 1); }
    if (!landed) celebrated.current = false;
  }, [landed, reduce]);

  // Click or drag anywhere on the rail to scroll there, like a normal scroll bar.
  const toY = (el: HTMLElement, y: number, smooth: boolean) => {
    const r = el.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (y - r.top) / r.height));
    scrollTo({ top: f * (document.documentElement.scrollHeight - innerHeight), behavior: smooth && !reduce ? 'smooth' : 'auto' });
  };
  // Touch: only the skydiver is grabbable (the rest of the rail is where the thumb scrolls), and it moves with the
  // finger from where it was grabbed, never jumping: page position = position at grab + finger distance × page/rail.
  const grab = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'touch') return;
    e.stopPropagation();
    e.preventDefault();
    const jumperEl = e.currentTarget;
    const rail = jumperEl.parentElement!;
    const range = Math.max(1, rail.getBoundingClientRect().height - jumperEl.offsetHeight - 26);
    const max = document.documentElement.scrollHeight - innerHeight;
    const y0 = e.clientY;
    const s0 = scrollY;
    jumperEl.setPointerCapture(e.pointerId);
    rail.classList.add('dragging');
    let frame = 0;
    let lastY = y0;
    const move = (ev: PointerEvent) => {
      lastY = ev.clientY;
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          scrollTo({ top: Math.min(max, Math.max(0, s0 + ((lastY - y0) / range) * max)), behavior: 'auto' });
        });
    };
    const up = () => {
      jumperEl.removeEventListener('pointermove', move);
      jumperEl.removeEventListener('pointerup', up);
      jumperEl.removeEventListener('pointercancel', up);
      rail.classList.remove('dragging');
    };
    jumperEl.addEventListener('pointermove', move);
    jumperEl.addEventListener('pointerup', up);
    jumperEl.addEventListener('pointercancel', up);
  };
  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    // Mouse and pen: click or drag anywhere on the rail. Touch: only the skydiver (`grab`).
    if (e.pointerType === 'touch') return;
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    toY(el, e.clientY, true);
    const move = (ev: PointerEvent) => toY(el, ev.clientY, false);
    const up = () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.classList.remove('dragging'); };
    el.classList.add('dragging');
    el.addEventListener('pointermove', move); el.addEventListener('pointerup', up);
  };

  return (
    <div className="skyrail" aria-hidden="true" onPointerDown={down}>
      <svg className="sky-plane" viewBox="0 0 24 12" style={{ opacity: pose === 'sit' ? 0 : 1 }}><path d="M1 6 l8 -1 l3 -4 h1.5 l-1 4 l5 .5 l1.5 -2 h1.5 l-.7 2.5 l.7 2.5 h-1.5 l-1.5 -2 l-5 .5 l1 4 h-1.5 l-3 -4 z" fill="var(--faint)" /></svg>
      <div className="sky-track" />
      <div className="sky-ground">
        <svg viewBox="0 0 40 28">
          <path d="M6 22 v-6 M2 16 L6 6 L10 16 Z" stroke="var(--ok)" strokeWidth="1.6" fill="color-mix(in srgb, var(--ok) 30%, transparent)" strokeLinejoin="round" />
          <path d="M20 22 v-8 l6 -5 l6 5 v8 Z M24 22 v-4 h4 v4" stroke="var(--faint)" strokeWidth="1.6" fill="var(--card)" strokeLinejoin="round" />
          <path d="M35 22 v-4 M32.5 18 L35 11 L37.5 18 Z" stroke="var(--ok)" strokeWidth="1.4" fill="color-mix(in srgb, var(--ok) 30%, transparent)" strokeLinejoin="round" />
          <line x1="0" y1="22.5" x2="40" y2="22.5" stroke="var(--line-strong)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="sky-jumper" ref={jumper} onPointerDown={grab}>
        <span className="sky-alt" ref={altEl} />
        <svg key={pose} viewBox="0 0 40 48" className="pose-in"><Jumper pose={pose} /></svg>
        {burst > 0 && (
          <span className="confetti" key={burst}>
            {Array.from({ length: 18 }, (_, i) => (
              <i key={i} style={{ ['--a' as string]: `${(i / 18) * 360}deg`, ['--d' as string]: `${26 + (i % 3) * 10}px`, background: CONFETTI[i % CONFETTI.length] }} />
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
