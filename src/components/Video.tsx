import { useEffect, useRef } from 'react';

const reduceMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * A silent looping clip in a fixed 16:9 box. It only loads and plays while on screen, so a page with
 * forty clips stays light; with reduced motion it shows controls instead of autoplaying.
 */
export function Video({ src, label }: { src: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = reduceMotion();
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!v.src) { v.src = `media/${src}.mp4`; }
        if (!reduce) v.play().catch(() => {});
      } else v.pause();
    }, { rootMargin: '200px 0px' });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  const reduce = reduceMotion();
  return (
    <div className="vid">
      <video ref={ref} muted loop playsInline preload="none" poster={`media/${src}.jpg`} controls={reduce} aria-label={label} />
    </div>
  );
}
