import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';

const FLOOR = 6;
const HALF = FLOOR / 2;
const WALL_H = 4;
const T = 0.15;

function mat(color: number, roughness = 0.9, metalness = 0.0): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(parent: Object3D): SceneBuildResult {
  const root = new Object3D();
  root.name = 'sceneRoot';
  parent.add(root);

  const floor = new Mesh(new BoxGeometry(FLOOR, T, FLOOR), mat(0xcfa67a));
  floor.name = 'Floor';
  floor.position.set(0, -T / 2, 0);
  root.add(floor);

  // Two walls + one short partial — leaves the front-right corner open so
  // the camera can see in.
  const wallBack = new Mesh(new BoxGeometry(FLOOR, WALL_H, T), mat(0xefe1c8));
  wallBack.name = 'Back Wall';
  wallBack.position.set(0, WALL_H / 2, -HALF - T / 2);
  root.add(wallBack);

  const wallLeft = new Mesh(new BoxGeometry(T, WALL_H, FLOOR), mat(0xe1d2b3));
  wallLeft.name = 'Left Wall';
  wallLeft.position.set(-HALF - T / 2, WALL_H / 2, 0);
  root.add(wallLeft);

  // Furniture-like primitives.
  const bed = new Mesh(new BoxGeometry(2.4, 0.6, 1.4), mat(0x6c7a89));
  bed.name = 'Bed';
  bed.position.set(-1.5, 0.3, -1.8);
  root.add(bed);

  const pillow = new Mesh(new BoxGeometry(0.7, 0.2, 1.2), mat(0xf8f3e4));
  pillow.name = 'Pillow';
  pillow.position.set(-2.4, 0.7, -1.8);
  root.add(pillow);

  const table = new Mesh(new BoxGeometry(1.4, 0.9, 0.8), mat(0x8b5a2b));
  table.name = 'Table';
  table.position.set(1.4, 0.45, -1.6);
  root.add(table);

  const stool = new Mesh(new BoxGeometry(0.6, 0.6, 0.6), mat(0xa67c52));
  stool.name = 'Stool';
  stool.position.set(0.6, 0.3, 0.6);
  root.add(stool);

  const lamp = new Mesh(new BoxGeometry(0.3, 0.6, 0.3), mat(0x2a2a2a));
  lamp.name = 'Lamp Base';
  lamp.position.set(1.4, 1.2, -1.6);
  root.add(lamp);

  return {
    // High pseudo-isometric camera. ~45° from above-front.
    camera: { position: [9, 9, 9], target: [0, 1, 0] },
    lightDummy: { position: [2.0, WALL_H - 0.2, 1.0] },
    background: 0x202028,
  };
}

sceneRegistry.register({
  id: 'isometric.room',
  label: 'Isometric — Low-Poly Room',
  category: 'isometric',
  description: 'CC0 low-poly isometric room: floor + 2 walls + bed/table/stool. Locked iso camera.',
  source: {
    name: 'three-lightmap-baker built-in',
    url: 'https://github.com/lucas-jones/three-lightmap-baker',
    license: 'CC0',
    author: 'three-lightmap-baker',
  },
  build,
  defaultBakeSettings: {
    lightMapSize: 1024,
    targetSamples: 256,
    bounces: 2,
    casts: 5,
    texelsPerMeter: 12,
  },
  schemaVersion: 1,
});
