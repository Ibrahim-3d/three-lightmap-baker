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
  expect(r.blockedSky).toBe(0);
  expect(r.deeperSky).toBeCloseTo(Math.PI * 0.5, 2);
  expect(r.area).toBeGreaterThan(0.009);
  expect(r.area).toBeLessThan(0.011);
  expect(r.doubleArea / r.area).toBeGreaterThan(1.9);
  expect(r.doubleArea / r.area).toBeLessThan(2.1);
  expect(r.backArea).toBe(0);
  expect(errors).toEqual([]);
});

test('portable node passes preserve composite math and live updates', async ({ page }) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validatePortableNodePasses(),
    base + '/tests/browser/bakeCorrectnessValidation.ts',
  );

  const expectedInitial = [1, 0.5, 0.25].map((v) => Math.pow(v, 1 / 1.1));
  expect(r.initialComposite[0]).toBeCloseTo(expectedInitial[0]!, 3);
  expect(r.initialComposite[1]).toBeCloseTo(expectedInitial[1]!, 3);
  expect(r.initialComposite[2]).toBeCloseTo(expectedInitial[2]!, 3);
  expect(r.initialComposite[3]).toBeCloseTo(1, 3);
  expect(r.initialOptions).toEqual({
    directIntensity: 1,
    giIntensity: 2,
    aoEnabled: true,
    aoIntensity: 1,
    aoExponent: 1,
  });

  const expectedRefresh = [1, 0.5, 0.25].map((v) => Math.pow(v, 1 / 1.1));
  expect(r.refreshedComposite[0]).toBeCloseTo(expectedRefresh[0]!, 3);
  expect(r.refreshedComposite[1]).toBeCloseTo(expectedRefresh[1]!, 3);
  expect(r.refreshedComposite[2]).toBeCloseTo(expectedRefresh[2]!, 3);
  expect(r.refreshedOptions.giIntensity).toBe(0);
  expect(r.refreshedOptions.aoEnabled).toBe(false);

  expect(r.downscaleA.slice(0, 4)).toEqual(
    expect.arrayContaining([
      expect.closeTo(0.25, 3),
      expect.closeTo(0.5, 3),
      expect.closeTo(0.75, 3),
      expect.closeTo(1, 3),
    ]),
  );
  expect(r.downscaleB[0]).toBeCloseTo(0.75, 3);
  expect(r.downscaleB[1]).toBeCloseTo(0.25, 3);
  expect(r.downscaleB[2]).toBeCloseTo(0.5, 3);
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

test('supersampled atlas resolves to finite lit output at the requested final size', async ({
  page,
}) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validateSupersampling(),
    base + '/tests/browser/bakeCorrectnessValidation.ts',
  );
  expect(r).toEqual({ width: 64, height: 64, finite: true, lit: true });
});
