import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

/**
 * T-D9 topbar: 5 data-driven menus, scene picker, compare toggle.
 *
 * Covers:
 *  - Clicking the File menu opens a popover with ≥3 items.
 *  - All 5 menu trigger buttons are visible.
 *  - The scene picker is present in the topbar.
 *  - The compare button toggles aria-pressed on click.
 */
test.describe('topbar menus + scene picker + compare', () => {
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

    test('scene picker is present in topbar', async ({ page }) => {
        await page.goto(TEST_URL);
        await waitReady(page);
        await expect(page.locator('[data-testid="scene-picker"]')).toBeVisible();
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
});
