import { Color, type Mesh, Vector3 } from 'three';
import { ProbeVolume } from './ProbeVolume';
export type ProbeLightingBindingOptions = {
    /** Overall probe-light multiplier. Default 1. */
    intensity?: number;
    /** Apply the target material's Lambertian diffuse BRDF (base color / PI). Default true. */
    multiplyByAlbedo?: boolean;
    /** Optional explicit upper clamp per irradiance channel. Unclamped by default. */
    maxIrradiance?: number;
    /** World-space offset from the mesh origin used to sample the volume. */
    sampleOffset?: Vector3;
};
/**
 * Runtime PBR integration for baked probe irradiance.
 *
 * The binding keeps the original MeshStandardMaterial and injects one uniform
 * contribution into `reflectedLight.indirectDiffuse`. Unlike the original MVP,
 * this does not write to `material.emissive`: probe light therefore remains
 * diffuse lighting and continues through the standard Three.js material,
 * tone-mapping, fog, direct-light, shadow, roughness, metalness, and AO pipeline.
 *
 * Call `update()` after moving the mesh (normally once per frame). Call
 * `dispose()` before discarding the binding so the original shader hooks are
 * restored.
 */
export declare class ProbeLightingBinding {
    readonly mesh: Mesh;
    readonly volume: ProbeVolume;
    private readonly states;
    private readonly worldPosition;
    private readonly sampled;
    private readonly contribution;
    private readonly intensity;
    private readonly multiplyByAlbedo;
    private readonly maxIrradiance;
    private readonly sampleOffset;
    private disposed;
    constructor(mesh: Mesh, volume: ProbeVolume, options?: ProbeLightingBindingOptions);
    update(): void;
    getLastIrradiance(target?: Color): Color;
    dispose(): void;
    private installMaterialHook;
}
export declare function bindProbeLighting(mesh: Mesh, volume: ProbeVolume, options?: ProbeLightingBindingOptions): ProbeLightingBinding;
//# sourceMappingURL=ProbeLightingBinding.d.ts.map