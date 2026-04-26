import {
  FloatType,
  GLSL3,
  LinearFilter,
  Mesh,
  NoBlending,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { EXRExporter } from 'three/examples/jsm/exporters/EXRExporter.js';

/**
 * Lightmap exporters — render a Texture into a fresh float RT, then encode/dump.
 *
 * Three formats per Task 06 spec:
 *   - PNG  : LDR, Reinhard tonemap + sRGB encode. "Preview" only — not round-trippable.
 *   - EXR  : HDR, linear, FloatType. Production / DCC pipeline.
 *   - bin  : raw Float32 RGBA dump. Programmatic / scientific use.
 *
 * The fullscreen passthrough quad uses NDC pass-through (matches DilationMaterial,
 * CompositeMaterial). Using `projectionMatrix * modelViewMatrix` here would z-clip
 * against the default OrthographicCamera near plane and silently produce a black RT.
 */

const _quad = new Mesh(new PlaneGeometry(2, 2));
const _cam = new OrthographicCamera();
/*
 * Export Passthrough — GLSL3 fragment shader.
 *
 * Input  : `map` (any FloatType source texture).
 * Output : `fragColor` — straight texel copy.
 *
 * Used to materialize any chain-of-RT lightmap into a fresh FloatType RT before
 * encoding to PNG/EXR/raw. NDC pass-through vertex avoids the default
 * OrthographicCamera near-plane clip that has bitten denoise/dilation in the past.
 */
const _passMat = new ShaderMaterial({
  glslVersion: GLSL3,
  blending: NoBlending,
  transparent: false,
  depthWrite: false,
  depthTest: false,
  uniforms: { map: { value: null as Texture | null } },
  vertexShader: /* glsl */ `
        out vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,
  fragmentShader: /* glsl */ `
        uniform sampler2D map;
        in vec2 vUv;
        out vec4 fragColor;
        void main() {
            fragColor = texture(map, vUv);
        }
    `,
});

/** Render `source` into a fresh FloatType RT. Caller owns disposal. */
function renderToRT(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
): WebGLRenderTarget {
  const rt = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
  });
  // SAFETY: `map` uniform is created above; presence is invariant.
  const mapU = _passMat.uniforms.map;
  if (!mapU) throw new Error('[baker] export passthrough material missing `map` uniform');
  mapU.value = source;
  _quad.material = _passMat;
  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;
  try {
    renderer.autoClear = true;
    renderer.setRenderTarget(rt);
    renderer.render(_quad, _cam);
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
  }
  return rt;
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

const ensureExt = (name: string, ext: string) =>
  name.toLowerCase().endsWith(`.${ext}`) ? name : `${name}.${ext}`;

/**
 * LDR PNG with Reinhard tonemap + sRGB gamma encode.
 * Y-flip applied (WebGL bottom-up → PNG top-down).
 */
export async function exportPNG(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
  filename: string,
): Promise<void> {
  const rt = renderToRT(renderer, source, resolution);
  const float = new Float32Array(resolution * resolution * 4);
  renderer.readRenderTargetPixels(rt, 0, 0, resolution, resolution, float);
  rt.dispose();

  const u8 = new Uint8ClampedArray(resolution * resolution * 4);
  for (let y = 0; y < resolution; y++) {
    const srcRow = (resolution - 1 - y) * resolution * 4;
    const dstRow = y * resolution * 4;
    for (let x = 0; x < resolution; x++) {
      const si = srcRow + x * 4;
      const di = dstRow + x * 4;
      // Reinhard tonemap, then sRGB encode (2.2 approximation — cheap and good enough for preview).
      // SAFETY: si is bounded by srcRow + (resolution-1)*4 < float.length.
      const r = Math.max(float[si] ?? 0, 0);
      const g = Math.max(float[si + 1] ?? 0, 0);
      const b = Math.max(float[si + 2] ?? 0, 0);
      u8[di] = Math.pow(r / (1 + r), 1 / 2.2) * 255;
      u8[di + 1] = Math.pow(g / (1 + g), 1 / 2.2) * 255;
      u8[di + 2] = Math.pow(b / (1 + b), 1 / 2.2) * 255;
      u8[di + 3] = 255;
    }
  }

  const canvas = document.createElement('canvas');
  canvas.width = resolution;
  canvas.height = resolution;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('exportPNG: 2D context unavailable');
  ctx.putImageData(new ImageData(u8, resolution, resolution), 0, 0);

  await new Promise<void>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('exportPNG: toBlob returned null'));
        return;
      }
      triggerDownload(blob, ensureExt(filename, 'png'));
      resolve();
    }, 'image/png');
  });
}

/** Linear HDR EXR via three.js EXRExporter. */
export function exportEXR(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
  filename: string,
): void {
  const rt = renderToRT(renderer, source, resolution);
  const buffer = new EXRExporter().parse(renderer, rt);
  rt.dispose();
  triggerDownload(new Blob([buffer], { type: 'image/x-exr' }), ensureExt(filename, 'exr'));
}

/** Headerless Float32 RGBA dump (resolution × resolution × 4 floats, little-endian). */
export function exportRaw(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
  filename: string,
): void {
  const rt = renderToRT(renderer, source, resolution);
  const float = new Float32Array(resolution * resolution * 4);
  renderer.readRenderTargetPixels(rt, 0, 0, resolution, resolution, float);
  rt.dispose();
  triggerDownload(
    new Blob([float.buffer], { type: 'application/octet-stream' }),
    ensureExt(filename, 'bin'),
  );
}

export type ExportFormat = 'png' | 'exr' | 'bin';

/** Dispatch by format. Filename should be the base — extension is enforced per format. */
export async function exportLightmap(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
  filename: string,
  format: ExportFormat,
): Promise<void> {
  switch (format) {
    case 'png':
      await exportPNG(renderer, source, resolution, filename);
      return;
    case 'exr':
      exportEXR(renderer, source, resolution, filename);
      return;
    case 'bin':
      exportRaw(renderer, source, resolution, filename);
      return;
  }
}
