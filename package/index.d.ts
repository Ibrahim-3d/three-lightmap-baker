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
export { generateAtlas, generateAtlases, loadXAtlasThree } from './atlas/generateAtlas';
export type { GenerateAtlasOptions, LoadXAtlasThreeOptions } from './atlas/generateAtlas';
export { renderAtlas } from './atlas/renderAtlas';
export { generateLightmapper } from './lightmap/Lightmapper';
export type { Lightmapper, RaycastOptions, LightmapperRender } from './lightmap/Lightmapper';
export { generateAOMapper } from './lightmap/AOMapper';
export type { AOMapper, AORaycastOptions, AOMapperRender } from './lightmap/AOMapper';
export { runComposite } from './lightmap/Composite';
export type { CompositeResult } from './lightmap/Composite';
export { runPostProcess as runRefinement } from './lightmap/Refinement';
export type { PostProcessOptions as RefinementOptions, PostProcessResult as RefinementResult, } from './lightmap/Refinement';
export { mergeGeometry, extractPerTriangleMaterials, materialSlotForTriangle, } from './utils/GeometryUtils';
export type { PerTriangleMaterials } from './utils/GeometryUtils';
export { buildMaterialTextures } from './utils/MaterialTextures';
export type { MaterialTextures } from './utils/MaterialTextures';
export { computeMeshSurfaceArea, binPackMeshes, resolveDensityTexelsPerMeter, } from './utils/Packing';
export type { BinPackOptions, BinAssignment, DensityTexelsPerMeterOptions } from './utils/Packing';
export { exportLightmap, exportPNG, exportEXR, exportRaw } from './utils/exportLightmap';
export type { ExportFormat } from './utils/exportLightmap';
export { AtlasViewer } from './AtlasViewer';
export type { AtlasViewerCorner, AtlasViewerOptions } from './AtlasViewer';
export { collectLightsFromScene, buildLightTexture, disposeLightTexture } from './lightmap/Lights';
export type { PackedLight, LightType } from './lightmap/Lights';
export { TexelDensityMaterial } from './lightmap/TexelDensityMaterial';
export type { TexelDensityMaterialOptions } from './lightmap/TexelDensityMaterial';
export { ProbeVolume, generateProbeGrid, captureLightmappedProbeGrid, captureLightmappedProbeGridFromJSON, captureNativeLightProbeGrid, captureNativeLightProbeGridFromJSON, bakeProbeIrradianceFromLightmaps, generateProbeVolume, ProbeDebugView, createProbeDebugView, ProbeLightingBinding, bindProbeLighting, } from './probes';
export type { GeneratedProbeVolume, LightmappedProbeGridOptions, LightmappedProbeGridRestoreOptions, NativeLightProbeGridCaptureOptions, NativeLightProbeGridJSON, NativeLightProbeGridOptions, NativeLightProbeGridRestoreOptions, NativeLightProbeGridResult, NativeLightProbeGridStats, GenerateProbeVolumeOptions, ProbeBakeHooks, ProbeBakeOptions, ProbeBakeSource, ProbeBakeStats, ProbeDebugViewOptions, ProbeGridCounts, ProbeGridOptions, ProbeGridSpacing, ProbeLightingBindingOptions, ProbeVolumeJSON, } from './probes';
export { BakeError } from './errors';
export type { BakeErrorPhase } from './errors';
export { LightmapBaker, LightmapBakeResult } from './LightmapBaker';
export { createRendererAdapter, isLightmapRendererAdapter } from './rendererAdapter';
export { getLightmapRuntimeCapabilities } from './runtimeCapabilities';
export type { LightmapBakerInitOptions, LightmapBakerOptions, LightmapContextLossTarget, LightmapRendererAdapter, LightmapRendererAdapterOptions, LightOptions, GIOptions, AOOptions, TimeoutProtectionOptions, BakePhase, BakeHooks, BakeStats, BakeFrameInfo, BakeGroupView, } from './LightmapBaker';
export type { LightmapRuntimeCapabilities, LightmapRuntimeFeature, LightmapRuntimeFeatureStatus, LightmapRuntimeKind, } from './runtimeCapabilities';
export { detectGPUCapabilities, classifyRenderer } from './gpu/Capabilities';
export type { GPUCapabilities, GPUTier } from './gpu/Capabilities';
export { Diagnostics } from './utils/Diagnostics';
export type { DiagSnapshot } from './utils/Diagnostics';
//# sourceMappingURL=index.d.ts.map