import { GLSL3, ShaderMaterial } from 'three';

/**
 * TexelDensityMaterial — Unity/Unreal-style "Lightmap Density" debug visualization.
 *
 * Each mesh wears a checker pattern in UV2 space; checker color encodes how this
 * mesh's actual texel density compares to a target density (texels per world meter).
 *
 *   Red    = density too low  (< 0.5× target — undersampled, will look blocky)
 *   Yellow = slightly low     (0.5..0.8×)
 *   Green  = ideal            (0.8..1.2×)
 *   Cyan   = slightly high    (1.2..1.5×)
 *   Blue   = too high         (> 1.5× — wasted lightmap area on this mesh)
 *
 * Computed via dFdx/dFdy of UV2 vs the lightmap resolution to derive
 * texels-per-world-unit, then divided by the user's target.
 *
 * Derived from the user-supplied spec in Task 07E. Material is shared
 * across meshes — uniforms are global. Per-mesh density (Task 07F) will
 * clone this material per-mesh once meshes hold their own resolution.
 */
export type TexelDensityMaterialOptions = {
  /** Target density in texels per world meter. Typical interior value: 10. */
  texelsPerMeter: number;
  /** Lightmap side length in pixels. Used to convert UV-derivatives → texels. */
  lightmapSize: number;
};

export class TexelDensityMaterial extends ShaderMaterial {
  constructor(opts: TexelDensityMaterialOptions) {
    super({
      glslVersion: GLSL3,
      uniforms: {
        uTexelsPerMeter: { value: opts.texelsPerMeter },
        uLightmapSize: { value: opts.lightmapSize },
      },
      vertexShader: /* glsl */ `
                in vec2 uv2;
                out vec2 vUv2;
                out vec3 vWorldPos;

                void main() {
                    vUv2 = uv2;
                    vec4 wp = modelMatrix * vec4(position, 1.0);
                    vWorldPos = wp.xyz;
                    gl_Position = projectionMatrix * viewMatrix * wp;
                }
            `,
      fragmentShader: /* glsl */ `
                precision highp float;

                uniform float uTexelsPerMeter;
                uniform float uLightmapSize;

                in vec2 vUv2;
                in vec3 vWorldPos;
                out vec4 fragColor;

                void main() {
                    // dUV/dx in UV2 space, then × lightmapSize → texels covered per pixel-step in screen-x.
                    // dWorld/dx → world-units per pixel-step in screen-x.
                    // texelsPerWorld = (texels per pixel) / (world per pixel) = (dUV * res) / dWorld.
                    vec2 dUVdx = dFdx(vUv2) * uLightmapSize;
                    vec2 dUVdy = dFdy(vUv2) * uLightmapSize;
                    vec3 dWdx = dFdx(vWorldPos);
                    vec3 dWdy = dFdy(vWorldPos);

                    float texelsPerWorldX = length(dUVdx) / max(length(dWdx), 1e-6);
                    float texelsPerWorldY = length(dUVdy) / max(length(dWdy), 1e-6);
                    // Geometric mean is robust to anisotropic stretching.
                    float texelDensity = sqrt(texelsPerWorldX * texelsPerWorldY);

                    float ratio = texelDensity / max(uTexelsPerMeter, 1e-6);

                    // Color band selection.
                    vec3 c;
                    if      (ratio < 0.5) c = vec3(1.0, 0.0, 0.0);
                    else if (ratio < 0.8) c = vec3(1.0, 1.0, 0.0);
                    else if (ratio < 1.2) c = vec3(0.0, 1.0, 0.0);
                    else if (ratio < 1.5) c = vec3(0.0, 1.0, 1.0);
                    else                  c = vec3(0.0, 0.0, 1.0);

                    // Checker in WORLD space — one square = CHECKER_TEXELS target
                    // texels wide. CHECKER_TEXELS is decoupled from the actual
                    // texel size so the pattern stays visually readable as the
                    // density slider goes up: at 10 texels/m + 16 texels/square,
                    // squares are 1.6m; at 50 t/m, squares are 0.32m. Triplanar
                    // XOR sum covers all axes — squares stay UNIFORMLY square
                    // across the scene if density is on-target.
                    const float CHECKER_TEXELS = 16.0;
                    float worldPerSquare = CHECKER_TEXELS / max(uTexelsPerMeter, 1e-6);
                    vec3 wcell = floor(vWorldPos / worldPerSquare);
                    float check = mod(wcell.x + wcell.y + wcell.z, 2.0);
                    float bright = check > 0.5 ? 1.0 : 0.6;

                    fragColor = vec4(c * bright, 1.0);
                }
            `,
    });
  }

  setTexelsPerMeter(v: number): void {
    const u = this.uniforms.uTexelsPerMeter;
    if (u) u.value = v;
  }

  setLightmapSize(v: number): void {
    const u = this.uniforms.uLightmapSize;
    if (u) u.value = v;
  }
}
