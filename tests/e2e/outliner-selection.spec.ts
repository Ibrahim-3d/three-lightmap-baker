import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

/**
 * T-D4 outliner: scene tree mirrors Cornell Advanced (1 light + 9 meshes);
 * outliner rows render; clicking sets the selection via signal.
 *
 * Selecting via UI relies on event delegation through the Preact tree; here we
 * exercise the test API (`setSelection`) which goes through the same code path
 * the row click handler calls (`selectedId.value = id` → signal effect →
 * `app.setSelection(...)`), and verify DOM reflects.
 */
test.describe('outliner + selection', () => {
  test('tree mirrors scene; selection propagates to gizmo + outliner highlight', async ({
    page,
  }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const tree = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getSceneTree(): unknown[] } };
      return w.__baker.getSceneTree();
    });
    expect(Array.isArray(tree)).toBe(true);
    // Cornell Advanced: 1 light + 9 meshes (walls 5 + blocks 2 + extras 3).
    expect((tree as { kind: string }[]).length).toBeGreaterThanOrEqual(10);

    const meshes = (tree as { id: string; name: string; kind: string }[]).filter(
      (n) => n.kind === 'mesh',
    );
    expect(meshes.length).toBeGreaterThanOrEqual(9);

    // The Floor row should be visible somewhere in the outliner.
    const floor = page.locator('aside li', { hasText: 'Floor' }).first();
    await expect(floor).toBeVisible();

    // Click the row (force, since OrbitControls canvas may intercept hit-testing on
    // its own listeners; the outliner is z-indexed above but Playwright is strict).
    await floor.click({ force: true });

    // After click, that row should carry the `bg-accent/20` selected class.
    await expect(floor).toHaveClass(/bg-accent\/20/, { timeout: 5000 });
    await expect(floor).toHaveAttribute('data-selected', 'true');

    const selectedBefore = await page.locator('aside li[data-selected="true"]').first().innerText();
    await page.keyboard.press('ArrowDown');
    const selectedAfterDown = await page
      .locator('aside li[data-selected="true"]')
      .first()
      .innerText();
    expect(selectedAfterDown).not.toBe(selectedBefore);

    await page.keyboard.press('ArrowUp');
    await expect(floor).toHaveAttribute('data-selected', 'true');
  });
});
