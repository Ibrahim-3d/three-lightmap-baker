import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced');
  await page.waitForTimeout(2000);
  
  await page.locator('[data-scene-node-kind="mesh"]').first().click();
  await page.waitForTimeout(500);
  
  await page.click('button:has-text("Material")');
  await page.waitForTimeout(500);
  
  await page.click('button:has-text("Lightmap")');
  await page.waitForTimeout(500);
  
  const asideCount = await page.locator('aside').count();
  console.log('After switching, Aside count:', asideCount);
  
  await browser.close();
})();
