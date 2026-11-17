// Collects every English string the app shows (L objects and the per-file h()/l()/t() helpers) into
// src/content/i18n/en.json as { key: english }. Extra languages live in src/content/i18n/<lang>.json with the
// same keys, translated. Run after changing English text: `node scripts/i18n-extract.mjs`.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';
import { keyOf } from '../src/content/i18n/key.ts';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(f) && !f.endsWith('.d.ts')) files.push(p);
  }
})(path.join(root, 'src'));

const out = {}; const skipped = [];
const lit = n => {
  if (!n) return null;
  if (n.type === 'StringLiteral') return n.value;
  if (n.type === 'TemplateLiteral' && n.expressions.length === 0) return n.quasis.map(q => q.value.cooked).join('');
  if (n.type === 'BinaryExpression' && n.operator === '+') { const a = lit(n.left), b = lit(n.right); return a != null && b != null ? a + b : null; }
  if (n.type === 'TSAsExpression' || n.type === 'ParenthesizedExpression') return lit(n.expression);
  return null;
};
const keyName = p => p.key && (p.key.name ?? p.key.value);
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  const helpers = new Set([...src.matchAll(/const (\w+) = \(en: string/g)].map(m => m[1]));
  const ast = parse(src, { sourceType: 'module', plugins: ['typescript', 'jsx'] });
  const add = (n, en) => {
    if (en == null) { skipped.push(`${path.relative(root, file)}:${n.loc.start.line}`); return; }
    en = en.replace(/\{(?:[a-zA-Z]+|~)\}/g, ''); // rule marks (src/rules.ts) are not part of the text
    if (en.trim()) out[keyOf(en)] = en;
  };
  (function visit(n) {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'ObjectExpression') {
      const names = n.properties.map(keyName);
      if (names.includes('en') && (names.includes('es') || names.includes('ru') || names.includes('uk'))) {
        const p = n.properties.find(p => keyName(p) === 'en');
        if (p && p.type === 'ObjectProperty') add(n, lit(p.value));
      }
    }
    if (n.type === 'CallExpression' && n.callee.type === 'Identifier' && helpers.has(n.callee.name) && n.arguments.length >= 4) add(n, lit(n.arguments[0]));
    for (const k in n) {
      if (k === 'loc' || k === 'start' || k === 'end') continue;
      const v = n[k];
      if (Array.isArray(v)) v.forEach(visit); else if (v && typeof v === 'object') visit(v);
    }
  })(ast.program);
}
const sorted = Object.fromEntries(Object.entries(out).sort((a, b) => a[0].localeCompare(b[0])));
fs.writeFileSync(path.join(root, 'src/content/i18n/en.json'), JSON.stringify(sorted, null, 1) + '\n');
const chars = Object.values(sorted).reduce((s, v) => s + v.length, 0);
console.log(`strings ${Object.keys(sorted).length}, chars ${chars}${skipped.length ? `, not literal (stay English): ${skipped.join(' ')}` : ''}`);
