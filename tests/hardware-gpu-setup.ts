import { chromium, type FullConfig } from '@playwright/test';

/** A hardware gate must fail rather than silently qualify a software fallback. */
export default async function verifyHardwareGPU(config: FullConfig): Promise<void> {
  if (process.env.BAKER_REQUIRE_HARDWARE_GPU !== '1') return;
  const use = config.projects[0]?.use;
  const browser = await chromium.launch({ ...use?.launchOptions, channel: use?.channel });
  try {
    const page = await browser.newPage();
    const renderer = await page.evaluate(() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return null;
      const debug = gl.getExtension('WEBGL_debug_renderer_info');
      return debug ? String(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)) : null;
    });
    console.info(`[baker:hardware-gate] renderer=${renderer ?? 'unavailable'}`);
    if (
      !renderer ||
      /swiftshader|llvmpipe|softpipe|software|lavapipe|microsoft basic render/i.test(renderer)
    )
      throw new Error(
        'Hardware GPU validation unavailable: WebGL 2 did not expose a hardware renderer. Run this gate on a machine with an enabled GPU; software results do not qualify.',
      );
  } finally {
    await browser.close();
  }
}
