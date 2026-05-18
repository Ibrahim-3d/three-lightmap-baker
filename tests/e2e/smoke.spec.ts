import { expect, test } from '@playwright/test';
import { TEST_URL, trackConsoleErrors, waitReady } from './helpers';

test.describe('smoke', () => {
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
