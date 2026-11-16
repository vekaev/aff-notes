import { useState } from 'react';
import type { Block, Card, Clip, Watch } from '../content/types';
import { Rich, useLang } from '../i18n';
import { ui } from '../ui';
import { Video } from './Video';
import { mmss, ytUrl } from '../lib';
import { Icon } from './Icon';
import { useOpenVideo } from './Player';
import { Quiz } from './Quiz';
import { Altimeter, CanopyCheck, Climb, CanopyDrawing, ExitCount, LowTurn, Pattern } from '../widgets';


export function ClipFigure({ c }: { c: Clip }) {
  const { t } = useLang();
  const open = useOpenVideo();
  const show = () => open({ yt: c.yt, t: c.t, title: t(c.caption) });
  // The whole card opens the original in the in-page player; the link inside stays for cmd/ctrl-click to a new tab.
  const play = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a') && (e.metaKey || e.ctrlKey)) return;
    e.preventDefault(); show();
  };
  return (
    <figure className="clip link" role="button" tabIndex={0} aria-label={`${t(ui.watch)}: ${t(c.caption)}`} onClick={play}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } }}>
      <Video src={c.src} label={t(c.caption)} />
      <figcaption><Rich s={c.caption} /><a href={ytUrl(c.yt, c.t)} tabIndex={-1}>▶ {t(ui.watch)} · {c.credit} · {mmss(c.t)}</a></figcaption>
    </figure>
  );
}

function WatchRow({ items }: { items: Watch[] }) {
  const { t } = useLang();
  const open = useOpenVideo();
  return (
    <div className="watch">
      {items.map((w, i) => (
        <a key={i} href={w.yt ? ytUrl(w.yt, w.t) : w.href} target={w.yt ? undefined : '_blank'} rel="noopener"
          onClick={e => { if (!w.yt || e.metaKey || e.ctrlKey) return; e.preventDefault(); open({ yt: w.yt, t: w.t ?? 0, title: t(w.label) }); }}>
          <span className="tc">▶{w.t ? ` ${mmss(w.t)}` : ''}</span><Rich s={w.label} /><span className="cr">· {w.credit}</span>
        </a>
      ))}
    </div>
  );
}

function SourceLink({ src, title }: { src: { yt: string; t: number; credit: string }; title: string }) {
  const { t } = useLang();
  const open = useOpenVideo();
  return (
    <a className="src-link" href={ytUrl(src.yt, src.t)} onClick={e => { e.stopPropagation(); if (e.metaKey || e.ctrlKey) return; e.preventDefault(); open({ yt: src.yt, t: src.t, title }); }}>
      ▶ {t(ui.watch)} · {src.credit} · {mmss(src.t)}
    </a>
  );
}

function CardView({ c }: { c: Card }) {
  const [reveal, setReveal] = useState(false);
  const { t } = useLang();
  return (
    <div className={`card ${c.tone ?? ''} ${reveal ? 'reveal' : ''}`} onClick={() => setReveal(r => !r)}>
      {c.clip ? <Video src={c.clip} label={t(c.name)} /> : c.drawing ? <div className="draw"><CanopyDrawing state={c.drawing} /></div> : null}
      <div className="body">
        <span className="nm"><Rich s={c.name} /></span>
        <span className="wh"><Rich s={c.what} /></span>
        {c.act && <span className="ac"><Rich s={c.act} /></span>}
        {c.source && <SourceLink src={c.source} title={t(c.name)} />}
      </div>
    </div>
  );
}

function Cards({ b }: { b: Extract<Block, { type: 'cards' }> }) {
  const [quiz, setQuiz] = useState(false);
  const { t } = useLang();
  return (
    <div className={`cardgroup blocks ${quiz ? 'quizzing' : ''}`}>
      {b.groupTitle && <h4><Rich s={b.groupTitle} />{b.pill && <span className={`pill ${b.pill}`}>{b.pill}</span>}</h4>}
      {b.groupSub && <p className="muted" style={{ margin: 0 }}><Rich s={b.groupSub} /></p>}
      <div className="toggle-row">
        <button type="button" className={`btn toggle ${quiz ? 'primary' : ''}`} aria-pressed={quiz} onClick={() => setQuiz(q => !q)}>{t(quiz ? ui.showNames : ui.hideNames)}</button>
        {quiz && <span className="hint">{t(ui.tapToReveal)}</span>}
      </div>
      <div className={`cards ${b.small ? 'small' : ''}`}>{b.items.map((c, i) => <CardView key={i} c={c} />)}</div>
    </div>
  );
}

export function BlockView({ b, chapterId }: { b: Block; chapterId: string }) {
  switch (b.type) {
    case 'p': return <p className={b.muted ? 'muted' : undefined}><Rich s={b.text} /></p>;
    case 'h': return <h4 id={b.id}><Rich s={b.text} /></h4>;
    case 'steps':
      if (b.timeline) return (
        <ol className="timeline">
          {b.items.map((s, i) => (
            <li key={i}>
              <span className="tn">{i + 1}</span>
              {s.icon && <Icon name={s.icon} />}
              <span className="st"><Rich s={s.title} />{s.sub && <span className="sub"><Rich s={s.sub} /></span>}</span>
            </li>
          ))}
        </ol>
      );
      return <ol className="steps">{b.items.map((s, i) => <li key={i}><div>{s.icon && <Icon name={s.icon} />}<span className="st"><Rich s={s.title} /></span>{s.sub && <span className="sub"><Rich s={s.sub} /></span>}</div></li>)}</ol>;
    case 'bars': {
      const max = Math.max(...b.items.map(x => x.value));
      return (
        <div className="surface bars">
          <span className="bt"><Rich s={b.title} /></span>
          {b.items.map((x, i) => (
            <div key={i} className={`row ${x.hl ? 'hl' : ''}`}>
              <span><Rich s={x.label} /></span>
              <span className="track"><span className="fill" style={{ ['--v' as string]: `${(x.value / max) * 100}%` }} /></span>
              <span className="pct">{x.value}%</span>
            </div>
          ))}
          <span className="src"><a href={b.source.href} target="_blank" rel="noopener">{b.source.label}</a></span>
        </div>
      );
    }
    case 'rules':
    case 'stats':
      return (
        <div className="rules">
          {b.items.map((r, i) => (
            <div key={i} className={`rule ${r.tone ?? ''} ${r.big ? 'has-big' : ''}`}>
              {r.big && <div className="big">{r.big}</div>}
              {(r.icon || r.title) && <div className="rh">{r.icon && <Icon name={r.icon} />}{r.title && <span className="rt"><Rich s={r.title} /></span>}</div>}
              {r.text && <span className="rx"><Rich s={r.text} /></span>}
              {r.points && <ul className="pts">{r.points.map((x, j) => <li key={j}><Rich s={x} /></li>)}</ul>}
            </div>
          ))}
        </div>
      );
    case 'callout':
      return (
        <div className={`callout ${b.tone === 'red' ? 'red' : ''}`}>
          {b.title && <span className="ct"><Rich s={b.title} /></span>}
          {b.text && <Rich s={b.text} />}
          {b.points && <ul className="pts">{b.points.map((x, j) => <li key={j}><Rich s={x} /></li>)}</ul>}
        </div>
      );
    case 'list':
      return (
        <div className={`list surface ${b.kind ?? ''}`}>
          {b.title && <span className="lt"><Rich s={b.title} /></span>}
          <ul className="pts">{b.items.map((x, j) => <li key={j}><Rich s={x} /></li>)}</ul>
        </div>
      );
    case 'clips': return <div className="clips">{b.items.map((c, i) => <ClipFigure key={i} c={c} />)}</div>;
    case 'watch': return <WatchRow items={b.items} />;
    case 'cards': return <Cards b={b} />;
    case 'faq':
      return <div className="faq">{b.items.map((f, i) => <details key={i}><summary><span className="n">{f.n}</span><Rich s={f.q} /></summary><p><Rich s={f.a} /></p></details>)}</div>;
    case 'tips':
      return (
        <div className="faq tips">
          {b.items.map((m, i) => (
            <details key={i} open={i === 0}>
              <summary><Rich s={m.title} /></summary>
              <div className="cols">
                <div><h5 className="bad">{m.badTitle ? <Rich s={m.badTitle} /> : <Rich s={{ en: 'Mistakes', es: 'Errores', ru: 'Ошибки', uk: 'Помилки' }} />}</h5><ul>{m.bad.map((x, j) => <li key={j}><Rich s={x} /></li>)}</ul></div>
                <div><h5 className="good">{m.goodTitle ? <Rich s={m.goodTitle} /> : <Rich s={{ en: 'Tips', es: 'Consejos', ru: 'Советы', uk: 'Поради' }} />}</h5><ul>{m.good.map((x, j) => <li key={j}><Rich s={x} /></li>)}</ul></div>
              </div>
            </details>
          ))}
          <div className="sources">{b.sources.map((s, i) => <span key={i}>{i ? ' · ' : ''}<a href={s.href} target="_blank" rel="noopener">{s.label}</a></span>)}</div>
        </div>
      );
    case 'questions': return <ol className="questions">{b.items.map((q, i) => <li key={i}><Rich s={q} /></li>)}</ol>;
    case 'climb': return <Climb steps={b.steps} captions={b.captions} />;
    case 'exit': return <ExitCount steps={b.steps} />;
    case 'altimeter': return <Altimeter rows={b.rows} />;
    case 'pattern': return <Pattern rows={b.rows} />;
    case 'lowturn': return <LowTurn b={b} />;
    case 'canopyCheck': return <CanopyCheck items={b.items} />;
    case 'quiz': return <Quiz id={chapterId} questions={b.questions} />;
    case 'split':
      return (
        <div className="split">
          <div>{b.left.map((x, i) => <BlockView key={i} b={x} chapterId={chapterId} />)}</div>
          <div>{b.right.map((x, i) => <BlockView key={i} b={x} chapterId={chapterId} />)}</div>
        </div>
      );
  }
}
