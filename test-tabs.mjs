import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced');
  await page.waitForTimeout(2000);
  
  await page.locator('[data-scene-node-kind="mesh"]').first().click();
  await page.waitForTimeout(500);
  
  const tabsBefore = await page.locator('aside').nth(1).locator('.border-b.border-border.bg-bg-2.flex button').allInnerTexts();
  console.log('Tabs before:', tabsBefore);
  
  await page.click('button:has-text("Material")');
  await page.waitForTimeout(500);
  
  const tabsMaterial = await page.locator('aside').nth(1).locator('.border-b.border-border.bg-bg-2.flex button').allInnerTexts();
  console.log('Tabs material:', tabsMaterial);
  
  await page.click('button:has-text("Object")');
  await page.waitForTimeout(500);
  
  const tabsAfter = await page.locator('aside').nth(1).locator('.border-b.border-border.bg-bg-2.flex button').allInnerTexts();
  console.log('Tabs after:', tabsAfter);
  
  await browser.close();
})();
