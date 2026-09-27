import { test, expect } from '@playwright/test';
const base = '/three-lightmap-baker/@fs/' + process.cwd().replace(/\\/g, '/');
test.beforeEach(async ({ page }) => {
  await page.goto(base + '/tests/browser/correctness.html');
});
test('GPU transport: attenuation, 17 lights, area integral and secondary sky', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  const r = await page.evaluate(
    async (u) => (await import(u)).validateTransport(),
    base + '/tests/browser/bakeCorrectnessValidation.ts',
  );
  console.log(r);
  expect(r.near / r.far).toBeCloseTo(4, 2);
  expect(r.cutoff).toBe(0);
  expect(r.many).toBeCloseTo(17, 3);
  expect(r.sky).toBeCloseTo(Math.PI, 3);
  expect(r.bouncedSky).toBeCloseTo(Math.PI * 0.5, 2);
  expect(r.area).toBeGreaterThan(0.009);
  expect(r.area).toBeLessThan(0.011);
  expect(r.doubleArea / r.area).toBeGreaterThan(1.9);
  expect(r.doubleArea / r.area).toBeLessThan(2.1);
  expect(r.backArea).toBe(0);
  expect(errors).toEqual([]);
});
test('GPU filters retain separate chart colors', async ({ page }) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validateFiltering(),
    base + '/tests/browser/bakeCorrectnessValidation.ts',
  );
  expect(r[0]).toBeCloseTo(1, 3);
  expect(r[1]).toBeCloseTo(0, 3);
  expect(r[4]).toBeCloseTo(0, 3);
  expect(r[5]).toBeCloseTo(1, 3);
});
test('failed groups, cancelled bakes and AO restore resources', async ({ page }) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validateLifecycle(),
    base + '/tests/browser/bakeCorrectnessValidation.ts',
  );
  console.log(r);
  for (const key of [
    'failed',
    'cancelled',
    'aoCancelled',
    'aoPreserved',
    'restored',
    'finalRestored',
  ])
    expect(r[key]).toBe(true);
  expect(r.after).toBeLessThanOrEqual(r.before);
});
