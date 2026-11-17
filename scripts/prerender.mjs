// Pre-renders one page per language after `vite build`: dist/index.html (English) and dist/<lang>/index.html.
// Search engines and link previews (WhatsApp, Telegram, Slack…) don't run the app, so each page carries its own
// text, <html lang dir>, translated title and description, hreflang links to every other language, and a canonical
// URL; plus dist/sitemap.xml and dist/robots.txt. In the browser the app then renders over it as before.
// Vercel serves /fr/ from dist/fr/index.html; vercel.json sends old /?lang=fr links there and maps /fr/media/… etc.
// to the root files. Site address: SITE_URL (default https://aff-notes.vercel.app/).
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'vite';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');
const ssrOut = path.join(root, 'node_modules/.cache/prerender');
const SITE = (process.env.SITE_URL || 'https://aff-notes.vercel.app/').replace(/\/?$/, '/');

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrOut, emptyOutDir: true, copyPublicDir: false },
});

// The app reads a few browser globals while rendering; give it a quiet, empty browser.
const store = new Map();
globalThis.window = globalThis;
globalThis.localStorage = {
  getItem: k => store.get(k) ?? null,
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: k => store.delete(k),
};
Object.defineProperty(globalThis, 'navigator', { value: { languages: [], language: '' }, configurable: true });
globalThis.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });

const { render, ALL_LANGS, RTL } = await import(path.join(ssrOut, 'entry-server.js'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('dist/index.html is not a fresh vite build');

const url = lang => SITE + (lang === 'en' ? '' : `${lang}/`);
const LOCALE = {
  en: 'en_US', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', pt: 'pt_PT', nl: 'nl_NL', pl: 'pl_PL', cs: 'cs_CZ',
  sk: 'sk_SK', hu: 'hu_HU', ro: 'ro_RO', bg: 'bg_BG', hr: 'hr_HR', sr: 'sr_RS', sl: 'sl_SI', el: 'el_GR', tr: 'tr_TR',
  lt: 'lt_LT', sv: 'sv_SE', nb: 'nb_NO', da: 'da_DK', fi: 'fi_FI', uk: 'uk_UA', ru: 'ru_RU', he: 'he_IL', ar: 'ar_AR',
  zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', th: 'th_TH', id: 'id_ID',
};
const text = html =>
  html
    .replace(/<!-- -->/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const setMeta = (html, key, value) => {
  const re = new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html has no <meta ${key}>`);
  return html.replace(re, `$1${attr(value)}$2`);
};
// A page one folder down: relative links in the shell (scripts, styles, icons, manifest) go up one level.
const upOneLevel = html =>
  html.replace(/\b(src|href)="(?!https?:|\/|#|data:|mailto:)(?:\.\/)?([^"]*)"/g, (_m, a, p) => `${a}="../${p}"`);

const alternates = [
  ...ALL_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${url(l)}" />`),
  `<link rel="alternate" hreflang="x-default" href="${url('en')}" />`,
].join('\n    ');

let total = 0;
for (const lang of ALL_LANGS) {
  store.clear();
  globalThis.location = new URL(url(lang));
  const catalogFile = path.join(root, 'src/content/i18n', `${lang}.json`);
  const catalog = lang !== 'en' && fs.existsSync(catalogFile) ? JSON.parse(fs.readFileSync(catalogFile, 'utf8')) : undefined;
  const app = render(lang, catalog);
  const h1 = text(app.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '').replace(/\.$/, '');
  const lead = text((app.match(/<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '').replace(/<span class="badge"[^>]*>[^<]*<\/span>\s*=?/g, ''));
  if (!h1 || !lead) throw new Error(`${lang}: no headline or lead paragraph in the rendered page`);
  const description = lead.length > 200 ? lead.slice(0, 197).replace(/\s+\S*$/, '') + '…' : lead;

  let html = lang === 'en' ? template : upOneLevel(template);
  html = html
    .replace('<html lang="en">', `<html lang="${lang}" dir="${RTL.includes(lang) ? 'rtl' : 'ltr'}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${attr(h1)} · AFF notes</title>`)
    .replace(/\s*<meta property="og:locale:alternate"[^>]*>/g, '')
    .replace(/(content=")(?:\.\.\/)?og\.png"/g, `$1${SITE}og.png"`)
    .replace(
      '</head>',
      `  <link rel="canonical" href="${url(lang)}" />\n    <meta property="og:url" content="${url(lang)}" />\n    ${alternates}\n  </head>`,
    )
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/, '') // the text is on the page now, also without scripts
    .replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  for (const [k, v] of [
    ['description', description],
    ['og:title', h1],
    ['og:description', description],
    ['twitter:title', h1],
    ['twitter:description', description],
    ['og:locale', LOCALE[lang] ?? lang],
  ])
    html = setMeta(html, k, v);

  const out = lang === 'en' ? path.join(dist, 'index.html') : path.join(dist, lang, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  total += html.length;
}

const links = ALL_LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ALL_LANGS.map(l => `  <url>\n    <loc>${url(l)}</loc>\n${links}\n  </url>`).join('\n')}
</urlset>
`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
fs.rmSync(ssrOut, { recursive: true, force: true });
console.log(`pre-rendered ${ALL_LANGS.length} language pages (${(total / 1024 / 1024).toFixed(1)} MB), sitemap.xml, robots.txt`);
