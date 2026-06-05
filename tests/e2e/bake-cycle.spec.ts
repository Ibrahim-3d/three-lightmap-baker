import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

/**
 * Catches S12-style regressions (NVIDIA D3D11 post-bake context loss, lost
 * dummy-LM shader-variant pin, leaked composite RTs). Five back-to-back Draft
 * bakes; assert no context loss + bakeGroups rebuild each cycle.
 */
test.describe('bake cycle stress', () => {
    test('5x back-to-back Draft bakes complete without context loss', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        for (let i = 0; i < 5; i++) {
            await bakeDraft(page);
            await waitBakeDone(page);

            const status = await page.evaluate(() => {
                const w = window as unknown as {
                    __baker: { getBakeStatus(): string; getBakeGroupCount(): number };
                };
                return { status: w.__baker.getBakeStatus(), groups: w.__baker.getBakeGroupCount() };
            });
            expect(status.status, `cycle ${i + 1}: expected status 'done'`).toBe('done');
            expect(status.groups, `cycle ${i + 1}: expected groups > 0`).toBeGreaterThan(0);

            // Catch CONTEXT_LOST diagnostic line.
            const lost = errors.some((e) => e.includes('CONTEXT LOST'));
            expect(lost, `cycle ${i + 1}: webgl context lost - see ${errors.join('; ')}`).toBe(false);

            // Brief pause between cycles to mimic real user flow.
            await page.waitForTimeout(100);
        }
    });
});
