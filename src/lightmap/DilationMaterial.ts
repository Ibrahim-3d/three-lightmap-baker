import { NoBlending, ShaderMaterial, Texture } from "three";

/**
 * Chart-aware 3x3 max-spread dilation.
 *
 * For each texel:
 *   - If positionTex.a > 0 (inside a UV chart), pass through.
 *   - Else, average neighbours that themselves have nonzero RGB. This grows the
 *     lit area outward into the empty halo around UV islands so trilinear
 *     filtering at chart borders doesn't sample pure black.
 *
 * Run iteratively (4x in Task 5 spec) on ping-pong RTs.
 */
export class DilationMaterial extends ShaderMaterial {
    constructor(opts: { map?: Texture; positions?: Texture; resolution?: number } = {}) {
        super({
            blending: NoBlending,
            transparent: false,
            depthWrite: false,
            depthTest: false,
            uniforms: {
                map:        { value: opts.map ?? null },
                positions:  { value: opts.positions ?? null },
                resolution: { value: opts.resolution ?? 1024 },
            },
            vertexShader: /* glsl */`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: /* glsl */`
                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                varying vec2 vUv;

                void main() {
                    vec4 here = texture2D(map, vUv);
                    float chart = texture2D(positions, vUv).a;

                    // Inside a chart — pass through.
                    if (chart > 0.0) {
                        gl_FragColor = here;
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / resolution;
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture2D(map, uv2);
                            // "non-empty" = either inside the chart or already dilated.
                            float w = step(1e-6, s.r + s.g + s.b);
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    gl_FragColor = n > 0.0
                        ? vec4(sum / n, here.a)
                        : here;
                }
            `,
        });
    }
}
