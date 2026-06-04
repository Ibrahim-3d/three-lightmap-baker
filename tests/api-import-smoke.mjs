import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

const assertExports = (label, mod) => {
  if (typeof mod?.LightmapBaker !== 'function') {
    throw new Error(`${label}: LightmapBaker export is missing`);
  }
  if (typeof mod?.loadXAtlasThree !== 'function') {
    throw new Error(`${label}: loadXAtlasThree export is missing`);
  }
};

const esmLocal = await import('three-lightmap-baker');
assertExports('local ESM', esmLocal);

const requireLocal = createRequire(import.meta.url);
const cjsLocal = requireLocal('three-lightmap-baker');
assertExports('local CJS', cjsLocal);

const packOutput = execFileSync('npm', ['pack'], { cwd: repoRoot, encoding: 'utf8' });
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
  execFileSync('npm', ['init', '-y'], { cwd: tempDir, stdio: 'ignore' });
  execFileSync('npm', ['install', tarballPath], { cwd: tempDir, stdio: 'ignore' });

  const esmCheck = path.join(tempDir, 'esm-check.mjs');
  const cjsCheck = path.join(tempDir, 'cjs-check.cjs');
  fs.writeFileSync(
    esmCheck,
    "import { LightmapBaker, loadXAtlasThree } from 'three-lightmap-baker';\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n",
  );
  fs.writeFileSync(
    cjsCheck,
    "const { LightmapBaker, loadXAtlasThree } = require('three-lightmap-baker');\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n",
  );

  execFileSync('node', [esmCheck], { cwd: tempDir, stdio: 'ignore' });
  execFileSync('node', [cjsCheck], { cwd: tempDir, stdio: 'ignore' });
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (fs.existsSync(tarballPath)) fs.unlinkSync(tarballPath);
}

console.log('[smoke] exports resolve via ESM/CJS and tarball install');
