import { useEffect, useState } from 'react';
import { parts } from '../content';
import type { L } from '../content/types';
import { ftWord, headline, num, Rich, useLang } from '../i18n';
import { group, toMetres } from '../units';
import { ui } from '../ui';
import type { Lang } from '../content/types';

/** A big altitude on the first screen: feet as written, metres (≈) instead or underneath, per the reader's units. */
function Big({ v, lang, units }: { v: string; lang: Lang; units: 'ft' | 'm' | 'both' }) {
  const mW = lang === 'uk' || lang === 'ru' || lang === 'bg' ? 'м' : 'm';
  // "900 · 600 · 300" is three altitudes: convert each one.
  const metres = v.split(/\s*·\s*/).map(p => group(toMetres(Number(p.replace(/[^\d]/g, ''))), lang)).join(' · ');
  if (units === 'm') return <span className="big">≈{metres}<small className="u">{mW}</small></span>;
  return <span className="big">{num(v, lang)}<small className="u">{ftWord(lang)}</small>{units === 'both' && <span className="mline">≈{metres} {mW}</span>}</span>;
}
import { usePassed } from '../progress';

const LAST = 'aff-last-chapter';
const h = (en: string, es: string, ru: string, uk: string): L => ({ en, es, ru, uk });

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
  eyebrow: h('AFF category A · study notes', 'AFF categoría A · apuntes', 'Ускоренное обучение AFF, категория A · конспект', 'Прискорене навчання AFF, категорія A · конспект'),
  title: h('Your first jump, step by step', 'Tu primer salto, paso a paso', 'Твой первый прыжок, шаг за шагом', 'Твій перший стрибок, крок за кроком'),
  sub: h('From the plane door to the landing: what to do, the numbers to remember, and what to do if something goes wrong. Real videos and a short test after each chapter.', 'De la puerta del avión al aterrizaje: qué hacer, las cifras que hay que recordar y qué hacer si algo sale mal. Vídeos reales y una prueba corta tras cada capítulo.', 'От двери самолёта до приземления: что делать, какие цифры помнить и что делать, если что-то пошло не так. Настоящие видео и короткий тест после каждой главы.', 'Від дверей літака до приземлення: що робити, які цифри пам’ятати і що робити, якщо щось пішло не так. Справжні відео та короткий тест після кожного розділу.'),
  start: h('Start reading', 'Empezar a leer', 'Начать читать', 'Почати читати'),
  cont: h('Continue', 'Continuar', 'Продолжить', 'Продовжити'),
  where: h('You stopped at', 'Te quedaste en', 'Последняя открытая глава', 'Останній відкритий розділ'),
  nextTest: h('Next test', 'Siguiente prueba', 'Следующий тест', 'Наступний тест'),
  allDone: h('All tests passed. Review the numbers before every jump.', 'Todas las pruebas aprobadas. Repasa las cifras antes de cada salto.', 'Все тесты пройдены. Перед каждым прыжком повторяй цифры.', 'Усі тести складено. Перед кожним стрибком повторюй цифри.'),
  tests: h('tests passed', 'pruebas aprobadas', 'тестов пройдено', 'тестів складено'),
  feet: h('Altitudes in feet above the ground (1,000 ft ≈ 300 m)', 'Alturas en pies sobre el suelo (1,000 ft ≈ 300 m)', 'Высота над землёй в футах (1 000 футов ≈ 300 м)', 'Висота над землею у футах (1 000 футів ≈ 300 м)'),
  ifBad: h('If the main is bad', 'Si la principal falla', 'Если с основным куполом что-то не так', 'Якщо з основним куполом проблема'),
  numbers: h('The numbers to know by heart', 'Las cifras que hay que saber de memoria', 'Цифры, которые надо знать наизусть', 'Цифри, які треба знати напам’ять'),
};

/** The altitudes in the order you pass them, plus two timers. Each links to its chapter. */
const TAPE: { big: string; label: L; to: string; red?: boolean }[] = [
  { big: '13,000', label: h('exit', 'salida del avión', 'отделение от самолёта', 'відокремлення від літака'), to: 'count' },
  { big: '6,000', label: h('lock on: altimeter only', 'solo el altímetro', 'дальше смотри только на высотомер', 'далі дивись лише на висотомір'), to: 'altitude' },
  { big: '5,500', label: h('pull', 'apertura del paracaídas', 'раскрой парашют', 'розкрий парашут'), to: 'deploy' },
  { big: '2,500', label: h('can you reach the holding point?', '¿llegas al punto de espera?', 'хватит высоты долететь до точки ожидания?', 'чи долетиш до точки очікування?'), to: 'pattern' },
  { big: '2,000', label: h('over the holding point', 'sobre el punto de espera', 'над точкой ожидания', 'над точкою очікування'), to: 'pattern' },
  { big: '1,000', label: h('leave it, start the pattern', 'déjalo, empieza el circuito', 'оставь точку ожидания, начинай схему захода', 'залиш точку очікування, починай схему заходу'), to: 'pattern' },
  { big: '900 · 600 · 300', label: h('landing pattern', 'circuito', 'схема захода: по ветру, базовая, финал', 'схема заходу: по вітру, базова, фінал'), to: 'pattern' },
  { big: '10 ft', label: h('flare, then PLF', 'flare y PLF', 'выравнивание (flare), потом приземление с перекатом (PLF)', 'вирівнювання (flare), потім приземлення з перекатом (PLF)'), to: 'flare' },
];
/** Only if the main is bad: the emergency numbers, kept apart so they don't mix with the canopy ones. */
const EMERGENCY: { big: string; label: L; to: string }[] = [
  { big: '2,500', label: h('decide and act (fix or cut away) by here', 'decide y actúa (arreglar o liberar) antes de aquí', 'до этой высоты реши и действуй: исправь купол или отцепись', 'до цієї висоти виріши й дій: виправ купол або відчепись'), to: 'ep' },
  { big: '1,000', label: h('no cutaway below: pull the reserve only (one exception: a downplane)', 'por debajo no liberes: solo la reserva (excepción: downplane)', 'ниже не отцепляйся: раскрывай только запасной (исключение: «даунплейн», оба купола вниз)', 'нижче не відчіплюйся: розкривай лише запасний (виняток: «даунплейн», обидва куполи вниз)'), to: 'ep' },
];
const TIMERS: { big: string; label: L; to: string }[] = [
  { big: '3 s', label: h('check altitude, all the time', 'mira el altímetro, siempre', 'смотри на высотомер, постоянно', 'дивись на висотомір, постійно'), to: 'altitude' },
  { big: '5 s', label: h('count after the pull, then check the canopy', 'cuenta tras abrir y revisa la vela', 'после раскрытия считай до пяти, потом проверь купол', 'після розкриття порахуй до п’яти, потім перевір купол'), to: 'deploy' },
];

/**
 * Side view of the whole jump, full width. Each part is a numbered stop that links to it.
 * On first view the path draws itself and a small jumper flies it once: freefall, the canopy opens,
 * the pattern, the landing. "Replay" runs it again. Nothing moves with reduced motion.
 */
const FLIGHT = 'M182 58 C 222 62, 276 104, 302 156 C 400 188, 560 210, 700 226 L 850 246 L 938 264';
function JumpPicture() {
  const { t } = useLang();
  const [run, setRun] = useState(0);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stop = (id: string, x: number, y: number, n: string, label: L, sub: L | string, color: string, anchor: 'start' | 'end' = 'start') => (
    <a href={`#${id}`} className="stop" style={{ ['--c' as string]: color }}>
      <circle cx={x} cy={y} r="15" />
      <text x={x} y={y + 5} textAnchor="middle" className="n">{n}</text>
      {/* with a second line the pair is centred on the circle; alone, the title sits on its centre line */}
      <text x={anchor === 'start' ? x + 24 : x - 24} y={sub ? y - 1 : y + 1} dominantBaseline={sub ? undefined : "central"} textAnchor={anchor} className="lb">{t(label)}</text>
      {sub && <text x={anchor === 'start' ? x + 24 : x - 24} y={y + 16} textAnchor={anchor} className="al">{typeof sub === 'string' ? sub : t(sub)}</text>}
    </a>
  );
  return (
    <div className="jump-wrap">
      <svg className="jump" viewBox="0 0 1000 300" role="img" aria-label={t(T.title)} key={run}>
        {/* altitude axis */}
        <g className="axis">
          <line x1="34" y1="40" x2="34" y2="276" />
          {[[58, '13,000'], [156, '5,500'], [206, '2,500'], [276, '0']].map(([y, v]) => (
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
        <path d="M302 156 C 400 188, 560 210, 700 226 L 850 246 L 938 264" className="glide" pathLength={1} />
        {/* emergency branch: reserve under a red canopy, decide by 2,500 */}
        <path d="M302 160 L 330 200" className="ep-branch" />
        <g className="reserve"><path d="M318 202 Q334 190 350 202 Q334 198 318 202 Z" /><path d="M321 202 L332 214 M347 202 L336 214" /></g>
        {/* the flying jumper */}
        {!reduce && (
          <g className="flyer" style={{ offsetPath: `path('${FLIGHT}')` }}>
            {/* freefall: belly to earth, body horizontal, arms and legs bent up */}
            <g className="fly-box">
              {/* the classic skydiver seen from above: arms and legs bent, belly to earth */}
              <circle cx="0" cy="-9" r="3.8" />
              <path d="M0 -5 V5 M0 -3 L-7 -3 L-10 -9 M0 -3 L7 -3 L10 -9 M0 5 L-6 9 L-6 14 M0 5 L6 9 L6 14" />
            </g>
            {/* under canopy: hanging upright */}
            <g className="fly-hang">
              <g className="fly-canopy"><path d="M-14 -20 Q0 -32 14 -20 Q0 -24 -14 -20 Z" /><path d="M-12 -20 L-2 -7 M12 -20 L2 -7" className="lines" /></g>
              <circle cx="0" cy="-4" r="3.6" /><path d="M0 -1 v8 M-5 2 L0 -1 L5 2 M0 7 l-3 6 M0 7 l3 6" />
            </g>
          </g>
        )}
        {stop('part1', 70, 108, 'I', parts[0].title, '0 → 13,000 ft', 'var(--acc-plane)')}
        {stop('part2', 330, 98, 'II', parts[1].title, '13,000 → 5,500', 'var(--acc-free)')}
        {stop('part3', 520, 150, 'III', parts[2].title, '5,500 → 0', 'var(--acc-canopy)')}
        {stop('part4', 376, 236, 'IV', parts[3].title, '', 'var(--acc-ep)')}
        {stop('dz', 930, 172, 'V', parts[4].title, '', 'var(--acc-dz)', 'end')}
      </svg>
      {!reduce && <button type="button" className="replay" onClick={() => setRun(r => r + 1)}>↻ {t({ en: 'Replay the jump', es: 'Repetir el salto', ru: 'Повторить прыжок', uk: 'Повторити стрибок' })}</button>}
    </div>
  );
}

export function Hero() {
  const { t, lang, units } = useLang();
  const passed = usePassed();
  const chapters = parts.flatMap(p => p.chapters.map(c => ({ c, p })));
  const quizIds = new Set(chapters.filter(({ c }) => JSON.stringify(c.blocks).includes('"type":"quiz"')).map(({ c }) => c.id));
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => { try { setLast(localStorage.getItem(LAST)); } catch { /* ignore */ } }, []);
  // The tab title follows the language (pre-rendered pages start right; switching languages must update it too).
  const title = t(T.title);
  useEffect(() => { document.title = `${title} · AFF notes`; }, [title]);
  const lastCh = chapters.find(x => x.c.id === last);
  const nextTest = chapters.find(x => quizIds.has(x.c.id) && !passed.has(x.c.id));
  const done = [...quizIds].filter(id => passed.has(id)).length;
  const total = quizIds.size;
  const pct = total ? done / total : 0;
  const target = lastCh?.c.id ?? chapters[0].c.id;

  return (
    <div className="gutter"><div className="col hero">
      <div className="eyebrow">{t(T.eyebrow)}</div>
      <h1>{t(T.title)}.</h1>
      <p>{t(T.sub)} <Rich s={{ en: '<q-check/> = confirm with your instructors: their briefing always wins over this page.', es: '<q-check/> = confírmalo con tus instructores: su briefing siempre manda sobre esta página.', ru: '<q-check/> — уточнить у инструкторов: их брифинг всегда важнее этой страницы.', uk: '<q-check/> — уточнити в інструкторів: їхній брифінг завжди важливіший за цю сторінку.' }} /></p>

    </div>
      <JumpPicture />
    <div className="col hero hero-b">
      <ol className="toc jump-legend">
        {parts.map(p => <li key={p.id}><a href={`#${p.id}`} style={{ ['--c' as string]: `var(--acc-${({ part1: 'plane', part2: 'free', part3: 'canopy', part4: 'ep', dz: 'dz' } as Record<string, string>)[p.id]})` }}><span className="rn">{p.roman}</span>{t(p.title)}</a></li>)}
      </ol>

      <div className="resume surface">
        <svg className="ring" viewBox="0 0 64 64" role="img" aria-label={`${done}/${total} ${t(T.tests)}`}>
          <title>{`${done}/${total} ${t(T.tests)}`}</title>
          <circle cx="32" cy="32" r="27" className="track" />
          <circle cx="32" cy="32" r="27" className="val" strokeDasharray={`${pct * 169.6} 169.6`} transform="rotate(-90 32 32)" />
          <text x="32" y="37" textAnchor="middle">{done}/{total}</text>
        </svg>
        <div className="rtext">
          <span className="rl">{lastCh ? t(T.where) : t(T.tests).replace(/^./, c => c.toUpperCase())}</span>
          <b>{lastCh ? headline(t(lastCh.c.title)) : headline(t(chapters[0].c.title))}</b>
          <span className="rl">{nextTest ? <>{t(T.nextTest)}: <a href={`#${nextTest.c.id}`}>{t(nextTest.c.title)}</a></> : t(T.allDone)}</span>
        </div>
        <a className="btn primary go" href={`#${target}`}>{t(lastCh ? T.cont : T.start)} →</a>
      </div>

      <div className="numbers">
        <span className="nh">{t(T.numbers)}<small>{units === 'ft' ? t(T.feet) : t(ui.unitsNote)}</small></span>
        <ol className="tape surface">
          {TAPE.map((x, i) => (
            <li key={i} className={x.red ? 'red' : ''}>
              <a href={`#${x.to}`}>{/ft|s$/.test(x.big) ? <span className="big">{num(x.big, lang, units)}</span> : <Big v={x.big} lang={lang} units={units} />}<span className="dot" aria-hidden="true" /><span className="lbl">{t(x.label)}</span></a>
            </li>
          ))}
        </ol>
        <div className="emerg">
          <span className="eh">{t(T.ifBad)}</span>
          <div className="timers">
            {EMERGENCY.map((x, i) => <a key={i} href={`#${x.to}`} className="timer surface red"><Big v={x.big} lang={lang} units={units} /><span className="lbl">{t(x.label)}</span></a>)}
          </div>
        </div>
        <div className="timers">
          {TIMERS.map((x, i) => <a key={i} href={`#${x.to}`} className="timer surface"><span className="big">{num(x.big, lang, units)}</span><span className="lbl">{t(x.label)}</span></a>)}
        </div>
      </div>
    </div></div>
  );
}
