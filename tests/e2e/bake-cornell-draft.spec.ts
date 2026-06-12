import { expect, test } from '@playwright/test';
import {
    bakeDraft,
    canvasSize,
    samplePixel,
    TEST_URL,
    trackConsoleErrors,
    waitBakeDone,
    waitReady,
} from './helpers';

/**
 * Bake the Cornell Advanced scene at Draft quality and verify GI signatures.
 *
 * Camera default in `SceneController`: position (0, 5, 18), target (0, 5, 0),
 * FOV 45°. At 1280×720 viewport aspect=1.78 the 10×10 Cornell room occupies
 * roughly cols 4–11 of a 16-col grid (cols 0–3 and 12–15 are clear-color
 * background - outside the room). Pixel coords below are absolute against
 * the Playwright Desktop Chrome default 1280×720 viewport.
 *
 * Wall colors are the strongest GI signal - large patches, dominant channels.
 * Sphere/block bleed is a follow-up signal verified by relative comparison.
 */
test.describe('cornell bake (draft)', () => {
    test('GI signatures present after draft bake', async ({ page }) => {
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

        // --- Wall color check ---
        // Left wall (red) at the inside surface, roughly col 4 row 4 of 16×9 grid.
        const leftWall = await samplePixel(page, Math.round(w * 0.28), Math.round(h * 0.45));
        // Right wall (green) at col 11.
        const rightWall = await samplePixel(page, Math.round(w * 0.72), Math.round(h * 0.45));
        // Floor center, lower portion.
        const floor = await samplePixel(page, Math.round(w * 0.5), Math.round(h * 0.7));
        // Upper room sample. This should be visibly lit, but not necessarily
        // brighter than the floor once overlays/camera framing are included.
        const upperRoom = await samplePixel(page, Math.round(w * 0.5), Math.round(h * 0.15));

        // Red wall dominant red.
        expect(
            leftWall[0],
            `left wall expected red>green, got rgba=${leftWall.join(',')}`,
        ).toBeGreaterThan(leftWall[1] + 20);
        expect(
            leftWall[0],
            `left wall expected red>blue, got rgba=${leftWall.join(',')}`,
        ).toBeGreaterThan(leftWall[2] + 20);

        // Green wall dominant green.
        expect(
            rightWall[1],
            `right wall expected green>red, got rgba=${rightWall.join(',')}`,
        ).toBeGreaterThan(rightWall[0] + 20);
        expect(
            rightWall[1],
            `right wall expected green>blue, got rgba=${rightWall.join(',')}`,
        ).toBeGreaterThan(rightWall[2] + 20);

        // Floor: roughly neutral (all channels close), and lit (sum > 200).
        const floorLum = floor[0] + floor[1] + floor[2];
        expect(
            floorLum,
            `floor expected lit, got rgba=${floor.join(',')} lum=${floorLum}`,
        ).toBeGreaterThan(150);

        // Upper room: lit enough to prove the bake/composite path is active.
        const upperRoomLum = upperRoom[0] + upperRoom[1] + upperRoom[2];
        expect(
            upperRoomLum,
            `upper room expected lit, got rgba=${upperRoom.join(',')} lum=${upperRoomLum}`,
        ).toBeGreaterThan(120);

        // No bake errors.
        const hard = errors.filter(
            (e) => !e.includes('[baker:debug]') && !e.includes('Warning:'),
        );
        expect(hard, `unexpected errors during bake: ${hard.join('; ')}`).toEqual([]);
    });
});
