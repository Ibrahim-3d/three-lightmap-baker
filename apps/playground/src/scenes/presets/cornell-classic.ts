import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';
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

  const white = () => mat(0xf0f0f0);
  const red = () => mat(0xd62728);
  const green = () => mat(0x2ca02c);
  const blockMat = () => mat(0xe8e8e8);

  const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), white());
  floor.name = 'Floor';
  floor.position.set(0, -T / 2, 0);
  root.add(floor);

  const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), white());
  ceil.name = 'Ceiling';
  ceil.position.set(0, ROOM + T / 2, 0);
  root.add(ceil);

  const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), white());
  back.name = 'Back Wall';
  back.position.set(0, HALF, -HALF - T / 2);
  root.add(back);

  const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), red());
  left.name = 'Left Wall (Red)';
  left.position.set(-HALF - T / 2, HALF, 0);
  root.add(left);

  const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), green());
  right.name = 'Right Wall (Green)';
  right.position.set(HALF + T / 2, HALF, 0);
  root.add(right);

  const tall = new Mesh(new BoxGeometry(3, 6, 3), blockMat());
  tall.name = 'Tall Block';
  tall.position.set(-1.8, 3, -1.5);
  tall.rotation.y = 0.29;
  root.add(tall);

  const short = new Mesh(new BoxGeometry(3, 3, 3), blockMat());
  short.name = 'Short Block';
  short.position.set(1.8, 1.5, 1.5);
  short.rotation.y = -0.29;
  root.add(short);

  return {
    camera: { position: [0, 5, 18], target: [0, 5, 0] },
    lightDummy: { position: [0, ROOM - 0.001, 0] },
    background: 0x0a0a0a,
  };
}

sceneRegistry.register({
  id: 'cornell.classic',
  label: 'Cornell — Classic',
  category: 'cornell',
  description: 'Classic Cornell Box: 5 walls + tall block + short block. No extras.',
  build,
  defaultBakeSettings: {
    lightMapSize: 1024,
    targetSamples: 256,
    bounces: 2,
    casts: 5,
    texelsPerMeter: 10,
  },
  schemaVersion: 1,
});
