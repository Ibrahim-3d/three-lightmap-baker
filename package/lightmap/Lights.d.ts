/**
 * Lights.ts - multi-light packing for the lightmap bake pipeline.
 *
 * Lights are stored in a 4-wide DataTexture (RGBA float), one row per light:
 *   texel (0, i): vec4(pos.xyz,   typeEncoded)  - position + type [0..3]
 *   texel (1, i): vec4(dir.xyz,   params.x)     - direction + param0
 *   texel (2, i): vec4(color.rgb, params.y)     - color + param1
 *   texel (3, i): vec4(params.z,  params.w, 0, 0) - remaining params
 *
 * Type encoding: point=0, directional=1, spot=2, area=3.
 *
 * Intensity convention: baked intensity is a unitless scalar multiplier.
 * PointLight/SpotLight.intensity is in candela in Three.js; we treat it
 * as a dimensionless scale factor matching the bake's baseline convention.
 */
import { Color, DataTexture, Object3D, Vector3 } from 'three';
export type LightType = 'point' | 'directional' | 'spot' | 'area';
export interface PackedLight {
    type: LightType;
    /** World-space position (point/spot/area). Ignored for directional. */
    position: Vector3;
    /** World-space emission direction (directional/spot/area normal). Ignored for point. */
    direction: Vector3;
    /** Linear-space color * intensity (folded HDR). */
    color: Color;
    /**
     * Type-specific params:
     *   point:       [softRadius, 0, 0, 0]
     *   directional: [angularSizeRad, 0, 0, 0]
     *   spot:        [innerAngleCos, outerAngleCos, 0, 0]
     *   area:        [width, height, 0, 0]
     */
    params: [number, number, number, number];
}
export declare const LIGHT_TEX_WIDTH = 4;
/**
 * Walk the scene tree and convert Three.js lights to PackedLight.
 *
 * Skips:
 *  - Invisible lights (`visible === false`)
 *  - Anything marked `userData.lightmapIgnore = true` - same opt-out flag the
 *    mesh collector honors. Use this on visual-only lights (camera-render
 *    helpers, gizmo lights) that must NOT contribute energy to the bake.
 *    Without this guard, a 30× display-only PointLight in the scene gets
 *    packed at its display intensity and over-exposes the lightmap.
 */
export declare function collectLightsFromScene(scene: Object3D): PackedLight[];
export declare function buildLightTexture(lights: PackedLight[]): {
    texture: DataTexture;
    count: number;
    capacity: number;
};
export declare function disposeLightTexture(tex: DataTexture): void;
//# sourceMappingURL=Lights.d.ts.map