import {
  BoxGeometry,
  BufferGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  type Light,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  PointLight,
  RectAreaLight,
  SphereGeometry,
  SpotLight,
  type Texture,
  TorusGeometry,
  Vector3,
} from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

/** Materials used on light-gizmo meshes and line helpers. Both expose
 *  `.color: Color`, so {@link paintGizmos} can tint them uniformly. */
type GizmoMaterial = MeshBasicMaterial | LineBasicMaterial;

/** Narrow check for a renderable child carrying a gizmo material. */
function hasGizmoMaterial(
  o: Object3D,
): o is Mesh<BufferGeometry, GizmoMaterial> | LineSegments<BufferGeometry, GizmoMaterial> {
  const mat = (o as Mesh | LineSegments).material;
  return mat instanceof MeshBasicMaterial || mat instanceof LineBasicMaterial;
}

/**
 * Asset Library catalog (T-D7). Each entry is a factory producing a fresh
 * THREE node. Drag-drop into the viewport calls SceneController.addAsset which
 * invokes the factory and positions the result at the raycast hit point.
 *
 * Materials default to `MeshStandardMaterial({ color: 0xb0b0b0, roughness: 0.8 })`
 * with `_originalMap: null` injected so the Albedo render mode reads correctly
 * (matches the `SceneController.mat` pattern).
 */

export type AssetCategory = 'primitive' | 'light';

export type AssetSpec = {
  kind: AssetCategory;
  id: string;
};

export type PrimitiveDef = {
  id: string;
  label: string;
  icon: 'box' | 'sphere' | 'plane' | 'cylinder' | 'cone' | 'torus';
  create: () => Mesh;
};

export type LightDef = {
  id: string;
  label: string;
  icon: 'lightbulb' | 'sun' | 'spot' | 'area';
  enabled: boolean;
  /**
   * Factory returns the visible scene node - usually a Group bundling the
   * actual Light + a TargetObject + a LightHelper (Blender-style gizmo).
   * Marking the group's `userData.bakerLightType` lets the inspector know
   * which type-specific fields to render.
   */
  create: (() => Object3D) | null;
};

function defaultMat(): MeshStandardMaterial {
  const m = new MeshStandardMaterial({ color: 0xb0b0b0, roughness: 0.8, metalness: 0 });
  (m as unknown as { _originalMap: Texture | null })._originalMap = null;
  return m;
}

function makeMesh(name: string, geom: ConstructorParameters<typeof Mesh>[0]): Mesh {
  const mesh = new Mesh(geom, defaultMat());
  mesh.name = name;
  return mesh;
}

export const primitiveCatalog: {
  primitives: ReadonlyArray<PrimitiveDef>;
  lights: ReadonlyArray<LightDef>;
} = {
  primitives: [
    {
      id: 'cube',
      label: 'Cube',
      icon: 'box',
      create: () => makeMesh('Cube', new BoxGeometry(1, 1, 1)),
    },
    {
      id: 'sphere',
      label: 'Sphere',
      icon: 'sphere',
      create: () => makeMesh('Sphere', new SphereGeometry(0.5, 32, 24)),
    },
    {
      id: 'plane',
      label: 'Plane',
      icon: 'plane',
      create: () => {
        const m = makeMesh('Plane', new PlaneGeometry(1, 1));
        m.rotation.x = -Math.PI / 2;
        return m;
      },
    },
    {
      id: 'cylinder',
      label: 'Cylinder',
      icon: 'cylinder',
      create: () => makeMesh('Cylinder', new CylinderGeometry(0.5, 0.5, 1, 32)),
    },
    {
      id: 'cone',
      label: 'Cone',
      icon: 'cone',
      create: () => makeMesh('Cone', new ConeGeometry(0.5, 1, 32)),
    },
    {
      id: 'torus',
      label: 'Torus',
      icon: 'torus',
      create: () => makeMesh('Torus', new TorusGeometry(0.5, 0.18, 16, 48)),
    },
  ],
  lights: [
    {
      id: 'point',
      label: 'Point',
      icon: 'lightbulb',
      enabled: true,
      create: () => makePointLight(),
    },
    {
      id: 'spot',
      label: 'Spot',
      icon: 'spot',
      enabled: true,
      create: () => makeSpotLight(),
    },
    {
      id: 'sun',
      label: 'Sun',
      icon: 'sun',
      enabled: true,
      create: () => makeSunLight(),
    },
    {
      id: 'area',
      label: 'Area',
      icon: 'area',
      enabled: true,
      create: () => makeAreaLight(),
    },
  ],
};

/**
 * Tag all descendants of a helper subtree as bake-ignored. Helpers are visual
 * gizmos and must never contribute to lightmap energy. (The actual Light
 * inside the same Group is NOT tagged - only the helper subtree.)
 */
function markHelperLightmapIgnore(helper: Object3D): void {
  helper.userData.lightmapIgnore = true;
  helper.traverse((c) => {
    c.userData.lightmapIgnore = true;
  });
}

/** Tiny lines material used for all custom light gizmos. */
function gizmoLineMat(color: number): LineBasicMaterial {
  return new LineBasicMaterial({ color, toneMapped: false, fog: false });
}

/** Unit spot cone - apex at origin, opens along -Z, base radius 1 at z=-1.
 *  Scale via `cone.scale.set(r, r, length)` to match light angle/distance. */
function buildUnitSpotCone(color: number): LineSegments {
  const positions: number[] = [];
  // 4 ribs from apex to base ring (cross pattern).
  positions.push(0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, -1, -1);
  // Base ring (24 segments) on the z=-1 plane.
  const segs = 24;
  for (let i = 0; i < segs; i++) {
    const a1 = (i / segs) * Math.PI * 2;
    const a2 = ((i + 1) / segs) * Math.PI * 2;
    positions.push(Math.cos(a1), Math.sin(a1), -1, Math.cos(a2), Math.sin(a2), -1);
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3));
  return new LineSegments(geo, gizmoLineMat(color));
}

/** Sun gizmo: short rays radiating from origin + arrow shaft along -Z. */
function buildSunGizmo(length: number, color: number): LineSegments {
  const positions: number[] = [];
  // 8 rays radiating in the XY plane around the origin.
  const rays = 8;
  const rOuter = 0.5;
  const rInner = 0.2;
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2;
    positions.push(
      Math.cos(a) * rInner,
      Math.sin(a) * rInner,
      0,
      Math.cos(a) * rOuter,
      Math.sin(a) * rOuter,
      0,
    );
  }
  // Direction arrow along -Z.
  positions.push(0, 0, 0, 0, 0, -length);
  const head = 0.18;
  const headZ = -length + head * 1.5;
  positions.push(0, 0, -length, head, 0, headZ);
  positions.push(0, 0, -length, -head, 0, headZ);
  positions.push(0, 0, -length, 0, head, headZ);
  positions.push(0, 0, -length, 0, -head, headZ);
  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3));
  return new LineSegments(geo, gizmoLineMat(color));
}

/** Set color on every gizmo material in a light group (Mesh + LineSegments
 *  children flagged `lightGizmo`). Used by per-frame helper updaters. */
function paintGizmos(group: Object3D, color: Color): void {
  group.traverse((o) => {
    if (!o.userData?.lightGizmo) return;
    if (hasGizmoMaterial(o)) o.material.color.copy(color);
  });
}

function makePointLight(): Object3D {
  const group = new Group();
  group.name = 'Point Light';
  group.userData.bakerLightType = 'point';

  const light = new PointLight(0xffffff, 2.0, 0, 2);
  light.name = 'PointLight';
  group.add(light);

  // Bulb: solid emissive sphere - primary visible/clickable indicator at pivot.
  const bulb = new Mesh(
    new SphereGeometry(0.12, 16, 12),
    new MeshBasicMaterial({ color: 0xffe080, toneMapped: false }),
  );
  bulb.userData.lightmapIgnore = true;
  bulb.userData.lightGizmo = true;
  group.add(bulb);

  // Halo: small radial rays to make it read as a light source in the viewport.
  const haloPositions: number[] = [];
  const rays = 6;
  const rIn = 0.18;
  const rOut = 0.32;
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2;
    haloPositions.push(
      Math.cos(a) * rIn,
      Math.sin(a) * rIn,
      0,
      Math.cos(a) * rOut,
      Math.sin(a) * rOut,
      0,
    );
  }
  const haloGeo = new BufferGeometry();
  haloGeo.setAttribute('position', new Float32BufferAttribute(haloPositions, 3));
  const halo = new LineSegments(haloGeo, gizmoLineMat(0xffe080));
  halo.userData.lightmapIgnore = true;
  halo.userData.lightGizmo = true;
  group.add(halo);

  // Per-frame sync: gizmo colors follow light.color.
  group.userData.lightHelper = {
    update: () => paintGizmos(group, light.color),
  };
  return group;
}

function makeSpotLight(): Object3D {
  const group = new Group();
  group.name = 'Spot Light';
  group.userData.bakerLightType = 'spot';

  const light = new SpotLight(0xffffff, 4.0, 0, Math.PI / 6, 0.3, 2);
  light.name = 'SpotLight';
  // Target sits one unit along -Z (group local) - rotating the group rotates
  // the cone direction.
  const target = new Object3D();
  target.position.set(0, 0, -1);
  target.userData.lightmapIgnore = true;
  group.add(light);
  group.add(target);
  light.target = target;

  // Unit cone - scaled per-frame to match light.angle + light.distance.
  const cone = buildUnitSpotCone(0xffd200);
  cone.userData.lightmapIgnore = true;
  cone.userData.lightGizmo = true;
  group.add(cone);

  // Small bulb at apex so the pivot is obvious + always raycast-hittable.
  const bulb = new Mesh(
    new SphereGeometry(0.08, 12, 8),
    new MeshBasicMaterial({ color: 0xffd200, toneMapped: false }),
  );
  bulb.userData.lightmapIgnore = true;
  bulb.userData.lightGizmo = true;
  group.add(bulb);

  // Per-frame sync: cone radius = length * tan(angle), length tracks
  // light.distance (clamped). Color tracks light.color.
  group.userData.lightHelper = {
    update: () => {
      const len = light.distance > 0 ? Math.min(light.distance, 8) : 2.5;
      const r = len * Math.tan(light.angle);
      cone.scale.set(r, r, len);
      paintGizmos(group, light.color);
    },
  };

  group.userData.lightTarget = target;
  return group;
}

function makeSunLight(): Object3D {
  const group = new Group();
  group.name = 'Sun';
  group.userData.bakerLightType = 'directional';

  const light = new DirectionalLight(0xffffff, 1.0);
  light.name = 'DirectionalLight';
  const target = new Object3D();
  target.position.set(0, 0, -1);
  target.userData.lightmapIgnore = true;
  group.add(light);
  group.add(target);
  light.target = target;

  // Custom sun gizmo at group origin - rays + direction arrow along -Z.
  const sun = buildSunGizmo(1.2, 0xffd200);
  sun.userData.lightmapIgnore = true;
  sun.userData.lightGizmo = true;
  group.add(sun);

  // Small bulb for hit/visual feedback at pivot.
  const bulb = new Mesh(
    new SphereGeometry(0.1, 12, 8),
    new MeshBasicMaterial({ color: 0xffd200, toneMapped: false }),
  );
  bulb.userData.lightmapIgnore = true;
  bulb.userData.lightGizmo = true;
  group.add(bulb);

  // Per-frame sync: gizmo colors follow light.color.
  group.userData.lightHelper = {
    update: () => paintGizmos(group, light.color),
  };

  group.userData.lightTarget = target;
  return group;
}

function makeAreaLight(): Object3D {
  const group = new Group();
  group.name = 'Area Light';
  group.userData.bakerLightType = 'area';

  const light = new RectAreaLight(0xffffff, 5.0, 2, 2);
  light.name = 'RectAreaLight';
  group.add(light);

  // RectAreaLightHelper is from /examples/jsm; it adds a thin rectangle outline
  // matching the emitter footprint. NOT a child of light (positions itself).
  const helper = new RectAreaLightHelper(light);
  markHelperLightmapIgnore(helper);
  light.add(helper);

  group.userData.lightHelper = helper;
  return group;
}

/**
 * Wrap an already-created THREE light into a baker-style Group so it becomes
 * a first-class scene-tree citizen (selectable, deletable, editable through
 * the same SceneLightPage as asset-library lights). Used by scene presets
 * that build raw lights with `new PointLight(...)` etc.
 *
 * Preserves the light's world position by transferring it to the wrapper
 * group and zeroing the light's local position. The original light's parent
 * is left intact for any siblings (markers, etc.) - they are NOT moved here.
 */
export function wrapAsBakerLight(light: Light, displayName?: string): Object3D {
  const type = detectLightType(light);
  const group = new Group();
  group.name = displayName ?? light.name ?? defaultLightName(type);
  group.userData.bakerLightType = type;

  const wp = light.getWorldPosition(new Vector3());
  const oldParent = light.parent;
  if (oldParent) oldParent.remove(light);
  light.position.set(0, 0, 0);
  group.position.copy(wp);
  group.add(light);

  // For Spot / Directional, the .target Object3D must be in the same scene
  // graph as the light. Recompute the target's local position relative to
  // the new group origin so the world-space direction is preserved.
  if (type === 'spot' || type === 'directional') {
    const target = (light as SpotLight | DirectionalLight).target;
    if (target) {
      const wt = target.getWorldPosition(new Vector3());
      target.parent?.remove(target);
      target.position.copy(wt.sub(wp));
      target.userData.lightmapIgnore = true;
      group.add(target);
      group.userData.lightTarget = target;
    }
  }

  // Bulb marker - small emissive-style sphere tinted by the light's color
  // so the light has a visible, clickable footprint in the viewport.
  const bulbColor = (light as PointLight).color?.getHex?.() ?? 0xffffff;
  const bulb = new Mesh(
    new SphereGeometry(0.14, 16, 12),
    new MeshBasicMaterial({ color: bulbColor, toneMapped: false }),
  );
  bulb.userData.lightmapIgnore = true;
  bulb.userData.lightGizmo = true;
  group.add(bulb);

  // For area lights, attach the standard RectAreaLightHelper outline so the
  // footprint is visible at the editing-time orientation.
  if (type === 'area') {
    const helper = new RectAreaLightHelper(light as RectAreaLight);
    markHelperLightmapIgnore(helper);
    light.add(helper);
    group.userData.lightHelper = helper;
  } else {
    group.userData.lightHelper = {
      update: () => paintGizmos(group, light.color),
    };
  }

  // If `oldParent` was a sibling-marker container (typical preset pattern of
  // "PointLight + Mesh marker next to each other"), we leave it alone - the
  // caller is expected to drop their hand-rolled marker if they want a clean
  // single visual. The bulb we add above is the canonical marker going forward.

  return group;
}

function detectLightType(light: Light): 'point' | 'spot' | 'directional' | 'area' {
  if (light instanceof PointLight) return 'point';
  if (light instanceof SpotLight) return 'spot';
  if (light instanceof DirectionalLight) return 'directional';
  if (light instanceof RectAreaLight) return 'area';
  // Generic Light (rare). Default to point so the editor still works.
  return 'point';
}

function defaultLightName(type: 'point' | 'spot' | 'directional' | 'area'): string {
  switch (type) {
    case 'point':
      return 'Point Light';
    case 'spot':
      return 'Spot Light';
    case 'directional':
      return 'Sun';
    case 'area':
      return 'Area Light';
  }
}

/** Factory dispatcher used by SceneController.addAsset. Returns null when the
 *  spec id is unknown or the catalog entry is disabled (e.g. Spot placeholder). */
export function createAsset(spec: AssetSpec): Object3D | null {
  if (spec.kind === 'primitive') {
    const def = primitiveCatalog.primitives.find((p) => p.id === spec.id);
    return def ? def.create() : null;
  }
  if (spec.kind === 'light') {
    const def = primitiveCatalog.lights.find((l) => l.id === spec.id);
    return def && def.enabled && def.create ? def.create() : null;
  }
  return null;
}
