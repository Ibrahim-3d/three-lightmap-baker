import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  type Light,
  Mesh,
  MeshStandardMaterial,
  type Object3D,
  PlaneGeometry,
  PointLight,
  SphereGeometry,
  type Texture,
  TorusGeometry,
} from 'three';

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
    { id: 'cube', label: 'Cube', icon: 'box', create: () => makeMesh('Cube', new BoxGeometry(1, 1, 1)) },
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
      create: () => {
        const l = new PointLight(0xffffff, 2.0, 0, 2);
        l.name = 'Point Light';
        return l;
      },
    },
    { id: 'spot', label: 'Spot', icon: 'spot', enabled: false, create: null },
    { id: 'sun', label: 'Sun', icon: 'sun', enabled: false, create: null },
    { id: 'area', label: 'Area', icon: 'area', enabled: false, create: null },
  ],
};

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
