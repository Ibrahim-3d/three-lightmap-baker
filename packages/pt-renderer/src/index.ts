/**
 * pt-renderer — real-time BVH path tracer.
 *
 * Public surface intentionally small. Consumers:
 *   - `apps/playground`   → PTController wires this into the DCC shell
 *   - `apps/pt-preview`   → stand-alone PT viewport demo
 *
 * UI panels live in `./ui/index.ts`; call `registerPTRendererUI()` at boot
 * to add the PT inspector tab and Render → Path-Traced menu item.
 */

export { PTRenderer } from './PTRenderer';
export type { PTRendererOptions, PTSceneUniforms } from './PTRenderer';

export { buildBVH } from './BVHBuilder';

export {
  buildBVHScene,
  disposeBVHSceneData,
  ALBEDO_LAYER_SIZE,
  MAX_ALBEDO_LAYERS,
} from './BVHSceneBuilder';
export type { BVHSceneData } from './BVHSceneBuilder';

export { registerChunks } from './chunks';
export { resolveIncludes } from './preprocess';
