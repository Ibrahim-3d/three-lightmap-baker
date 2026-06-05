import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { chromium } from '@playwright/test';

const root = process.cwd();
const outDir = path.resolve(root, 'launch-artifacts');
const baseUrl = process.env.BAKER_CAPTURE_URL ?? 'http://localhost:5173/three-lightmap-baker/';
const scene = process.env.BAKER_CAPTURE_SCENE ?? 'cornell.advanced';
const captureResolution = Number(process.env.BAKER_CAPTURE_RESOLUTION ?? 128);
const captureCasts = Number(process.env.BAKER_CAPTURE_CASTS ?? 2);
const captureFrames = Number(process.env.BAKER_CAPTURE_FRAMES ?? 8);
const url = `${baseUrl}?test=1&scene=${encodeURIComponent(scene)}`;
const chromeArgs = [
  '--enable-gpu',
  '--use-angle=gl',
  '--enable-webgl',
  '--ignore-gpu-blocklist',
  '--enable-gpu-rasterization',
  '--force_high_performance_gpu',
  '--disable-background-timer-throttling',
  '--disable-renderer-backgrounding',
];

function waitForUrl(target, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(target, (res) => {
        res.resume();
        if ((res.statusCode ?? 0) < 500) {
          resolve();
        } else if (Date.now() > deadline) {
          reject(new Error(`Timed out waiting for ${target}: HTTP ${res.statusCode}`));
        } else {
          setTimeout(tick, 1000);
        }
      });
      req.on('error', () => {
        if (Date.now() > deadline) reject(new Error(`Timed out waiting for ${target}`));
        else setTimeout(tick, 1000);
      });
    };
    tick();
  });
}

async function startServerIfNeeded() {
  try {
    await waitForUrl(baseUrl, 2_000);
    return null;
  } catch {
    const npmBin = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const child = spawn(npmBin, ['run', 'start'], {
      cwd: root,
      stdio: ['ignore', 'ignore', 'pipe'],
      shell: process.platform === 'win32',
    });
    child.stderr.on('data', (chunk) => process.stderr.write(chunk));
    await waitForUrl(baseUrl, 60_000);
    return child;
  }
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const server = await startServerIfNeeded();

  const browser = await chromium.launch({
    headless: process.env.HEADED ? false : true,
    args: chromeArgs,
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('console', (msg) => {
    const text = msg.text();
    if (
      text.includes('[baker]') ||
      text.includes('[capture]') ||
      text.includes('WebGL') ||
      msg.type() === 'error'
    ) {
      console.info(`[browser:${msg.type()}] ${text}`);
    }
  });

  const startedAt = new Date().toISOString();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('body[data-baker-ready="1"]', { timeout: 30_000 });
    await page.waitForFunction(() => {
      const w = window;
      return !!w.__baker && w.__baker.getMeshCount() > 0;
    });
    const meshCount = await page.evaluate(() => window.__baker.getMeshCount());
    if (meshCount <= 0) {
      throw new Error(`Scene "${scene}" has no bake-eligible meshes`);
    }

    const gpu = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      const gl = canvas?.getContext('webgl2') ?? canvas?.getContext('webgl');
      if (!gl) return { vendor: 'unavailable', renderer: 'unavailable' };
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      return {
        vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
        renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
      };
    });

    await page.evaluate(() => window.__baker.setLayer('albedoUnlit'));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, 'before-albedo-unlit.png') });
    await page.evaluate(() => window.__baker.setLayer('combined'));
    await page.waitForTimeout(250);

    const t0 = Date.now();
    await page.evaluate(
      ({ resolution, casts, frames }) => {
        const baker = window.__baker;
        baker.setQuality('Custom');
        baker.options.lightMapSize = resolution;
        baker.options.casts = casts;
        baker.options.targetSamples = frames;
        baker.options.samples = 0;
        void baker.requestBake();
      },
      { resolution: captureResolution, casts: captureCasts, frames: captureFrames },
    );
    await page.waitForFunction(
      () => window.__baker.getBakeStatus() === 'done',
      undefined,
      {
        timeout: Number(process.env.BAKER_CAPTURE_TIMEOUT_MS ?? 120_000),
        polling: 250,
      },
    );
    const elapsedMs = Date.now() - t0;

    await page.evaluate(() => window.__baker.setLayer('combined'));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, 'after-baked-combined.png') });

    const diag = await page.evaluate(() => window.__baker.getRenderDiag());
    const metrics = {
      capturedAt: startedAt,
      scene,
      quality: 'Capture',
      settings: {
        resolution: captureResolution,
        casts: captureCasts,
        frames: captureFrames,
      },
      elapsedMs,
      elapsedSeconds: Number((elapsedMs / 1000).toFixed(2)),
      gpu,
      renderDiag: diag,
      meshCount,
      browser: await browser.version(),
      userAgent: await page.evaluate(() => navigator.userAgent),
      platform: {
        os: `${os.type()} ${os.release()}`,
        arch: os.arch(),
        cpus: os.cpus().length,
      },
      chromeArgs,
      outputs: {
        before: 'before-albedo-unlit.png',
        after: 'after-baked-combined.png',
      },
    };

    writeFileSync(path.join(outDir, 'benchmark.json'), JSON.stringify(metrics, null, 2));
    writeFileSync(
      path.join(outDir, 'benchmark.md'),
      [
        '# Launch Capture Benchmark',
        '',
        `- Scene: ${scene}`,
        '- Quality: Capture',
        `- Resolution: ${captureResolution}`,
        `- Casts per frame: ${captureCasts}`,
        `- Frames: ${captureFrames}`,
        `- Bake time: ${metrics.elapsedSeconds}s`,
        `- GPU: ${gpu.renderer}`,
        `- Browser: ${metrics.browser}`,
        `- Chrome args: ${chromeArgs.join(' ')}`,
        '',
        '| Device | Scene | Resolution | Samples | Bounces | Denoise | Bake Time |',
        '|---|---:|---:|---:|---:|---:|---:|',
        `| ${gpu.renderer} | ${scene} | ${captureResolution} | ${captureCasts} x ${captureFrames} frames | App setting | App setting | ${metrics.elapsedSeconds}s |`,
        '',
      ].join('\n'),
    );

    console.info(`[capture] wrote ${outDir}`);
    console.info(`[capture] bake time ${metrics.elapsedSeconds}s on ${gpu.renderer}`);
  } finally {
    await browser.close();
    if (server) server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
