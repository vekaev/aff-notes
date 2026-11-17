import { afterEach, describe, expect, it, vi } from 'vitest';
import { initialLang } from '../src/i18n';

afterEach(() => vi.unstubAllGlobals());
const as = (languages: string[]) => vi.stubGlobal('navigator', { languages, language: languages[0] });

describe('opens in the browser language', () => {
  it('picks the first preferred language we have', () => { as(['vi-VN', 'pt-BR', 'en']); expect(initialLang()).toBe('pt'); });
  it('maps Norwegian variants to Bokmål', () => { as(['nn-NO']); expect(initialLang()).toBe('nb'); as(['no']); expect(initialLang()).toBe('nb'); });
  it('Arabic, German, Finnish', () => { as(['ar-AE']); expect(initialLang()).toBe('ar'); as(['de-AT']); expect(initialLang()).toBe('de'); as(['fi']); expect(initialLang()).toBe('fi'); });
  it('falls back to English', () => { as(['vi-VN', 'ka']); expect(initialLang()).toBe('en'); });
  it('a saved choice wins', () => {
    as(['fr']);
    vi.stubGlobal('localStorage', { getItem: () => 'uk', setItem: () => {} });
    expect(initialLang()).toBe('uk');
  });
});
describe('second wave languages', () => {
  it('Chinese, Hebrew (old code iw), Indonesian (old code in), Thai', () => {
    vi.stubGlobal('navigator', { languages: ['zh-TW'] }); expect(initialLang()).toBe('zh');
    vi.stubGlobal('navigator', { languages: ['iw'] }); expect(initialLang()).toBe('he');
    vi.stubGlobal('navigator', { languages: ['in-ID'] }); expect(initialLang()).toBe('id');
    vi.stubGlobal('navigator', { languages: ['th-TH'] }); expect(initialLang()).toBe('th');
  });
});
describe('language from the link', () => {
  it('?lang= wins over the browser and the saved choice, and is saved', () => {
    let saved = 'uk';
    vi.stubGlobal('localStorage', { getItem: () => saved, setItem: (_k: string, v: string) => { saved = v; } });
    vi.stubGlobal('navigator', { languages: ['de-DE'] });
    vi.stubGlobal('location', { search: '?lang=fr' });
    expect(initialLang()).toBe('fr');
    expect(saved).toBe('fr');
  });
  it('accepts regional codes and ignores unknown ones', () => {
    vi.stubGlobal('localStorage', { getItem: () => null, setItem: () => {} });
    vi.stubGlobal('navigator', { languages: ['de-DE'] });
    vi.stubGlobal('location', { search: '?lang=pt-BR' }); expect(initialLang()).toBe('pt');
    vi.stubGlobal('location', { search: '?lang=xx' }); expect(initialLang()).toBe('de');
  });
});
