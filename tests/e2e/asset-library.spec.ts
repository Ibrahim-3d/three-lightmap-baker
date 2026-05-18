import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

/**
 * T-D7 Asset Library: drag tiles render in the outliner; the test-API can add
 * a primitive at a world position (sceneTree grows, isStale flips); removeNode
 * undoes that.
 */
test.describe('asset library', () => {
    test('primitives panel renders all six tiles', async ({ page }) => {
        await page.goto(TEST_URL);
        await waitReady(page);

        for (const id of ['cube', 'sphere', 'plane', 'cylinder', 'cone', 'torus']) {
            await expect(page.locator(`[data-asset-tile="${id}"]`)).toBeVisible();
        }
    });

    test('addAsset adds a mesh and flips isStale', async ({ page }) => {
        await page.goto(TEST_URL);
        await waitReady(page);

        const before = await page.evaluate(() => {
            const w = window as unknown as { __baker: { getMeshCount(): number } };
            return w.__baker.getMeshCount();
        });

        const newUuid = await page.evaluate(() => {
            const w = window as unknown as {
                __baker: {
                    addAsset(
                        spec: { kind: 'primitive'; id: string },
                        worldPos: [number, number, number],
                    ): string;
                };
            };
            return w.__baker.addAsset({ kind: 'primitive', id: 'cube' }, [0, 1, 0]);
        });
        expect(newUuid).toBeTruthy();

        const after = await page.evaluate(() => {
            const w = window as unknown as { __baker: { getMeshCount(): number } };
            return w.__baker.getMeshCount();
        });
        expect(after).toBe(before + 1);

        // isStale chip should now be visible.
        await expect(page.locator('[data-stale-banner]')).toBeVisible();
    });

    test('removeNode removes a previously added mesh', async ({ page }) => {
        await page.goto(TEST_URL);
        await waitReady(page);

        const newUuid = await page.evaluate(() => {
            const w = window as unknown as {
                __baker: {
                    addAsset(
                        spec: { kind: 'primitive'; id: string },
                        worldPos: [number, number, number],
                    ): string;
                };
            };
            return w.__baker.addAsset({ kind: 'primitive', id: 'sphere' }, [2, 1, 0]);
        });
        expect(newUuid).toBeTruthy();

        const countBefore = await page.evaluate(() => {
            const w = window as unknown as { __baker: { getMeshCount(): number } };
            return w.__baker.getMeshCount();
        });

        await page.evaluate((id) => {
            const w = window as unknown as { __baker: { removeNode(id: string): void } };
            w.__baker.removeNode(id);
        }, newUuid);

        const countAfter = await page.evaluate(() => {
            const w = window as unknown as { __baker: { getMeshCount(): number } };
            return w.__baker.getMeshCount();
        });
        expect(countAfter).toBe(countBefore - 1);
    });
});
