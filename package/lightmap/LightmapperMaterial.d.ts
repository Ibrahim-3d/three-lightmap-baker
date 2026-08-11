import { Color, Matrix4, ShaderMaterial, Texture } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
export type LightmapperMaterialOptions = {
    bvh: MeshBVH;
    invModelMatrix: Matrix4;
    positions: Texture;
    normals: Texture;
    /** Per-triangle albedo (RGBA float, square, indexed by faceIndices.w). Task 03. */
    albedoTex: Texture;
    /** Per-triangle emissive (RGBA float, same layout as albedoTex). Task 03. */
    emissiveTex: Texture;
    uv01Tex: Texture;
    uv2MapTex: Texture;
    mapRectTex: Texture;
    mapTransform0Tex: Texture;
    mapTransform1Tex: Texture;
    albedoMapAtlas: Texture;
    /** Side length of the material textures (both are W×W). */
    materialTextureSize: number;
    casts: number;
    bounces: number;
    /** Multi-light DataTexture: 4 texels wide × lightCount tall, RGBA float. */
    lightsTex: Texture;
    /** Number of active lights in lightsTex. 0 = no direct lighting. */
    lightCount: number;
    /** Linear-space environment/sky color added on hemisphere-ray miss. */
    skyColor: Color;
    /** Scalar multiplier on skyColor. 0 = closed-scene physical bake. */
    skyIntensity: number;
    opacity: number;
    sampleIndex: number;
    directLightEnabled: boolean;
    indirectLightEnabled: boolean;
};
export declare class LightmapperMaterial extends ShaderMaterial {
    private programKey;
    customProgramCacheKey(): string;
    constructor(options: LightmapperMaterialOptions);
}
//# sourceMappingURL=LightmapperMaterial.d.ts.map