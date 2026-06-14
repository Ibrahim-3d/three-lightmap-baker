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

    const hard = errors.filter((e) => !e.includes('[baker:debug]') && !e.includes('Warning:'));
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
      const baker = (
        window as unknown as {
          __baker: {
            setLayer(id: string): void;
            requestBake(): Promise<void>;
            options: { texelsPerMeter: number };
            getScene(): { traverse(cb: (obj: SceneObj) => void): void };
          };
        }
      ).__baker;

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
      const baker = (
        window as unknown as {
          __baker: {
            setLayer(id: string): void;
            getBakeGroupCount(): number;
            getScene(): { traverse(cb: (obj: SceneObj) => void): void };
          };
        }
      ).__baker;

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

    const hard = errors.filter((e) => !e.includes('[baker:debug]') && !e.includes('Warning:'));
    expect(hard, `errors during texel-density rebake: ${hard.join('; ')}`).toEqual([]);
  });

  test('rebake from Direct layer leaves combined view visible', async ({ page }) => {
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    await bakeDraft(page);
    await waitBakeDone(page);

    await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            setLayer(id: string): void;
            requestBake(): Promise<void>;
            options: { texelsPerMeter: number };
          };
        }
      ).__baker;
      baker.setLayer('direct');
      baker.options.texelsPerMeter += 0.5;
      void baker.requestBake();
    });
    await waitBakeDone(page, 90_000);
    await page.evaluate(() => {
      const baker = (window as unknown as { __baker: { setLayer(id: string): void } }).__baker;
      baker.setLayer('combined');
    });
    await page.waitForTimeout(100);

    const { w, h } = await canvasSize(page);
    const samples = await Promise.all([
      samplePixel(page, Math.floor(w * 0.5), Math.floor(h * 0.5)),
      samplePixel(page, Math.floor(w * 0.35), Math.floor(h * 0.45)),
      samplePixel(page, Math.floor(w * 0.65), Math.floor(h * 0.45)),
    ]);
    const brightest = Math.max(...samples.map(([r, g, b]) => r + g + b));
    expect(brightest, 'combined view stayed black after rebake from Direct').toBeGreaterThan(24);

    const hard = errors.filter((e) => !e.includes('[baker:debug]') && !e.includes('Warning:'));
    expect(hard, `errors during direct-layer rebake: ${hard.join('; ')}`).toEqual([]);
  });

  test('inspector Atlas tab paints the current bake atlas', async ({ page }) => {
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    await bakeDraft(page);
    await waitBakeDone(page);

    await page.getByRole('button', { name: 'Atlas' }).click();
    const canvas = page.getByTestId('atlas-inspector-canvas');
    await expect(canvas).toBeVisible();
    await page.waitForFunction(() => {
      const canvas = document.querySelector(
        '[data-testid="atlas-inspector-canvas"]',
      ) as HTMLCanvasElement | null;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return false;
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] + data[i + 1] + data[i + 2] > 12) return true;
      }
      return false;
    });

    const hard = errors.filter((e) => !e.includes('[baker:debug]') && !e.includes('Warning:'));
    expect(hard, `errors during atlas inspector preview: ${hard.join('; ')}`).toEqual([]);
  });
});
