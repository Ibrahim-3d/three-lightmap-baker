import { GLSL3, NoBlending, ShaderMaterial, Texture } from 'three';

/*
 * Dilation Pass - GLSL3 fragment shader.
 *
 * Input  : `map` (current lightmap), `positions` (G-buffer; alpha=1 inside UV charts).
 * Output : `fragColor` (RGBA float) - same texel filled in for chart interiors;
 *          chart-exterior texels get the average of their non-empty 3x3 neighbours.
 *
 * Purpose: trilinear filtering at chart borders would otherwise sample pure black.
 * Run iteratively (default 4x) on ping-pong RTs.
 */

export class DilationMaterial extends ShaderMaterial {
  // resolution and DILATION_EMPTY_EPS are uniform/hardcoded - no per-instance GLSL variation.
  // Renderer owns the compiled WebGLProgram; dispose() is unaffected.
  override customProgramCacheKey(): string {
    return 'DilationMaterial|glsl3|single-out';
  }

  constructor(opts: { map?: Texture; positions?: Texture; resolution?: number } = {}) {
    super({
      glslVersion: GLSL3,
      blending: NoBlending,
      transparent: false,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        map: { value: opts.map ?? null },
        positions: { value: opts.positions ?? null },
        resolution: { value: opts.resolution ?? 1024 },
      },
      vertexShader: /* glsl */ `
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
      fragmentShader: /* glsl */ `
                #define DILATION_EMPTY_EPS 1.0e-6

                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                in vec2 vUv;
                out vec4 fragColor;

                void main() {
                    vec4 here = texture(map, vUv);
                    float chart = texture(positions, vUv).a;

                    // Inside a chart - pass through.
                    if (chart > 0.0) {
                        fragColor = here;
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / max(resolution, 1.0);
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture(map, uv2);
                            // "non-empty" = either inside the chart or already dilated.
                            float w = step(DILATION_EMPTY_EPS, s.r + s.g + s.b);
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    fragColor = n > 0.0
                        ? vec4(sum / n, here.a)
                        : here;
                }
            `,
    });
  }
}
