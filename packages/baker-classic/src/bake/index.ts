// Internal barrel for the bake/* sibling modules. Consumed by `pipeline.ts`
// (and indirectly by the LightmapBaker facade) so each consumer stays under
// CLAUDE.md's 5-project-import cap.
//
// Not part of the public API — `../index.ts` does NOT re-export this barrel.
// External consumers go through `LightmapBaker` + `LightmapBakeResult` only.

export * from './types';
export * from './internals';
export {
  DEFAULT_REFINEMENT,
  resolveTimeoutProtection,
  toLinearColor,
  validateOptions,
} from './validation';
export { LightmapBakeResult } from './result';
export { runGroupBake, type GroupBakeContext, type GroupBakeOutput } from './groups';
