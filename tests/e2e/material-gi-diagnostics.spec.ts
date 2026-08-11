import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

const validationModuleUrl = `/three-lightmap-baker/@fs/${process.cwd().replace(/\\/g, '/')}/tests/browser/materialGIValidation.ts`;

test('material GI headless portability diagnostics', async ({ page }) => {
  await page.goto(TEST_URL);
  await waitReady(page);

  const result = await page.evaluate(async (moduleUrl) => {
    const validation = (await import(moduleUrl)) as {
      validateTexturedBounce(renderer: unknown): {
        indirect: [number, number, number];
        expectedAlbedo: [number, number, number];
        sourceAlbedo: [number, number, number];
        diagnostics: Record<string, unknown>;
      };
    };
    const baker = (window as unknown as { __baker: { sceneController: { renderer: unknown } } })
      .__baker;
    return validation.validateTexturedBounce(baker.sceneController.renderer);
  }, validationModuleUrl);

  expect(
    Math.max(...result.indirect),
    `material GI diagnostics: ${JSON.stringify(result)}`,
  ).toBeGreaterThan(0.01);
});
