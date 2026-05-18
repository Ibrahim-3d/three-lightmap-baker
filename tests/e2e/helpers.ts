import { type Page, expect } from '@playwright/test';

/**
 * Shared helpers for Playwright specs. All specs append `?test=1` so
 * `window.__baker` is exposed (see main.tsx).
 *
 * URLs are written relative (no leading `/`) so Playwright resolves them against
 * `baseURL` — which includes the project path `/three-lightmap-baker/`. A
 * leading slash would drop that path and navigate to `http://localhost:5173/?…`.
 */

export const TEST_URL = '?test=1';
export const LEGACY_URL = '?test=1&legacy=1';

/** Wait for the app to mount: xatlas loaded, SceneController constructed, scene built. */
export async function waitReady(page: Page, timeoutMs = 30_000): Promise<void> {
    await page.waitForSelector('body[data-baker-ready="1"]', { timeout: timeoutMs });
    // Also wait for the first render so the canvas has pixels.
    await page.waitForFunction(
        () => {
            const w = window as unknown as { __baker?: { getMeshCount(): number } };
            return !!w.__baker && w.__baker.getMeshCount() > 0;
        },
        { timeout: timeoutMs },
    );
}

/** Configure a fast-baking preset (Draft = 256² × 32 frames) and trigger a bake. */
export async function bakeDraft(page: Page): Promise<void> {
    await page.evaluate(() => {
        const baker = (window as unknown as {
            __baker: {
                setQuality(name: string): void;
                requestBake(): Promise<void>;
            };
        }).__baker;
        baker.setQuality('Draft');
        // Don't await — setQuality already kicks off a bake.
    });
}

/** Poll `getBakeStatus` until 'done' or timeout. */
export async function waitBakeDone(page: Page, timeoutMs = 60_000): Promise<void> {
    await page.waitForFunction(
        () => {
            const w = window as unknown as { __baker?: { getBakeStatus(): string } };
            return w.__baker?.getBakeStatus() === 'done';
        },
        { timeout: timeoutMs, polling: 250 },
    );
}

/** Read a pixel from the WebGL backbuffer via the test API. */
export async function samplePixel(
    page: Page,
    x: number,
    y: number,
): Promise<[number, number, number, number]> {
    const result = await page.evaluate(
        ([px, py]) => {
            const baker = (window as unknown as {
                __baker: { sampleCanvasPixel(x: number, y: number): [number, number, number, number] | null };
            }).__baker;
            return baker.sampleCanvasPixel(px as number, py as number);
        },
        [x, y] as const,
    );
    expect(result, `pixel readback failed at (${x},${y})`).not.toBeNull();
    return result!;
}

/** Drawing-buffer dimensions for proportional pixel sampling. Uses gl.drawingBuffer*
 *  so coordinates match readPixels' coordinate space exactly. */
export async function canvasSize(page: Page): Promise<{ w: number; h: number }> {
    return page.evaluate(() => {
        const w = window as unknown as {
            __baker: { getRenderDiag(): { gbW: number; gbH: number } };
        };
        const d = w.__baker.getRenderDiag();
        return { w: d.gbW, h: d.gbH };
    });
}

/** Console-error tripwire. Use inside `test.beforeEach` to fail on unexpected logs. */
export function trackConsoleErrors(page: Page): { errors: string[] } {
    const errors: string[] = [];
    page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));
    return { errors };
}
