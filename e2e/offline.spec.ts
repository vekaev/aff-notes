import { expect, test } from '@playwright/test';

// The offline install skips the 28 extra languages; the reader's language must still be there offline,
// including on the very first visit (src/pwa-langs.ts).
test.use({ serviceWorkers: 'allow' });

test('first visit in German: German still works offline, other extra languages are not pre-downloaded', async ({
  page,
  context,
}, info) => {
  test.skip(info.project.name !== 'desktop-light', 'one project is enough');
  await page.goto('/?lang=de');
  await expect(page.locator('h1').first()).not.toHaveText(/your first jump/i);
  const german = await page.locator('h1').first().innerText();

  await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 15_000 });
  await expect
    .poll(() => page.evaluate(async () => (await (await caches.open('langs')).keys()).map(r => r.url).join(' ')))
    .toMatch(/\/assets\/de-[\w-]+\.js/);
  const precached = await page.evaluate(async () => {
    const names = await caches.keys();
    const urls: string[] = [];
    for (const n of names.filter(n => n.includes('precache')))
      for (const r of await (await caches.open(n)).keys()) urls.push(r.url);
    return urls;
  });
  expect(precached.some(u => /\/assets\/index-/.test(u))).toBe(true);
  expect(precached.filter(u => /\/assets\/(fr|de|ja|ar)-/.test(u))).toEqual([]);

  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('h1').first()).toHaveText(german);
});
