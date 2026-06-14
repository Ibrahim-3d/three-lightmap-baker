import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

/**
 * T-D9 topbar: 5 data-driven menus, gallery navigation, compare/settings toggles.
 *
 * Covers:
 *  - Clicking the File menu opens a popover with ≥3 items.
 *  - All 5 menu trigger buttons are visible.
 *  - The File menu exposes the gallery entry now that scene selection moved
 *    to the landing page.
 *  - The compare button toggles aria-pressed on click.
 *  - The settings button opens the Post FX inspector tab.
 */
test.describe('topbar menus + gallery + controls', () => {
  test('all 5 menu triggers visible', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);
    for (const m of ['File', 'Edit', 'View', 'Render', 'Help']) {
      const btn = page.locator(`button[data-menu-id="${m}"]`);
      await expect(btn, `menu trigger ${m} should be visible`).toBeVisible();
    }
  });

  test('File menu opens with at least 3 items', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const trigger = page.locator('button[data-menu-id="File"]');
    await trigger.click();

    const popover = page.locator('[data-menu-popover="File"]');
    await expect(popover).toBeVisible();

    const items = popover.locator('[role="menuitem"]');
    await expect.poll(async () => items.count()).toBeGreaterThanOrEqual(3);
  });

  test('Help menu exposes current shortcuts and project links', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    await page.locator('button[data-menu-id="Help"]').click();

    const popover = page.locator('[data-menu-popover="Help"]');
    await expect(popover).toBeVisible();
    await expect(popover.locator('[data-menu-item-id="help.hotkeys"]')).toContainText(
      'Keyboard Shortcuts',
    );
    await expect(popover.locator('[data-menu-item-id="help.github"]')).toContainText('GitHub');
    await expect(popover.locator('[data-menu-item-id="help.about"]')).toContainText('About');
  });

  test('File menu exposes gallery navigation', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    await page.locator('button[data-menu-id="File"]').click();
    await expect(page.locator('[data-menu-item-id="file.gallery"]')).toContainText('Open Gallery');
  });

  test('compare button click toggles aria-pressed', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const btn = page.locator('[data-testid="compare-toggle"]');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('aria-pressed', 'false');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-pressed', 'true');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-pressed', 'false');
  });

  test('settings button opens Post FX inspector tab', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const settings = page.locator('[data-testid="settings-toggle"]');
    await expect(settings).toBeVisible();
    await expect(settings).toBeEnabled();
    await settings.click();

    const postFxTab = page.getByRole('button', { name: 'Post FX' });
    await expect(postFxTab).toBeVisible();
    await expect(postFxTab).toHaveClass(/border-b-accent/);
  });
});
