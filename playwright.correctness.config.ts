import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/correctness',
  workers: 1,
  retries: 0,
  reporter: 'list',
  timeout: 120000,
  use: {
    baseURL: 'http://localhost:5173',
    launchOptions: {
      executablePath: process.env.BAKER_CHROMIUM_PATH,
      args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    },
  },
  webServer: {
    command: 'pnpm exec vite --force --host 127.0.0.1',
    url: 'http://localhost:5173/three-lightmap-baker/index.html',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
