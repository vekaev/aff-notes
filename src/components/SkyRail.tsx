import { useEffect, useRef, useState } from 'react';

// Reading progress as a jump: a small skydiver falls down a rail on the right edge as you scroll.
// In the plane he sits by the door, in freefall he flies the box, under canopy he hangs under a wing,
// and at the bottom (trees, houses) he lands, throws his arms up, and a small burst of confetti goes off.
// Poses swap with a short fade; nothing swings, so it never pulls the eye from the text.

type Pose = 'sit' | 'box' | 'canopy' | 'reserve' | 'stand' | 'cheer';

function usePageState() {
  const [s, set] = useState({ p: 0, part: 'top' });
  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      let part = 'top';
      document.querySelectorAll<HTMLElement>('[data-part]').forEach(el => { if (el.getBoundingClientRect().top < innerHeight * 0.5) part = el.dataset.part!; });
      set(prev => (Math.abs(prev.p - p) < 0.0005 && prev.part === part ? prev : { p, part }));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
  return s;
}

function poseFor(part: string, p: number): Pose {
  if (p > 0.985) return 'cheer';
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
    case 'sit': // in the plane, by the door
      return (<g>
        <rect x="2" y="10" width="36" height="22" rx="8" fill="var(--card)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <rect x="24" y="14" width="10" height="14" rx="2" fill="var(--sky-tint)" />
        {head(16, 17)}<path d="M16 21 v6 l6 0 M16 24 l5 -2" {...ink} />
      </g>);
    case 'box': // belly to earth, arms and legs out
      return (<g>{head(20, 22)}<path d="M20 26 v8 M20 28 l-9 -6 M20 28 l9 -6 M20 34 l-7 7 M20 34 l7 7" {...ink} /></g>);
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
  const { p, part } = usePageState();
  const pose = poseFor(part, p);
  const [burst, setBurst] = useState(0);
  const landed = useRef(false);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (pose === 'cheer' && !landed.current) { landed.current = true; if (!reduce) setBurst(b => b + 1); }
    if (pose !== 'cheer' && p < 0.95) landed.current = false;
  }, [pose, p, reduce]);

  const alt = Math.max(0, Math.round(((1 - p) * 13500) / 100) * 100);
  // Click or drag anywhere on the rail to scroll there, like a normal scroll bar.
  const toY = (el: HTMLElement, y: number, smooth: boolean) => {
    const r = el.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (y - r.top) / r.height));
    scrollTo({ top: f * (document.documentElement.scrollHeight - innerHeight), behavior: smooth && !reduce ? 'smooth' : 'auto' });
  };
  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    toY(el, e.clientY, true);
    const move = (ev: PointerEvent) => toY(el, ev.clientY, false);
    const up = () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.classList.remove('dragging'); };
    el.classList.add('dragging');
    el.addEventListener('pointermove', move); el.addEventListener('pointerup', up);
  };

  return (
    <div className="skyrail" aria-hidden="true" onPointerDown={down} title={`${alt.toLocaleString('en-US')} ft`}>
      <svg className="sky-plane" viewBox="0 0 24 12"><path d="M1 6 l8 -1 l3 -4 h1.5 l-1 4 l5 .5 l1.5 -2 h1.5 l-.7 2.5 l.7 2.5 h-1.5 l-1.5 -2 l-5 .5 l1 4 h-1.5 l-3 -4 z" fill="var(--faint)" /></svg>
      <div className="sky-track" />
      <div className="sky-ground">
        <svg viewBox="0 0 40 28">
          <path d="M6 22 v-6 M2 16 L6 6 L10 16 Z" stroke="var(--ok)" strokeWidth="1.6" fill="color-mix(in srgb, var(--ok) 30%, transparent)" strokeLinejoin="round" />
          <path d="M20 22 v-8 l6 -5 l6 5 v8 Z M24 22 v-4 h4 v4" stroke="var(--faint)" strokeWidth="1.6" fill="var(--card)" strokeLinejoin="round" />
          <path d="M35 22 v-4 M32.5 18 L35 11 L37.5 18 Z" stroke="var(--ok)" strokeWidth="1.4" fill="color-mix(in srgb, var(--ok) 30%, transparent)" strokeLinejoin="round" />
          <line x1="0" y1="22.5" x2="40" y2="22.5" stroke="var(--line-strong)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="sky-jumper" style={{ ['--p' as string]: p }}>
        <span className="sky-alt">{alt.toLocaleString('en-US')}</span>
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
