/**
 * pt-baker - UV-space path-traced lightmap baker.
 *
 * Uses the same BVH, light DataTexture, and path integrator as `pt-renderer`
 * so preview (real-time) and baked output are physically consistent.
 *
 * Quick start:
 * ```ts
 * import { bakePTLightmap } from 'pt-baker';
 * import { disposeBVHSceneData } from 'pt-renderer';
 * const { result, sceneData } = await bakePTLightmap(renderer, scene, meshes, {
 *   size: 1024, samples: 256,
 * });
 * meshes.forEach(m => (m.material as MeshStandardMaterial).lightMap = result.texture.texture);
 * // later: result.dispose(); disposeBVHSceneData(sceneData);
 * ```
 *
 * UI panels live in `./ui/index.ts`; call `registerPTBakerUI()` at app boot.
 */

export { PTBaker, bakePTLightmap } from './PTBaker';
export type { PTBakeOptions, PTBakeResult } from './PTBaker';

export { PTBakeMaterial } from './PTBakeMaterial';
