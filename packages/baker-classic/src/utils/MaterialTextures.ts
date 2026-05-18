import { ClampToEdgeWrapping, DataTexture, FloatType, NearestFilter, RGBAFormat } from 'three';
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

const makeTexture = (data: Float32Array, side: number): DataTexture => {
  const tex = new DataTexture(data, side, side, RGBAFormat, FloatType);
  tex.minFilter = NearestFilter;
  tex.magFilter = NearestFilter;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
};

export const buildMaterialTextures = (perTri: PerTriangleMaterials): MaterialTextures => {
  const N = perTri.totalTriangles;
  const side = Math.max(1, Math.ceil(Math.sqrt(N)));
  const texelCount = side * side;

  // RGBA padded — alpha unused. Trailing texels (texelCount > N) stay zeroed.
  const albedoData = new Float32Array(texelCount * 4);
  const emissiveData = new Float32Array(texelCount * 4);

  for (let i = 0; i < N; i++) {
    const src = i * 3;
    const dst = i * 4;
    // SAFETY: src/dst are bounded by N*3 < albedo.length and texelCount*4 = albedoData.length
    albedoData[dst] = perTri.albedo[src] ?? 0;
    albedoData[dst + 1] = perTri.albedo[src + 1] ?? 0;
    albedoData[dst + 2] = perTri.albedo[src + 2] ?? 0;
    albedoData[dst + 3] = 1.0;

    emissiveData[dst] = perTri.emissive[src] ?? 0;
    emissiveData[dst + 1] = perTri.emissive[src + 1] ?? 0;
    emissiveData[dst + 2] = perTri.emissive[src + 2] ?? 0;
    emissiveData[dst + 3] = 1.0;
  }

  return {
    albedoTexture: makeTexture(albedoData, side),
    emissiveTexture: makeTexture(emissiveData, side),
    side,
  };
};
