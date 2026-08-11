import { Mesh, MeshStandardMaterial, type Scene, type Texture, type WebGLRenderer } from 'three';
import type { LightmapBakeResult } from '../bake/result';
import { type NativeLightProbeGridJSON, type NativeLightProbeGridOptions, type NativeLightProbeGridRestoreOptions, type NativeLightProbeGridResult } from './NativeLightProbeGrid';
export type LightmappedProbeGridOptions = NativeLightProbeGridOptions & {
    /** Multiplier applied to the baked lightmap while capturing. Default 1. */
    lightMapIntensity?: number;
    /**
     * Optional editor integration hook for recovering a temporarily replaced
     * base-color map. Normal package consumers should leave this unset.
     */
    resolveBaseColorMap?: (mesh: Mesh, material: MeshStandardMaterial) => Texture | null | undefined;
};
export type LightmappedProbeGridRestoreOptions = NativeLightProbeGridRestoreOptions & {
    lightMapIntensity?: number;
    resolveBaseColorMap?: LightmappedProbeGridOptions['resolveBaseColorMap'];
};
/**
 * Capture native Three.js probes from only the completed static bake surfaces.
 *
 * This owns the complete capture policy: final result lightmaps are mounted,
 * live lights and non-static renderables are hidden, environment/background
 * lighting and display transforms are disabled, and every mutation is restored
 * even when native capture throws.
 */
export declare function captureLightmappedProbeGrid(renderer: WebGLRenderer, scene: Scene, result: LightmapBakeResult | null, options?: LightmappedProbeGridOptions): NativeLightProbeGridResult;
/** Recapture a persisted native descriptor using the same baked-scene policy. */
export declare function captureLightmappedProbeGridFromJSON(renderer: WebGLRenderer, scene: Scene, result: LightmapBakeResult | null, descriptor: NativeLightProbeGridJSON, options?: LightmappedProbeGridRestoreOptions): NativeLightProbeGridResult;
//# sourceMappingURL=captureLightmappedProbeGrid.d.ts.map