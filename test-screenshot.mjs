import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced');
  await page.waitForTimeout(2000);
  
  // Select mesh
  await page.locator('[data-scene-node-kind="mesh"]').first().click();
  await page.waitForTimeout(500);
  
  // Go to Material
  await page.click('button:has-text("Material")');
  await page.waitForTimeout(500);
  
  // Switch to Object
  await page.click('button:has-text("Object")');
  await page.waitForTimeout(500);
  
  // Take screenshot
  await page.screenshot({ path: 'screenshot.png' });
  
  await browser.close();
})();
