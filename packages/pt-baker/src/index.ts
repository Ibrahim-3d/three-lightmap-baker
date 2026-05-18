/**
 * pt-baker — UV-space path-traced lightmap baker.
 *
 * Uses the same BVH, light DataTexture, and path integrator as `pt-renderer`
 * so preview (real-time) and baked output are physically consistent.
 *
 * Quick start:
 * ```ts
 * import { bakeWithPT } from 'pt-baker';
 * const { result, sceneData } = await bakeWithPT(renderer, scene, meshes, {
 *   size: 1024, samples: 256,
 * });
 * meshes.forEach(m => (m.material as MeshStandardMaterial).lightMap = result.texture.texture);
 * // later: result.dispose(); disposeBVHSceneData(sceneData);
 * ```
 *
 * UI panels live in `./ui/index.ts`; call `registerPTBakerUI()` at app boot.
 */

export { PTBaker, bakeWithPT, disposeBVHSceneData } from './PTBaker';
export type { PTBakeOptions, PTBakeResult } from './PTBaker';

export { PTBakeMaterial } from './PTBakeMaterial';
