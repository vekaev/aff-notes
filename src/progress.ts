import { useSyncExternalStore } from 'react';

// Which chapter tests are passed. Kept in this browser only (a per-viewer convenience).
const KEY = 'aff-passed';
let passed: Set<string> = load();
const listeners = new Set<() => void>();

function load(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { return new Set(); }
}

export function markPassed(id: string) {
  if (passed.has(id)) return;
  passed = new Set(passed).add(id);
  try { localStorage.setItem(KEY, JSON.stringify([...passed])); } catch { /* ignore */ }
  listeners.forEach(l => l());
}

export function usePassed(): Set<string> {
  return useSyncExternalStore(cb => { listeners.add(cb); return () => listeners.delete(cb); }, () => passed, () => passed);
}
