import { useEffect, useState } from 'react';
import { parts } from './content';
import { headline, useLang } from './i18n';
import { ui } from './ui';
import { usePassed } from './progress';
import { BlockView } from './components/Blocks';
import { Hero, useTrackLastChapter } from './components/Hero';
import { SkyRail } from './components/SkyRail';
import { LangMenu, ThemeButton } from './components/Settings';
import { ICONS, PART_ICON } from './components/Icon';

/** Which part is on screen, for the header nav. */
/**
 * The part under the header (for its tint and the nav): the last part whose band has reached the header.
 * 'top' above the first part, so the header over the first screen stays plain paper.
 */
function useActivePart() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      let part = 'top';
      document.querySelectorAll<HTMLElement>('[data-part]').forEach(el => { if (el.getBoundingClientRect().top <= 64) part = el.dataset.part!; });
      setActive(prev => (prev === part ? prev : part));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return active;
}

export function App() {
  const { t } = useLang();
  useTrackLastChapter();
  const active = useActivePart();
  const passed = usePassed();
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
          <div className="settings"><LangMenu /><ThemeButton /></div>
        </div>
      </header>

      <SkyRail />
      <main id="top">
        <Hero />

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
