import { expect, test } from '@playwright/test';
import { bakeDraft, LEGACY_URL, waitBakeDone, waitReady } from './helpers';

/**
 * `?legacy=1` now just skips the Preact `<App/>` mount (tweakpane was removed
 * in T-D12). Canvas + orchestrator still come up; the test API still works.
 * Useful for stripped-down e2e where the Preact tree would interfere.
 */
test.describe('legacy flag', () => {
    test('?legacy=1 boots without Preact mount and still bakes via test API', async ({ page }) => {
        await page.goto(LEGACY_URL);
        await waitReady(page);

        // Preact `#app` root should NOT exist under legacy.
        await expect(page.locator('#app')).toHaveCount(0);

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
