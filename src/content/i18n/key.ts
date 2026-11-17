// Stable short key for an English string (FNV-1a 32-bit, base 36). Shared by the extractor and the app.
export function keyOf(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}
