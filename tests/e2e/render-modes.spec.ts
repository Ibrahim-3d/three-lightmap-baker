import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

const LAYERS = [
    'combined',
    'combinedPost',
    'combinedRaw',
    'direct',
    'indirect',
    'ao',
    'lightmapRaw',
    'albedo',
    'positions',
    'normals',
    'texelDensity',
];

test.describe('render-mode cycle', () => {
    test('every layer mounts without errors after a bake', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        await bakeDraft(page);
        await waitBakeDone(page);

        for (const id of LAYERS) {
            await page.evaluate((layer) => {
                const w = window as unknown as { __baker: { setLayer(id: string): void } };
                w.__baker.setLayer(layer);
            }, id);
            // Yield to RAF so render-mode swap renders at least once.
            await page.waitForTimeout(50);
        }

        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard, `errors during layer cycle: ${hard.join('; ')}`).toEqual([]);
    });
});
