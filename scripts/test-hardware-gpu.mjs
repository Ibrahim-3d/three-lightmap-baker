import { spawnSync } from 'node:child_process';

// Both numerical correctness and the full release suite must use verified hardware.
for (const config of ['playwright.correctness.config.ts', 'playwright.release.config.ts']) {
  const result = spawnSync(
    process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
    ['exec', 'playwright', 'test', '--config', config, '--workers=1', ...process.argv.slice(2)],
    {
      stdio: 'inherit',
      env: { ...process.env, BAKER_REQUIRE_HARDWARE_GPU: '1' },
      shell: process.platform === 'win32',
    },
  );
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}
