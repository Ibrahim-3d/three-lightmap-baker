import { BoxGeometry, Color, Mesh, MeshStandardMaterial, Object3D } from 'three';
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

  // Long emissive strip mounted to the ceiling. lightmapIgnore=true: this is
  // the emitter, not a bake receiver.
  const stripMat = new MeshStandardMaterial({
    color: 0x000000,
    emissive: new Color(0xfff0d0),
    emissiveIntensity: 5,
  });
  const strip = new Mesh(new BoxGeometry(6, 0.05, 0.6), stripMat);
  strip.name = 'Emissive Strip';
  strip.position.set(0, ROOM - 0.05, 0);
  strip.userData.lightmapIgnore = true;
  root.add(strip);

  return {
    camera: { position: [0, 5, 18], target: [0, 5, 0] },
    lightDummy: { position: [0, ROOM - 0.1, 0] },
    background: 0x0a0a0a,
  };
}

sceneRegistry.register({
  id: 'cornell.emissive-strip',
  label: 'Cornell - Emissive Strip',
  category: 'cornell',
  description: 'Cornell lit by a long emissive ceiling strip instead of a point light.',
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
