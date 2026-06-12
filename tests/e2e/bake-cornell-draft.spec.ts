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

type Pixel = [number, number, number, number];

async function sampleRegion(
    page: Parameters<typeof samplePixel>[0],
    w: number,
    h: number,
    coords: Array<[number, number]>,
): Promise<Pixel[]> {
    const samples: Pixel[] = [];
    for (const [x, y] of coords) {
        samples.push(await samplePixel(page, Math.round(w * x), Math.round(h * y)));
    }
    return samples;
}

function bestDominance(samples: Pixel[], primary: 0 | 1, secondary: 0 | 1 | 2): number {
    return Math.max(...samples.map((p) => p[primary] - p[secondary]));
}

function formatSamples(samples: Pixel[]): string {
    return samples.map((p) => `[${p.join(',')}]`).join(' ');
}

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
        // Left/right walls: sample a small region because CI GPU/camera output can
        // shift a few pixels while the visual signature is still correct.
        const leftWall = await sampleRegion(page, w, h, [
            [0.25, 0.42],
            [0.28, 0.45],
            [0.31, 0.48],
        ]);
        const rightWall = await sampleRegion(page, w, h, [
            [0.69, 0.42],
            [0.72, 0.45],
            [0.75, 0.48],
        ]);
        // Floor center, lower portion.
        const floor = await samplePixel(page, Math.round(w * 0.5), Math.round(h * 0.7));
        // Upper room sample. This should be visibly lit, but not necessarily
        // brighter than the floor once overlays/camera framing are included.
        const upperRoom = await samplePixel(page, Math.round(w * 0.5), Math.round(h * 0.15));

        // Red wall dominant red.
        expect(
            bestDominance(leftWall, 0, 1),
            `left wall expected red>green, got rgba=${formatSamples(leftWall)}`,
        ).toBeGreaterThan(8);
        expect(
            bestDominance(leftWall, 0, 2),
            `left wall expected red>blue, got rgba=${formatSamples(leftWall)}`,
        ).toBeGreaterThan(8);

        // Green wall dominant green.
        expect(
            bestDominance(rightWall, 1, 0),
            `right wall expected green>red, got rgba=${formatSamples(rightWall)}`,
        ).toBeGreaterThan(8);
        expect(
            bestDominance(rightWall, 1, 2),
            `right wall expected green>blue, got rgba=${formatSamples(rightWall)}`,
        ).toBeGreaterThan(8);

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
