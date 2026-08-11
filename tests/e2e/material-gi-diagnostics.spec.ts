import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

const root = `/three-lightmap-baker/@fs/${process.cwd().replace(/\\/g, '/')}/tests/browser`;
const validationModuleUrl = `${root}/materialGIValidation.ts`;
const hitModuleUrl = `${root}/materialGIHitDiagnostics.ts`;

test('material GI headless portability diagnostics', async ({ page }) => {
  await page.goto(TEST_URL);
  await waitReady(page);

  const result = await page.evaluate(async ({ validationUrl, hitUrl }) => {
    const validation = (await import(validationUrl)) as {
      validateTexturedBounce(renderer: unknown): {
        indirect: [number, number, number];
        expectedAlbedo: [number, number, number];
        sourceAlbedo: [number, number, number];
        diagnostics: Record<string, unknown>;
      };
    };
    const hit = (await import(hitUrl)) as {
      validateSecondaryEmissiveHit(renderer: unknown): [number, number, number];
    };
    const baker = (window as unknown as { __baker: { sceneController: { renderer: unknown } } })
      .__baker;
    return {
      textured: validation.validateTexturedBounce(baker.sceneController.renderer),
      emissiveHit: hit.validateSecondaryEmissiveHit(baker.sceneController.renderer),
    };
  }, { validationUrl: validationModuleUrl, hitUrl: hitModuleUrl });

  expect(
    Math.max(...result.textured.indirect),
    `material GI diagnostics: ${JSON.stringify(result)}`,
  ).toBeGreaterThan(0.01);
});
