import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for the demo e2e suite.
 *
 * - Headless Chromium (new headless mode) with hardware GL and high-performance GPU forced.
 * - `--headless=new` (Chrome 112+) shares GPU pipeline with headed mode — real WebGL.
 * - `--force_high_performance_gpu` maps to chrome://flags/#force-high-performance-gpu.
 * - `launchOptions` lives in top-level `use` so ALL projects inherit it by default.
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
        launchOptions: {
            args: [
                '--headless=new',               // new headless — real GPU pipeline (Chrome 112+)
                '--enable-gpu',
                '--use-gl=angle',
                '--use-angle=default',          // best ANGLE backend for current platform
                '--enable-gpu-rasterization',
                '--ignore-gpu-blocklist',       // bypass bad-driver blocklist
                '--force_high_performance_gpu', // chrome://flags/#force-high-performance-gpu
                '--disable-software-rasterizer',
                '--enable-webgl',
                '--enable-webgl2',
            ],
        },
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
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
