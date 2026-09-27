import { defineConfig, devices } from '@playwright/test';
import baseConfig from './playwright.config';

const angleBackend = process.env.BAKER_E2E_ANGLE;
const gpuArgs = [
  '--enable-gpu',
  '--enable-webgl',
  '--ignore-gpu-blocklist',
  '--enable-gpu-rasterization',
  '--force_high_performance_gpu',
];
if (angleBackend) gpuArgs.push(`--use-angle=${angleBackend}`);

/** Local real-hardware release gate: installed Chrome with its native ANGLE choice. */
export default defineConfig({
  ...baseConfig,
  globalSetup: './tests/hardware-gpu-setup.ts',
  outputDir: './test-results/release',
  // GitHub runners only install Playwright Chromium and do not constitute a
  // hardware gate. Locally, use installed Chrome and its native ANGLE backend.
  projects: process.env.CI
    ? baseConfig.projects
    : [
        {
          name: process.env.BAKER_CHROMIUM_PATH ? 'configured-chromium' : 'chrome-hardware',
          use: {
            ...devices['Desktop Chrome'],
            channel: process.env.BAKER_CHROMIUM_PATH ? undefined : 'chrome',
            launchOptions: {
              executablePath: process.env.BAKER_CHROMIUM_PATH,
              args: [
                ...gpuArgs,
                ...(angleBackend === 'swiftshader' ? ['--enable-unsafe-swiftshader'] : []),
              ],
            },
          },
        },
      ],
});
