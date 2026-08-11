import {
  BoxGeometry,
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
import { mergeGeometry } from 'baker-classic';

/** Returns [randX, randY, hemisphereY, hitFlag] for the lightmapper's first RNG sample. */
export function validateLightmapperFirstRandomRay(
  renderer: WebGLRenderer,
): [number, number, number, number] {
  const geometry = new BoxGeometry(200, 0.1, 200);
  geometry.translate(0, 1, 0);
  const sourceMaterial = new MeshStandardMaterial();
  const mesh = new Mesh(geometry, sourceMaterial);
  mesh.updateMatrixWorld(true);
  const merged = mergeGeometry([mesh]);
  const bvh = new MeshBVH(merged);
  const bvhUniform = new MeshBVHUniformStruct();
  bvhUniform.updateFrom(bvh);

  const material = new ShaderMaterial({
    glslVersion: GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: { bvh: { value: bvhUniform } },
    vertexShader: 'void main(){gl_Position=vec4(position,1.0);}',
    fragmentShader: /* glsl */ `
      precision highp float;
      precision highp sampler2D;
      precision highp isampler2D;
      precision highp usampler2D;
      ${shaderStructs}
      ${shaderIntersectFunction}
      uniform BVH bvh;
      out vec4 outColor;

      uvec4 s0;
      void rng_initialize(vec2 p, int frame) {
        s0 = uvec4(uint(p.x), uint(p.y), uint(frame), uint(p.x) + uint(p.y));
      }
      void pcg4d(inout uvec4 v) {
        v = v * 1664525u + 1013904223u;
        v.x += v.y * v.w; v.y += v.z * v.x;
        v.z += v.x * v.y; v.w += v.y * v.z;
        v = v ^ (v >> 16u);
        v.x += v.y * v.w; v.y += v.z * v.x;
        v.z += v.x * v.y; v.w += v.y * v.z;
      }
      vec4 rand4() {
        pcg4d(s0);
        return vec4(s0) / float(0xffffffffu);
      }
      vec3 getHemisphereSample(vec3 n, vec2 uv) {
        float s = n.z == 0.0 ? 1.0 : sign(n.z);
        float a = -1.0 / (s + n.z);
        float b = n.x * n.y * a;
        vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
        vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
        float r = sqrt(uv.x);
        float theta = 2.0 * 3.1415 * uv.y;
        return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
      }

      void main() {
        rng_initialize(gl_FragCoord.xy, 0);
        vec2 uv = rand4().xy;
        vec3 dir = getHemisphereSample(vec3(0.0, 1.0, 0.0), uv);
        uvec4 faceIndices = uvec4(0u);
        vec3 faceNormal = vec3(0.0);
        vec3 barycoord = vec3(0.0);
        float side = 0.0;
        float dist = 0.0;
        bool hit = bvhIntersectFirstHit(
          bvh,
          vec3(0.0, 0.001, 0.0),
          dir,
          faceIndices,
          faceNormal,
          barycoord,
          side,
          dist
        );
        outColor = vec4(uv.x, uv.y, dir.y, hit ? 1.0 : 0.0);
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
    sourceMaterial.dispose();
    geometry.dispose();
    merged.dispose();
  }
}
