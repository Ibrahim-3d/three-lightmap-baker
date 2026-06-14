import { gzipSync } from 'node:zlib';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const KiB = 1024;
const MiB = KiB * KiB;

const root = process.cwd();
const distDir = path.resolve(root, process.argv[2] ?? 'dist');

const budgets = {
  demoJsGzip: 430 * KiB,
  largestDemoJsRaw: 1.4 * MiB,
  demoCssGzip: 8 * KiB,
  copiedAssetsRaw: 40 * MiB,
  largestCopiedAssetRaw: 6 * MiB,
};

function fmt(bytes) {
  if (bytes >= MiB) return `${(bytes / MiB).toFixed(2)} MiB`;
  return `${(bytes / KiB).toFixed(1)} KiB`;
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (path.relative(distDir, full).startsWith('package')) continue;
      out.push(...walk(full));
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function gzipSize(file) {
  return gzipSync(readFileSync(file)).length;
}

function failIfOver(label, actual, budget, failures) {
  const ok = actual <= budget;
  const line = `${ok ? 'ok' : 'over'} ${label}: ${fmt(actual)} / ${fmt(budget)}`;
  console.info(`[bundle-budget] ${line}`);
  if (!ok) failures.push(line);
}

if (!existsSync(distDir)) {
  throw new Error(`dist directory not found: ${distDir}`);
}

const files = walk(distDir);
const demoJs = files.filter(
  (file) => file.endsWith('.js') && file.includes(`${path.sep}assets${path.sep}`),
);
const demoCss = files.filter(
  (file) => file.endsWith('.css') && file.includes(`${path.sep}assets${path.sep}`),
);
const copiedAssets = files.filter(
  (file) =>
    !file.includes(`${path.sep}package${path.sep}`) &&
    !(file.includes(`${path.sep}assets${path.sep}`) && /\.(?:js|css)$/i.test(file)) &&
    !file.endsWith('.html') &&
    !file.endsWith('.map'),
);

const demoJsGzip = demoJs.reduce((sum, file) => sum + gzipSize(file), 0);
const largestDemoJsRaw = demoJs.reduce((max, file) => Math.max(max, statSync(file).size), 0);
const demoCssGzip = demoCss.reduce((sum, file) => sum + gzipSize(file), 0);
const copiedAssetsRaw = copiedAssets.reduce((sum, file) => sum + statSync(file).size, 0);
const largestCopiedAssetRaw = copiedAssets.reduce(
  (max, file) => Math.max(max, statSync(file).size),
  0,
);

const failures = [];
failIfOver('demo JS gzip', demoJsGzip, budgets.demoJsGzip, failures);
failIfOver('largest demo JS raw', largestDemoJsRaw, budgets.largestDemoJsRaw, failures);
failIfOver('demo CSS gzip', demoCssGzip, budgets.demoCssGzip, failures);
failIfOver('copied demo assets raw', copiedAssetsRaw, budgets.copiedAssetsRaw, failures);
failIfOver(
  'largest copied asset raw',
  largestCopiedAssetRaw,
  budgets.largestCopiedAssetRaw,
  failures,
);

if (failures.length > 0) {
  console.error('[bundle-budget] failed');
  process.exit(1);
}
