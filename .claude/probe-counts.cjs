const { chromium } = require(process.cwd() + '/node_modules/@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', m => console.log('CON', m.type(), m.text().slice(0, 300)));
  page.on('pageerror', e => console.log('PE', e.message));
  page.on('response', r => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url()); });
  await page.goto('http://localhost:5173/three-lightmap-baker/?test=1', { timeout: 15000 });
  await page.waitForSelector('body[data-baker-ready="1"]', { timeout: 30000 });
  // Inspect registry from inside the page
  const info = await page.evaluate(async () => {
    // dynamic import to inspect singleton
    const mod = await import('/three-lightmap-baker/src/demo/scenes/registry.ts');
    const presets = mod.sceneRegistry.list();
    return { listLen: presets.length, ids: presets.map(p => p.id) };
  });
  console.log('reg', info);
  await browser.close();
})();
