import { describe, expect, it } from 'vitest';
import { langFromPath, langPath } from '../src/i18n';

describe('language pages (/fr/)', () => {
  it('reads the language from its folder', () => {
    expect(langFromPath('/fr/')).toBe('fr');
    expect(langFromPath('/fr/index.html')).toBe('fr');
    expect(langFromPath('/sub/de/')).toBe('de');
    expect(langFromPath('/')).toBeNull();
    expect(langFromPath('/xx/')).toBeNull();
    expect(langFromPath('/media/')).toBeNull();
  });
  it('points the address bar at the language folder, English at the root', () => {
    expect(langPath('/', 'fr')).toBe('/fr/');
    expect(langPath('/fr/', 'de')).toBe('/de/');
    expect(langPath('/fr/', 'en')).toBe('/');
    expect(langPath('/index.html', 'ja')).toBe('/ja/');
    expect(langPath('/sub/', 'ar')).toBe('/sub/ar/');
    expect(langPath('/sub/es/', 'en')).toBe('/sub/');
  });
  it('leaves other hosts alone (then ?lang= is used)', () => {
    expect(langPath('/artifact/abc', 'fr')).toBeNull();
  });
});

describe('vercel.json knows every language', () => {
  it('redirects ?lang= links and maps /<lang>/… files for exactly the listed languages', async () => {
    const fs = await import('node:fs');
    const { ALL_LANGS } = await import('../src/content/types');
    const v = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
    const others = ALL_LANGS.filter(l => l !== 'en').join('|');
    expect(v.redirects[0].has[0].value).toBe(`(?<lang>${others})`);
    expect(v.rewrites[0].source).toBe(`/:lang(${others})/:path+`);
  });
});
