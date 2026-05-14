import { expect, test } from '@playwright/test';
import { bakeDraft, LEGACY_URL, waitBakeDone, waitReady } from './helpers';

test.describe('legacy escape hatch', () => {
    test('?legacy=1 boots without Preact mount and still bakes', async ({ page }) => {
        await page.goto(LEGACY_URL);
        await waitReady(page);

        // Preact `#app` root should NOT exist under legacy.
        await expect(page.locator('#app')).toHaveCount(0);

        // Tweakpane root should be present.
        await expect(page.locator('.tp-dfwv, .tp-rotv').first()).toBeAttached();

        // Bake still works through the test API.
        await bakeDraft(page);
        await waitBakeDone(page);

        const status = await page.evaluate(() => {
            const w = window as unknown as { __baker: { getBakeStatus(): string } };
            return w.__baker.getBakeStatus();
        });
        expect(status).toBe('done');
    });
});
