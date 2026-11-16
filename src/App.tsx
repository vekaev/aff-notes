import { useEffect, useState } from 'react';
import { parts } from './content';
import { headline, useLang } from './i18n';
import { ui } from './ui';
import { usePassed } from './progress';
import { BlockView } from './components/Blocks';
import { Hero, useTrackLastChapter } from './components/Hero';
import { SkyRail } from './components/SkyRail';
import { LangMenu, ThemeButton } from './components/Settings';
import { OfflineButton } from './components/Offline';
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
      // A header link scrolls the part to just under the header (scroll-padding-top: header + 16 px), so the line
      // sits a bit lower than that; at the very bottom of the page the last part is the current one.
      const line = (document.querySelector('.top')?.getBoundingClientRect().bottom ?? 56) + 40;
      let part = 'top';
      const bands = document.querySelectorAll<HTMLElement>('[data-part]');
      bands.forEach(el => { if (el.getBoundingClientRect().top <= line) part = el.dataset.part!; });
      if (bands.length && innerHeight + scrollY >= document.documentElement.scrollHeight - 4) part = bands[bands.length - 1].dataset.part!;
      setActive(prev => (prev === part ? prev : part));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    // also when a scroll ends or a link jumps: the header always lands on the part you went to
    const now = () => { cancelAnimationFrame(raf); read(); };
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    addEventListener('scrollend', now); addEventListener('hashchange', now);
    return () => {
      removeEventListener('scroll', on); removeEventListener('resize', on);
      removeEventListener('scrollend', now); removeEventListener('hashchange', now); cancelAnimationFrame(raf);
    };
  }, []);
  return active;
}

const acc = (id: string) => ({ ['--a' as string]: `var(--acc-${({ part1: 'plane', part2: 'free', part3: 'canopy', part4: 'ep', dz: 'dz' } as Record<string, string>)[id]})` });

/**
 * Title on the left, the parts in the middle, language and theme pinned right.
 * Its own component: when the part under the header changes only the header re-renders, not the whole page.
 */
function Header() {
  const { t } = useLang();
  const active = useActivePart();
  return (
    <header className={`top gutter tone-${active}`}>
      <div className="col">
        <a className="brand" href="#top">{t(ui.brand)}</a>
        <nav className="parts" aria-label={t(ui.part)}>
          {parts.map(p => <a key={p.id} href={`#${p.id}`} style={acc(p.id)} className={active === p.id ? 'on' : ''} aria-current={active === p.id ? 'location' : undefined}><span className="pr">{p.roman}</span><span className="pt"> · {t(p.title)}</span></a>)}
        </nav>
        <div className="settings"><LangMenu /><ThemeButton /></div>
      </div>
    </header>
  );
}

export function App() {
  const { t } = useLang();
  useTrackLastChapter();
  const passed = usePassed();
  let n = 0;

  return (
    <>
      <a className="skip" href="#content">{t(ui.skip)}</a>
      <Header />

      <SkyRail />
      <main id="top">
        <span id="content" tabIndex={-1} />
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

        <footer className="gutter"><div className="col footer-in"><span>{t(ui.footer)}</span><OfflineButton /></div></footer>
      </main>
    </>
  );
}
