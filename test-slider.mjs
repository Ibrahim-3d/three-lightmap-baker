import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER:', msg.text()));

  await page.goto('http://localhost:5173/three-lightmap-baker/index.html?scene=cornell.advanced&test=1');
  await page.waitForTimeout(2000);

  // Actually, we can just execute JS to set the layer and change the option.
  await page.evaluate(() => {
    const app = window.__baker;
    app.setLayer('texelDensity');
    console.log("Layer set to texelDensity");
    
    // override setTexelsPerMeter to log
    for (const [mesh, mat] of app.renderModeRunner.texelDensityMats.entries()) {
       const orig = mat.setTexelsPerMeter.bind(mat);
       mat.setTexelsPerMeter = (v) => {
         console.log("mat.setTexelsPerMeter called with", v);
         orig(v);
       }
    }
  });

  // Now simulate changing the options tick
  await page.evaluate(() => {
    const app = window.__baker;
    app.options.texelsPerMeter = 25;
    // How to bump optionsTick? It's in shared.
    // We can just call app.setLayer('texelDensity') again!
    app.setLayer('texelDensity');
  });
  
  await page.waitForTimeout(1000);
  await browser.close();
})();
