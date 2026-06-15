import { Mesh, Object3D, Scene, WebGLRenderer } from 'three';
import type { BakeErrorPhase } from '../errors';
import { LightmapBakeResult, type BakeHooks, type ContextLossState, type ResolvedBakerOptions, type TimeoutProtectionOptions } from '.';
/**
 * Walks the scene; returns Meshes with a `MeshStandardMaterial`-like material
 * (Standard or Physical). Excludes:
 *  - Helpers/gizmos (TransformControls etc. use `MeshBasicMaterial` - `lightMap`
 *    alone is too loose since Basic also exposes that property)
 *  - Anything marked `userData.lightmapIgnore = true` (explicit opt-out)
 *  - Invisible objects (`visible === false`)
 */
export declare function collectBakeMeshes(scene: Scene | Object3D): Mesh[];
export type BakePipelineArgs = {
    renderer: WebGLRenderer;
    opts: ResolvedBakerOptions;
    scene: Scene | Object3D;
    allMeshes: Mesh[];
    hooks: BakeHooks;
    t0: number;
    tp: Required<TimeoutProtectionOptions>;
    ctxState: ContextLossState;
    checkAbort: (phase: BakeErrorPhase) => void;
};
/**
 * Drive the full bake pipeline: partition → UV unwrap → BVH + materials →
 * lights → per-group loop → drain → stats → result. Caller (`LightmapBaker.bake`)
 * owns context-loss guard installation; this function only signals abort
 * through `checkAbort` and the `ctxState.lost` flag visible to inner loops.
 */
export declare function runBakePipeline(args: BakePipelineArgs): Promise<LightmapBakeResult>;
//# sourceMappingURL=pipeline.d.ts.map