// Turns dist/index.html into the body-only page the claude.ai artifact host expects
// (it adds its own <!doctype>, <head> and <body>). Output: dist/artifact.html next to dist/assets and dist/media.
import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const title = html.match(/<title>.*?<\/title>/s)?.[0] ?? '<title>AFF Jump Notes</title>';
const headTags = [...html.matchAll(/<(?:script|link)\b[^>]*>(?:<\/script>)?/g)].map(m => m[0]).join('\n');
const body = html.match(/<body>([\s\S]*)<\/body>/)?.[1].trim() ?? '';
writeFileSync('dist/artifact.html', [title, '<meta name="claude:viewport-fit-sides" content="cover">', headTags, body].join('\n'));
console.log('dist/artifact.html written');
