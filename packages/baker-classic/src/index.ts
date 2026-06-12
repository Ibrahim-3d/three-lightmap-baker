/**
 * Public library API surface.
 *
 * Phase 2 (Task 06): physical lib/demo split. Imports below are the only
 * sanctioned entry points - internal-only modules (e.g. *Material.ts shader
 * classes) are intentionally NOT re-exported and may change without notice.
 *
 * `LightmapBaker` now provides the high-level API. Lower-level exports remain
 * public for advanced workflows.
 */

// --- Atlas (UV2 unwrap + position/normal G-buffers) ---
export { generateAtlas, generateAtlases, loadXAtlasThree } from './atlas/generateAtlas';
export { renderAtlas } from './atlas/renderAtlas';

// --- Bake pipeline (path-traced GI) ---
export { generateLightmapper } from './lightmap/Lightmapper';
export type { Lightmapper, RaycastOptions, LightmapperRender } from './lightmap/Lightmapper';

// --- Standalone AO bake (own ray budget, view-time intensity/exponent) ---
export { generateAOMapper } from './lightmap/AOMapper';
export type { AOMapper, AORaycastOptions, AOMapperRender } from './lightmap/AOMapper';

// --- View-time composite (direct + indirect*gi) * ao ---
export { runComposite } from './lightmap/Composite';
export type { CompositeResult } from './lightmap/Composite';

// --- Refinement (chart dilation + bilateral denoise) ---
export { runPostProcess as runRefinement } from './lightmap/Refinement';
export type {
  PostProcessOptions as RefinementOptions,
  PostProcessResult as RefinementResult,
} from './lightmap/Refinement';

// --- Geometry & material extraction ---
export { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
export type { PerTriangleMaterials } from './utils/GeometryUtils';
export { buildMaterialTextures } from './utils/MaterialTextures';

// --- Density-aware atlas bin-packing (Stage 1 - multiple-atlas pipeline) ---
export { computeMeshSurfaceArea, binPackMeshes } from './utils/Packing';
export type { BinPackOptions, BinAssignment } from './utils/Packing';

// --- Export (PNG / EXR / Float32 dump) ---
export { exportLightmap, exportPNG, exportEXR, exportRaw } from './utils/exportLightmap';
export type { ExportFormat } from './utils/exportLightmap';

// --- 2D atlas viewer (corner overlay) ---
export { AtlasViewer } from './AtlasViewer';
export type { AtlasViewerCorner, AtlasViewerOptions } from './AtlasViewer';

// --- Multi-light packing (Task 7C) ---
export { collectLightsFromScene, buildLightTexture, disposeLightTexture } from './lightmap/Lights';
export type { PackedLight, LightType } from './lightmap/Lights';

// --- Texel density debug visualization (Task 7E) ---
export { TexelDensityMaterial } from './lightmap/TexelDensityMaterial';
export type { TexelDensityMaterialOptions } from './lightmap/TexelDensityMaterial';

// --- Errors ---
export { BakeError } from './errors';
export type { BakeErrorPhase } from './errors';

// --- High-level one-call API (Phase 3) ---
export { LightmapBaker, LightmapBakeResult } from './LightmapBaker';
export { createRendererAdapter, isLightmapRendererAdapter } from './rendererAdapter';
export type {
  LightmapBakerInitOptions,
  LightmapBakerOptions,
  LightmapContextLossTarget,
  LightmapRendererAdapter,
  LightmapRendererAdapterOptions,
  LightOptions,
  GIOptions,
  AOOptions,
  TimeoutProtectionOptions,
  BakePhase,
  BakeHooks,
  BakeStats,
  BakeFrameInfo,
  BakeGroupView,
} from './LightmapBaker';

// --- GPU capability detection (Task 08) ---
export { detectGPUCapabilities, classifyRenderer } from './gpu/Capabilities';
export type { GPUCapabilities, GPUTier } from './gpu/Capabilities';

// --- Diagnostics (graphics-engineer instrumentation; remove when stable) ---
export { Diagnostics } from './utils/Diagnostics';
export type { DiagSnapshot } from './utils/Diagnostics';
