import { useState } from 'react';
import { parts } from '../content';
import { useLang } from '../i18n';
import { ui } from '../ui';

/** All clip names used anywhere in the content. */
function allClips(): string[] {
  const names = new Set<string>();
  const json = JSON.stringify(parts);
  for (const m of json.matchAll(/"(?:src|clip)":"([a-z0-9_]+)"/g)) names.add(m[1]);
  return [...names];
}

/**
 * Fetches every clip once so the service worker caches it: after that the whole app works offline
 * (the dropzone often has no signal). Shows progress; safe to press again.
 */
export function OfflineButton() {
  const { t } = useLang();
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'fail'>('idle');
  const [n, setN] = useState(0);
  const clips = allClips();
  if (!('serviceWorker' in navigator)) return null;
  async function save() {
    setState('busy'); setN(0);
    let failed = 0;
    for (const c of clips) {
      try { const r = await fetch(`media/${c}.mp4`); if (!r.ok) failed++; await r.blob(); } catch { failed++; }
      setN(x => x + 1);
    }
    setState(failed ? 'fail' : 'done');
  }
  const label = state === 'busy' ? `${t(ui.offlineBusy)} ${n}/${clips.length}` : state === 'done' ? `✓ ${t(ui.offlineDone)}` : state === 'fail' ? t(ui.offlineFail) : `↓ ${t(ui.offline)}`;
  return <button type="button" className="btn" onClick={save} disabled={state === 'busy'} aria-live="polite">{label}</button>;
}
