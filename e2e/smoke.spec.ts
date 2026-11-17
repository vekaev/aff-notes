import { expect, test } from '@playwright/test';

// Core languages (inline), one JSON language, one right-to-left, one CJK.
const LANGS = ['en', 'es', 'uk', 'ru', 'de', 'ar', 'ja'];

for (const lang of LANGS) {
  test(`${lang}: page loads, right language and direction, no errors, no sideways scroll`, async ({ page }, info) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));

    await page.goto(`/?lang=${lang}`);
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator('html')).toHaveAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (lang !== 'en') {
      // The headline is translated (for JSON languages it appears once the catalogue loads).
      await page.goto('/?lang=en');
      const english = await page.locator('h1').first().innerText();
      await page.goto(`/?lang=${lang}`);
      await expect(page.locator('h1').first()).not.toHaveText(english);
    }

    const body = await page.locator('body').innerText();
    expect(body).not.toMatch(/\bundefined\b|\[object Object\]|NaN/);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'page scrolls sideways').toBeLessThanOrEqual(1);
    expect(errors).toEqual([]);

    await page.screenshot({ path: info.outputPath(`${lang}.png`), fullPage: false });
  });
}
