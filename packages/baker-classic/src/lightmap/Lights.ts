/**
 * Lights.ts — multi-light packing for the lightmap bake pipeline.
 *
 * Lights are stored in a 4-wide DataTexture (RGBA float), one row per light:
 *   texel (0, i): vec4(pos.xyz,   typeEncoded)  — position + type [0..3]
 *   texel (1, i): vec4(dir.xyz,   params.x)     — direction + param0
 *   texel (2, i): vec4(color.rgb, params.y)     — color + param1
 *   texel (3, i): vec4(params.z,  params.w, 0, 0) — remaining params
 *
 * Type encoding: point=0, directional=1, spot=2, area=3.
 *
 * Intensity convention: baked intensity is a unitless scalar multiplier.
 * PointLight/SpotLight.intensity is in candela in Three.js; we treat it
 * as a dimensionless scale factor matching the bake's baseline convention.
 */

import {
  ClampToEdgeWrapping,
  Color,
  DataTexture,
  DirectionalLight,
  FloatType,
  NearestFilter,
  Object3D,
  PointLight,
  RectAreaLight,
  RGBAFormat,
  SpotLight,
  Vector3,
} from 'three';

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

const TYPE_INT: Record<LightType, number> = { point: 0, directional: 1, spot: 2, area: 3 };
export const LIGHT_TEX_WIDTH = 4;

/**
 * Walk the scene tree and convert Three.js lights to PackedLight.
 *
 * Skips:
 *  - Invisible lights (`visible === false`)
 *  - Anything marked `userData.lightmapIgnore = true` — same opt-out flag the
 *    mesh collector honors. Use this on visual-only lights (camera-render
 *    helpers, gizmo lights) that must NOT contribute energy to the bake.
 *    Without this guard, a 30× display-only PointLight in the scene gets
 *    packed at its display intensity and over-exposes the lightmap.
 */
export function collectLightsFromScene(scene: Object3D): PackedLight[] {
  const out: PackedLight[] = [];
  scene.traverse((obj) => {
    if (!obj.visible) return;
    if (obj.userData?.lightmapIgnore) return;
    if (obj instanceof PointLight) {
      out.push({
        type: 'point',
        position: obj.getWorldPosition(new Vector3()),
        direction: new Vector3(0, -1, 0),
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, 0, 0],
      });
    } else if (obj instanceof DirectionalLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: 'directional',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, 0, 0],
      });
    } else if (obj instanceof SpotLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: 'spot',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [Math.cos(obj.angle * (1 - obj.penumbra)), Math.cos(obj.angle), 0, 0],
      });
    } else if (obj instanceof RectAreaLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: 'area',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [obj.width, obj.height, 0, 0],
      });
    }
  });
  return out;
}

export function buildLightTexture(lights: PackedLight[]): {
  texture: DataTexture;
  count: number;
  capacity: number;
} {
  const capacity = Math.max(1, lights.length);
  // 4 texels wide × capacity tall, RGBA float.
  const data = new Float32Array(LIGHT_TEX_WIDTH * capacity * 4);

  for (let i = 0; i < lights.length; i++) {
    const l = lights[i]!;
    const base = i * LIGHT_TEX_WIDTH * 4;
    // texel 0: pos.xyz, type
    data[base + 0] = l.position.x;
    data[base + 1] = l.position.y;
    data[base + 2] = l.position.z;
    data[base + 3] = TYPE_INT[l.type];
    // texel 1: dir.xyz, params.x
    data[base + 4] = l.direction.x;
    data[base + 5] = l.direction.y;
    data[base + 6] = l.direction.z;
    data[base + 7] = l.params[0];
    // texel 2: color.rgb, params.y
    data[base + 8] = l.color.r;
    data[base + 9] = l.color.g;
    data[base + 10] = l.color.b;
    data[base + 11] = l.params[1];
    // texel 3: params.z, params.w, 0, 0
    data[base + 12] = l.params[2];
    data[base + 13] = l.params[3];
    data[base + 14] = 0;
    data[base + 15] = 0;
  }

  const tex = new DataTexture(data, LIGHT_TEX_WIDTH, capacity, RGBAFormat, FloatType);
  tex.minFilter = NearestFilter;
  tex.magFilter = NearestFilter;
  tex.generateMipmaps = false;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.needsUpdate = true;

  return { texture: tex, count: lights.length, capacity };
}

export function disposeLightTexture(tex: DataTexture): void {
  tex.dispose();
}
