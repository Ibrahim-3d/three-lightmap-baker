import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for the demo e2e suite.
 *
 * - Headless Chromium with hardware GL where available (`--enable-gpu`,
 *   `--use-angle=gl`). Tests run under SwiftShader as fallback (slow but works).
 * - Boots the Vite dev server (`npm run start`) and waits for it before launching.
 * - Base URL appends `?test=1` per spec so `window.__baker` is exposed.
 * - Per-test timeout long enough for a Draft bake (~10s on SwiftShader).
 */
export default defineConfig({
    testDir: './tests/e2e',
    timeout: 60_000,
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
                    ],
                },
            },
        },
    ],
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:5173/three-lightmap-baker/',
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
        stdout: 'ignore',
        stderr: 'pipe',
    },
});
