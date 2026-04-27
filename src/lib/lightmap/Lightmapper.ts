import {
  Color,
  DataTexture,
  LinearFilter,
  FloatType,
  Matrix4,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  TextureFilter,
  WebGLMultipleRenderTargets,
  WebGLRenderer,
} from 'three';
// Color is used for prevClearColor below.
import { MeshBVH } from 'three-mesh-bvh';
import { LightmapperMaterial } from './LightmapperMaterial';
import { PackedLight, buildLightTexture, disposeLightTexture } from './Lights';

export type RaycastOptions = {
  resolution: number;
  casts: number;
  /** Array of lights to bake. Pass [] for emissive-only scenes. */
  lights: PackedLight[];
  /** Linear-space environment color used on hemisphere-miss. */
  skyColor: Color;
  /** 0 = closed-scene physical bake; >0 brightens corners and dim regions uniformly. */
  skyIntensity: number;
  filterMode: TextureFilter;

  directLightEnabled: boolean;
  indirectLightEnabled: boolean;

  /** Per-triangle albedo lookup, indexed by global triangle index. Task 03. */
  albedoTexture: Texture;
  /** Per-triangle emissive lookup, same indexing as albedoTexture. Task 03. */
  emissiveTexture: Texture;
  /** Side length of the material textures (both are W×W). */
  materialTextureSize: number;

  /** Stop accumulating once this many frames have been rendered (frames × casts = samples/texel). 0 = unlimited. */
  targetSamples: number;
  /** Number of indirect light bounces. Clamped [1,4]. Default 1. */
  bounces: number;
  /**
   * Per-draw-call ceiling in texels. When `< resolution`, the bake is split
   * into scissored tiles — `(resolution / tileSize)²` draws per sample. TDR
   * protection on iGPUs / large resolutions. Default = `resolution` (one
   * draw per sample, identical to pre-Task-08 behaviour).
   */
  tileSize?: number;
};

export type LightmapperRender = {
  samples: number;
  done: boolean;
  /** True when `render()` returned at a sample boundary; false mid-sample. */
  sampleComplete: boolean;
  /** Wall-clock ms spent on the last draw call. JS-side; doesn't account for GPU async. */
  lastDrawMs: number;
};

export type Lightmapper = {
  renderTarget: WebGLMultipleRenderTargets;
  /**
   * Direct/indirect output textures. AO has been split into a separate pass —
   * see `AOMapper.ts`. Composite consumes (direct, indirect, ao-from-AOMapper).
   */
  textures: { direct: Texture; indirect: Texture };
  /**
   * Advance the bake by exactly one full sample. When tiled, internally loops
   * tiles to completion. Backward-compatible with pre-Task-08 callers (demo).
   */
  render: () => LightmapperRender;
  /**
   * Advance the bake by as many tiles as fit in `budgetMs` of wall time. May
   * complete a sample mid-loop, may return mid-sample. Used by the public
   * `LightmapBaker.bake()` orchestrator for adaptive frame pacing.
   */
  renderTiled: (budgetMs: number) => LightmapperRender;
  /**
   * Update the per-draw tile side. Applied at the next sample boundary so
   * the in-flight sample isn't drawn with mismatched tile coverage. Pass
   * `>= resolution` to disable tiling.
   */
  setTileSize: (tileSize: number) => void;
  /** Reset accumulator (re-bake without rebuilding BVH/textures — currently unused, future-proof). */
  reset: () => void;
  /** Free GPU resources (RT, material, fullscreen quad geometry). Call before re-baking. */
  dispose: () => void;
  /** @deprecated Use renderTarget. Alias kept for pre-A.2 callers. */
  renderTexture: WebGLMultipleRenderTargets;
  /** @deprecated Use textures.direct. Alias kept for pre-A.2 callers. */
  texture: Texture;
};

export const generateLightmapper = (
  renderer: WebGLRenderer,
  positions: Texture,
  normals: Texture,
  bvh: MeshBVH,
  options: RaycastOptions,
): Lightmapper => {
  // Build the light DataTexture from the caller-supplied PackedLight array.
  // Always allocates at least 1 row so the sampler is always bound.
  const lightBuild = buildLightTexture(options.lights);
  const lightTexture: DataTexture = lightBuild.texture;

  const raycastMaterial = new LightmapperMaterial({
    bvh,
    invModelMatrix: new Matrix4().identity(),
    positions,
    normals,
    albedoTex: options.albedoTexture,
    emissiveTex: options.emissiveTexture,
    materialTextureSize: options.materialTextureSize,
    casts: options.casts,
    bounces: options.bounces ?? 1,
    lightsTex: lightTexture,
    lightCount: lightBuild.count,
    skyColor: options.skyColor,
    skyIntensity: options.skyIntensity,
    opacity: 1,
    sampleIndex: 0,
    directLightEnabled: options.directLightEnabled,
    indirectLightEnabled: options.indirectLightEnabled,
  });

  const renderTarget = new WebGLMultipleRenderTargets(options.resolution, options.resolution, 2, {
    type: FloatType,
    minFilter: LinearFilter, // Use Linear during bake to avoid heavy mipmap generation every frame
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

  const raycastMesh = new Mesh(new PlaneGeometry(2, 2), raycastMaterial);
  const orthographicCamera = new OrthographicCamera();

  let totalSamples = 0;
  const target = options.targetSamples | 0;
  const resolution = options.resolution;

  // Tiling state. tileSize >= resolution → single-tile (legacy) path.
  let tileSize = Math.max(1, Math.min(resolution, options.tileSize ?? resolution));
  let pendingTileSize: number | null = null;
  let nextTileIndex = 0; // 0 .. tileCount-1; advances per renderTile call
  const computeTileGrid = (s: number): { tilesX: number; tilesY: number; count: number } => {
    const tx = Math.ceil(resolution / s);
    return { tilesX: tx, tilesY: tx, count: tx * tx };
  };
  let grid = computeTileGrid(tileSize);

  // SAFETY: these uniform names are constructed in LightmapperMaterial; presence is invariant.
  const sampleIndexU = raycastMaterial.uniforms.sampleIndex;
  const opacityU = raycastMaterial.uniforms.opacity;
  if (!sampleIndexU || !opacityU)
    throw new Error('[baker] LightmapperMaterial missing required uniforms');

  /**
   * Draw one tile of the current sample. Returns wall-clock ms (JS-side; does
   * NOT capture GPU async work — see Capabilities.ts comment on RAF-interval
   * adaptation). On the last tile of a sample, `totalSamples` increments and
   * a `pendingTileSize` (if any) is committed before the next sample.
   */
  const renderOneTile = (): { ms: number; sampleCompleted: boolean } => {
    const t0 = performance.now();
    const autoClear = renderer.autoClear;
    const rtBefore = renderer.getRenderTarget();
    const scissorWasEnabled = renderer.getScissorTest();
    try {
      renderer.autoClear = false;
      renderer.setRenderTarget(renderTarget);
      sampleIndexU.value = totalSamples;
      // Correct progressive average math: Opacity = 1 / (n + 1)
      opacityU.value = 1 / (totalSamples + 1);

      if (tileSize >= resolution) {
        // Legacy fast-path: single fullscreen draw, no scissor.
        renderer.setScissorTest(false);
        renderer.render(raycastMesh, orthographicCamera);
      } else {
        const tx = nextTileIndex % grid.tilesX;
        const ty = (nextTileIndex / grid.tilesX) | 0;
        const x = tx * tileSize;
        const y = ty * tileSize;
        const w = Math.min(tileSize, resolution - x);
        const h = Math.min(tileSize, resolution - y);
        renderer.setScissor(x, y, w, h);
        renderer.setScissorTest(true);
        renderer.render(raycastMesh, orthographicCamera);
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
      // Commit pending tileSize change at the sample boundary.
      if (pendingTileSize !== null) {
        tileSize = pendingTileSize;
        grid = computeTileGrid(tileSize);
        pendingTileSize = null;
      }
    }
    return { ms: performance.now() - t0, sampleCompleted };
  };

  const render = (): LightmapperRender => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    let lastMs = 0;
    // Loop tiles until one full sample completes.
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

  const renderTiled = (budgetMs: number): LightmapperRender => {
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
      // At a sample boundary already — apply immediately.
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
    disposeLightTexture(lightTexture);
    renderTarget.dispose();
    raycastMaterial.dispose();
    raycastMesh.geometry.dispose();
  };

  const [direct, indirect] = renderTarget.texture;
  if (!direct || !indirect)
    throw new Error('[baker] WebGLMultipleRenderTargets did not allocate 2 textures');
  const textures = { direct, indirect };

  return {
    renderTarget,
    textures,
    render,
    renderTiled,
    setTileSize,
    reset,
    dispose,
    get renderTexture() {
      return renderTarget;
    },
    get texture() {
      return textures.direct;
    },
  };
};
