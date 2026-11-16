import { useEffect, useRef, useState } from 'react';
import { parts } from './content';
import { LANGS } from './content/types';
import { headline, Rich, useLang } from './i18n';
import { ui } from './ui';
import { usePassed } from './progress';
import { BlockView } from './components/Blocks';
import { ICONS, PART_ICON } from './components/Icon';

function useScrollProgress(bar: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, [bar]);
}

/** Which part is on screen, for the header nav. */
function useActivePart() {
  const [active, setActive] = useState(parts[0].id);
  useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.part!); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('[data-part]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function Mark() {
  // A small canopy over a horizon line: the app's one quiet glyph.
  return (
    <svg className="mark" viewBox="0 0 120 70" aria-hidden="true">
      <path d="M14 30 Q60 -4 106 30 Q60 18 14 30 Z" fill="var(--ink)" />
      <path d="M22 28 L58 58 M98 28 L62 58" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="60" cy="58" r="4" fill="var(--ink)" />
      <line x1="0" y1="68" x2="120" y2="68" stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
}

export function App() {
  const { lang, setLang, t } = useLang();
  const bar = useRef<HTMLDivElement>(null);
  useScrollProgress(bar);
  const active = useActivePart();
  const passed = usePassed();
  const hasQuiz = (c: (typeof parts)[number]['chapters'][number]) => c.blocks.some(b => b.type === 'quiz' || (b.type === 'split' && [...b.left, ...b.right].some(x => x.type === 'quiz')));
  const quizChapters = parts.flatMap(p => p.chapters).filter(hasQuiz);
  const acc = (id: string) => ({ ['--a' as string]: `var(--acc-${({ part1: 'plane', part2: 'free', part3: 'canopy', part4: 'ep', dz: 'dz' } as Record<string, string>)[id]})` });
  let n = 0;

  return (
    <>
      <header className={`top gutter tone-${active}`}>
        <div className="col">
          <a className="brand" href="#top">{t(ui.brand)}</a>
          <nav className="parts" aria-label={t(ui.part)}>
            {parts.map(p => <a key={p.id} href={`#${p.id}`} style={acc(p.id)} className={active === p.id ? 'on' : ''}>{p.roman} · {t(p.title)}</a>)}
          </nav>
          <div className="langs" role="group" aria-label="Language">
            {LANGS.map(l => <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
        </div>
        <div className="progress" ref={bar} />
      </header>

      <main id="top">
        <div className="gutter"><div className="col hero">
          <Mark />
          <div className="eyebrow">{t(ui.heroEyebrow)}</div>
          <h1>{headline(t(ui.heroTitle))}</h1>
          <p><Rich s={ui.heroText} /></p>
          <nav className="ladder surface">
            {parts.map(p => {
              const qs = p.chapters.filter(hasQuiz);
              const ok = qs.filter(c => passed.has(c.id)).length;
              return <a key={p.id} href={`#${p.id}`} style={acc(p.id)}><span className="alt">{t(p.range)}</span><span className="t">{t(p.title)}</span><span className="sc">{qs.length ? `${ok}/${qs.length}${ok === qs.length ? ' ✓' : ''}` : '›'}</span></a>;
            })}
          </nav>
          {quizChapters.length > 0 && <div className="score">{passed.size} / {quizChapters.length} {t(ui.testsDone)}</div>}
        </div></div>

        {parts.map(p => (
          <div key={p.id} data-part={p.id} className={`band gutter tone-${p.id}`}>
            <section id={p.id} className={`col part ${p.tone ?? ''}`}>
              <span className="roman" aria-hidden="true">{p.roman}</span>
              <div className="kicker">
                {PART_ICON[p.id] && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[PART_ICON[p.id]]}</svg>}
                {t(ui.part)} {p.roman} · {t(p.range)}
              </div>
              <h2>{headline(t(p.title))}</h2>
              <ol className="toc">{p.chapters.map(c => <li key={c.id}><a href={`#${c.id}`}>{t(c.title)}{passed.has(c.id) && <span className="tick">✓</span>}</a></li>)}</ol>
            </section>
            {p.chapters.map(c => {
              n += 1;
              return (
                <section key={c.id} id={c.id} className="col chapter">
                  <div className="eyebrow">{c.eyebrow ? t(c.eyebrow) : `${t(ui.chapter)} ${n}`}{passed.has(c.id) && <span className="done">{t(ui.passed)}</span>}</div>
                  <h3>{headline(t(c.title))}</h3>
                  <div className="blocks">{c.blocks.map((b, i) => <BlockView key={i} b={b} chapterId={c.id} />)}</div>
                </section>
              );
            })}
          </div>
        ))}

        <footer className="gutter"><div className="col">{t(ui.footer)}</div></footer>
      </main>
    </>
  );
}
