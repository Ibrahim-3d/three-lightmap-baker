import { expect, test } from '@playwright/test';
import { TEST_URL, trackConsoleErrors, waitReady } from './helpers';

test.describe('renderer adapter runtime', () => {
  const adapterBudgetMs = Number(process.env.BAKER_ADAPTER_RUNTIME_BUDGET_MS ?? 20_000);

  test('detached/offscreen browser adapter can run a non-UI bake', async ({ page }) => {
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    const result = await page.evaluate(() => {
      const w = window as unknown as {
        __baker: {
          runAdapterRuntimeSmoke(): Promise<{
            rendererLabel: string;
            elapsedMs: number;
            meshCount: number;
            groupCount: number;
            lightmapCount: number;
            texelCount: number;
          }>;
        };
      };
      return w.__baker.runAdapterRuntimeSmoke();
    });

    expect(['offscreen-browser', 'detached-browser-canvas']).toContain(result.rendererLabel);
    expect(result.meshCount).toBe(2);
    expect(result.groupCount).toBeGreaterThan(0);
    expect(result.lightmapCount).toBe(2);
    expect(result.texelCount).toBeGreaterThan(0);
    expect(
      result.elapsedMs,
      `adapter runtime smoke exceeded ${adapterBudgetMs}ms budget`,
    ).toBeLessThan(adapterBudgetMs);

    const hard = errors.filter(
      (e) => !e.includes('[baker:debug]') && !e.includes('xatlas') && !e.includes('Warning:'),
    );
    expect(hard, `unexpected console errors: ${hard.join('; ')}`).toEqual([]);
  });
});
