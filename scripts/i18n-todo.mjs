// What each translation file still needs after the English text changed.
//   node scripts/i18n-todo.mjs            → per language: missing keys (with the English) and stray keys
//   node scripts/i18n-todo.mjs de         → only German, every missing string printed in full
//   node scripts/i18n-todo.mjs --prune    → remove stray keys (English that no longer exists) from every file
// Changing an English sentence gives it a new key, so every language needs the new sentence translated.
// Run `npm run i18n` (scripts/i18n-extract.mjs) first so en.json is current.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../src/content/i18n');
const read = f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const en = read('en.json');
const args = process.argv.slice(2);
const prune = args.includes('--prune');
const only = args.filter(a => !a.startsWith('--'));
const files = fs
  .readdirSync(dir)
  .filter(f => f.endsWith('.json') && f !== 'en.json')
  .filter(f => !only.length || only.includes(f.replace('.json', '')));

let total = 0;
for (const f of files) {
  const lang = f.replace('.json', '');
  const tr = read(f);
  const missing = Object.keys(en).filter(k => !tr[k]?.trim());
  const stray = Object.keys(tr).filter(k => !(k in en));
  total += missing.length;
  if (prune && stray.length) {
    for (const k of stray) delete tr[k];
    fs.writeFileSync(path.join(dir, f), JSON.stringify(tr, null, 1) + '\n');
  }
  if (!missing.length && !stray.length) continue;
  console.log(`${lang}: ${missing.length} to translate, ${stray.length} stray${prune && stray.length ? ' (removed)' : ''}`);
  for (const k of missing.slice(0, only.length ? Infinity : 3)) console.log(`  "${k}": ${JSON.stringify(en[k])}`);
}
console.log(total ? `${total} strings to translate in all` : 'every language is complete');
