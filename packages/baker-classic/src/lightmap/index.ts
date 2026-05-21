// Barrel re-exports for the lightmap subsystem. Lets sibling helpers
// (e.g. `bake/result.ts`, `bake/groups.ts`) keep project-import counts under
// CLAUDE.md's 5-per-file cap without flattening type/runtime co-location at
// the call site. Add new symbols here as they ship; do NOT re-export internal
// shaders or material-tier helpers — those stay scoped to their own files.

export { generateAOMapper } from './AOMapper';
export type { AOMapper, AORaycastOptions } from './AOMapper';

export { runComposite } from './Composite';
export type { CompositeResult } from './Composite';

export { createDownscale } from './Downscale';
export type { DownscaleResult } from './Downscale';

export { generateLightmapper } from './Lightmapper';
export type { Lightmapper, RaycastOptions } from './Lightmapper';

export { collectLightsFromScene } from './Lights';
export type { PackedLight } from './Lights';

export { runPostProcess } from './Refinement';
export type { PostProcessOptions, PostProcessResult } from './Refinement';
