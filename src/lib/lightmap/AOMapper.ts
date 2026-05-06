import {
  Color,
  FloatType,
  LinearFilter,
  Matrix4,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { AOMaterial } from './AOMaterial';

export type AORaycastOptions = {
  resolution: number;
  /** Hemisphere ray count per frame for AO. Independent of bounce-pass `casts`. */
  aoSamples: number;
  /** AO max distance (also the falloff divisor used at composite time). World units. */
  ambientDistance: number;
  /** Stop accumulating once this many frames have rendered. 0 = unlimited. */
  targetSamples: number;
  /**
   * Per-draw-call ceiling in texels. See `Lightmapper.RaycastOptions.tileSize`
   * for semantics. Default = `resolution` (no tiling, identical to pre-Task-08
   * behaviour).
   */
  tileSize?: number;
};

export type AOMapperRender = {
  samples: number;
  done: boolean;
  sampleComplete: boolean;
  lastDrawMs: number;
};

export type AOMapper = {
  /** Single-channel float RT; stored value is normalized visibility `t` in [0,1]. */
  texture: Texture;
  /** Advance by exactly one full sample (loops tiles internally if tiled). */
  render: () => AOMapperRender;
  /** Advance by as many tiles as fit in `budgetMs`. */
  renderTiled: (budgetMs: number) => AOMapperRender;
  /** Update per-draw tile side; applied at next sample boundary. */
  setTileSize: (tileSize: number) => void;
  reset: () => void;
  dispose: () => void;
};

/**
 * Standalone AO bake pass. Owns its own RT, material, fullscreen quad, and
 * accumulator. Mirror of `generateLightmapper` for the AO channel only.
 *
 * Caller orchestrates `render()` each frame alongside the bounce mapper's
 * render(). When AO sliders change, dispose this and create a fresh one with
 * new opts — the bounce mapper stays alive untouched.
 */
export const generateAOMapper = (
  renderer: WebGLRenderer,
  positions: Texture,
  normals: Texture,
  bvh: MeshBVH,
  options: AORaycastOptions,
): AOMapper => {
  const material = new AOMaterial({
    bvh,
    invModelMatrix: new Matrix4().identity(),
    positions,
    normals,
    aoSamples: options.aoSamples,
    ambientDistance: options.ambientDistance,
    opacity: 1,
    sampleIndex: 0,
  });

  // FloatType — see Lightmapper.ts comment. HalfFloat triggers ANGLE D3D11
  // slow path when downstream shader samples with LinearFilter (extension
  // OES_texture_half_float_linear reports false on tested NVIDIA path).
  const renderTarget = new WebGLRenderTarget(options.resolution, options.resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
  });

  // Save renderer state so the initial RT clear doesn't permanently mutate it.
  const prevRT = renderer.getRenderTarget();
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();

  renderer.setRenderTarget(renderTarget);
  renderer.setClearColor(0x000000, 0);
  renderer.clear();
  renderer.setRenderTarget(prevRT);
  renderer.setClearColor(prevClearColor, prevClearAlpha);

  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const cam = new OrthographicCamera();

  let totalSamples = 0;
  const target = options.targetSamples | 0;
  const resolution = options.resolution;

  // Tiling state — mirrors Lightmapper.ts. See that file for design notes.
  let tileSize = Math.max(1, Math.min(resolution, options.tileSize ?? resolution));
  let pendingTileSize: number | null = null;
  let nextTileIndex = 0;
  const computeTileGrid = (s: number): { tilesX: number; tilesY: number; count: number } => {
    const tx = Math.ceil(resolution / s);
    return { tilesX: tx, tilesY: tx, count: tx * tx };
  };
  let grid = computeTileGrid(tileSize);

  const sampleIndexU = material.uniforms.sampleIndex;
  const opacityU = material.uniforms.opacity;
  if (!sampleIndexU || !opacityU) throw new Error('[baker] AOMaterial missing required uniforms');

  const renderOneTile = (): { ms: number; sampleCompleted: boolean } => {
    const t0 = performance.now();
    const autoClear = renderer.autoClear;
    const rtBefore = renderer.getRenderTarget();
    const scissorWasEnabled = renderer.getScissorTest();
    try {
      renderer.autoClear = false;
      renderer.setRenderTarget(renderTarget);
      sampleIndexU.value = totalSamples;
      opacityU.value = 1 / (totalSamples + 1);

      if (tileSize >= resolution) {
        renderer.setScissorTest(false);
        renderer.render(quad, cam);
      } else {
        const tx = nextTileIndex % grid.tilesX;
        const ty = (nextTileIndex / grid.tilesX) | 0;
        const x = tx * tileSize;
        const y = ty * tileSize;
        const w = Math.min(tileSize, resolution - x);
        const h = Math.min(tileSize, resolution - y);
        renderer.setScissor(x, y, w, h);
        renderer.setScissorTest(true);
        renderer.render(quad, cam);
      }
    } finally {
      renderer.setScissorTest(scissorWasEnabled);
      renderer.setRenderTarget(rtBefore);
      renderer.autoClear = autoClear;
    }

    nextTileIndex++;
    let sampleCompleted = false;
    if (nextTileIndex >= grid.count) {
      nextTileIndex = 0;
      totalSamples++;
      sampleCompleted = true;
      if (pendingTileSize !== null) {
        tileSize = pendingTileSize;
        grid = computeTileGrid(tileSize);
        pendingTileSize = null;
      }
    }
    return { ms: performance.now() - t0, sampleCompleted };
  };

  const render = (): AOMapperRender => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    let lastMs = 0;
    while (true) {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted) break;
    }
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete: true,
      lastDrawMs: lastMs,
    };
  };

  const renderTiled = (budgetMs: number): AOMapperRender => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    const deadline = performance.now() + Math.max(0, budgetMs);
    let lastMs = 0;
    let sampleComplete = false;
    do {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted) {
        sampleComplete = true;
        if (target > 0 && totalSamples >= target) break;
      }
    } while (performance.now() < deadline);
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete,
      lastDrawMs: lastMs,
    };
  };

  const setTileSize = (n: number): void => {
    const clamped = Math.max(1, Math.min(resolution, n | 0));
    if (clamped === tileSize && pendingTileSize === null) return;
    if (nextTileIndex === 0) {
      tileSize = clamped;
      grid = computeTileGrid(tileSize);
      pendingTileSize = null;
    } else {
      pendingTileSize = clamped;
    }
  };

  const reset = (): void => {
    totalSamples = 0;
    nextTileIndex = 0;
  };

  const dispose = (): void => {
    renderTarget.dispose();
    material.dispose();
    quad.geometry.dispose();
  };

  return {
    texture: renderTarget.texture,
    render,
    renderTiled,
    setTileSize,
    reset,
    dispose,
  };
};
