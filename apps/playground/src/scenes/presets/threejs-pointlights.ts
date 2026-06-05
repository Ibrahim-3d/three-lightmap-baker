import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PointLight,
  SphereGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';

const ROOM = 12;
const HALF = ROOM / 2;
const T = 0.2;

function mat(color: number, roughness = 0.9, metalness = 0.0): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(parent: Object3D): SceneBuildResult {
  const root = new Object3D();
  root.name = 'sceneRoot';
  parent.add(root);

  const wallMat = () => mat(0xe0e0e0);

  const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), wallMat());
  floor.name = 'Floor';
  floor.position.set(0, -T / 2, 0);
  root.add(floor);

  const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), wallMat());
  ceil.name = 'Ceiling';
  ceil.position.set(0, ROOM + T / 2, 0);
  root.add(ceil);

  for (const [name, x, z, sx, sz] of [
    ['Back Wall', 0, -HALF - T / 2, ROOM, T] as const,
    ['Front Wall', 0, HALF + T / 2, ROOM, T] as const,
  ]) {
    const w = new Mesh(new BoxGeometry(sx, ROOM, sz), wallMat());
    w.name = name;
    w.position.set(x, HALF, z);
    root.add(w);
  }
  for (const [name, x, sx, sz] of [
    ['Left Wall', -HALF - T / 2, T, ROOM] as const,
    ['Right Wall', HALF + T / 2, T, ROOM] as const,
  ]) {
    const w = new Mesh(new BoxGeometry(sx, ROOM, sz), wallMat());
    w.name = name;
    w.position.set(x, HALF, 0);
    root.add(w);
  }

  // Three colored point lights - visual markers as small emissive spheres
  // (`lightmapIgnore=true` so they aren't UV-unwrapped).
  const lights: [number, number, number, number][] = [
    [0xff4040, -3.0, 3.0, 0.0],
    [0x40ff40, 3.0, 6.0, -2.0],
    [0x4080ff, 0.0, 4.5, 3.0],
  ];
  for (let i = 0; i < lights.length; i++) {
    const [color, x, y, z] = lights[i]!;
    const p = new PointLight(color, 60, 0, 2);
    p.position.set(x, y, z);
    root.add(p);
    const marker = new Mesh(
      new SphereGeometry(0.18, 16, 12),
      new MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: 3 }),
    );
    marker.name = `Point Light ${i + 1}`;
    marker.position.set(x, y, z);
    marker.userData.lightmapIgnore = true;
    root.add(marker);
  }

  return {
    camera: { position: [0, 6, 20], target: [0, 5, 0] },
    lightDummy: { position: [0, ROOM - 0.5, 0] },
    background: 0x050508,
  };
}

sceneRegistry.register({
  id: 'threejs.pointlights',
  label: 'three.js - Point Lights',
  category: 'threejs-port',
  description:
    'Port of the three.js webgl_lights_pointlights example: 3 colored point lights in a closed room.',
  source: {
    name: 'three.js / webgl_lights_pointlights',
    url: 'https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights',
    license: 'MIT',
    author: 'three.js authors',
  },
  referenceUrl: 'https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights',
  build,
  defaultBakeSettings: {
    lightMapSize: 1024,
    targetSamples: 256,
    bounces: 2,
    casts: 5,
    texelsPerMeter: 8,
  },
  schemaVersion: 1,
});
