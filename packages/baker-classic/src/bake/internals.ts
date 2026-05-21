import type { Mesh, Texture } from 'three';
import type { Lightmapper } from '../lightmap/Lightmapper';
import type { AOMapper } from '../lightmap/AOMapper';
import type { CompositeResult } from '../lightmap/Composite';
import type { PostProcessResult } from '../lightmap/Refinement';
import type { DownscaleResult } from '../lightmap/Downscale';

// Internal mutable state shared across the split bake helpers. Not exported
// from the public barrel. All `import type` — strips to nothing at runtime.

export type GroupInternals = {
  lightmapper: Lightmapper;
  aoMapper: AOMapper;
  composite: CompositeResult;
  refinement: PostProcessResult | null;
  atlasDispose: () => void;
  /** Public-facing group resolution = what `mesh.lightMap` sees. */
  resolution: number;
  /** Internal bake resolution = resolution × superSample. */
  internalResolution: number;
  /**
   * Downscale wrapper. Non-null when `superSample > 1` — wraps the internal-res
   * final texture and exposes a stable target-res texture for mesh binding.
   * Refreshed when refinement re-runs (rebakeAO path).
   */
  downscale: DownscaleResult | null;
  /** Meshes assigned to this group (for the public `groups` accessor). */
  meshes: Mesh[];
  /**
   * Atlas G-buffers kept alive for the duration of the bake result so AO-only
   * rebakes can reuse them and so refinement can read positionTex as the chart
   * mask. Released by `atlasDispose()` on `LightmapBakeResult.dispose()`.
   */
  positionTex: Texture;
  normalTex: Texture;
};

/** Mutable state shared between the canvas listener and the mapper loop. */
export type ContextLossState = { lost: boolean };
