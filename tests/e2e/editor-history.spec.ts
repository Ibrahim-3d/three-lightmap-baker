import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

test.describe('editor history', () => {
  test('delete supports undo and redo from keyboard shortcuts', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const nodeId = await page.evaluate(() => {
      const w = window as unknown as {
        __baker: {
          addAsset(
            spec: { kind: 'primitive'; id: string },
            worldPos: [number, number, number],
          ): string;
        };
      };
      return w.__baker.addAsset({ kind: 'primitive', id: 'cube' }, [1.5, 1, 0]);
    });
    expect(nodeId).toBeTruthy();

    const row = page.locator(`aside li[data-scene-node-id="${nodeId}"]`);
    await expect(row).toBeVisible();
    await row.click({ force: true });
    await expect(row).toHaveAttribute('data-selected', 'true');

    const countBeforeDelete = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getMeshCount(): number } };
      return w.__baker.getMeshCount();
    });

    await page.keyboard.press('Delete');
    await expect(row).toHaveCount(0);

    const countAfterDelete = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getMeshCount(): number } };
      return w.__baker.getMeshCount();
    });
    expect(countAfterDelete).toBe(countBeforeDelete - 1);

    await page.keyboard.press('ControlOrMeta+Z');
    await expect(row).toBeVisible();

    const countAfterUndo = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getMeshCount(): number } };
      return w.__baker.getMeshCount();
    });
    expect(countAfterUndo).toBe(countBeforeDelete);

    await page.keyboard.press('ControlOrMeta+Y');
    await expect(row).toHaveCount(0);

    const countAfterRedo = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getMeshCount(): number } };
      return w.__baker.getMeshCount();
    });
    expect(countAfterRedo).toBe(countBeforeDelete - 1);
  });
});
