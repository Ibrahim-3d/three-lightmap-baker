import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
  TorusKnotGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';

const ROOM = 10;
const HALF = ROOM / 2;
const T = 0.2;

function mat(color: number, roughness = 0.95, metalness = 0.0): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(parent: Object3D): SceneBuildResult {
  const root = new Object3D();
  root.name = 'sceneRoot';
  parent.add(root);

  const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), mat(0xf0f0f0));
  floor.name = 'Floor';
  floor.position.set(0, -T / 2, 0);
  root.add(floor);

  const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), mat(0xf0f0f0));
  ceil.name = 'Ceiling';
  ceil.position.set(0, ROOM + T / 2, 0);
  root.add(ceil);

  const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), mat(0xf0f0f0));
  back.name = 'Back Wall';
  back.position.set(0, HALF, -HALF - T / 2);
  root.add(back);

  const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), mat(0xd62728));
  left.name = 'Left Wall (Red)';
  left.position.set(-HALF - T / 2, HALF, 0);
  root.add(left);

  const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), mat(0x2ca02c));
  right.name = 'Right Wall (Green)';
  right.position.set(HALF + T / 2, HALF, 0);
  root.add(right);

  const tall = new Mesh(new BoxGeometry(3, 6, 3), mat(0xe8e8e8));
  tall.name = 'Tall Block';
  tall.position.set(-1.8, 3, -1.5);
  tall.rotation.y = 0.29;
  root.add(tall);

  const short = new Mesh(new BoxGeometry(3, 3, 3), mat(0xe8e8e8));
  short.name = 'Short Block';
  short.position.set(1.8, 1.5, 1.5);
  short.rotation.y = -0.29;
  root.add(short);

  const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), mat(0xf5f5f5, 0.4, 0.0));
  sphere.name = 'Sphere';
  sphere.position.set(2.4, 1.0, 3.0);
  root.add(sphere);

  const knot = new Mesh(new TorusKnotGeometry(0.55, 0.18, 160, 24), mat(0xffd166, 0.55, 0.0));
  knot.name = 'Torus Knot';
  knot.position.set(0.0, 1.0, 2.8);
  knot.rotation.x = Math.PI / 2;
  root.add(knot);

  const accent = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), mat(0xc77a3a, 0.8, 0.0));
  accent.name = 'Accent Block';
  accent.position.set(-3.5, 0.6, 2.8);
  accent.rotation.y = 0.45;
  root.add(accent);

  return {
    camera: { position: [0, 5, 18], target: [0, 5, 0] },
    lightDummy: { position: [0, ROOM - 0.001, 0] },
    background: 0x0a0a0a,
  };
}

sceneRegistry.register({
  id: 'cornell.advanced',
  label: 'Cornell - Advanced',
  category: 'cornell',
  description: 'Cornell Box + sphere + torus knot + accent block. Matches today’s default.',
  build,
  defaultBakeSettings: {
    lightMapSize: 1024,
    targetSamples: 256,
    bounces: 2,
    casts: 5,
    texelsPerMeter: 1,
  },
  schemaVersion: 1,
});
