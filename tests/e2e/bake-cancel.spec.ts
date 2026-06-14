import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

test.describe('bake cancellation', () => {
  test('in-flight bake can be cancelled and a later bake still completes', async ({ page }) => {
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            options: {
              lightMapSize: number;
              casts: number;
              targetSamples: number;
              safeMode: boolean;
            };
            requestBake(): Promise<void>;
          };
        }
      ).__baker;
      baker.options.lightMapSize = 1024;
      baker.options.casts = 8;
      baker.options.targetSamples = 512;
      baker.options.safeMode = true;
      void baker.requestBake();
    });

    await page.waitForFunction(() => {
      const w = window as unknown as { __baker?: { getBakeStatus(): string } };
      return w.__baker?.getBakeStatus() === 'baking';
    });

    await page.evaluate(() => {
      const baker = (window as unknown as { __baker: { cancelBake(): void } }).__baker;
      baker.cancelBake();
    });

    await page.waitForFunction(() => {
      const w = window as unknown as {
        __baker?: { getBakeStatus(): string; getBakeGroupCount(): number };
      };
      return w.__baker?.getBakeStatus() === 'idle' && w.__baker.getBakeGroupCount() === 0;
    });

    await bakeDraft(page);
    await waitBakeDone(page);

    const final = await page.evaluate(() => {
      const w = window as unknown as {
        __baker: { getBakeStatus(): string; getBakeGroupCount(): number };
      };
      return { status: w.__baker.getBakeStatus(), groups: w.__baker.getBakeGroupCount() };
    });
    expect(final.status).toBe('done');
    expect(final.groups).toBeGreaterThan(0);

    const hard = errors.filter((e) => !e.includes('[baker:debug]') && !e.includes('Warning:'));
    expect(hard, `unexpected errors during cancel smoke: ${hard.join('; ')}`).toEqual([]);
  });
});
