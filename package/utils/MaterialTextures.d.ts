import { DataTexture } from 'three';
import type { PerTriangleMaterials } from './GeometryUtils';
/**
 * Two square float textures keyed by global triangle index.
 *   side = ceil(sqrt(totalTriangles))
 *   triangle i is at texel (i % side, i / side)
 *
 * Float storage so the emissive texture survives HDR intensity values
 * (Task 04's eventual ceiling-light source needs values > 1.0).
 */
export interface MaterialTextures {
    albedoTexture: DataTexture;
    emissiveTexture: DataTexture;
    side: number;
}
export declare const buildMaterialTextures: (perTri: PerTriangleMaterials) => MaterialTextures;
//# sourceMappingURL=MaterialTextures.d.ts.map