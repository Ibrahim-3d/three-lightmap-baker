import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DirectionalLightHelper,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  PointLight,
  PointLightHelper,
  RectAreaLight,
  SphereGeometry,
  SpotLight,
  SpotLightHelper,
  type Texture,
  TorusGeometry,
} from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

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
   * Factory returns the visible scene node — usually a Group bundling the
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
 * inside the same Group is NOT tagged — only the helper subtree.)
 */
function markHelperLightmapIgnore(helper: Object3D): void {
  helper.userData.lightmapIgnore = true;
  helper.traverse((c) => {
    c.userData.lightmapIgnore = true;
  });
}

function makePointLight(): Object3D {
  const group = new Group();
  group.name = 'Point Light';
  group.userData.bakerLightType = 'point';

  const light = new PointLight(0xffffff, 2.0, 0, 2);
  light.name = 'PointLight';
  group.add(light);

  // PointLightHelper draws a wireframe sphere at light's worldPos. The bulb
  // body is a small emissive sphere so the light is visible in solid view.
  const bulb = new Mesh(
    new SphereGeometry(0.08, 16, 12),
    new MeshBasicMaterial({ color: 0xffe080 }),
  );
  bulb.userData.lightmapIgnore = true;
  group.add(bulb);

  const helper = new PointLightHelper(light, 0.35, 0xffe080);
  markHelperLightmapIgnore(helper);
  group.add(helper);

  group.userData.lightHelper = helper;
  return group;
}

function makeSpotLight(): Object3D {
  const group = new Group();
  group.name = 'Spot Light';
  group.userData.bakerLightType = 'spot';

  const light = new SpotLight(0xffffff, 4.0, 0, Math.PI / 6, 0.3, 2);
  light.name = 'SpotLight';
  // Spot needs an explicit target object inside the group so rotating the
  // group rotates the cone. Target sits one unit along -Z (group local).
  const target = new Object3D();
  target.position.set(0, 0, -1);
  target.userData.lightmapIgnore = true;
  group.add(light);
  group.add(target);
  light.target = target;

  const helper = new SpotLightHelper(light, 0xffd200);
  markHelperLightmapIgnore(helper);
  group.add(helper);

  group.userData.lightHelper = helper;
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

  // DirectionalLightHelper draws a plane + an arrow showing direction.
  // `size` controls plane edge length; tuned to feel Blender-ish in our scene.
  const helper = new DirectionalLightHelper(light, 1.5, 0xffd200);
  markHelperLightmapIgnore(helper);
  group.add(helper);

  group.userData.lightHelper = helper;
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
