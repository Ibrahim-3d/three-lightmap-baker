import { defineConfig, devices } from '@playwright/test';

const testTimeoutMs = Number(
  process.env.BAKER_E2E_TEST_TIMEOUT_MS ?? (process.env.CI ? 180_000 : 60_000),
);

/**
 * Playwright config for the demo e2e suite.
 *
 * - Headless Chromium with hardware GL where available. GPU-sensitive tests
 *   must keep the launch args below, especially `--force_high_performance_gpu`
 *   on dual-GPU machines and `--ignore-gpu-blocklist` for blocked drivers.
 * - Boots the Vite dev server (`corepack pnpm run start`) and waits for it before launching.
 * - Base URL appends `?test=1` per spec so `window.__baker` is exposed.
 * - Per-test timeout keeps local runs tight while giving CI's slower browser
 *   runner enough room for real draft bakes.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: testTimeoutMs,
  expect: { timeout: 30_000 },
  fullyParallel: false, // single browser, single tab, GPU contention
  retries: 1,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:5173/three-lightmap-baker/',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--enable-gpu',
            '--use-angle=gl',
            '--enable-webgl',
            '--ignore-gpu-blocklist',
            '--enable-gpu-rasterization',
            '--force_high_performance_gpu',
          ],
        },
      },
    },
  ],
  webServer: {
    command: 'corepack pnpm run start',
    url: 'http://localhost:5173/three-lightmap-baker/',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
