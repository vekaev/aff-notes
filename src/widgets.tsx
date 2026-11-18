import { group, toMetres, type Units } from './units';
import { useEffect, useRef, useState } from 'react';
import type { AltRow, Block, L, Lang, RigPart, RigPartId, Step } from './content/types';
import { num, renderInline, Rich, useLang } from './i18n';
import { altFt } from './rules';
import { ui } from './ui';
import { ClipFigure } from './components/Blocks';
import { useOpenVideo } from './components/Player';

// Drawings are ink on the card; only the emergency red is a colour, as in the rest of the page.

function StepList({ steps, on, onPick }: { steps: Step[]; on: number; onPick: (i: number) => void }) {
  return (
    <ol className="steps click">
      {steps.map((s, i) => (
        <li key={i} className={i === on ? 'on' : ''} tabIndex={0} onClick={() => onPick(i)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(i); } }}>
          <div><span className="st"><Rich s={s.title} /></span>{s.sub && <span className="sub"><Rich s={s.sub} /></span>}</div>
        </li>
      ))}
    </ol>
  );
}

function useTimers() {
  const ids = useRef<number[]>([]);
  useEffect(() => () => ids.current.forEach(clearTimeout), []);
  return {
    clear: () => { ids.current.forEach(clearTimeout); ids.current = []; },
    after: (ms: number, f: () => void) => { ids.current.push(window.setTimeout(f, ms)); },
  };
}

/* ---------- climb-out: six moves into the door; hands really grab the handle ---------- */
// Body pose in world space: translate then lean about the feet. Hands either hang or hold a grip point on the
// door handle; a held hand stays on the handle as the body moves, so the arm is drawn to the grip itself.
const FEET: [number, number] = [150, 190];
const SHOULDER: [number, number] = [150, 84];
const GRIP_R: [number, number] = [213, 84];
const GRIP_L: [number, number] = [213, 104];
type Pose = { tx: number; lean: number; RA: boolean; LA: boolean; RL: number; LL: number; H: number };
const POSES: Pose[] = [
  { tx: 0, lean: 0, RA: false, LA: false, RL: 0, LL: 0, H: 0 },
  { tx: 0, lean: 0, RA: true, LA: false, RL: 0, LL: 0, H: 0 },
  { tx: 12, lean: 0, RA: true, LA: false, RL: -22, LL: 0, H: 0 },
  { tx: 12, lean: 0, RA: true, LA: true, RL: -22, LL: 0, H: 0 },
  { tx: 38, lean: 0, RA: true, LA: true, RL: -22, LL: -18, H: 0 },
  // head and chest out past the door line (x≈230) while both hands keep the handle
  { tx: 52, lean: 20, RA: true, LA: true, RL: -24, LL: -20, H: -26 },
];
const HL = ['', 'RA', 'RL', 'LA', 'LL', 'H'];

/** World point → body-local point (inverse of translate(tx) rotate(lean about the feet)). */
function toLocal([wx, wy]: [number, number], p: Pose): [number, number] {
  const a = (-p.lean * Math.PI) / 180, x = wx - p.tx - FEET[0], y = wy - FEET[1];
  return [FEET[0] + x * Math.cos(a) - y * Math.sin(a), FEET[1] + x * Math.sin(a) + y * Math.cos(a)];
}

/** An altitude label inside a drawing: feet, and in "both" mode the metres on a second line (no long one-liners). */
function SvgAlt({ x, y, ft, anchor, lang, units }: { x: number; y: number; ft: number; anchor?: 'end'; lang: Lang; units: Units }) {
  const feet = num(`${ft.toLocaleString('en-US')} ft`, lang);
  const m = `≈${group(toMetres(ft), lang)}${lang === 'uk' || lang === 'ru' || lang === 'bg' ? '\u00a0м' : '\u00a0m'}`;
  if (units === 'm') return <text x={x} y={y} textAnchor={anchor}>{m}</text>;
  return <text x={x} y={y} textAnchor={anchor}>{feet}{units === 'both' && <tspan x={x} dy="12" opacity=".7">{m}</tspan>}</text>;
}

export function Climb({ steps, captions }: { steps: Step[]; captions: L[] }) {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const timers = useTimers();
  const p = POSES[i];
  const play = () => { timers.clear(); setI(0); for (let k = 1; k < 6; k++) timers.after(k * 1500, () => setI(k)); };
  const arm = (id: 'RA' | 'LA', held: boolean, grip: [number, number]) => {
    const [x2, y2] = held ? toLocal(grip, p) : [SHOULDER[0] + (id === 'LA' ? -4 : 4), 126];
    return (
      <g className={HL[i] === id ? 'hl' : ''}>
        <line x1={SHOULDER[0]} y1={SHOULDER[1]} x2={x2} y2={y2} />
        <circle cx={x2} cy={y2} r="5.5" fill={HL[i] === id ? 'var(--red)' : id === 'LA' ? 'var(--faint)' : 'var(--ink)'} />
      </g>
    );
  };
  const leg = (id: string, rot: number) => (
    <g className={`pose ${HL[i] === id ? 'hl' : ''}`} style={{ transformOrigin: '150px 132px', transform: `rotate(${rot}deg)` }}>
      <line x1="150" y1="132" x2="150" y2="188" />
    </g>
  );
  return (
    <div className="split">
      <div><StepList steps={steps} on={i} onPick={k => { timers.clear(); setI(k); }} /></div>
      <div className="stage sticky">
        <svg viewBox="0 0 320 220" role="img" aria-label="Climb-out">
          <rect x="228" y="30" width="80" height="162" rx="4" fill="var(--sky-tint)" />
          <rect x="222" y="24" width="8" height="170" fill="var(--line-strong)" />
          <rect x="210" y="58" width="6" height="64" rx="3" fill="var(--ink)" />
          <rect x="210" y="58" width="16" height="5" rx="2" fill="var(--ink)" /><rect x="210" y="117" width="16" height="5" rx="2" fill="var(--ink)" />
          <text x="168" y="140" fontFamily="var(--mono)" fontSize="9" fill="var(--muted)">{t({ en: 'handle', es: 'agarradera', ru: 'поручень', uk: 'поручень' })}</text>
          <rect x="0" y="190" width="320" height="6" fill="var(--line-strong)" />
          <g className="prop" transform="translate(286 52)"><rect x="-3" y="-20" width="6" height="40" rx="3" fill="var(--faint)" /><rect x="-20" y="-3" width="40" height="6" rx="3" fill="var(--faint)" /></g>
          <g className="fig pose" style={{ transformOrigin: `${FEET[0]}px ${FEET[1]}px`, transform: `translateX(${p.tx}px) rotate(${p.lean}deg)` }}>
            <g className="far">{leg('LL', p.LL)}{arm('LA', p.LA, GRIP_L)}</g>
            <line x1="150" y1="80" x2="150" y2="132" />
            {leg('RL', p.RL)}{arm('RA', p.RA, GRIP_R)}
            <g className="pose" style={{ transformOrigin: '150px 74px', transform: `rotate(${p.H}deg)` }}>
              <circle className="head" cx="150" cy="62" r="13" style={HL[i] === 'H' ? { fill: 'var(--red)' } : undefined} />
              <rect x="155" y="56" width="9" height="7" rx="2" fill="var(--paper)" />
            </g>
          </g>
        </svg>
        <div className="cap"><Rich s={captions[i]} /></div>
        <div className="controls">
          <button type="button" className="btn primary" onClick={play}>{t(ui.play)}</button>
          <button type="button" className="btn" onClick={() => { timers.clear(); setI((i + 1) % 6); }}>{t(ui.next)}</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- exit count: check in, check out, prop, up, down, arch — tap a step to see it ---------- */
const SEQ = [
  { say: '"Check in"', look: 'L', body: '', head: -30 }, { say: '"OK"', ok: 'L', body: '', head: -30 },
  { say: '"Check out"', look: 'R', body: '', head: 20 }, { say: '"OK"', ok: 'R', body: '', head: 20 },
  { say: '"Prop"', body: '', head: -25 }, { say: '"Up"', body: 'rotate(12deg)', head: -25 },
  { say: '"Down"', body: 'rotate(-6deg)', head: -25 }, { say: '"Arch!"', body: 'rotate(14deg)', head: -25 },
  { say: '', body: 'translate(110px,50px) rotate(80deg)', head: -25 },
] as const;
const STEP_TO_SEQ = [0, 2, 4, 5, 6, 7];

export function ExitCount({ steps }: { steps: Step[] }) {
  const { t, lang } = useLang();
  const [k, setK] = useState(4);
  const timers = useTimers();
  const s = SEQ[k] as (typeof SEQ)[number] & { look?: string; ok?: string };
  const play = () => { timers.clear(); let at = 0; SEQ.forEach((_, j) => { timers.after(at, () => setK(j)); at += j >= 4 ? 800 : 1100; }); timers.after(at + 1200, () => setK(4)); };
  const stepOn = STEP_TO_SEQ.findIndex((q, n) => k >= q && (n === STEP_TO_SEQ.length - 1 || k < STEP_TO_SEQ[n + 1]));
  const inst = (side: string, cx: number, cy: number, y2: number) => (
    <g opacity={s.look === side || s.ok === side ? 1 : 0.3}><circle cx={cx} cy={cy} r="11" fill="var(--faint)" /><line x1={cx} y1={cy + 12} x2={cx} y2={y2} stroke="var(--faint)" strokeWidth="7" strokeLinecap="round" /></g>
  );
  return (
    <div className="split">
      <div><StepList steps={steps} on={stepOn} onPick={n => { timers.clear(); setK(STEP_TO_SEQ[n]); }} /></div>
      <div className="stage sticky compact">
        <svg viewBox="0 0 320 220" role="img" aria-label="Exit count">
          <rect x="150" y="0" width="170" height="220" fill="var(--sky-tint)" />
          <rect x="0" y="150" width="152" height="8" fill="var(--line-strong)" />
          <rect x="146" y="10" width="8" height="142" fill="var(--line-strong)" />
          {inst('L', 60, 74, 148)}{inst('R', 212, 64, 120)}
          <text x="44" y="50" fontFamily="var(--mono)" fontSize="14" fill="var(--ok)" opacity={s.ok === 'L' ? 1 : 0}>OK</text>
          <text x="196" y="40" fontFamily="var(--mono)" fontSize="14" fill="var(--ok)" opacity={s.ok === 'R' ? 1 : 0}>OK</text>
          <g className="fig pose" style={{ transformOrigin: '140px 150px', transform: s.body }}>
            <line x1="140" y1="96" x2="140" y2="148" /><line x1="140" y1="104" x2="152" y2="80" />
            <g className="pose" style={{ transformOrigin: '140px 92px', transform: `rotate(${s.head}deg)` }}><circle className="head" cx="140" cy="80" r="12" /><rect x="144" y="74" width="9" height="7" rx="2" fill="var(--paper)" /></g>
          </g>
        </svg>
        <div className="cap">{s.say ? (lang === 'uk' || lang === 'ru' ? s.say.replace(/"([^"]*)"/, '«$1»') : s.say) : '↓'}</div>
        <div className="controls"><button type="button" className="btn primary" onClick={play}>{t(ui.play)}</button></div>
      </div>
    </div>
  );
}

/* ---------- dive flow with a live altimeter ---------- */
// A real analog altimeter: 0 at the top, one turn = 12,000 ft (13,000 shows just past 1).
const ang = (v: number) => (v / 12) * 360;

function AltRows({ rows, on, onPick }: { rows: AltRow[]; on: number; onPick: (i: number) => void }) {
  const { qty } = useLang();
  return (
    <ol className="alt-rows">
      {rows.map((r, i) => (
        <li key={i} className={`${r.hot ? 'hot' : ''} ${i === on ? 'on' : ''}`} tabIndex={0} onClick={() => onPick(i)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(i); } }}>
          <span className="a">{r.alt ? renderInline(qty(r.alt)) : '↓'}</span>
          <div><span className="rt"><Rich s={r.title} /></span><span className="rs"><Rich s={r.sub} /></span></div>
        </li>
      ))}
    </ol>
  );
}

export function Altimeter({ rows: raw }: { rows: AltRow[] }) {
  const { t, lang, units, qty, rules } = useLang();
  const [i, setI] = useState(0);
  // the needle follows the reader's rules: a metric school's 1,500 m sits at ≈4.9 on this feet dial
  const rows = raw.map(x => ({ ...x, value: altFt(x.alt, rules) ?? x.value }));
  const r = rows[i];
  const lockV = altFt('6,000 ft{lockOn}', rules)!, pullV = altFt('5,500 ft{pull}', rules)!;
  const C = 120;
  const pt = (v: number, rad: number) => { const a = ((ang(v) - 90) * Math.PI) / 180; return [C + rad * Math.cos(a), C + rad * Math.sin(a)] as const; };
  const ticks = [];
  for (let h = 0; h < 60; h++) {
    const v = h / 5, major = h % 5 === 0, half = h % 5 === 0 ? false : h % 5 === 0;
    const [x1, y1] = pt(v, major ? 88 : 95), [x2, y2] = pt(v, 102);
    ticks.push(<line key={h} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeOpacity={major ? 0.8 : 0.35} strokeWidth={major ? 3 : half ? 2 : 1.2} />);
    if (major) { const [tx, ty] = pt(v, 72); ticks.push(<text key={'t' + h} x={tx} y={ty + 5} textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink)">{v}</text>); }
  }
  // like most student altimeters: colour only on the low part of the dial (below about 3,000 ft)
  const low = (() => { const [x1, y1] = pt(0, 106), [x2, y2] = pt(3, 106); return <path d={`M${x1} ${y1} A106 106 0 0 1 ${x2} ${y2}`} fill="none" stroke="var(--red)" strokeWidth="5" opacity=".55" />; })();
  // the two numbers to act on, marked on the rim
  const mark = (v: number, color: string) => { const [x1, y1] = pt(v, 100), [x2, y2] = pt(v, 114); return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="5" strokeLinecap="round" />; };
  const L = {
    lock: { en: 'lock on', es: 'lock on', uk: 'лише висотомір', ru: 'только высотомер' },
    pull: { en: 'pull', es: 'abrir', uk: 'розкриття', ru: 'раскрытие' },
    dir: { en: 'one turn = 12,000 ft; falling, the needle turns counterclockwise', es: 'una vuelta = 12,000 ft; al caer, la aguja gira en sentido antihorario', uk: 'один оберт = 12 000 футів; коли падаєш, стрілка йде проти годинникової', ru: 'один оборот = 12 000 футов; при падении стрелка идёт против часовой' },
  };
  return (
    <div className="split">
      <div><AltRows rows={rows} on={i} onPick={setI} /></div>
      <div className="stage sticky alti">
        <svg viewBox="0 0 240 240" role="img" aria-label={`Altimeter: ${(r.value * 1000).toLocaleString('en-US')} ft`}>
          <circle cx={C} cy={C} r="117" fill="var(--ink)" opacity=".9" />
          <circle cx={C} cy={C} r="110" fill="var(--card)" />
          {low}
          {ticks}
          {mark(lockV, 'var(--acc-canopy)')}{mark(pullV, 'var(--red)')}
          {/* between 3 and 4: the needle never rests there (13 is at 1, 5.5 near 6) and its tail stays nearer the hub */}
          <text x={C + 39} y={C + 6} textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing=".5" fill="var(--muted)"><tspan x={C + 39}>×1000</tspan><tspan x={C + 39} dy="11">FT</tspan></text>
          <g className="pose" style={{ transformOrigin: `${C}px ${C}px`, transform: `rotate(${ang(r.value)}deg)` }}>
            <path d={`M${C - 4} ${C + 18} L${C - 2.2} ${C} L${C} 26 L${C + 2.2} ${C} L${C + 4} ${C + 18} Z`} fill="var(--ink)" />
          </g>
          <circle cx={C} cy={C} r="9" fill="var(--ink)" /><circle cx={C} cy={C} r="3" fill="var(--card)" />
        </svg>
        <div className="cap"><b className="alt-now">{r.alt && r.alt !== '↓' ? renderInline(qty(r.alt)) : num(`${(Math.round(r.value * 10) * 100).toLocaleString('en-US')} ft`, lang, units)}</b><span><Rich s={r.title} /></span></div>
        <ul className="alt-legend">
          <li><i style={{ background: 'var(--acc-canopy)' }} />{renderInline(qty('6,000 ft{lockOn}'))} · {t(L.lock)}</li>
          <li><i style={{ background: 'var(--red)' }} />{renderInline(qty('5,500 ft{pull}'))} · {t(L.pull)}</li>
          <li className="dir">↺ {t(L.dir)}</li>
        </ul>
      </div>
    </div>
  );
}

/* ---------- landing pattern map (drawn like the ground-school test) ---------- */
export function Pattern({ rows }: { rows: AltRow[] }) {
  const { t, lang, units, qty } = useLang();
  const [i, setI] = useState(Math.min(3, rows.length - 1));
  const r = rows[i];
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <div className="split">
      <div><AltRows rows={rows} on={i} onPick={setI} /></div>
      <div className="stage sticky">
        <svg viewBox="0 0 320 270" role="img" aria-label="Landing pattern">
          <defs>
            <marker id="arrI" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)" /></marker>
            <marker id="arrP" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)" /></marker>
          </defs>
          <rect x="0" y="0" width="320" height="270" rx="10" fill="var(--paper)" />
          <line x1="306" y1="26" x2="250" y2="26" stroke="var(--muted)" strokeWidth="3" markerEnd="url(#arrI)" />
          <text x="278" y="16" textAnchor="middle" fontFamily="var(--mono)" fontSize="10" fill="var(--muted)">{t(ui.wind)}</text>
          <path d="M262 38 L262 54 L232 46 Z" fill="none" stroke="var(--ink)" strokeWidth="2" />
          <circle cx="275" cy="205" r="22" fill="none" stroke="var(--faint)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path id="patPath" d="M294 226 L294 190 Q294 182 286 182 Q278 182 278 190 L278 220 Q278 228 270 228 Q262 228 262 220 L262 207 Q262 200 255 200 L60 200 L60 70 L186 70" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" markerEnd="url(#arrP)" />
          <path d="M194 62 L210 78 M210 62 L194 78" stroke="var(--ok)" strokeWidth="4" />
          <g fontFamily="var(--mono)" fontSize="11" fill="var(--ink)"><SvgAlt x={252} y={228} anchor="end" ft={900} lang={lang} units={units} /><SvgAlt x={72} y={228} ft={600} lang={lang} units={units} /><SvgAlt x={72} y={100} ft={300} lang={lang} units={units} /><SvgAlt x={148} y={56} ft={10} lang={lang} units={units} /></g>
          {!reduce && <circle r="7" fill="var(--red)" stroke="var(--paper)" strokeWidth="2"><animateMotion dur="14s" repeatCount="indefinite"><mpath href="#patPath" /></animateMotion></circle>}
          {r.point && <circle cx={r.point[0]} cy={r.point[1]} r="12" fill="none" stroke="var(--ink)" strokeWidth="3" />}
        </svg>
        <div className="cap">{renderInline(qty(r.alt))} · <Rich s={r.title} /></div>
      </div>
    </div>
  );
}

/* ---------- low turn: side view ---------- */
/** A right-aligned mono label (10 px, about 6 units a letter) that breaks onto two lines when it would run past the drawing's left edge. */
function EndLabel({ x, y, fill, s }: { x: number; y: number; fill: string; s: string }) {
  if (s.length * 6 <= x - 4) return <text x={x} y={y} textAnchor="end" fill={fill}>{s}</text>;
  const w = s.split(' '); let k = 1;
  while (k < w.length - 1 && w.slice(0, k + 1).join(' ').length <= s.length / 2) k++;
  return <text x={x} y={y - 6} textAnchor="end" fill={fill}><tspan x={x}>{w.slice(0, k).join(' ')}</tspan><tspan x={x} dy="12">{w.slice(k).join(' ')}</tspan></text>;
}

export function LowTurn({ b }: { b: Extract<Block, { type: 'lowturn' }> }) {
  const { t } = useLang();
  return (
    <div className="split">
      <div className="stage">
        <svg viewBox="0 0 320 210" role="img" aria-label="Straight final versus a low turn">
          <rect x="0" y="0" width="320" height="210" rx="10" fill="var(--paper)" />
          <line x1="0" y1="186" x2="320" y2="186" stroke="var(--ink)" strokeWidth="3" />
          <path d="M20 40 L230 160 Q262 180 300 182" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 40 L110 92 Q125 104 132 128 Q140 158 150 184" fill="none" stroke="var(--red)" strokeWidth="4" strokeLinecap="round" strokeDasharray="7 5" />
          <path d="M150 186 l-8 -12 l10 4 l2 -12 l6 10 l10 -6 l-4 12 z" fill="var(--red)" />
          <circle cx="110" cy="92" r="6" fill="var(--red)" />
          <g fontFamily="var(--mono)" fontSize="10">
            <EndLabel x={100} y={112} fill="var(--red)" s={t({ en: 'turn starts low', es: 'el giro empieza bajo', ru: 'поворот низко', uk: 'поворот низько' })} />
            <EndLabel x={112} y={172} fill="var(--red)" s={t({ en: 'dives, speeds up', es: 'se clava, acelera', ru: 'ныряет, разгоняется', uk: 'пірнає, розганяється' })} />
            <text x="312" y="203" textAnchor="end" fill="var(--ink)">{t({ en: 'straight: glide, flare', es: 'recto: planeo, flare', ru: 'прямо: скольжение, выравнивание', uk: 'прямо: ковзання, вирівнювання' })}</text>
            <text x="12" y="202" fill="var(--muted)">{t(ui.sideView)}</text>
          </g>
        </svg>
      </div>
      <div>
        <p style={{ margin: 0 }}><Rich s={b.text} /></p>
        <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6, fontSize: 15 }}>{b.points.map((x, i) => <li key={i}><Rich s={x} /></li>)}</ul>
        <ClipFigure c={b.clip} />
      </div>
    </div>
  );
}

/* ---------- pull, count to five, check the canopy ---------- */
export function CanopyCheck({ items }: { items: { word: L; text: L }[] }) {
  const { t } = useLang();
  const [n, setN] = useState(-1);      // 0..5 = counting, 6.. = checklist
  const timers = useTimers();
  const run = () => { timers.clear(); setN(0); for (let k = 1; k <= 5 + items.length; k++) timers.after(k * 800, () => setN(k)); };
  const scale = n < 0 ? 0.15 : Math.min(1, 0.15 + n * 0.17);
  return (
    <div className="stage canopy">
      <svg viewBox="0 0 200 190" role="img" aria-label="Canopy opening">
        <g transform={`translate(100 160) scale(${scale} ${Math.min(1, scale * 1.1)}) translate(-100 -160)`}><CanopyShape /></g>
        <line x1="100" y1="160" x2="100" y2="180" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" /><circle cx="100" cy="154" r="7" fill="var(--ink)" />
      </svg>
      <div className="count"><span className="count-label">{t(ui.countLabel)}</span>{[1, 2, 3, 4, 5].map(k => <span key={k} className={n >= k ? 'on' : ''}>{k}000</span>)}</div>
      <div className="check-list">{items.map((it, i) => <div key={i} className={n >= 6 + i ? 'on' : ''}><b><Rich s={it.word} /></b><span><Rich s={it.text} /></span></div>)}</div>
      <div className="controls"><button type="button" className="btn primary" onClick={run}>{t(ui.pull)}</button></div>
    </div>
  );
}

function CanopyShape({ cells = 7 }: { cells?: number }) {
  const x0 = 30, w = 140, top = 36, bot = 72, cw = w / cells;
  const lines = [x0 + 4, x0 + w * 0.25, x0 + w * 0.5 - 6, x0 + w * 0.5 + 6, x0 + w * 0.75, x0 + w - 4];
  return (
    <g>
      {Array.from({ length: cells }, (_, i) => {
        const h = (bot - top) * (Math.sin((Math.PI * (i + 0.5)) / cells) * 0.45 + 0.55);
        return <rect key={i} x={x0 + i * cw} y={bot - h} width={cw} height={h} rx="5" fill={i % 2 ? 'var(--ink)' : 'var(--faint)'} />;
      })}
      {lines.map((x, i) => <line key={i} x1={x} y1={bot} x2={x < 100 ? 94 : 106} y2={150} stroke="var(--muted)" strokeWidth="1.2" />)}
      <rect x="88" y="136" width="24" height="5" rx="2" fill="var(--ink)" />
    </g>
  );
}

/** Small drawing for cards without footage. */
export function CanopyDrawing({ state }: { state: 'none' | 'spin' | 'twist' | 'good' }) {
  return (
    <svg viewBox="0 0 200 190" aria-hidden="true">
      {state === 'none' ? <text x="100" y="105" textAnchor="middle" fontSize="64" fontWeight="800" fill="var(--red)">?</text>
        : <g style={state === 'spin' ? { transformOrigin: '100px 60px', animation: 'spin 2.4s linear infinite' } : undefined}><CanopyShape /></g>}
      <line x1="100" y1="160" x2="100" y2="180" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" /><circle cx="100" cy="154" r="7" fill="var(--ink)" />
    </svg>
  );
}


/* ---------- the rig, back and front: tap a part, it lights up ---------- */
/** A real photo of each part (frames from public gear-check videos; docs/research/real-footage.md). */
const RIG_PHOTO: Partial<Record<RigPartId, { yt: string; t: number; credit: string; cap: L }>> = {
  reserve: { yt: 'LQZhlBAsWgE', t: 99, credit: 'Matt Walker', cap: { en: 'The reserve: top of the container, its pin in the clear window', es: 'La reserva: arriba del contenedor, su pasador en la ventana', uk: 'Запасний: верх ранця, його шпилька у віконці', ru: 'Запасной: верх ранца, его шпилька в окошке' } },
  main: { yt: 'LQZhlBAsWgE', t: 84, credit: 'Matt Walker', cap: { en: 'The main: bottom of the container, closed', es: 'La principal: abajo del contenedor, cerrada', uk: 'Основний: низ ранця, закритий', ru: 'Основной: низ ранца, закрыт' } },
  pc: { yt: 'DaQIlD_xZZk', t: 214, credit: 'Skydive Fundamentals', cap: { en: 'The pilot chute handle in its pouch at the bottom corner', es: 'La manija del extractor en su bolsillo, abajo en la esquina', uk: 'Ручка витяжного в кишені внизу, з краю', ru: 'Ручка вытяжного в кармане внизу, с краю' } },
  aad: { yt: 'LQZhlBAsWgE', t: 13, credit: 'Matt Walker', cap: { en: 'The AAD control unit (CYPRES): display and button', es: 'La unidad de control del AAD (CYPRES): pantalla y botón', uk: 'Блок керування AAD (CYPRES): екран і кнопка', ru: 'Блок управления AAD (CYPRES): экран и кнопка' } },
  cutaway: { yt: 'LQZhlBAsWgE', t: 170, credit: 'Matt Walker', cap: { en: 'The red cutaway handle, pulled a little to show its cables', es: 'La manija roja de liberación, un poco fuera para ver los cables', uk: 'Червона подушка відчеплення, трохи витягнута, видно троси', ru: 'Красная подушка отцепки, чуть вытянута, видны тросики' } },
  silver: { yt: 'LQZhlBAsWgE', t: 297, credit: 'Matt Walker', cap: { en: 'The reserve handle: a metal D-ring on the left chest', es: 'La manija de reserva: un anillo metálico a la izquierda del pecho', uk: 'Ручка запасного: металеве кільце зліва на грудях', ru: 'Ручка запасного: металлическое кольцо слева на груди' } },
  rings: { yt: 'LQZhlBAsWgE', t: 160, credit: 'Matt Walker', cap: { en: 'The three-ring release on the shoulder: big, middle, little ring', es: 'Los tres anillos en el hombro: grande, mediano, pequeño', uk: 'Три кільця на плечі: велике, середнє, мале', ru: 'Три кольца на плече: большое, среднее, малое' } },
  straps: { yt: 'LQZhlBAsWgE', t: 300, credit: 'Matt Walker', cap: { en: 'The leg strap loops (rig lying face up)', es: 'Las perneras (el equipo boca arriba)', uk: 'Ножні обхвати (система лежить лицем догори)', ru: 'Ножные обхваты (система лежит лицом вверх)' } },
};

export function Rig({ parts }: { parts: RigPart[] }) {
  const { t } = useLang();
  const open = useOpenVideo();
  const [i, setI] = useState(0);
  const on = parts[i].id;
  const rp = (id: RigPartId) => `rp ${id === on ? 'on' : ''}`;
  const photo = RIG_PHOTO[on];
  return (
    <div className="split">
      <div className="stage sticky rig">
        <svg viewBox="0 0 320 250" role="img" aria-label={`${t(parts[i].name)}`}>
          <rect x="0" y="0" width="320" height="250" rx="10" fill="var(--paper)" />
          {/* back: reserve on top, main below, pilot chute handle at the bottom right */}
          <g className={rp('straps')} fill="none" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round">
            <path d="M50 24 L52 40 M110 24 L108 40" />
            <path d="M46 186 Q40 212 58 226 M114 186 Q120 212 102 226" />
          </g>
          <g className={rp('reserve')}>
            <path d="M40 98 V52 Q40 40 52 40 H108 Q120 40 120 52 V98 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="3" />
          </g>
          <g className={rp('aad')}>
            <rect x="62" y="58" width="36" height="22" rx="4" fill="var(--soft)" stroke="var(--ink)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="80" y="73" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="var(--ink)">AAD</text>
          </g>
          <g className={rp('main')}>
            <path d="M40 100 H120 V178 Q120 190 108 190 H52 Q40 190 40 178 Z" fill="var(--card)" stroke="var(--ink)" strokeWidth="3" />
          </g>
          <g className={rp('pc')}>
            <circle cx="108" cy="202" r="8" fill="var(--ink)" />
            <path d="M108 194 V188" stroke="var(--ink)" strokeWidth="3" />
          </g>
          {/* front: harness on a body; right side of the jumper = left side of the picture */}
          <g fill="none" stroke="var(--line-strong)" strokeWidth="2">
            <circle cx="240" cy="22" r="13" />
            <path d="M206 160 V62 Q206 40 228 40 H252 Q274 40 274 62 V160 Z" />
            <path d="M222 160 V236 M258 160 V236" />
          </g>
          <g stroke="var(--ink)" strokeWidth="5" strokeLinecap="round"><path d="M224 40 V160 M256 40 V160" /></g>
          <g className={rp('rings')} fill="none" stroke="var(--ink)" strokeWidth="2">
            <circle cx="224" cy="46" r="7" /><circle cx="224" cy="56" r="5" /><circle cx="224" cy="63" r="3" />
            <circle cx="256" cy="46" r="7" /><circle cx="256" cy="56" r="5" /><circle cx="256" cy="63" r="3" />
          </g>
          <g className={rp('straps')} fill="none" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round">
            <path d="M224 88 H256" />
            <ellipse cx="222" cy="176" rx="15" ry="7" /><ellipse cx="258" cy="176" rx="15" ry="7" />
          </g>
          <g className={rp('cutaway')}><rect x="206" y="98" width="16" height="26" rx="6" fill="var(--red)" /></g>
          <g className={rp('silver')}><rect x="258" y="98" width="16" height="26" rx="6" fill="#c9ccd2" stroke="var(--ink)" strokeWidth="2" /></g>
          <g fontFamily="var(--mono)" fontSize="11" fill="var(--muted)" textAnchor="middle">
            <text x="80" y="244">{t(ui.backView)}</text><text x="240" y="248">{t(ui.frontView)}</text>
          </g>
        </svg>
        <div className="cap"><Rich s={parts[i].name} /></div>
        {photo && (
          <figure className="rig-photo">
            <img src={`media/rig_${on}.jpg`} alt={t(photo.cap)} width={640} height={480} decoding="async" />
            <figcaption>{t(photo.cap)} · <button type="button" className="src-link" onClick={() => open({ yt: photo.yt, t: photo.t, title: t(parts[i].name) })}>▶ {photo.credit}</button></figcaption>
          </figure>
        )}
      </div>
      <div><StepList steps={parts.map(p => ({ title: p.name, sub: p.text }))} on={i} onPick={setI} /></div>
    </div>
  );
}
