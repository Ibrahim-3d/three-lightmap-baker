import { NoBlending, ShaderMaterial, Texture } from 'three';

export type DenoiseMaterialOptions = {
  map: Texture;
  sigma?: number;
  threshold?: number;
  kSigma?: number;
};

/**
 * Bilateral denoiser (BrutPitt's smartDeNoise). GLSL 1.0 ES — kept on this version
 * deliberately because the algorithm uses `texture2D` and reads-on-loop that have
 * no measurable benefit from GLSL3 conversion, and Phase 7 fork preserves it.
 *
 * SAFETY: this material is the ONE exception to the project's GLSL3 rule; the rest
 * of the pipeline writes/reads via this shader using a standard Texture handoff.
 */
export class DenoiseMaterial extends ShaderMaterial {
  // USE_SLIDER define is always 0; sigma/threshold/kSigma are uniforms. GLSL1 (deliberate exception
  // to project GLSL3 rule — see comment above). No per-instance GLSL variation. Renderer owns program.
  override customProgramCacheKey(): string {
    return 'DenoiseMaterial|glsl1|single-out';
  }

  constructor(options: DenoiseMaterialOptions) {
    super({
      blending: NoBlending,
      transparent: false,
      depthWrite: false,
      depthTest: false,
      defines: {
        USE_SLIDER: 0,
      },
      uniforms: {
        sigma: { value: options.sigma ?? 5.0 },
        threshold: { value: options.threshold ?? 0.03 },
        kSigma: { value: options.kSigma ?? 1.0 },
        map: { value: options.map },
      },

      vertexShader: /* glsl */ `
				varying vec2 vUv;
				void main() {
					vUv = uv;
					// NDC pass-through — matches DilationMaterial/CompositeMaterial.
					// Using projectionMatrix * modelViewMatrix with the default
					// OrthographicCamera (near=0.1) clips the z=0 quad and produces
					// no output, silently bypassing denoise.
					gl_Position = vec4( position, 1.0 );
				}
			`,

      fragmentShader: /* glsl */ `
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  https://github.com/BrutPitt/glslSmartDeNoise/  (BSD 2-Clause)
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				uniform sampler2D map;
				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				varying vec2 vUv;
				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {
					float radius = round( kSigma * sigma );
					float radQ = radius * radius;
					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;
					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;
					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;
					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );
					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {
						float pt = sqrt( max( 0.0, radQ - d.x * d.x ) );
						for ( d.y = - pt; d.y <= pt; d.y ++ ) {
							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;
							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;
							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;
							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;
						}
					}
					return aBuff / max( zBuff, 1e-5 );
				}
				void main() {
					// Internal RT pass: stay in linear space. Downstream MeshStandardMaterial.lightMap
					// expects linear; tonemapping/encoding fragments would double-encode.
					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
				}
			`,
    });
  }
}
