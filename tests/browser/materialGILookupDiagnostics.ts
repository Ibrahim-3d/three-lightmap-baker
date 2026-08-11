import {
  BoxGeometry,
  Color,
  DoubleSide,
  FloatType,
  GLSL3,
  Mesh,
  MeshStandardMaterial,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  WebGLRenderTarget,
  type WebGLRenderer,
} from 'three';
import {
  MeshBVH,
  MeshBVHUniformStruct,
  shaderIntersectFunction,
  shaderStructs,
} from 'three-mesh-bvh';
import {
  buildMaterialTextures,
  extractPerTriangleMaterials,
  mergeGeometry,
} from 'baker-classic';

/** Returns [emissiveR, emissiveG, emissiveB, faceIndex+1] for a known GPU hit. */
export function validateGpuHitMaterialLookup(
  renderer: WebGLRenderer,
): [number, number, number, number] {
  const geometry = new BoxGeometry(200, 0.1, 200);
  geometry.translate(0, 1, 0);
  const sourceMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    emissive: new Color(1, 0.5, 0.25),
    emissiveIntensity: 1,
    side: DoubleSide,
  });
  const mesh = new Mesh(geometry, sourceMaterial);
  mesh.updateMatrixWorld(true);
  const merged = mergeGeometry([mesh]);
  const bvh = new MeshBVH(merged);
  const surfaces = extractPerTriangleMaterials(merged, [mesh]);
  const materialTextures = buildMaterialTextures(renderer, surfaces);
  const bvhUniform = new MeshBVHUniformStruct();
  bvhUniform.updateFrom(bvh);

  const material = new ShaderMaterial({
    glslVersion: GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      bvh: { value: bvhUniform },
      emissiveTex: { value: materialTextures.emissiveTexture },
      materialTextureSize: { value: materialTextures.side },
    },
    vertexShader: 'void main(){gl_Position=vec4(position,1.0);}',
    fragmentShader: /* glsl */ `
      precision highp float;
      precision highp sampler2D;
      precision highp isampler2D;
      precision highp usampler2D;
      ${shaderStructs}
      ${shaderIntersectFunction}
      uniform BVH bvh;
      uniform sampler2D emissiveTex;
      uniform float materialTextureSize;
      out vec4 outColor;

      vec4 readTriangleData(sampler2D tex, uint triIdx) {
        uint W = uint(materialTextureSize);
        vec2 uv = (vec2(triIdx % W, triIdx / W) + 0.5) / materialTextureSize;
        return texture(tex, uv);
      }

      void main() {
        uvec4 faceIndices = uvec4(0u);
        vec3 faceNormal = vec3(0.0);
        vec3 barycoord = vec3(0.0);
        float side = 0.0;
        float dist = 0.0;
        bool hit = bvhIntersectFirstHit(
          bvh,
          vec3(0.0, 0.001, 0.0),
          normalize(vec3(0.2, 1.0, 0.1)),
          faceIndices,
          faceNormal,
          barycoord,
          side,
          dist
        );
        vec3 emissive = hit ? readTriangleData(emissiveTex, faceIndices.w).rgb : vec3(0.0);
        outColor = vec4(emissive, hit ? float(faceIndices.w + 1u) : 0.0);
      }
    `,
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const target = new WebGLRenderTarget(1, 1, { type: FloatType, depthBuffer: false });
  const previousTarget = renderer.getRenderTarget();
  const pixels = new Float32Array(4);

  try {
    renderer.setRenderTarget(target);
    renderer.render(quad, new OrthographicCamera());
    renderer.getContext().finish();
    renderer.readRenderTargetPixels(target, 0, 0, 1, 1, pixels);
    return [pixels[0] ?? 0, pixels[1] ?? 0, pixels[2] ?? 0, pixels[3] ?? 0];
  } finally {
    renderer.setRenderTarget(previousTarget);
    target.dispose();
    quad.geometry.dispose();
    material.dispose();
    bvhUniform.dispose();
    materialTextures.dispose();
    sourceMaterial.dispose();
    geometry.dispose();
    merged.dispose();
  }
}
