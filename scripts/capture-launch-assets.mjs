import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { chromium } from '@playwright/test';

const root = process.cwd();
const outDir = path.resolve(root, 'launch-artifacts');
const baseUrl = process.env.BAKER_CAPTURE_URL ?? 'http://localhost:5173/';
const scene = process.env.BAKER_CAPTURE_SCENE ?? 'cornell.advanced';
const screenshotPresetNames = (
  process.env.BAKER_CAPTURE_SCREENSHOT_PRESETS ?? 'Preview,Production'
)
  .split(',')
  .map((preset) => preset.trim())
  .filter(Boolean);
const expectedGpu = process.env.BAKER_EXPECT_GPU?.trim();
const requestedBrowserChannel = process.env.BAKER_CAPTURE_BROWSER_CHANNEL?.trim();
const browserChannel =
  requestedBrowserChannel === 'bundled' ? undefined : requestedBrowserChannel || 'chrome';
const requestedAngle = process.env.BAKER_CAPTURE_ANGLE?.trim();
const defaultAngleCandidates =
  process.platform === 'win32' ? ['d3d11', 'd3d11on12', 'gl'] : ['default', 'gl'];
const angleCandidates = requestedAngle
  ? requestedAngle
      .split(',')
      .map((candidate) => candidate.trim())
      .filter(Boolean)
  : defaultAngleCandidates;
const probeTimeoutMs = Number(process.env.BAKER_CAPTURE_PROBE_TIMEOUT_MS ?? 30_000);
const benchmarkTimeoutMs = Number(process.env.BAKER_BENCHMARK_TIMEOUT_MS ?? 1_800_000);
const screenshotTimeoutMs = Number(process.env.BAKER_SCREENSHOT_TIMEOUT_MS ?? 600_000);
const benchmarkPresetNames = (
  process.env.BAKER_BENCHMARK_PRESETS ?? 'Draft,Preview,Production,Final'
)
  .split(',')
  .map((preset) => preset.trim())
  .filter(Boolean);

const qualityPresets = {
  Draft: { lightMapSize: 256, casts: 4, targetSamples: 32 },
  Preview: { lightMapSize: 512, casts: 5, targetSamples: 96 },
  Production: { lightMapSize: 1024, casts: 6, targetSamples: 256 },
  Final: { lightMapSize: 2048, casts: 8, targetSamples: 512 },
};

const fixedChromeArgs = [
  '--enable-gpu',
  '--enable-webgl',
  '--enable-webgl2',
  '--ignore-gpu-blocklist',
  '--disable-gpu-driver-bug-workarounds',
  '--force-gpu-rasterization',
  '--enable-gpu-rasterization',
  '--enable-accelerated-2d-canvas',
  '--enable-zero-copy',
  '--disable-software-rasterizer',
  '--force_high_performance_gpu',
  '--disable-background-timer-throttling',
  '--disable-renderer-backgrounding',
];

function buildChromeArgs(angleBackend) {
  const angleArg =
    angleBackend && angleBackend !== 'default' ? [`--use-angle=${angleBackend}`] : [];
  return [...fixedChromeArgs, ...angleArg];
}

function buildSceneUrl() {
  const url = new URL(baseUrl);
  url.searchParams.set('test', '1');
  url.searchParams.set('scene', scene);
  return url.toString();
}

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

async function launchBrowser(chromeArgs) {
  const launchOptions = {
    headless: process.env.HEADED ? false : true,
    args: chromeArgs,
  };
  if (browserChannel) {
    launchOptions.channel = browserChannel;
  }

  return chromium.launch(launchOptions);
}

function attachConsoleLogging(page) {
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
}

async function preparePage(browser) {
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  attachConsoleLogging(page);

  await page.goto(buildSceneUrl(), { waitUntil: 'domcontentloaded' });
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

  return { page, meshCount, gpu };
}

async function withTimeout(promise, timeoutMs, label) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(
      () => reject(new Error(`${label} timed out after ${timeoutMs}ms`)),
      timeoutMs,
    );
  });

  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timeoutId);
  }
}

function gpuMatchesExpected(gpu) {
  if (!expectedGpu) return true;
  const renderer = `${gpu.vendor} ${gpu.renderer}`;
  return renderer.toLowerCase().includes(expectedGpu.toLowerCase());
}

async function chooseLaunchConfig() {
  const probes = [];

  for (const angleBackend of angleCandidates) {
    const chromeArgs = buildChromeArgs(angleBackend);
    let browser;
    try {
      browser = await launchBrowser(chromeArgs);
      const { gpu } = await withTimeout(
        preparePage(browser),
        probeTimeoutMs,
        `ANGLE ${angleBackend} probe`,
      );
      probes.push({ angleBackend, gpu });
      console.info(`[capture] ANGLE ${angleBackend}: ${gpu.renderer}`);

      if (gpuMatchesExpected(gpu)) {
        return { angleBackend, chromeArgs, probes };
      }
    } catch (err) {
      probes.push({
        angleBackend,
        error: err instanceof Error ? err.message : String(err),
      });
      console.warn(`[capture] ANGLE ${angleBackend} probe failed: ${probes.at(-1).error}`);
    } finally {
      if (browser) await browser.close();
    }

    if (!expectedGpu) break;
  }

  throw new Error(
    [
      `Expected GPU containing "${expectedGpu}", but no Chrome/ANGLE launch mode matched it.`,
      `Browser channel: ${browserChannel || 'playwright bundled chromium'}`,
      `Tried ANGLE backends: ${angleCandidates.join(', ')}`,
      'Probe results:',
      ...probes.map((probe) => {
        if (probe.gpu) return `- ${probe.angleBackend}: ${probe.gpu.renderer}`;
        return `- ${probe.angleBackend}: ${probe.error}`;
      }),
    ].join('\n'),
  );
}

async function waitForBakeDone(page, timeoutMs, label) {
  await page.waitForFunction(() => window.__baker.getBakeStatus() === 'done', undefined, {
    timeout: timeoutMs,
    polling: 500,
  });
  const status = await page.evaluate(() => window.__baker.getBakeStatus());
  if (status !== 'done') throw new Error(`${label} ended with status ${status}`);
}

async function setLayer(page, layer) {
  await page.evaluate((id) => window.__baker.setLayer(id), layer);
  await page.waitForTimeout(750);
}

async function screenshotCanvas(page, filename) {
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => resolve(null))));
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => resolve(null))));
  const dataUrl = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('No canvas element found for capture');
    }
    return canvas.toDataURL('image/png');
  });
  const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
  writeFileSync(path.join(outDir, filename), Buffer.from(base64, 'base64'));
}

async function prepareScreenshotPage(browser) {
  const { page } = await preparePage(browser);
  await page.evaluate(() => {
    const app = window.__baker;
    app.options.showGizmo = false;
    app.sceneController.gridHelper.visible = false;
    app.sceneController.axesHelper.visible = false;
    app.sceneController.lightMarker.visible = false;
  });
  await page.waitForTimeout(500);
  return page;
}

function outputNameForPreset(presetName) {
  return `after-${presetName.toLowerCase()}-baked-combined.png`;
}

async function runScreenshotCapture(browser) {
  for (const presetName of screenshotPresetNames) {
    if (!qualityPresets[presetName]) {
      throw new Error(
        `Unknown screenshot preset "${presetName}". Use one of ${Object.keys(qualityPresets).join(
          ', ',
        )}.`,
      );
    }
  }

  const beforePage = await prepareScreenshotPage(browser);
  try {
    await setLayer(beforePage, 'combined');
    await screenshotCanvas(beforePage, 'before-solid-viewport.png');
  } finally {
    await beforePage.close();
  }

  const captures = [];
  for (const presetName of screenshotPresetNames) {
    const page = await prepareScreenshotPage(browser);
    try {
      const startedAt = Date.now();
      await page.evaluate((name) => window.__baker.setQuality(name), presetName);
      await waitForBakeDone(page, screenshotTimeoutMs, `${presetName} screenshot bake`);
      const elapsedMs = Date.now() - startedAt;
      const filename = outputNameForPreset(presetName);

      await setLayer(page, 'combined');
      await screenshotCanvas(page, filename);

      captures.push({
        preset: presetName,
        settings: qualityPresets[presetName],
        elapsedMs,
        elapsedSeconds: Number((elapsedMs / 1000).toFixed(2)),
        output: filename,
      });
    } finally {
      await page.close();
    }
  }

  const mainAfter = captures.find((capture) => capture.preset === 'Production') ?? captures.at(-1);

  return {
    presets: screenshotPresetNames,
    captures,
    outputs: {
      before: 'before-solid-viewport.png',
      after: mainAfter?.output ?? null,
      preview: captures.find((capture) => capture.preset === 'Preview')?.output ?? null,
      production: captures.find((capture) => capture.preset === 'Production')?.output ?? null,
    },
  };
}

async function runBenchmarkPreset(browser, presetName) {
  const preset = qualityPresets[presetName];
  if (!preset) {
    throw new Error(
      `Unknown benchmark preset "${presetName}". Use one of ${Object.keys(qualityPresets).join(
        ', ',
      )}.`,
    );
  }

  const { page, meshCount } = await preparePage(browser);
  try {
    const t0 = Date.now();
    await page.evaluate((name) => window.__baker.setQuality(name), presetName);
    await waitForBakeDone(page, benchmarkTimeoutMs, `${presetName} benchmark bake`);
    const elapsedMs = Date.now() - t0;
    const diag = await page.evaluate(() => window.__baker.getRenderDiag());
    const appOptions = await page.evaluate(() => {
      const o = window.__baker.options;
      return {
        quality: o.quality,
        lightMapSize: o.lightMapSize,
        casts: o.casts,
        targetSamples: o.targetSamples,
        bounces: o.bounces,
        denoiseEnabled: o.denoiseEnabled,
        dilationIterations: o.dilationIterations,
        samples: o.samples,
        spp: o.spp,
      };
    });

    return {
      preset: presetName,
      scene,
      meshCount,
      settings: preset,
      appOptions,
      renderDiag: diag,
      elapsedMs,
      elapsedSeconds: Number((elapsedMs / 1000).toFixed(2)),
    };
  } finally {
    await page.close();
  }
}

function formatSamples(row) {
  return `${row.appOptions.casts} x ${row.appOptions.targetSamples} frames (${row.appOptions.spp} spp)`;
}

function writeBenchmarkFiles(metrics) {
  writeFileSync(path.join(outDir, 'benchmark.json'), JSON.stringify(metrics, null, 2));
  writeFileSync(
    path.join(outDir, 'benchmark.md'),
    [
      '# Launch Benchmark',
      '',
      `- Scene: ${metrics.scene}`,
      `- Screenshot presets: ${metrics.screenshot.presets.join(', ')}`,
      `- GPU: ${metrics.gpu.renderer}`,
      `- Browser: ${metrics.browser}`,
      `- Browser channel: ${metrics.browserChannel}`,
      `- ANGLE backend: ${metrics.angleBackend}`,
      `- Expected GPU: ${metrics.expectedGpu || 'not enforced'}`,
      `- Chrome args: ${metrics.chromeArgs.join(' ')}`,
      '',
      '## Screenshot Capture',
      '',
      `- Before: ${metrics.screenshot.outputs.before}`,
      `- Main after: ${metrics.screenshot.outputs.after}`,
      ...metrics.screenshot.captures.map(
        (capture) => `- ${capture.preset}: ${capture.output} (${capture.elapsedSeconds}s)`,
      ),
      '',
      '## Preset Benchmarks',
      '',
      '| Device | Scene | Preset | Resolution | Samples | Bounces | Denoise | Bake Time |',
      '|---|---:|---:|---:|---:|---:|---:|---:|',
      ...metrics.benchmarks.map(
        (row) =>
          `| ${metrics.gpu.renderer} | ${row.scene} | ${row.preset} | ${row.appOptions.lightMapSize} | ${formatSamples(
            row,
          )} | ${row.appOptions.bounces} | ${
            row.appOptions.denoiseEnabled ? 'On' : 'Off'
          } | ${row.elapsedSeconds}s |`,
      ),
      '',
      '## README Table',
      '',
      '| Preset | Resolution | Samples | Bounces | Denoise | Bake Time |',
      '|---|---:|---:|---:|---:|---:|',
      ...metrics.benchmarks.map(
        (row) =>
          `| ${row.preset} | ${row.appOptions.lightMapSize}px | ${formatSamples(row)} | ${
            row.appOptions.bounces
          } | ${row.appOptions.denoiseEnabled ? 'On' : 'Off'} | ${row.elapsedSeconds}s |`,
      ),
      '',
    ].join('\n'),
  );
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const server = await startServerIfNeeded();
  const capturedAt = new Date().toISOString();
  let browser;

  try {
    const launchConfig = await chooseLaunchConfig();
    browser = await launchBrowser(launchConfig.chromeArgs);
    const { page, meshCount, gpu } = await preparePage(browser);
    const renderer = `${gpu.vendor} ${gpu.renderer}`;
    await page.close();

    const looksSoftware = /swiftshader|llvmpipe|software rasterizer/i.test(renderer);
    if (looksSoftware) {
      console.warn(`[capture] software renderer detected: ${gpu.renderer}`);
    }

    const screenshot = await runScreenshotCapture(browser);
    const benchmarks = [];
    for (const presetName of benchmarkPresetNames) {
      console.info(`[capture] benchmarking ${presetName}`);
      const row = await runBenchmarkPreset(browser, presetName);
      benchmarks.push(row);
      console.info(`[capture] ${presetName}: ${row.elapsedSeconds}s`);
    }

    const metrics = {
      capturedAt,
      scene,
      sceneUrl: buildSceneUrl(),
      meshCount,
      gpu,
      browser: await browser.version(),
      userAgent: await browser.newPage().then(async (p) => {
        const ua = await p.evaluate(() => navigator.userAgent);
        await p.close();
        return ua;
      }),
      platform: {
        os: `${os.type()} ${os.release()}`,
        arch: os.arch(),
        cpus: os.cpus().length,
      },
      chromeArgs: launchConfig.chromeArgs,
      angleBackend: launchConfig.angleBackend,
      angleProbes: launchConfig.probes,
      expectedGpu: expectedGpu || null,
      browserChannel: browserChannel || 'playwright bundled chromium',
      screenshot,
      benchmarks,
    };

    writeBenchmarkFiles(metrics);

    console.info(`[capture] wrote ${outDir}`);
    for (const row of benchmarks) {
      console.info(
        `[capture] ${row.preset} ${row.appOptions.lightMapSize}px ${formatSamples(row)}: ${row.elapsedSeconds}s`,
      );
    }
    console.info(`[capture] GPU: ${gpu.renderer}`);
  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
