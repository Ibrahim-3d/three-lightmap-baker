import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced');
  await page.waitForTimeout(2000);
  
  // Click on the first mesh in outliner
  await page.locator('[data-scene-node-kind="mesh"]').first().click();
  await page.waitForTimeout(500);
  
  // Click Material tab
  await page.click('button:has-text("Material")');
  await page.waitForTimeout(500);
  
  const contentBefore = await page.locator('aside').nth(1).locator('.flex-1.overflow-auto').innerHTML();
  console.log("Before switching, content length:", contentBefore.length);
  
  // Click Object tab
  await page.click('button:has-text("Object")');
  await page.waitForTimeout(500);
  
  const contentAfter = await page.locator('aside').nth(1).locator('.flex-1.overflow-auto').innerHTML();
  console.log("After switching, content length:", contentAfter.length);
  
  const tabsCount = await page.locator('aside').nth(1).locator('button').count();
  console.log('Tabs count:', tabsCount);
  
  // Let's print out what is actually inside the inspector
  const sectionsCount = await page.locator('aside').nth(1).locator('.flex-1.overflow-auto > div > div').count();
  console.log('Sections inside content:', sectionsCount);
  
  await browser.close();
})();
