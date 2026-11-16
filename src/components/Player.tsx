import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { useLang } from '../i18n';
import { ui } from '../ui';
import { NO_EMBED } from '../content/noembed';

// One in-page player for every "watch the original" link: opens the YouTube video right here,
// already at the right second, instead of sending you to another tab.
interface Req { yt: string; t: number; title: string }
const Ctx = createContext<(r: Req) => void>(() => {});
export const useOpenVideo = () => useContext(Ctx);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [req, setReq] = useState<Req | null>(null);
  // Some uploaders allow playing only on YouTube itself (scripts/check-embeds.mjs lists them): open those there
  // right away instead of showing YouTube's "Video unavailable" box.
  const open = useCallback((r: Req) => {
    if (NO_EMBED.has(r.yt)) { window.open(`https://www.youtube.com/watch?v=${r.yt}&t=${r.t}s`, '_blank', 'noopener'); return; }
    setReq(r);
  }, []);
  return <Ctx.Provider value={open}>{children}{req && <PlayerDialog req={req} onClose={() => setReq(null)} />}</Ctx.Provider>;
}

function PlayerDialog({ req, onClose }: { req: Req; onClose: () => void }) {
  const { t } = useLang();
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { ref.current?.showModal(); }, []);
  const src = `https://www.youtube-nocookie.com/embed/${req.yt}?start=${req.t}&autoplay=1&rel=0&playsinline=1`;
  return (
    <dialog ref={ref} className="player" aria-labelledby="player-title" onClose={onClose} onClick={e => { if (e.target === ref.current) ref.current?.close(); }}>
      <div className="player-in">
        <div className="player-top">
          <span className="player-title" id="player-title">{req.title}</span>
          <a href={`https://www.youtube.com/watch?v=${req.yt}&t=${req.t}s`} target="_blank" rel="noopener">{t(ui.openYoutube)}</a>
          <button type="button" className="x" aria-label={t(ui.close)} onClick={() => ref.current?.close()}>×</button>
        </div>
        <div className="player-frame">
          <iframe src={src} title={req.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        </div>
        <div className="player-foot">
          <span>{t(ui.notPlaying)}</span>
          <a className="btn primary" href={`https://www.youtube.com/watch?v=${req.yt}&t=${req.t}s`} target="_blank" rel="noopener">{t(ui.openYoutube)} ↗</a>
        </div>
      </div>
    </dialog>
  );
}
