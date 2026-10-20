import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  RectAreaLight,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';

const WALL_HEIGHT = 4;
const WALL_THICKNESS = 0.24;
const FLOOR_THICKNESS = 0.2;
const ROOM_MIN_X = -7;
const ROOM_MAX_X = 7;
const ROOM_MIN_Z = -4;
const ROOM_MAX_Z = 4;

export const PROBE_SHOWCASE_SAMPLE_POINTS = {
  redZone: [-4.8, 1.0, 0.4],
  greenZone: [4.2, 1.0, 0.4],
  neutralCenter: [-2.2, 1.0, 1.6],
  doorway: [0, 1.0, 0],
  wallRedSide: [-0.65, 1.0, -2.45],
  wallGreenSide: [0.65, 1.0, -2.45],
  alcove: [5.65, 1.0, -4.85],
} as const;

function material(color: number, roughness = 0.9): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, metalness: 0 });
}

function addBox(
  root: Object3D,
  name: string,
  size: readonly [number, number, number],
  position: readonly [number, number, number],
  color: number,
): Mesh {
  const mesh = new Mesh(new BoxGeometry(...size), material(color));
  mesh.name = name;
  mesh.userData.probeShowcaseStatic = true;
  mesh.position.set(...position);
  root.add(mesh);
  return mesh;
}

function addSampleMarkers(root: Object3D): void {
  for (const [id, position] of Object.entries(PROBE_SHOWCASE_SAMPLE_POINTS)) {
    const marker = new Object3D();
    marker.name = `ProbeSample:${id}`;
    marker.position.set(position[0], position[1], position[2]);
    marker.userData.probeShowcaseSample = id;
    root.add(marker);
  }
}

function addCeilingLight(
  root: Object3D,
  name: string,
  position: readonly [number, number, number],
): void {
  const light = new RectAreaLight(0xffffff, 7.5, 2.8, 2.2);
  light.name = name;
  light.position.set(...position);
  light.rotation.x = -Math.PI / 2;
  root.add(light);
}

function build(parent: Object3D): SceneBuildResult {
  const root = new Object3D();
  root.name = 'Probe Architectural Showcase';
  parent.add(root);

  const camera = new PerspectiveCamera(48, 1, 0.1, 100);
  camera.name = 'Architectural Overview';
  camera.position.set(10.8, 5.2, 13.2);
  camera.lookAt(0, 1.7, -0.8);
  root.add(camera);

  const neutral = 0xc8c5bd;
  const neutralDark = 0x777b80;
  const red = 0xc51f2d;
  const green = 0x159447;

  addBox(
    root,
    'Main Floor',
    [ROOM_MAX_X - ROOM_MIN_X, FLOOR_THICKNESS, ROOM_MAX_Z - ROOM_MIN_Z],
    [0, -FLOOR_THICKNESS / 2, 0],
    neutral,
  );
  const ceiling = addBox(
    root,
    'Main Ceiling',
    [ROOM_MAX_X - ROOM_MIN_X, FLOOR_THICKNESS, ROOM_MAX_Z - ROOM_MIN_Z],
    [0, WALL_HEIGHT + FLOOR_THICKNESS / 2, 0],
    neutral,
  );
  ceiling.userData.probeShowcaseCutaway = true;

  addBox(
    root,
    'Red Zone Wall',
    [WALL_THICKNESS, WALL_HEIGHT, ROOM_MAX_Z - ROOM_MIN_Z],
    [ROOM_MIN_X - WALL_THICKNESS / 2, WALL_HEIGHT / 2, 0],
    red,
  );
  addBox(
    root,
    'Green Zone Wall',
    [WALL_THICKNESS, WALL_HEIGHT, 9.8],
    [ROOM_MAX_X + WALL_THICKNESS / 2, WALL_HEIGHT / 2, -0.9],
    green,
  );
  addBox(root, 'Red Back Wall', [7, WALL_HEIGHT, WALL_THICKNESS], [-3.5, 2, -4.12], neutral);
  addBox(root, 'Green Back Wall', [4.35, WALL_HEIGHT, WALL_THICKNESS], [2.175, 2, -4.12], neutral);

  // Thick separating wall with a 2m-wide, 2.7m-high doorway at z=0.
  addBox(root, 'Separator North', [0.42, WALL_HEIGHT, 3], [0, 2, -2.5], neutralDark);
  addBox(root, 'Separator South', [0.42, WALL_HEIGHT, 3], [0, 2, 2.5], neutralDark);
  addBox(root, 'Door Header', [0.42, 1.3, 2], [0, 3.35, 0], neutralDark);

  // Recessed alcove extends behind the green zone's back wall.
  addBox(root, 'Alcove Floor', [2.65, FLOOR_THICKNESS, 1.8], [5.675, -0.1, -4.9], neutral);
  const alcoveCeiling = addBox(
    root,
    'Alcove Ceiling',
    [2.65, FLOOR_THICKNESS, 1.8],
    [5.675, 4.1, -4.9],
    neutral,
  );
  alcoveCeiling.userData.probeShowcaseCutaway = true;
  addBox(root, 'Alcove Back', [2.65, WALL_HEIGHT, WALL_THICKNESS], [5.675, 2, -5.92], neutralDark);
  addBox(
    root,
    'Alcove Left Return',
    [WALL_THICKNESS, WALL_HEIGHT, 1.8],
    [4.23, 2, -4.9],
    neutralDark,
  );

  // Major obstruction and a low neutral mass create measurable occlusion.
  addBox(root, 'Green Zone Column', [1.05, WALL_HEIGHT, 1.05], [2.05, 2, 1.55], neutralDark);
  addBox(root, 'Red Zone Plinth', [2.0, 1.2, 1.3], [-3.0, 0.6, -1.75], 0xa9a69f);

  addCeilingLight(root, 'Red Zone Area Light', [-3.5, 3.82, 0.5]);
  addCeilingLight(root, 'Green Zone Area Light', [3.3, 3.82, 0.5]);
  addSampleMarkers(root);

  return {
    camera: { position: [10.8, 5.2, 13.2], target: [0, 1.7, -0.8], fov: 48 },
    background: 0x11151a,
    skyIntensity: 0,
    disableFallbackLight: true,
  };
}

sceneRegistry.register({
  id: 'showcase.probe-architectural',
  label: 'Showcase - Probe Architecture',
  category: 'showcase',
  description:
    'Two connected solid-material rooms with a doorway, thick separator, alcove, column, and red/green bounce zones.',
  build,
  defaultBakeSettings: {
    lightMapSize: 512,
    targetSamples: 96,
    bounces: 2,
    casts: 5,
    texelsPerMeter: 1,
  },
  schemaVersion: 1,
});
