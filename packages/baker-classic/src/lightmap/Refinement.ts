import {
  FloatType,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  type ShaderMaterial,
  type Texture,
  type WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { DilationMaterial } from './DilationMaterial';
import { DenoiseMaterial } from '../denoise/DenoiseMaterial';
import { runAnimationTask, abortError } from '../bake/animationTask';
export type PostProcessOptions = {
  dilationIterations: number;
  denoiseEnabled: boolean;
  denoiseSigma: number;
  denoiseThreshold: number;
  denoiseKSigma: number;
};
export type PostProcessResult = { texture: Texture; dispose: () => void };
/** Own all temporary render resources until the result is handed to the caller. */
export const runPostProcess = async (
  renderer: WebGLRenderer,
  src: Texture,
  positions: Texture,
  resolution: number,
  opts: PostProcessOptions,
  onProgress?: (percent: number) => void,
  controls: { signal?: AbortSignal; normals?: Texture } = {},
): Promise<PostProcessResult> => {
  if (controls.signal?.aborted) throw controls.signal.reason ?? abortError();
  if (!opts.dilationIterations && !opts.denoiseEnabled)
    return { texture: src, dispose: (): void => {} };
  const rtA = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    depthBuffer: false,
    generateMipmaps: false,
  });
  const rtB = rtA.clone();
  const quad = new Mesh(new PlaneGeometry(2, 2));
  const camera = new OrthographicCamera();
  const dilate = new DilationMaterial({
    positions,
    owners: controls.normals,
    resolution,
    fill: opts.dilationIterations > 0,
  });
  let denoise: DenoiseMaterial | undefined;
  let input = src,
    write = rtA;
  let returned = false;
  try {
    const passes = Math.max(1, opts.dilationIterations),
      total = passes + Number(opts.denoiseEnabled);
    let pass = 0;
    await runAnimationTask(() => {
      if (renderer.getContext().isContextLost())
        throw new Error('WebGL context lost during refinement');
      let material: ShaderMaterial;
      if (pass < passes) {
        const map = dilate.uniforms.map,
          alpha = dilate.uniforms.useSourceAlpha;
        if (!map || !alpha) throw new Error('Missing dilation uniforms');
        map.value = input;
        alpha.value = pass > 0;
        material = dilate;
      } else {
        denoise = new DenoiseMaterial({
          map: input,
          normals: controls.normals,
          sigma: opts.denoiseSigma,
          threshold: opts.denoiseThreshold,
          kSigma: opts.denoiseKSigma,
        });
        material = denoise;
      }
      const previous = renderer.getRenderTarget();
      try {
        quad.material = material;
        renderer.setRenderTarget(write);
        renderer.render(quad, camera);
      } finally {
        renderer.setRenderTarget(previous);
      }
      input = write.texture;
      write = write === rtA ? rtB : rtA;
      pass++;
      onProgress?.(pass / total);
      return pass === total;
    }, controls.signal);
    returned = true;
    return {
      texture: input,
      dispose: (): void => {
        rtA.dispose();
        rtB.dispose();
      },
    };
  } finally {
    dilate.dispose();
    denoise?.dispose();
    quad.geometry.dispose();
    if (!returned) {
      rtA.dispose();
      rtB.dispose();
    }
  }
};
