/**
 * pt-preview - stand-alone real-time path tracer demo.
 *
 * Minimal wiring: builds a Cornell Box scene directly (no DCC shell), creates
 * a PTController, and starts the render loop. No baking, no Preact.
 *
 * Purpose: smoke-test the `pt-renderer` package in isolation and provide a
 * lightweight embed for documentation / GitHub Pages.
 */

import {
  BoxGeometry,
  Color,
  MeshStandardMaterial,
  Mesh,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PTRenderer } from 'pt-renderer';
import { buildBVHScene, disposeBVHSceneData } from 'pt-renderer';
import { ptSettings } from 'shared';
import bvhFrag from 'pt-renderer/shaders/bvh-scene.frag.glsl?raw';

// ── Setup ─────────────────────────────────────────────────────────────────────

const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 18);
camera.lookAt(0, 5, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// ── Scene (Cornell box) ───────────────────────────────────────────────────────

const scene = new Scene();
scene.background = new Color(0x0a0a0a);

const root = new Object3D();
scene.add(root);

const ROOM = 10;
const HALF = ROOM / 2;
const T = 0.2;

const mat = (c: number) => new MeshStandardMaterial({ color: c, roughness: 0.95 });

const addBox = (
  w: number,
  h: number,
  d: number,
  m: MeshStandardMaterial,
  x: number,
  y: number,
  z: number,
) => {
  const mesh = new Mesh(new BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  root.add(mesh);
  return mesh;
};

addBox(ROOM, T, ROOM, mat(0xf0f0f0), 0, -T / 2, 0); // floor
addBox(ROOM, T, ROOM, mat(0xf0f0f0), 0, ROOM + T / 2, 0); // ceiling
addBox(ROOM, ROOM, T, mat(0xf0f0f0), 0, HALF, -HALF - T / 2); // back
addBox(T, ROOM, ROOM, mat(0xd62728), -HALF - T / 2, HALF, 0); // left red
addBox(T, ROOM, ROOM, mat(0x2ca02c), HALF + T / 2, HALF, 0); // right green
addBox(3, 6, 3, mat(0xe8e8e8), -1.8, 3, -1.5); // tall block
addBox(3, 3, 3, mat(0xe8e8e8), 1.8, 1.5, 1.5); // short block

const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), mat(0xf5f5f5));
sphere.position.set(2.4, 1.0, 3.0);
root.add(sphere);

const light = new PointLight(0xffffff, 80, 0, 2);
light.userData.lightmapIgnore = true;
light.position.set(0, ROOM - 0.5, 0);
scene.add(light);

scene.updateMatrixWorld(true);

// ── PT renderer ───────────────────────────────────────────────────────────────

const pt = new PTRenderer({
  fragmentShader: bvhFrag,
  sceneIsDynamic: false,
  sceneUniforms: {
    tTriangleTexture: { value: null },
    tAABBTexture: { value: null },
    uHasSkyTexture: { value: false },
    tHDRTexture: { value: null },
    uSkyLightIntensity: { value: ptSettings.value.skyIntensity },
    uNumPTLights: { value: 1 },
    uPTLightPos: { value: [light.position.clone()] },
    uPTLightDir: { value: [{ x: 0, y: -1, z: 0 }] },
    uPTLightColor: { value: [new Color(1, 1, 1)] },
    uPTLightType: { value: new Float32Array([1]) },
    uPTLightDist: { value: new Float32Array([0]) },
    uPTLightSpotCos: { value: new Float32Array([0]) },
  },
});

void (async () => {
  await pt.init(renderer);

  const data = buildBVHScene(scene);
  const u = pt.uniforms;
  if (u['tTriangleTexture']) u['tTriangleTexture'].value = data.triangleTexture;
  if (u['tAABBTexture']) u['tAABBTexture'].value = data.aabbTexture;

  controls.addEventListener('change', () => pt.notifyCameraMoving());

  let last = performance.now();
  const tick = () => {
    requestAnimationFrame(tick);
    const now = performance.now();
    pt.render(renderer, camera, now - last);
    last = now;
  };
  tick();

  window.addEventListener('beforeunload', () => {
    pt.dispose();
    disposeBVHSceneData(data);
  });
})();
