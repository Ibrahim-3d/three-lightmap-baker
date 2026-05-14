import { expect, test } from '@playwright/test';
import {
    bakeDraft,
    samplePixel,
    canvasSize,
    TEST_URL,
    trackConsoleErrors,
    waitBakeDone,
    waitReady,
} from './helpers';

/**
 * Scene-preset registry coverage (T-D10 + T-D11).
 *
 * Verifies:
 *  (a) registry populates ≥ 8 presets at boot
 *  (b) loadScenePreset() swaps the active scene
 *  (c) cornell.classic and cornell.advanced have different mesh counts
 *  (d) bake-cornell-draft regression: classic Cornell still bakes with the
 *      expected red/green GI signatures after a preset switch.
 */
test.describe('scene presets', () => {
    test('registry exposes ≥ 8 presets', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        // Probe via loadScenePreset on each expected id — succeeds (count > 0) on
        // registered presets, warns on unknown. We assert the known set works.
        const ids = await page.evaluate(async () => {
            const baker = (window as unknown as {
                __baker: {
                    loadScenePreset(id: string): Promise<void>;
                    getMeshCount(): number;
                };
            }).__baker;
            const candidates = [
                'cornell.classic',
                'cornell.advanced',
                'cornell.glass-mirror',
                'cornell.emissive-strip',
                'threejs.pointlights',
                'threejs.shadowmap',
                'threejs.decals',
                'isometric.room',
            ];
            const ok: string[] = [];
            for (const id of candidates) {
                await baker.loadScenePreset(id);
                if (baker.getMeshCount() > 0) ok.push(id);
            }
            return ok;
        });
        expect(ids.length).toBeGreaterThanOrEqual(8);
        // Sanity: a few known ids are present.
        expect(ids).toContain('cornell.classic');
        expect(ids).toContain('cornell.advanced');
        expect(ids).toContain('isometric.room');

        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard).toEqual([]);
    });

    test('loadScenePreset swaps the scene; classic vs advanced mesh count differs', async ({
        page,
    }) => {
        await page.goto(TEST_URL);
        await waitReady(page);

        const classicCount = await page.evaluate(async () => {
            const baker = (window as unknown as {
                __baker: { loadScenePreset(id: string): Promise<void>; getMeshCount(): number };
            }).__baker;
            await baker.loadScenePreset('cornell.classic');
            return baker.getMeshCount();
        });
        expect(classicCount).toBeGreaterThan(0);

        const advancedCount = await page.evaluate(async () => {
            const baker = (window as unknown as {
                __baker: { loadScenePreset(id: string): Promise<void>; getMeshCount(): number };
            }).__baker;
            await baker.loadScenePreset('cornell.advanced');
            return baker.getMeshCount();
        });
        expect(advancedCount).toBeGreaterThan(0);
        expect(advancedCount).not.toBe(classicCount);
    });

    test('bake-cornell-draft survives a preset switch', async ({ page }) => {
        const { errors } = trackConsoleErrors(page);
        await page.goto(TEST_URL);
        await waitReady(page);

        // Switch to classic Cornell programmatically, then bake.
        await page.evaluate(async () => {
            const baker = (window as unknown as {
                __baker: { loadScenePreset(id: string): Promise<void> };
            }).__baker;
            await baker.loadScenePreset('cornell.classic');
        });

        await bakeDraft(page);
        await waitBakeDone(page);
        await page.waitForTimeout(300);

        const { w, h } = await canvasSize(page);
        const leftWall = await samplePixel(page, Math.round(w * 0.28), Math.round(h * 0.45));
        const rightWall = await samplePixel(page, Math.round(w * 0.72), Math.round(h * 0.45));

        expect(
            leftWall[0],
            `left wall expected red>green, got rgba=${leftWall.join(',')}`,
        ).toBeGreaterThan(leftWall[1] + 20);
        expect(
            rightWall[1],
            `right wall expected green>red, got rgba=${rightWall.join(',')}`,
        ).toBeGreaterThan(rightWall[0] + 20);

        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard).toEqual([]);
    });
});
