// Barrel for cross-module utils consumed by sibling helpers (especially
// `bake/pipeline.ts`). Add new symbols here as they ship.

export { mergeGeometry, extractPerTriangleMaterials } from './GeometryUtils';
export { buildMaterialTextures } from './MaterialTextures';
export { partitionByDensity, partitionByResolution, type PerMeshOverride } from './Partition';
export { exportLightmap, type ExportFormat } from './exportLightmap';
