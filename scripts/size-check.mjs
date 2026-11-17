// Size budget for the built app (run after `vite build`; CI does). The dropzone often has a weak signal, so the
// first load and the offline install must stay small. Raise a limit only on purpose, in the same pull request.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const dist = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../dist');
const KB = 1024;
const LIMITS = {
  mainJs: 300 * KB, // gzip, the app + content + 4 inline languages (240 KB on 2026-11-17)
  langJs: 70 * KB, // gzip, each extra language chunk (49 KB max, Greek, on 2026-11-17)
  css: 20 * KB, // gzip
  precache: 3 * KB * KB, // raw bytes the service worker downloads on install (1.8 MB on 2026-11-17; extra languages are cached when used)
};
const gz = file => zlib.gzipSync(fs.readFileSync(file)).length;
const assets = fs.readdirSync(path.join(dist, 'assets')).map(f => path.join(dist, 'assets', f));
const fails = [];
const report = (name, size, limit) => {
  const ok = size <= limit;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(28)} ${(size / KB).toFixed(1).padStart(8)} KB  (limit ${(limit / KB).toFixed(0)} KB)`);
  if (!ok) fails.push(name);
};
const main = assets.filter(f => /\/index-[\w-]+\.js$/.test(f));
for (const f of main) report(path.basename(f), gz(f), LIMITS.mainJs);
const langs = assets.filter(f => /\/[a-z]{2}-[\w-]+\.js$/.test(f)).map(f => [f, gz(f)]).sort((a, b) => b[1] - a[1]);
if (langs.length) report(`largest language (${path.basename(langs[0][0]).slice(0, 2)})`, langs[0][1], LIMITS.langJs);
for (const f of assets.filter(a => a.endsWith('.css'))) report(path.basename(f), gz(f), LIMITS.css);
const sw = fs.readFileSync(path.join(dist, 'sw.js'), 'utf8');
const urls = [...sw.matchAll(/url:"([^"]+)"/g)].map(m => m[1]);
const precache = urls.reduce((s, u) => s + (fs.existsSync(path.join(dist, u)) ? fs.statSync(path.join(dist, u)).size : 0), 0);
report(`precache (${urls.length} files)`, precache, LIMITS.precache);
if (!main.length || !urls.length) fails.push('could not find the build output: run vite build first');
if (fails.length) {
  console.error(`\nOver budget: ${fails.join(', ')}`);
  process.exit(1);
}
