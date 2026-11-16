// Generates the favicon, app icons and the link-preview image from SVG (run: node scripts/icons.mjs).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const INK = '#000', PAPER = '#f2f0eb', CANOPY = '#a84a0a', SKY = '#2b659c';

// The mark: a canopy with lines over a small jumper, on paper. Same glyph everywhere.
const mark = (size, pad = 0.14, bg = PAPER, radius = 0.22) => {
  const s = size, p = s * pad, w = s - 2 * p;
  const x = v => p + v * w, y = v => p + v * w;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" rx="${s * radius}" fill="${bg}"/>
  <path d="M${x(.08)} ${y(.36)} Q${x(.5)} ${y(-.02)} ${x(.92)} ${y(.36)} Q${x(.5)} ${y(.22)} ${x(.08)} ${y(.36)} Z" fill="${CANOPY}"/>
  <g stroke="${INK}" stroke-width="${w * .028}" stroke-linecap="round" fill="none">
    <path d="M${x(.14)} ${y(.36)} L${x(.47)} ${y(.7)} M${x(.86)} ${y(.36)} L${x(.53)} ${y(.7)}"/>
    <path d="M${x(.5)} ${y(.76)} V${y(.9)} M${x(.42)} ${y(.79)} L${x(.5)} ${y(.75)} L${x(.58)} ${y(.79)}"/>
  </g>
  <circle cx="${x(.5)}" cy="${y(.7)}" r="${w * .055}" fill="${INK}"/>
</svg>`;
};

const og = () => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <text x="80" y="128" font-family="Helvetica Neue, Arial, sans-serif" font-size="30" font-weight="600" fill="#5f5f66">AFF level 1 · study notes</text>
  <text x="80" y="210" font-family="Helvetica Neue, Arial, sans-serif" font-size="68" font-weight="800" fill="${INK}" letter-spacing="-2">Your first jump,</text>
  <text x="80" y="290" font-family="Helvetica Neue, Arial, sans-serif" font-size="68" font-weight="800" fill="${INK}" letter-spacing="-2">step by step.</text>
  <text x="80" y="350" font-family="Helvetica Neue, Arial, sans-serif" font-size="28" fill="#5f5f66">Plane to landing · emergencies · real videos · tests</text>
  <line x1="60" y1="560" x2="1140" y2="560" stroke="#b9b6ad" stroke-width="3"/>
  <path transform="translate(1680 0) scale(-1 1)" d="M760 120 l80 -8 l28 -24 h12 l-10 24 l44 4 l12 -14 h10 l-6 20 l6 20 h-10 l-12 -14 l-44 4 l10 24 h-12 l-28 -24 z" fill="#56606b"/>
  <path d="M860 130 C 930 140, 990 220, 1000 300" fill="none" stroke="${SKY}" stroke-width="5" stroke-dasharray="12 10"/>
  <path d="M960 300 Q1000 270 1040 300 Q1000 290 960 300 Z" fill="${CANOPY}"/>
  <path d="M1000 304 C 1040 380, 1080 440, 1100 552" fill="none" stroke="${CANOPY}" stroke-width="5"/>
  <text x="80" y="520" font-family="Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="${INK}">English · Español · Українська · Русский</text>
</svg>`;

const out = async (svg, file) => { await sharp(Buffer.from(svg)).png().toFile(file); console.log('wrote', file); };
writeFileSync('public/favicon.svg', mark(64, 0.06, PAPER, 0.2));
await out(mark(32, 0.06), 'public/icons/favicon-32.png');
await out(mark(180, 0.12, PAPER, 0), 'public/icons/apple-touch-icon.png');
await out(mark(192), 'public/icons/icon-192.png');
await out(mark(512), 'public/icons/icon-512.png');
await out(mark(512, 0.24, PAPER, 0), 'public/icons/icon-512-maskable.png');
await out(og(), 'public/og.png');
