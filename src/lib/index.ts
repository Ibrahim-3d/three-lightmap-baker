/**
 * Public library API surface.
 *
 * Phase 2 (Task 06): physical lib/demo split. Imports below are the only
 * sanctioned entry points — internal-only modules (e.g. *Material.ts shader
 * classes) are intentionally NOT re-exported and may change without notice.
 *
 * Phase 3 will wrap these primitives in a `LightmapBaker` class with the
 * spec'd one-call API: `new LightmapBaker(opts).bake(scene)`.
 */

// --- Atlas (UV2 unwrap + position/normal G-buffers) ---
export { generateAtlas, loadXAtlasThree } from './atlas/generateAtlas';
export { renderAtlas } from './atlas/renderAtlas';

// --- Bake pipeline (path-traced GI) ---
export { generateLightmapper } from './lightmap/Lightmapper';
export type { Lightmapper, RaycastOptions, LightmapperRender } from './lightmap/Lightmapper';

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
export type {
  LightmapBakerOptions,
  LightOptions,
  GIOptions,
  AOOptions,
  BakePhase,
  BakeHooks,
  BakeStats,
} from './LightmapBaker';
