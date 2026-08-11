import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

test('new projects start with probe intensity 3.2', async ({ page }) => {
  await page.goto(TEST_URL);
  await waitReady(page);

  const intensity = await page.evaluate(() => {
    const baker = (window as unknown as {
      __baker: { options: { probeIntensity?: number } };
    }).__baker;
    return baker.options.probeIntensity;
  });

  expect(intensity).toBe(3.2);
});
