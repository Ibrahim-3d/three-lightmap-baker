import { expect, test } from '@playwright/test';
import { TEST_URL, trackConsoleErrors, waitReady } from './helpers';

test.describe('smoke', () => {
  test('boots without requesting xatlas from a third-party CDN', async ({ page }) => {
    const thirdPartyRequests: string[] = [];
    page.on('request', (request) => {
      const url = new URL(request.url());
      if (url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
        thirdPartyRequests.push(request.url());
      }
    });
    await page.route('https://cdn.jsdelivr.net/**', (route) => route.abort());

    await page.goto(TEST_URL);
    await waitReady(page);

    expect(thirdPartyRequests).toEqual([]);
  });

  test('app boots, canvas exists, no console errors', async ({ page }) => {
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    const canvas = await page.locator('canvas').first();
    await expect(canvas).toBeVisible();

    // Allow benign warnings ([baker:debug] etc.); fail only on hard errors.
    const hard = errors.filter(
      (e) => !e.includes('[baker:debug]') && !e.includes('xatlas') && !e.includes('Warning:'),
    );
    expect(hard, `unexpected console errors: ${hard.join('; ')}`).toEqual([]);
  });

  test('Preact splash mounts in default mode', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);
    await expect(page.locator('#app')).toBeAttached();
    await expect(page.locator('text=Lightmap Studio').first()).toBeVisible();
  });
});
