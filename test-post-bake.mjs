import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced&test=1');
  
  await page.waitForTimeout(1000);
  
  // Wait for bake to finish. bakeStatus is available on __baker
  await page.waitForFunction(() => {
     return window.__baker && window.__baker.getBakeStatus() === 'done';
  }, { timeout: 30000 });
  console.log("Bake is done!");
  
  await page.evaluate(() => {
    const app = window.__baker;
    app.setLayer('texelDensity');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-post-bake-1.png' });
  
  await page.evaluate(() => {
    const app = window.__baker;
    app.options.texelsPerMeter = 25;
    app.setLayer('texelDensity');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-post-bake-2.png' });
  
  await browser.close();
})();
