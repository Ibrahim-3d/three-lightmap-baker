import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  type Light,
  Mesh,
  MeshStandardMaterial,
  type Object3D,
  PlaneGeometry,
  PointLight,
  RectAreaLight,
  SphereGeometry,
  SpotLight,
  type Texture,
  TorusGeometry,
} from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';

/**
 * Asset Library catalog. Drag-drop tiles in the viewport call
 * SceneController.addAsset which dispatches to createAsset().
 *
 * Lights: baker's collectLightsFromScene picks up Point, Spot, Directional,
 * and RectAreaLight automatically. Do NOT set userData.lightmapIgnore on
 * lights created here — they should contribute to the bake.
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
  create: (() => Light) | null;
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
    { id: 'cube',     label: 'Cube',     icon: 'box',      create: () => makeMesh('Cube',     new BoxGeometry(1, 1, 1)) },
    { id: 'sphere',   label: 'Sphere',   icon: 'sphere',   create: () => makeMesh('Sphere',   new SphereGeometry(0.5, 32, 24)) },
    {
      id: 'plane', label: 'Plane', icon: 'plane',
      create: () => { const m = makeMesh('Plane', new PlaneGeometry(1, 1)); m.rotation.x = -Math.PI / 2; return m; },
    },
    { id: 'cylinder', label: 'Cylinder', icon: 'cylinder', create: () => makeMesh('Cylinder', new CylinderGeometry(0.5, 0.5, 1, 32)) },
    { id: 'cone',     label: 'Cone',     icon: 'cone',     create: () => makeMesh('Cone',     new ConeGeometry(0.5, 1, 32)) },
    { id: 'torus',    label: 'Torus',    icon: 'torus',    create: () => makeMesh('Torus',    new TorusGeometry(0.5, 0.18, 16, 48)) },
  ],
  lights: [
    {
      id: 'point', label: 'Point', icon: 'lightbulb', enabled: true,
      create: () => {
        const l = new PointLight(0xffffff, 20, 0, 2);
        l.name = 'Point Light';
        return l;
      },
    },
    {
      id: 'spot', label: 'Spot', icon: 'spot', enabled: true,
      create: () => {
        const l = new SpotLight(0xffffff, 50);
        l.name = 'Spot Light';
        l.angle = Math.PI / 6;
        l.penumbra = 0.3;
        l.decay = 2;
        // Target is added to scene separately by SceneController.addAsset.
        (l as unknown as { _needsTarget: boolean })._needsTarget = true;
        return l;
      },
    },
    {
      id: 'sun', label: 'Sun', icon: 'sun', enabled: true,
      create: () => {
        const l = new DirectionalLight(0xfffde8, 3.0);
        l.name = 'Sun';
        // Position is set by addAsset to the drop point; baker uses it as
        // the light's world-space origin for directional emission.
        return l;
      },
    },
    {
      id: 'area', label: 'Area', icon: 'area', enabled: true,
      create: () => {
        RectAreaLightUniformsLib.init();
        const l = new RectAreaLight(0xffffff, 5.0, 2.0, 2.0);
        l.name = 'Area Light';
        return l;
      },
    },
  ],
};

/** Factory dispatcher used by SceneController.addAsset. */
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
