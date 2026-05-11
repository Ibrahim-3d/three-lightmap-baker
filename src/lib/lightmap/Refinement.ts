import {
  FloatType,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { DilationMaterial } from './DilationMaterial';
import { DenoiseMaterial } from '../denoise/DenoiseMaterial';

export type PostProcessOptions = {
  dilationIterations: number; // Task 5 spec: 4
  denoiseEnabled: boolean;
  denoiseSigma: number; // bilateral spatial sigma
  denoiseThreshold: number; // bilateral range sigma (edge sharpness)
  denoiseKSigma: number; // kernel radius multiplier
};

export type PostProcessResult = {
  /** Final post-processed lightmap texture (consume as MeshStandardMaterial.lightMap). */
  texture: Texture;
  /** Call to release the ping-pong RTs when bake is replaced. */
  dispose: () => void;
};

const fsQuad = new Mesh(new PlaneGeometry(2, 2));
const fsCam = new OrthographicCamera();

/**
 * Run dilation N times, then optional bilateral denoise once. Returns the final RT's texture.
 *
 * Pipeline:  src --(dilate)x N --> A --(denoise?)--> B --> result
 *
 * Two RTs are allocated and ping-ponged. Caller owns disposal via the returned handle.
 */
export const runPostProcess = async (
  renderer: WebGLRenderer,
  src: Texture,
  positions: Texture,
  resolution: number,
  opts: PostProcessOptions,
  onProgress?: (percent: number) => void,
): Promise<PostProcessResult> => {
  const makeRT = (): WebGLRenderTarget =>
    new WebGLRenderTarget(resolution, resolution, {
      type: FloatType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      generateMipmaps: false,
    });
  const rtA = makeRT();
  const rtB = makeRT();

  const draw = (mat: ShaderMaterial, target: WebGLRenderTarget): void => {
    const prevRT = renderer.getRenderTarget();
    try {
      fsQuad.material = mat;
      renderer.setRenderTarget(target);
      renderer.render(fsQuad, fsCam);
    } finally {
      renderer.setRenderTarget(prevRT);
    }
  };

  const dilate = new DilationMaterial({ positions, resolution });

  let read: WebGLRenderTarget = rtA; // tracks "where is the latest result"
  let write: WebGLRenderTarget = rtB;
  let input: Texture = src;

  const totalPasses = Math.max(0, opts.dilationIterations) + (opts.denoiseEnabled ? 1 : 0);
  let completedPasses = 0;

  // SAFETY: `map` uniform is constructed in DilationMaterial; presence is invariant.
  const dilateMapU = dilate.uniforms.map;
  if (!dilateMapU) throw new Error('[baker] DilationMaterial missing `map` uniform');

  for (let i = 0; i < Math.max(0, opts.dilationIterations); i++) {
    dilateMapU.value = input;
    draw(dilate, write);
    input = write.texture;
    // swap
    const tmp = read;
    read = write;
    write = tmp;

    completedPasses++;
    onProgress?.(completedPasses / totalPasses);
    // Allow UI to repaint
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }

  if (opts.denoiseEnabled) {
    const denoise = new DenoiseMaterial({
      map: input,
      sigma: opts.denoiseSigma,
      threshold: opts.denoiseThreshold,
      kSigma: opts.denoiseKSigma,
    });
    draw(denoise, write);
    input = write.texture;
    denoise.dispose();
    const tmp = read;
    read = write;
    write = tmp;

    completedPasses++;
    onProgress?.(completedPasses / totalPasses);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }

  dilate.dispose();

  // `read` now holds the unused RT; the result is in the *other* one (last `write` before swap).
  // After the swap the just-written RT is `read`. So `read.texture` is correct iff at least one
  // pass ran. If zero passes ran, we just return src directly.
  const ranAny = opts.dilationIterations > 0 || opts.denoiseEnabled;
  const result = ranAny ? read.texture : src;

  // Sentinel: read a 4x4 center patch and log the avg so the user can confirm
  // refinement actually changed pixel values (vs. silently passing through or clearing).
  // One readback per refinement run — negligible cost, runs once post-bake.
  if (ranAny) {
    const x = Math.max(0, Math.floor(resolution / 2) - 2);
    const buf = new Float32Array(4 * 4 * 4);
    renderer.readRenderTargetPixels(read, x, x, 4, 4, buf);
    let r = 0,
      g = 0,
      b = 0;
    for (let i = 0; i < 16; i++) {
      r += buf[i * 4] ?? 0;
      g += buf[i * 4 + 1] ?? 0;
      b += buf[i * 4 + 2] ?? 0;
    }
    if (import.meta.env.DEV) {
      const fmt = (n: number): string => (n / 16).toFixed(4);
      console.info(
        `[baker] refinement: dilations=${opts.dilationIterations}, denoise=${opts.denoiseEnabled ? 'on' : 'off'} ` +
          `(sigma=${opts.denoiseSigma}, threshold=${opts.denoiseThreshold}, kSigma=${opts.denoiseKSigma}) — ` +
          `center 4x4 avg rgb = (${fmt(r)}, ${fmt(g)}, ${fmt(b)})`,
      );
    }
  }

  return {
    texture: result,
    dispose: () => {
      rtA.dispose();
      rtB.dispose();
    },
  };
};
