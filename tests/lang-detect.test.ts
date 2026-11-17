import { afterEach, describe, expect, it, vi } from 'vitest';
import { initialLang } from '../src/i18n';

afterEach(() => vi.unstubAllGlobals());
const as = (languages: string[]) => vi.stubGlobal('navigator', { languages, language: languages[0] });

describe('opens in the browser language', () => {
  it('picks the first preferred language we have', () => { as(['zh-CN', 'pt-BR', 'en']); expect(initialLang()).toBe('pt'); });
  it('maps Norwegian variants to Bokmål', () => { as(['nn-NO']); expect(initialLang()).toBe('nb'); as(['no']); expect(initialLang()).toBe('nb'); });
  it('Arabic, German, Finnish', () => { as(['ar-AE']); expect(initialLang()).toBe('ar'); as(['de-AT']); expect(initialLang()).toBe('de'); as(['fi']); expect(initialLang()).toBe('fi'); });
  it('falls back to English', () => { as(['zh-CN', 'ja']); expect(initialLang()).toBe('en'); });
  it('a saved choice wins', () => {
    as(['fr']);
    vi.stubGlobal('localStorage', { getItem: () => 'uk', setItem: () => {} });
    expect(initialLang()).toBe('uk');
  });
});
