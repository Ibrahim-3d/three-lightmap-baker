import { test, expect } from '@playwright/test';
const base = '/@fs/' + process.cwd().replace(/\\/g, '/');
test.beforeEach(async ({ page }) => {
  await page.goto(base + '/tests/browser/correctness.html');
});
test('atlas workers abort loading/packing, recover from failure and terminate every owned worker', async ({
  page,
}) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validateWorkers(),
    base + '/tests/browser/atlasValidation.ts',
  );
  console.log(r);
  for (const key of [
    'error',
    'rejected',
    'timeout',
    'loadAbort',
    'packAbort',
    'packedAbort',
    'restored',
    'recovered',
    'rpcFailure',
    'wasmFailure',
    'fetchFailure',
  ])
    expect(r[key]).toBe(true);
  expect(r.live).toBe(0);
  expect(r.abortMs).toBeLessThan(3000);
});
test('atlas padding rejects undersized output, preserves charts and handles thin/dense/index-limit cases', async ({
  page,
}) => {
  const r = await page.evaluate(
    async (u) => (await import(u)).validateAtlasEdges(),
    base + '/tests/browser/atlasValidation.ts',
  );
  console.log(r);
  expect(r.rejected16).toBe(true);
  expect(r.valid64).toBe(true);
  expect(r.valid128).toBe(true);
  expect(r.charts128).toBe(6);
  expect(r.thinFinite).toBe(true);
  expect(r.overflowRejected).toBe(true);
  expect(r.denseFinite || r.denseRestored).toBe(true);
});
