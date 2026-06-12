import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const tscBin =
  process.platform === 'win32'
    ? path.join(repoRoot, 'node_modules', '.bin', 'tsc.cmd')
    : path.join(repoRoot, 'node_modules', '.bin', 'tsc');
const runNpm = (args, options = {}) =>
  execFileSync('npm', args, {
    ...options,
    shell: process.platform === 'win32',
  });
const runBin = (bin, args, options = {}) =>
  execFileSync(bin, args, {
    ...options,
    shell: process.platform === 'win32',
  });

const assertExports = (label, mod) => {
  if (typeof mod?.LightmapBaker !== 'function') {
    throw new Error(`${label}: LightmapBaker export is missing`);
  }
  if (typeof mod?.loadXAtlasThree !== 'function') {
    throw new Error(`${label}: loadXAtlasThree export is missing`);
  }
  if (typeof mod?.createRendererAdapter !== 'function') {
    throw new Error(`${label}: createRendererAdapter export is missing`);
  }
};

const esmLocal = await import('three-lightmap-baker');
assertExports('local ESM', esmLocal);

const requireLocal = createRequire(import.meta.url);
const cjsLocal = requireLocal('three-lightmap-baker');
assertExports('local CJS', cjsLocal);

const packOutput = runNpm(['pack'], { cwd: repoRoot, encoding: 'utf8' });
const packLines = packOutput
  .trim()
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);
let tarballName = '';
for (const line of packLines) {
  if (line.endsWith('.tgz')) tarballName = line;
}

if (!tarballName) {
  throw new Error('npm pack did not return a tarball name');
}

const tarballPath = path.join(repoRoot, tarballName);
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tlb-pack-'));

try {
  runNpm(['init', '-y'], { cwd: tempDir, stdio: 'ignore' });
  runNpm(['install', tarballPath], { cwd: tempDir, stdio: 'ignore' });

  const esmCheck = path.join(tempDir, 'esm-check.mjs');
  const cjsCheck = path.join(tempDir, 'cjs-check.cjs');
  const typesCheck = path.join(tempDir, 'types-check.ts');
  const tsconfig = path.join(tempDir, 'tsconfig.json');
  fs.writeFileSync(
    esmCheck,
    "import { LightmapBaker, loadXAtlasThree, createRendererAdapter } from 'three-lightmap-baker';\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n" +
      "if (typeof createRendererAdapter !== 'function') throw new Error('missing createRendererAdapter');\n",
  );
  fs.writeFileSync(
    cjsCheck,
    "const { LightmapBaker, loadXAtlasThree, createRendererAdapter } = require('three-lightmap-baker');\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n" +
      "if (typeof createRendererAdapter !== 'function') throw new Error('missing createRendererAdapter');\n",
  );

  execFileSync('node', [esmCheck], { cwd: tempDir, stdio: 'ignore' });
  execFileSync('node', [cjsCheck], { cwd: tempDir, stdio: 'ignore' });

  fs.writeFileSync(
    typesCheck,
    "import { LightmapBaker, createRendererAdapter, type LightmapBakerOptions, type LightmapRendererAdapter } from 'three-lightmap-baker';\n" +
      'const opts: LightmapBakerOptions = { samples: 4, bounces: 1, resolution: 64 };\n' +
      'const baker = new LightmapBaker(opts);\n' +
      'baker.setRenderer;\n' +
      'baker.setRendererAdapter;\n' +
      'const renderer = {} as import("three").WebGLRenderer;\n' +
      'const adapter: LightmapRendererAdapter = createRendererAdapter(renderer, { label: "smoke" });\n' +
      'new LightmapBaker(adapter, opts);\n' +
      'new LightmapBaker({ rendererAdapter: adapter, ...opts });\n',
  );
  fs.writeFileSync(
    tsconfig,
    JSON.stringify(
      {
        compilerOptions: {
          strict: true,
          module: 'ESNext',
          moduleResolution: 'node',
          target: 'ES2020',
          skipLibCheck: false,
          noEmit: true,
        },
        include: ['types-check.ts'],
      },
      null,
      2,
    ),
  );
  runBin(tscBin, ['-p', tsconfig], { cwd: tempDir, stdio: 'inherit' });
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (fs.existsSync(tarballPath)) fs.unlinkSync(tarballPath);
}

console.log('[baker] exports resolve via ESM/CJS, tarball install, and TypeScript declarations');
