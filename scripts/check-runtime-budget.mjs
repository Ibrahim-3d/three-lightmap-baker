import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const benchmarkPath = path.resolve(
  root,
  process.env.BAKER_BENCHMARK_JSON ?? 'launch-artifacts/benchmark.json',
);

const defaultPresetBudgetsMs = {
  Draft: 15_000,
  Preview: 20_000,
  Production: 90_000,
  Final: 900_000,
};

function envBudgetMs(preset) {
  const key = `BAKER_RUNTIME_BUDGET_${preset.toUpperCase()}_MS`;
  const value = process.env[key];
  if (!value) return defaultPresetBudgetsMs[preset];
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${key} must be a positive millisecond value, got "${value}"`);
  }
  return parsed;
}

function fmt(ms) {
  return `${(ms / 1000).toFixed(2)}s`;
}

if (!existsSync(benchmarkPath)) {
  throw new Error(
    [
      `[runtime-budget] missing ${path.relative(root, benchmarkPath)}`,
      'Run `pnpm run capture:launch` on the target benchmark machine first, or set BAKER_BENCHMARK_JSON.',
    ].join('\n'),
  );
}

const metrics = JSON.parse(readFileSync(benchmarkPath, 'utf8').replace(/^\uFEFF/, ''));
const rows = Array.isArray(metrics.benchmarks) ? metrics.benchmarks : [];
if (!rows.length) {
  throw new Error('[runtime-budget] benchmark.json has no benchmarks[] rows');
}

const failures = [];
for (const row of rows) {
  const preset = row.preset;
  const actual = Number(row.elapsedMs);
  const budget = envBudgetMs(preset);
  if (!budget) {
    console.info(`[runtime-budget] skip ${preset}: no budget configured`);
    continue;
  }
  if (!Number.isFinite(actual) || actual <= 0) {
    failures.push(`${preset}: invalid elapsedMs ${row.elapsedMs}`);
    continue;
  }

  const ok = actual <= budget;
  console.info(`[runtime-budget] ${ok ? 'ok' : 'over'} ${preset}: ${fmt(actual)} / ${fmt(budget)}`);
  if (!ok) failures.push(`${preset}: ${fmt(actual)} > ${fmt(budget)}`);
}

if (failures.length) {
  console.error('[runtime-budget] failed');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
}
