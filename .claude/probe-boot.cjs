const { chromium } = require(process.cwd() + '/node_modules/@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', m => console.log('CON', m.type(), m.text().slice(0, 400)));
  page.on('pageerror', e => console.log('PAGEERROR', e.message));
  page.on('response', r => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url()); });
  await page.goto('http://localhost:5173/three-lightmap-baker/?test=1', { timeout: 15000 }).catch(e => console.log('GOTO', e.message));
  await page.waitForTimeout(4000);
  console.log('ready=', await page.evaluate(() => document.body.getAttribute('data-baker-ready')));
  await browser.close();
})();
