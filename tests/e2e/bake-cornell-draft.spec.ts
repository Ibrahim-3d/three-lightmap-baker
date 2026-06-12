import { expect, test } from '@playwright/test';
import {
    bakeDraft,
    canvasSize,
    TEST_URL,
    trackConsoleErrors,
    waitBakeDone,
    waitReady,
} from './helpers';

/**
 * Bake the Cornell Advanced scene at Draft quality and verify the real bake
 * artifacts. Avoid exact pixel-color assertions here: Linux CI GPU readback can
 * shift/fringe the rendered room enough to make fixed samples unreliable.
 */
test.describe('cornell bake (draft)', () => {
    test('baked lightmaps are present after draft bake', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        await bakeDraft(page);
        await waitBakeDone(page);

        await page.waitForTimeout(300);

        const { w, h } = await canvasSize(page);
        // Sanity: drawing buffer should match Playwright Desktop Chrome default.
        expect(w).toBeGreaterThan(800);
        expect(h).toBeGreaterThan(500);

        const baked = await page.evaluate(() => {
            const baker = (window as unknown as {
                __baker: {
                    getBakeGroupCount(): number;
                    getBakeStatus(): string;
                    getScene(): { traverse(cb: (obj: { material?: unknown }) => void): void };
                    options: { samples: number; targetSamples: number };
                    serializeProject(): {
                        bakedLightmaps?: Array<{ meshIndexes: number[]; dataBase64: string }>;
                    };
                };
            }).__baker;

            let lightmappedMeshes = 0;
            let visibleLightmaps = 0;
            baker.getScene().traverse((obj) => {
                const raw = obj.material;
                const mats = Array.isArray(raw) ? raw : raw ? [raw] : [];
                if (
                    mats.some(
                        (mat) =>
                            !!(
                                mat &&
                                typeof mat === 'object' &&
                                'lightMap' in mat &&
                                mat.lightMap
                            ),
                    )
                ) {
                    lightmappedMeshes++;
                }
                if (
                    mats.some(
                        (mat) =>
                            !!(
                                mat &&
                                typeof mat === 'object' &&
                                'lightMapIntensity' in mat &&
                                Number(mat.lightMapIntensity) > 0
                            ),
                    )
                ) {
                    visibleLightmaps++;
                }
            });

            const project = baker.serializeProject();
            return {
                bakeGroupCount: baker.getBakeGroupCount(),
                bakeStatus: baker.getBakeStatus(),
                samples: baker.options.samples,
                targetSamples: baker.options.targetSamples,
                bakedLightmaps: project.bakedLightmaps ?? [],
                lightmappedMeshes,
                visibleLightmaps,
            };
        });

        expect(baked.bakeStatus).toBe('done');
        expect(baked.samples).toBeGreaterThanOrEqual(baked.targetSamples);
        expect(baked.bakeGroupCount).toBeGreaterThan(0);
        expect(baked.lightmappedMeshes).toBeGreaterThan(0);
        expect(baked.visibleLightmaps).toBeGreaterThan(0);
        expect(baked.bakedLightmaps.length).toBeGreaterThan(0);
        expect(baked.bakedLightmaps[0].meshIndexes.length).toBeGreaterThan(0);
        expect(baked.bakedLightmaps[0].dataBase64.length).toBeGreaterThan(1000);

        // No bake errors.
        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard, `unexpected errors during bake: ${hard.join('; ')}`).toEqual([]);
    });
});
