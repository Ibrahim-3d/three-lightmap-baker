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
  // GitHub runners only install Playwright Chromium and do not constitute a
  // hardware gate. Locally, use installed Chrome and its native ANGLE backend.
  projects: process.env.CI
    ? baseConfig.projects
    : [
        {
          name: 'chrome-hardware',
          use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome',
            launchOptions: { args: gpuArgs },
          },
        },
      ],
});
