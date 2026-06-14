import { GLSL3, Matrix4, ShaderMaterial, Texture } from 'three';
import {
  MeshBVH,
  MeshBVHUniformStruct,
  shaderIntersectFunction,
  shaderStructs,
} from 'three-mesh-bvh';

export type AOMaterialOptions = {
  bvh: MeshBVH;
  invModelMatrix: Matrix4;

  positions: Texture;
  normals: Texture;

  /** Hemisphere ray count per frame for AO. Independent of the bounce-pass casts. */
  aoSamples: number;
  /**
   * Maximum distance an AO ray's first hit counts as an occluder. Hits beyond
   * this are treated as "no occluder" (visibility=1). World units.
   */
  ambientDistance: number;

  opacity: number;
  sampleIndex: number;
};

/**
 * Standalone AO bake material. Stores RAW normalized visibility per texel -
 * `mean over rays of t`, where `t = clamp(dist/ambientDistance, 0, 1)` on hit
 * within range, else 1.0. The `aoIntensity` / `aoExponent` remap is applied
 * at composite time, so tweaking those sliders does not require a re-bake.
 *
 * Same RNG, hemisphere sampler, ray bias, and BVH usage as LightmapperMaterial.
 */
export class AOMaterial extends ShaderMaterial {
  // aoSamples and ambientDistance are uniforms (runtime) - not compile-time.
  // GLSL source is identical across all AOMaterial instances. Renderer owns the WebGLProgram.
  override customProgramCacheKey(): string {
    return 'AOMaterial|glsl3|single-out';
  }

  constructor(options: AOMaterialOptions) {
    const bvhUniformStruct = new MeshBVHUniformStruct();
    bvhUniformStruct.updateFrom(options.bvh);

    super({
      transparent: true,
      glslVersion: GLSL3,
      depthTest: false,
      depthWrite: false,

      uniforms: {
        bvh: { value: bvhUniformStruct },
        positions: { value: options.positions },
        normals: { value: options.normals },
        invModelMatrix: { value: options.invModelMatrix },
        aoSamples: { value: options.aoSamples },
        ambientDistance: { value: options.ambientDistance },
        opacity: { value: options.opacity },
        sampleIndex: { value: options.sampleIndex },
      },

      vertexShader: /* glsl */ `
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,

      fragmentShader: /* glsl */ `
                /*
                 * Standalone AO bake (GLSL3, single output).
                 *
                 * Stored value: mean of  t = clamp(dist / ambientDistance, 0, 1)
                 * over aoSamples cosine-weighted hemisphere rays. 1.0 on miss
                 * (or hit beyond ambientDistance). 0.0 on hard contact.
                 *
                 * Composite shader applies the intensity/exponent remap. At
                 * intensity=1, exponent=1 the remap is identity so default
                 * output matches pre-separation behavior exactly.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${shaderStructs}
                ${shaderIntersectFunction}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;
                uniform int aoSamples;
                uniform float ambientDistance;
                uniform int sampleIndex;
                uniform float opacity;
                uniform BVH bvh;
                in vec2 vUv;

                out vec4 aoOut;

                // ── RNG (matches LightmapperMaterial) ────────────────────────────

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                vec4 rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
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
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    // Outside-chart pixels are neutral AO. Writing black here
                    // makes chart-cut filtering darken visible mesh surfaces.
                    if (position.a <= 0.0 || dot(normal.xyz, normal.xyz) <= 1.0e-10) {
                        aoOut = vec4(vec3(1.0), opacity);
                        return;
                    }

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    float totalT = 0.0;
                    for (int i = 0; i < aoSamples; i++) {
                        vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                        if (dot(rayDirection, newDir) > 0.0) {
                            bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                faceIndices, faceNormal, barycoord, side, dist);
                            float t = (hit && dist < ambientDistance)
                                ? clamp(dist / ambientDistance, 0.0, 1.0)
                                : 1.0;
                            totalT += t;
                        }
                    }

                    float divisor = max(float(aoSamples), 1.0);
                    float avg = aoSamples > 0 ? totalT / divisor : 1.0;
                    aoOut = vec4(vec3(avg), opacity);
                }
            `,
    });
  }
}
