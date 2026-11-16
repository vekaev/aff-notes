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

/** Side view of the jump; every stop is a link to its part. */
function JumpPicture() {
  const { t } = useLang();
  const stop = (id: string, x: number, y: number, n: string, label: L, sub: string, color: string, anchor: 'start' | 'end' = 'start') => (
    <a href={`#${id}`} className="stop" style={{ ['--c' as string]: color }}>
      <circle cx={x} cy={y} r="13" />
      <text x={x} y={y + 4.5} textAnchor="middle" className="n">{n}</text>
      <text x={anchor === 'start' ? x + 20 : x - 20} y={y - 2} textAnchor={anchor} className="lb">{t(label)}</text>
      <text x={anchor === 'start' ? x + 20 : x - 20} y={y + 13} textAnchor={anchor} className="al">{sub}</text>
    </a>
  );
  return (
    <svg className="jump" viewBox="0 0 640 270" role="img" aria-label={t(T.title)}>
      {/* ground */}
      <line x1="0" y1="246" x2="640" y2="246" className="ground" />
      {/* plane */}
      <path d="M40 40 l40 -4 l14 -12 h6 l-5 12 l22 2 l6 -7 h5 l-3 10 l3 10 h-5 l-6 -7 l-22 2 l5 12 h-6 l-14 -12 z" className="plane" />
      {/* freefall */}
      <path d="M122 46 C 150 54, 176 88, 186 128" className="ff" />
      <g className="flyer"><circle cx="186" cy="132" r="5" /><path d="M176 140 l10 -4 l10 4 M186 136 v10 M180 152 l6 -6 l6 6" /></g>
      {/* canopy and glide into the pattern */}
      <path d="M202 150 Q 226 134 250 150" className="canopy" />
      <path d="M226 154 C 280 190, 340 200, 410 206 L 520 206 L 520 176 L 590 176" className="glide" />
      <path d="M598 236 l10 10 M608 236 l-10 10" className="target" />
      {stop('part1', 24, 84, 'I', parts[0].title, '0 → 13,500 ft', 'var(--acc-plane)')}
      {stop('part2', 250, 92, 'II', parts[1].title, '13,500 → 5,500', 'var(--acc-free)')}
      {stop('part3', 380, 150, 'III', parts[2].title, '5,500 → 0', 'var(--acc-canopy)')}
      {stop('part4', 270, 236, 'IV', parts[3].title, '!', 'var(--acc-ep)')}
      {stop('dz', 612, 140, 'V', parts[4].title, 'Tracy, CA', 'var(--acc-dz)', 'end')}
    </svg>
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

      <JumpPicture />
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
