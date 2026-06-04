import { execSync } from 'node:child_process';
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

const packOutput = execSync('npm pack', { cwd: repoRoot, encoding: 'utf8' });
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
  execSync('npm init -y', { cwd: tempDir, stdio: 'ignore' });
  execSync(`npm install ${tarballPath}`, { cwd: tempDir, stdio: 'ignore' });

  execSync(
    'node --input-type=module -e "import(\'three-lightmap-baker\').then((m)=>{if(typeof m.LightmapBaker!==\'function\') throw new Error(\'missing LightmapBaker\'); if(typeof m.loadXAtlasThree!==\'function\') throw new Error(\'missing loadXAtlasThree\');})"',
    { cwd: tempDir, stdio: 'ignore' },
  );

  execSync(
    "node -e \"const m=require('three-lightmap-baker'); if(typeof m.LightmapBaker!=='function') throw new Error('missing LightmapBaker'); if(typeof m.loadXAtlasThree!=='function') throw new Error('missing loadXAtlasThree');\"",
    { cwd: tempDir, stdio: 'ignore' },
  );
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (fs.existsSync(tarballPath)) fs.unlinkSync(tarballPath);
}

console.log('[smoke] exports resolve via ESM/CJS and tarball install');
