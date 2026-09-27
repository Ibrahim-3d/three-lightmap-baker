/**
 * Lights.ts - multi-light packing for the lightmap bake pipeline.
 *
 * Lights are stored in a 6-wide DataTexture (RGBA float), one row per light:
 *   texel (0, i): vec4(pos.xyz,   typeEncoded)  - position + type [0..3]
 *   texel (1, i): vec4(dir.xyz,   params.x)     - direction + param0
 *   texel (2, i): vec4(color.rgb, params.y)     - color + param1
 *   texel (3, i): vec4(params.z,  params.w, 0, 0) - remaining params
 *
 * Type encoding: point=0, directional=1, spot=2, area=3.
 *
 * Outputs are linear diffuse irradiance. Punctual lights use Three.js range
 * and decay; rectangles integrate radiance over their emitting area.
 */

import { isBakeVisible } from '../bake/visibility';
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
   *   point:       [softRadius, 0, distance, decay]
   *   directional: [angularSizeRad, 0, 0, 0]
   *   spot:        [innerAngleCos, outerAngleCos, distance, decay]
   *   area:        [width, height, 0, 0]
   */
  params: [number, number, number, number];
  tangent?: Vector3;
  bitangent?: Vector3;
}

const TYPE_INT: Record<LightType, number> = { point: 0, directional: 1, spot: 2, area: 3 };
export const LIGHT_TEX_WIDTH = 6;

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
export function collectLightsFromScene(scene: Object3D): PackedLight[] {
  const out: PackedLight[] = [];
  scene.traverse((obj) => {
    if (!isBakeVisible(obj)) return;
    if (obj instanceof PointLight) {
      out.push({
        type: 'point',
        position: obj.getWorldPosition(new Vector3()),
        direction: new Vector3(0, -1, 0),
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, obj.distance, obj.decay],
      });
    } else if (obj instanceof DirectionalLight) {
      const dir = targetDirection(obj);
      out.push({
        type: 'directional',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, 0, 0],
      });
    } else if (obj instanceof SpotLight) {
      const dir = targetDirection(obj);
      out.push({
        type: 'spot',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [
          Math.cos(obj.angle * (1 - obj.penumbra)),
          Math.cos(obj.angle),
          obj.distance,
          obj.decay,
        ],
      });
    } else if (obj instanceof RectAreaLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: 'area',
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [obj.width, obj.height, 0, 0],
        tangent: new Vector3(1, 0, 0).transformDirection(obj.matrixWorld),
        bitangent: new Vector3(0, 1, 0).transformDirection(obj.matrixWorld),
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
  for (const light of lights) {
    const values = [
      ...light.position.toArray(),
      ...light.direction.toArray(),
      light.color.r,
      light.color.g,
      light.color.b,
      ...light.params,
      ...(light.tangent?.toArray() ?? []),
      ...(light.bitangent?.toArray() ?? []),
    ];
    if (!values.every(Number.isFinite) || Math.min(light.color.r, light.color.g, light.color.b) < 0)
      throw new Error('Lights must contain finite values and non-negative radiance');
    if (
      (light.type === 'point' || light.type === 'spot') &&
      (light.params[2] < 0 || light.params[3] < 0)
    )
      throw new Error('Light distance and decay must be non-negative');
    if (light.type === 'area' && (light.params[0] <= 0 || light.params[1] <= 0))
      throw new Error('Area light dimensions must be positive');
    if (light.type !== 'point' && light.direction.lengthSq() < 1e-12)
      throw new Error('Light direction must be nonzero; check the light target');
  }
  const capacity = Math.max(1, lights.length);
  // 6 texels wide × capacity tall, RGBA float.
  const data = new Float32Array(LIGHT_TEX_WIDTH * capacity * 4);

  for (let i = 0; i < lights.length; i++) {
    const l = lights[i];
    if (!l) continue;
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
    const direction = l.direction.clone().normalize();
    const up = Math.abs(direction.y) < 0.999 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
    const tangent = l.tangent ?? up.cross(direction).normalize();
    const bitangent = l.bitangent ?? direction.clone().cross(tangent);
    tangent.toArray(data, base + 16);
    bitangent.toArray(data, base + 20);
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

function targetDirection(light: DirectionalLight | SpotLight): Vector3 {
  light.target.updateWorldMatrix(true, false);
  return light.target
    .getWorldPosition(new Vector3())
    .sub(light.getWorldPosition(new Vector3()))
    .normalize();
}
