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

    test('rebake from Texel Density restores real materials before baking', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        await bakeDraft(page);
        await waitBakeDone(page);

        const swapStats = await page.evaluate(() => {
            type SceneObj = {
                material?: unknown;
            };
            const baker = (window as unknown as {
                __baker: {
                    setLayer(id: string): void;
                    requestBake(): Promise<void>;
                    options: { texelsPerMeter: number };
                    getScene(): { traverse(cb: (obj: SceneObj) => void): void };
                };
            }).__baker;

            const materialNames = (): string[] => {
                const names: string[] = [];
                baker.getScene().traverse((obj) => {
                    const raw = obj.material;
                    const mats = Array.isArray(raw) ? raw : raw ? [raw] : [];
                    for (const mat of mats) {
                        if (mat && typeof mat === 'object') {
                            names.push(mat.constructor?.name ?? 'unknown');
                        }
                    }
                });
                return names;
            };

            baker.setLayer('texelDensity');
            const before = materialNames();
            baker.options.texelsPerMeter += 1;
            void baker.requestBake();
            const during = materialNames();
            return { before, during };
        });

        expect(swapStats.before.some((name) => name === 'TexelDensityMaterial')).toBe(true);
        expect(swapStats.during.some((name) => name === 'TexelDensityMaterial')).toBe(false);

        await waitBakeDone(page);

        const after = await page.evaluate(() => {
            type SceneObj = {
                material?: unknown;
            };
            const baker = (window as unknown as {
                __baker: {
                    setLayer(id: string): void;
                    getBakeGroupCount(): number;
                    getScene(): { traverse(cb: (obj: SceneObj) => void): void };
                };
            }).__baker;

            baker.setLayer('combined');
            let lightmapped = 0;
            baker.getScene().traverse((obj) => {
                const raw = obj.material;
                const mats = Array.isArray(raw) ? raw : raw ? [raw] : [];
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
                    lightmapped++;
                }
            });
            return { groups: baker.getBakeGroupCount(), lightmapped };
        });

        expect(after.groups).toBeGreaterThan(0);
        expect(after.lightmapped).toBeGreaterThan(0);

        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard, `errors during texel-density rebake: ${hard.join('; ')}`).toEqual([]);
    });
});
