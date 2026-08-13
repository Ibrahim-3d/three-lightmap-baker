import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const packageManifest = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const esmBundlePath = path.join(repoRoot, 'dist', 'package', 'index.js');
const cjsBundlePath = path.join(repoRoot, 'dist', 'package', 'index.cjs');
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
  if (typeof mod?.captureNativeLightProbeGrid !== 'function') {
    throw new Error(`${label}: captureNativeLightProbeGrid export is missing`);
  }
  if (typeof mod?.captureLightmappedProbeGrid !== 'function') {
    throw new Error(`${label}: captureLightmappedProbeGrid export is missing`);
  }
  if (typeof mod?.createRendererAdapter !== 'function') {
    throw new Error(`${label}: createRendererAdapter export is missing`);
  }
  if (typeof mod?.getLightmapRuntimeCapabilities !== 'function') {
    throw new Error(`${label}: getLightmapRuntimeCapabilities export is missing`);
  }
  if (typeof mod?.ProbeVolume !== 'function') {
    throw new Error(`${label}: ProbeVolume export is missing`);
  }
  if (typeof mod?.generateProbeVolume !== 'function') {
    throw new Error(`${label}: generateProbeVolume export is missing`);
  }
  if (typeof mod?.bindProbeLighting !== 'function') {
    throw new Error(`${label}: bindProbeLighting export is missing`);
  }
  if (typeof mod?.classifyRenderer !== 'function') {
    throw new Error(`${label}: classifyRenderer export is missing`);
  }
  if (mod.classifyRenderer('ANGLE (NVIDIA, NVIDIA GeForce RTX 3060, D3D11)') !== 'discrete') {
    throw new Error(`${label}: classifyRenderer discrete smoke failed`);
  }
  if (mod.classifyRenderer('ANGLE (Intel, Intel(R) Iris(R) Xe Graphics, D3D11)') !== 'integrated') {
    throw new Error(`${label}: classifyRenderer integrated smoke failed`);
  }
};

if (packageManifest.dependencies?.three !== undefined) {
  throw new Error('three must not be owned as a runtime dependency');
}
if (packageManifest.dependencies?.['@types/three'] !== '^0.185.4') {
  throw new Error('@types/three must ship with the published r185 TypeScript contract');
}
for (const editorDependency of ['preact', '@preact/signals', 'lucide-preact']) {
  if (packageManifest.dependencies?.[editorDependency] !== undefined) {
    throw new Error(`${editorDependency} must not be owned as a runtime dependency`);
  }
  if (packageManifest.devDependencies?.[editorDependency] === undefined) {
    throw new Error(`${editorDependency} must remain available to the demo as a dev dependency`);
  }
}
if (packageManifest.peerDependencies?.three !== '>=0.185.1 <0.186.0') {
  throw new Error('three peer dependency must stay constrained to the tested r185 line');
}
if (packageManifest.devDependencies?.three !== '0.185.1') {
  throw new Error('the repository must test against exactly three 0.185.1');
}

for (const bundlePath of [esmBundlePath, cjsBundlePath]) {
  const source = fs.readFileSync(bundlePath, 'utf8');
  for (const externalId of [
    'three',
    'three/addons/lighting/LightProbeGrid.js',
    'three/examples/jsm/utils/BufferGeometryUtils.js',
    'three/examples/jsm/exporters/EXRExporter.js',
  ]) {
    if (!source.includes(externalId)) {
      throw new Error(`${path.basename(bundlePath)} must retain external import ${externalId}`);
    }
  }
  if (source.includes('cdn.jsdelivr.net')) {
    throw new Error(`${path.basename(bundlePath)} must not require the jsDelivr xatlas CDN`);
  }
  for (const forbidden of ['preact', '@preact/signals', 'panelRegistry', 'menuRegistry']) {
    if (source.includes(forbidden)) {
      throw new Error(`${path.basename(bundlePath)} leaked editor dependency ${forbidden}`);
    }
  }
  if (!source.includes('data:application/wasm;base64,')) {
    throw new Error(`${path.basename(bundlePath)} is missing the packaged xatlas WASM asset`);
  }
}

const esmLocal = await import('lightmap-baker');
assertExports('local ESM', esmLocal);

const requireLocal = createRequire(import.meta.url);
const cjsLocal = requireLocal('lightmap-baker');
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
  runNpm(['install', 'three@0.185.1', tarballPath], { cwd: tempDir, stdio: 'ignore' });

  const installedManifest = JSON.parse(
    fs.readFileSync(
      path.join(tempDir, 'node_modules', 'lightmap-baker', 'package.json'),
      'utf8',
    ),
  );
  if (installedManifest.dependencies?.['@types/three'] !== '^0.185.4') {
    throw new Error('packed package is missing its @types/three runtime declaration dependency');
  }
  for (const editorDependency of ['preact', '@preact/signals', 'lucide-preact']) {
    if (installedManifest.dependencies?.[editorDependency] !== undefined) {
      throw new Error(`packed package leaked editor runtime dependency ${editorDependency}`);
    }
    if (fs.existsSync(path.join(tempDir, 'node_modules', ...editorDependency.split('/')))) {
      throw new Error(`tarball install pulled editor runtime package ${editorDependency}`);
    }
  }

  const esmCheck = path.join(tempDir, 'esm-check.mjs');
  const cjsCheck = path.join(tempDir, 'cjs-check.cjs');
  const typesCheck = path.join(tempDir, 'types-check.ts');
  const tsconfig = path.join(tempDir, 'tsconfig.json');
  fs.writeFileSync(
    esmCheck,
    "import { LightmapBaker, LightmapBakeResult, ProbeVolume, captureNativeLightProbeGrid, captureNativeLightProbeGridFromJSON, loadXAtlasThree, createRendererAdapter, generateProbeVolume, bindProbeLighting, getLightmapRuntimeCapabilities, classifyRenderer } from 'lightmap-baker';\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof LightmapBakeResult !== 'function') throw new Error('missing LightmapBakeResult');\n" +
      "if (typeof captureNativeLightProbeGrid !== 'function') throw new Error('missing captureNativeLightProbeGrid');\n" +
      "if (typeof captureNativeLightProbeGridFromJSON !== 'function') throw new Error('missing captureNativeLightProbeGridFromJSON');\n" +
      "if (typeof ProbeVolume !== 'function') throw new Error('missing ProbeVolume');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n" +
      "if (typeof createRendererAdapter !== 'function') throw new Error('missing createRendererAdapter');\n" +
      "if (typeof generateProbeVolume !== 'function') throw new Error('missing generateProbeVolume');\n" +
      "if (typeof bindProbeLighting !== 'function') throw new Error('missing bindProbeLighting');\n" +
      "if (getLightmapRuntimeCapabilities().runtime !== 'node') throw new Error('expected node runtime');\n" +
      "if (classifyRenderer('ANGLE (NVIDIA, NVIDIA GeForce RTX 3060, D3D11)') !== 'discrete') throw new Error('expected discrete gpu');\n",
  );
  fs.writeFileSync(
    cjsCheck,
    "const { LightmapBaker, LightmapBakeResult, ProbeVolume, captureNativeLightProbeGrid, captureNativeLightProbeGridFromJSON, loadXAtlasThree, createRendererAdapter, generateProbeVolume, bindProbeLighting, getLightmapRuntimeCapabilities, classifyRenderer } = require('lightmap-baker');\n" +
      "if (typeof LightmapBaker !== 'function') throw new Error('missing LightmapBaker');\n" +
      "if (typeof LightmapBakeResult !== 'function') throw new Error('missing LightmapBakeResult');\n" +
      "if (typeof captureNativeLightProbeGrid !== 'function') throw new Error('missing captureNativeLightProbeGrid');\n" +
      "if (typeof captureNativeLightProbeGridFromJSON !== 'function') throw new Error('missing captureNativeLightProbeGridFromJSON');\n" +
      "if (typeof ProbeVolume !== 'function') throw new Error('missing ProbeVolume');\n" +
      "if (typeof loadXAtlasThree !== 'function') throw new Error('missing loadXAtlasThree');\n" +
      "if (typeof createRendererAdapter !== 'function') throw new Error('missing createRendererAdapter');\n" +
      "if (typeof generateProbeVolume !== 'function') throw new Error('missing generateProbeVolume');\n" +
      "if (typeof bindProbeLighting !== 'function') throw new Error('missing bindProbeLighting');\n" +
      "if (getLightmapRuntimeCapabilities().runtime !== 'node') throw new Error('expected node runtime');\n" +
      "if (classifyRenderer('ANGLE (Intel, Intel(R) Iris(R) Xe Graphics, D3D11)') !== 'integrated') throw new Error('expected integrated gpu');\n",
  );

  execFileSync('node', [esmCheck], { cwd: tempDir, stdio: 'ignore' });
  execFileSync('node', [cjsCheck], { cwd: tempDir, stdio: 'ignore' });

  fs.writeFileSync(
    typesCheck,
    "import { LightmapBaker, ProbeVolume, createRendererAdapter, generateProbeVolume, bindProbeLighting, getLightmapRuntimeCapabilities, classifyRenderer, type LightmapBakerOptions, type LightmapRendererAdapter, type LightmapRuntimeCapabilities, type GenerateProbeVolumeOptions, type ProbeLightingBindingOptions, type GPUTier } from 'lightmap-baker';\n" +
      'const opts: LightmapBakerOptions = { samples: 4, bounces: 1, resolution: 64 };\n' +
      'const baker = new LightmapBaker(opts);\n' +
      'baker.setRenderer;\n' +
      'baker.setRendererAdapter;\n' +
      'const renderer = {} as import("three").WebGLRenderer;\n' +
      'const adapter: LightmapRendererAdapter = createRendererAdapter(renderer, { label: "smoke" });\n' +
      'new LightmapBaker(adapter, opts);\n' +
      'new LightmapBaker({ rendererAdapter: adapter, ...opts });\n' +
      'const runtimeCaps: LightmapRuntimeCapabilities = getLightmapRuntimeCapabilities();\n' +
      'runtimeCaps.canBake;\n' +
      'const probeOptions: GenerateProbeVolumeOptions = { spacing: 1, maxProbes: 128 };\n' +
      'const bindingOptions: ProbeLightingBindingOptions = { intensity: 1 };\n' +
      'ProbeVolume;\n' +
      'generateProbeVolume;\n' +
      'bindProbeLighting;\n' +
      'probeOptions;\n' +
      'bindingOptions;\n' +
      'const tier: GPUTier = classifyRenderer("Apple M2 Pro");\n' +
      'tier;\n',
  );
  fs.writeFileSync(
    tsconfig,
    JSON.stringify(
      {
        compilerOptions: {
          strict: true,
          module: 'ESNext',
          moduleResolution: 'Bundler',
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

console.log(
  '[baker] exports resolve via ESM/CJS, tarball install, runtime/GPU probes, and TypeScript declarations',
);
