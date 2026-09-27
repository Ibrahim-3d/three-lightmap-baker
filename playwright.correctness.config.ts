import { defineConfig } from '@playwright/test';
const hardware = process.env.BAKER_REQUIRE_HARDWARE_GPU === '1';
const angle = process.env.BAKER_E2E_ANGLE ?? (hardware ? undefined : 'swiftshader');
export default defineConfig({
  testDir: './tests/correctness',
  outputDir: './test-results/correctness',
  globalSetup: './tests/hardware-gpu-setup.ts',
  workers: 1,
  retries: 0,
  reporter: 'list',
  timeout: 120000,
  use: {
    baseURL: 'http://localhost:5173',
    channel: hardware && !process.env.BAKER_CHROMIUM_PATH ? 'chrome' : undefined,
    launchOptions: {
      executablePath: process.env.BAKER_CHROMIUM_PATH,
      args: [
        '--no-sandbox',
        '--enable-webgl',
        '--ignore-gpu-blocklist',
        ...(angle ? [`--use-angle=${angle}`] : []),
        ...(angle === 'swiftshader' ? ['--enable-unsafe-swiftshader'] : []),
      ],
    },
  },
  webServer: {
    command: 'pnpm exec vite --force --host 127.0.0.1',
    url: 'http://localhost:5173/three-lightmap-baker/index.html',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
