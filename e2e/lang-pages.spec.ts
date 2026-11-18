import { expect, test } from '@playwright/test';

// One pre-rendered page per language (scripts/prerender.mjs): what search engines and link previews see without
// running the app, and the app working on top of it.
const onlyOnce = (project: string) => test.skip(project !== 'desktop-light', 'one project is enough');

test.describe('language pages', () => {
  test('/fr/ HTML is French before any script runs', async ({ request }, info) => {
    onlyOnce(info.project.name);
    const html = await (await request.get('/fr/')).text();
    expect(html).toContain('<html lang="fr" dir="ltr">');
    expect(html).toMatch(/<title>[^<]*premier saut[^<]*<\/title>/i);
    expect(html).toContain('<link rel="canonical" href="https://aff-notes.vercel.app/fr/" />');
    expect(html.match(/hreflang="/g)?.length).toBe(33); // 32 languages + x-default
    expect(html).toMatch(/<h1[^>]*>[^<]*premier saut/i);
    expect(html).toContain('src="../assets/index-');
    const ar = await (await request.get('/ar/')).text();
    expect(ar).toContain('<html lang="ar" dir="rtl">');
    const sitemap = await (await request.get('/sitemap.xml')).text();
    expect(sitemap.match(/<loc>/g)?.length).toBe(32);
  });

  test('/fr/ in the browser: French, stays on /fr/, clips and styles load, no errors', async ({ page }, info) => {
    onlyOnce(info.project.name);
    const errors: string[] = [];
    const missing: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));
    page.on('response', r => r.status() >= 400 && missing.push(`${r.status()} ${r.url()}`));
    await page.goto('/fr/');
    await expect(page.locator('h1').first()).toContainText(/premier saut/i);
    await expect(page).toHaveURL(/\/fr\/$/);
    const poster = page.locator('video[poster]').first();
    await poster.scrollIntoViewIfNeeded();
    await expect.poll(() => poster.evaluate(v => (v as HTMLVideoElement).poster)).toMatch(/\/fr\/media\/.+\.jpg$/);
    await expect
      .poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor))
      .not.toBe('rgba(0, 0, 0, 0)');
    expect(missing).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('old ?lang= link moves to the language folder', async ({ page }, info) => {
    onlyOnce(info.project.name);
    await page.goto('/?lang=de');
    await expect(page).toHaveURL(/\/de\/$/);
    await expect(page.locator('h1').first()).toContainText(/Sprung/);
  });
});
