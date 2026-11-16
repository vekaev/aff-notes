import { useEffect, useState } from 'react';
import { parts } from '../content';
import type { L } from '../content/types';
import { headline, Rich, useLang } from '../i18n';
import { usePassed } from '../progress';

const LAST = 'aff-last-chapter';
const h = (en: string, es: string, ru: string): L => ({ en, es, ru });

/** Remembers the chapter you were reading (this browser only), for "continue". */
export function useTrackLastChapter() {
  useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { try { localStorage.setItem(LAST, (e.target as HTMLElement).id); } catch { /* ignore */ } } });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('section.chapter').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const T = {
  eyebrow: h('Accelerated Freefall · level 1 · study notes', 'Caída libre acelerada · nivel 1 · apuntes', 'AFF · уровень 1 · конспект'),
  title: h('from the seat to the ground', 'del asiento al suelo', 'от сиденья до земли'),
  sub: h('The whole jump, in order, with real footage. Your instructors\' briefing always wins.', 'Todo el salto, en orden, con vídeos reales. Lo que diga tu instructor siempre manda.', 'Весь прыжок по порядку, с настоящими видео. Брифинг инструкторов всегда важнее.'),
  start: h('Start reading', 'Empezar a leer', 'Начать читать'),
  cont: h('Continue', 'Continuar', 'Продолжить'),
  where: h('You stopped at', 'Te quedaste en', 'Ты остановился на'),
  nextTest: h('Next test', 'Siguiente prueba', 'Следующий тест'),
  allDone: h('All tests passed. Review the numbers before every jump.', 'Todas las pruebas aprobadas. Repasa las cifras antes de cada salto.', 'Все тесты сданы. Перед каждым прыжком повторяй цифры.'),
  tests: h('tests passed', 'pruebas aprobadas', 'тестов сдано'),
  numbers: h('The numbers to know by heart', 'Las cifras que hay que saber de memoria', 'Цифры, которые надо знать наизусть'),
};

const NUMBERS: { big: string; label: L; to: string; red?: boolean }[] = [
  { big: '3 s', label: h('check altitude', 'mira el altímetro', 'смотри на высоту'), to: 'altitude' },
  { big: '6,000', label: h('lock on: altimeter only', 'solo el altímetro', 'только высотомер'), to: 'altitude' },
  { big: '5,500', label: h('pull', 'abre', 'раскрытие'), to: 'deploy' },
  { big: '5 s', label: h('count, then check the canopy', 'cuenta y revisa la vela', 'счёт, потом проверка купола'), to: 'deploy' },
  { big: '2,500', label: h('decide: fix or cut away', 'decide: arreglar o liberar', 'решение: исправить или отцепка'), to: 'ep', red: true },
  { big: '1,000', label: h('no cutaway below', 'no liberar por debajo', 'ниже не отцепляться'), to: 'ep', red: true },
  { big: '900·600·300', label: h('landing pattern', 'circuito de aterrizaje', 'схема захода'), to: 'pattern' },
  { big: '10 ft', label: h('flare, then PLF', 'flare y luego PLF', 'flare, потом PLF'), to: 'flare' },
];

/**
 * Side view of the whole jump, full width. Each part is a numbered stop that links to it.
 * On first view the path draws itself and a small jumper flies it once: freefall, the canopy opens,
 * the pattern, the landing. "Replay" runs it again. Nothing moves with reduced motion.
 */
const FLIGHT = 'M182 58 C 222 62, 276 104, 302 156 C 400 188, 520 206, 640 210 L 850 210 L 850 244 L 938 264';
function JumpPicture() {
  const { t } = useLang();
  const [run, setRun] = useState(0);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stop = (id: string, x: number, y: number, n: string, label: L, sub: L | string, color: string, anchor: 'start' | 'end' = 'start') => (
    <a href={`#${id}`} className="stop" style={{ ['--c' as string]: color }}>
      <circle cx={x} cy={y} r="15" />
      <text x={x} y={y + 5} textAnchor="middle" className="n">{n}</text>
      <text x={anchor === 'start' ? x + 24 : x - 24} y={y - 1} textAnchor={anchor} className="lb">{t(label)}</text>
      <text x={anchor === 'start' ? x + 24 : x - 24} y={y + 16} textAnchor={anchor} className="al">{typeof sub === 'string' ? sub : t(sub)}</text>
    </a>
  );
  return (
    <div className="jump-wrap">
      <svg className="jump" viewBox="0 0 1000 300" role="img" aria-label={t(T.title)} key={run}>
        {/* altitude axis */}
        <g className="axis">
          <line x1="34" y1="40" x2="34" y2="276" />
          {[[58, '13,500'], [156, '5,500'], [206, '2,500'], [276, '0']].map(([y, v]) => (
            <g key={v as string}><line x1="30" y1={y as number} x2="38" y2={y as number} /><text x="44" y={(y as number) + 4}>{v}</text></g>
          ))}
        </g>
        {/* ground: trees, a house, the target */}
        <line x1="0" y1="276" x2="1000" y2="276" className="ground" />
        <g className="scenery">
          <path d="M700 276 v-14 M692 262 L700 240 L708 262 Z" /><path d="M724 276 v-10 M718 266 L724 250 L730 266 Z" />
          <path d="M760 276 v-20 l13 -11 l13 11 v20 Z" className="house" /><path d="M768 276 v-9 h9 v9" className="house" />
          <path d="M980 276 v-12 M974 264 L980 246 L986 264 Z" />
        </g>
        <path d="M930 266 l14 10 M944 266 l-14 10" className="target" />
        {/* plane with an open door */}
        <g className="plane">
          <path d="M96 46 L104 30 L114 44 Z" />
          <path d="M100 52 Q100 44 112 44 H196 Q210 46 214 52 Q210 58 196 60 H112 Q100 60 100 52 Z" />
          <path d="M138 56 h46" className="wing" />
          <rect x="166" y="46" width="12" height="11" rx="2" className="door" />
          <line x1="216" y1="44" x2="216" y2="60" className="prop" />
        </g>
        {/* the path */}
        <path d="M182 58 C 222 62, 276 104, 302 156" className="ff" />
        <path d="M302 156 C 400 188, 520 206, 640 210 L 850 210 L 850 244 L 938 264" className="glide" pathLength={1} />
        {/* emergency branch: reserve under a red canopy, decide by 2,500 */}
        <path d="M302 160 L 330 200" className="ep-branch" />
        <g className="reserve"><path d="M318 202 Q334 190 350 202 Q334 198 318 202 Z" /><path d="M321 202 L332 214 M347 202 L336 214" /></g>
        {/* the flying jumper */}
        {!reduce && (
          <g className="flyer" style={{ offsetPath: `path('${FLIGHT}')` }}>
            {/* freefall: belly to earth, body horizontal, arms and legs bent up */}
            <g className="fly-box">
              <circle cx="-10" cy="-2" r="3.6" />
              <path d="M-6 0 H7 M-3 0 L-7 -7 M2 0 L-1 -7 M7 0 L11 -5 L15 -2 M7 0 L12 2 L16 -1" />
            </g>
            {/* under canopy: hanging upright */}
            <g className="fly-hang">
              <g className="fly-canopy"><path d="M-14 -20 Q0 -32 14 -20 Q0 -24 -14 -20 Z" /><path d="M-12 -20 L-2 -7 M12 -20 L2 -7" className="lines" /></g>
              <circle cx="0" cy="-4" r="3.6" /><path d="M0 -1 v8 M-5 2 L0 -1 L5 2 M0 7 l-3 6 M0 7 l3 6" />
            </g>
          </g>
        )}
        {stop('part1', 70, 108, 'I', parts[0].title, '0 → 13,500 ft', 'var(--acc-plane)')}
        {stop('part2', 330, 98, 'II', parts[1].title, '13,500 → 5,500', 'var(--acc-free)')}
        {stop('part3', 520, 150, 'III', parts[2].title, '5,500 → 0', 'var(--acc-canopy)')}
        {stop('part4', 376, 236, 'IV', parts[3].title, { en: 'decide by 2,500', es: 'decide antes de 2,500', ru: 'решение до 2 500' }, 'var(--acc-ep)')}
        {stop('dz', 930, 172, 'V', parts[4].title, 'Tracy, CA', 'var(--acc-dz)', 'end')}
      </svg>
      {!reduce && <button type="button" className="replay" onClick={() => setRun(r => r + 1)}>↻ {t({ en: 'Replay the jump', es: 'Repetir el salto', ru: 'Повторить прыжок' })}</button>}
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  const passed = usePassed();
  const chapters = parts.flatMap(p => p.chapters.map(c => ({ c, p })));
  const quizIds = new Set(chapters.filter(({ c }) => JSON.stringify(c.blocks).includes('"type":"quiz"')).map(({ c }) => c.id));
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => { try { setLast(localStorage.getItem(LAST)); } catch { /* ignore */ } }, []);
  const lastCh = chapters.find(x => x.c.id === last);
  const nextTest = chapters.find(x => quizIds.has(x.c.id) && !passed.has(x.c.id));
  const done = [...quizIds].filter(id => passed.has(id)).length;
  const total = quizIds.size;
  const pct = total ? done / total : 0;
  const target = lastCh?.c.id ?? chapters[0].c.id;

  return (
    <div className="gutter"><div className="col hero">
      <div className="eyebrow">{t(T.eyebrow)}</div>
      <h1>{headline(t(T.title))}</h1>
      <p>{t(T.sub)} <Rich s={{ en: '<q-check/> = confirm with them.', es: '<q-check/> = confírmalo con ellos.', ru: '<q-check/> — уточнить у них.' }} /></p>

    </div>
      <JumpPicture />
    <div className="col hero hero-b">
      <ol className="toc jump-legend">
        {parts.map(p => <li key={p.id}><a href={`#${p.id}`} style={{ ['--c' as string]: `var(--acc-${({ part1: 'plane', part2: 'free', part3: 'canopy', part4: 'ep', dz: 'dz' } as Record<string, string>)[p.id]})` }}><span className="rn">{p.roman}</span>{t(p.title)}</a></li>)}
      </ol>

      <div className="resume surface">
        <svg className="ring" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="27" className="track" />
          <circle cx="32" cy="32" r="27" className="val" strokeDasharray={`${pct * 169.6} 169.6`} transform="rotate(-90 32 32)" />
          <text x="32" y="37" textAnchor="middle">{done}/{total}</text>
        </svg>
        <div className="rtext">
          <span className="rl">{lastCh ? `${t(T.where)}` : t(T.tests).replace(/^./, c => c.toUpperCase()) + `: ${done}/${total}`}</span>
          <b>{lastCh ? headline(t(lastCh.c.title)) : headline(t(chapters[0].c.title))}</b>
          <span className="rl">{nextTest ? <>{t(T.nextTest)}: <a href={`#${nextTest.c.id}`}>{t(nextTest.c.title)}</a></> : t(T.allDone)}</span>
        </div>
        <a className="btn primary go" href={`#${target}`}>{t(lastCh ? T.cont : T.start)} →</a>
      </div>

      <div className="numbers">
        <span className="nh">{t(T.numbers)}</span>
        <div className="ngrid">
          {NUMBERS.map((x, i) => (
            <a key={i} href={`#${x.to}`} className={`num surface ${x.red ? 'red' : ''}`}>
              <span className="big">{x.big}</span><span className="lbl">{t(x.label)}</span>
            </a>
          ))}
        </div>
      </div>
    </div></div>
  );
}
