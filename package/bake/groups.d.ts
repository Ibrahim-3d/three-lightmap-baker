import { Color, Mesh, Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { type AORaycastOptions, type PackedLight, type RaycastOptions } from '../lightmap';
import { type BakeErrorPhase } from '../errors';
import type { BakeHooks, ResolvedBakerOptions, TimeoutProtectionOptions } from './types';
import type { ContextLossState, GroupInternals } from './internals';
/**
 * Bag of inputs that every group bake needs - pre-resolved by the orchestrator
 * once and shared across all groups in a single bake. Avoids 10-positional-arg
 * function signatures.
 */
export type GroupBakeContext = {
    renderer: WebGLRenderer;
    opts: ResolvedBakerOptions;
    bvh: MeshBVH;
    sceneLights: PackedLight[];
    skyColor: Color;
    matTex: {
        albedoTexture: Texture;
        emissiveTexture: Texture;
        side: number;
    };
    tp: Required<TimeoutProtectionOptions>;
    ctxState: ContextLossState;
};
export type GroupBakeOutput = {
    group: GroupInternals;
    /** Texture that should be bound to `mesh.lightMap` for every mesh in the group. */
    finalTex: Texture;
};
export declare function buildRaycastOpts(opts: ResolvedBakerOptions, resolution: number, lights: PackedLight[], skyColor: Color, matTex: {
    albedoTexture: Texture;
    emissiveTexture: Texture;
    side: number;
}, tp: Required<TimeoutProtectionOptions>): RaycastOptions;
/** Build the AOMapper options for a group at the given resolution. */
export declare function buildAORaycastOpts(opts: ResolvedBakerOptions, resolution: number, tp: Required<TimeoutProtectionOptions>): AORaycastOptions;
/**
 * Run the bounce + AO mapper loop for ONE group: allocate atlas + mappers +
 * composite, drive them through `runMappersWithTimeoutProtection` until target
 * samples reached, run refinement + optional downscale, and return the result
 * record. Caller manages BVH lifetime and group sequencing.
 */
export declare function runGroupBake(ctx: GroupBakeContext, groupIndex: number, totalGroups: number, groupMeshes: Mesh[], resolution: number, internalResolution: number, hooks: BakeHooks, checkAbort: (phase: BakeErrorPhase) => void): Promise<GroupBakeOutput>;
//# sourceMappingURL=groups.d.ts.map