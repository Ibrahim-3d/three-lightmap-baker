import { DataTexture, Texture, WebGLRenderer } from 'three';
import type { PerTriangleMaterials } from './GeometryUtils';
/** GPU surface records, all keyed by the post-BVH triangle ID. */
export interface MaterialTextures {
    albedoTexture: DataTexture;
    emissiveTexture: DataTexture;
    uv01Texture: DataTexture;
    uv2MapTexture: DataTexture;
    mapRectTexture: DataTexture;
    mapTransform0Texture: DataTexture;
    mapTransform1Texture: DataTexture;
    albedoMapAtlas: Texture;
    side: number;
    dispose(): void;
}
export declare function buildMaterialTextures(renderer: WebGLRenderer, perTriangle: PerTriangleMaterials): MaterialTextures;
//# sourceMappingURL=MaterialTextures.d.ts.map