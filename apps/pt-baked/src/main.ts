/**
 * pt-baked - side-by-side: real-time PT preview (left) vs baked PT lightmap (right).
 *
 * Split-screen: left half = PTRenderer (progressive, updates in real time),
 * right half = baked lightmap applied to geometry.
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
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PTRenderer } from 'pt-renderer';
import { buildBVHScene, disposeBVHSceneData, type BVHSceneData } from 'pt-renderer';
import { PTBaker } from 'pt-baker';
import { generateAtlases, loadXAtlasThree } from 'baker-classic';
import bvhFrag from 'pt-renderer/shaders/bvh-scene.frag.glsl?raw';

const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const W = (): number => window.innerWidth;
const H = (): number => window.innerHeight;

window.addEventListener('resize', () => {
  renderer.setSize(W(), H());
  camera.aspect = W() / (2 * H());
  camera.updateProjectionMatrix();
});

const camera = new PerspectiveCamera(45, W() / (2 * H()), 0.1, 1000);
camera.position.set(0, 5, 18);
camera.lookAt(0, 5, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();

const scene = new Scene();
scene.background = new Color(0x0a0a0a);

const root = new Object3D();
scene.add(root);

const ROOM = 10,
  HALF = ROOM / 2,
  T = 0.2;
const mat = (c: number, r = 0.95): MeshStandardMaterial =>
  new MeshStandardMaterial({ color: c, roughness: r });

const addBox = (
  w: number,
  h: number,
  d: number,
  m: MeshStandardMaterial,
  x: number,
  y: number,
  z: number,
): Mesh => {
  const mesh = new Mesh(new BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  root.add(mesh);
  return mesh;
};

addBox(ROOM, T, ROOM, mat(0xf0f0f0), 0, -T / 2, 0);
addBox(ROOM, T, ROOM, mat(0xf0f0f0), 0, ROOM + T / 2, 0);
addBox(ROOM, ROOM, T, mat(0xf0f0f0), 0, HALF, -HALF - T / 2);
addBox(T, ROOM, ROOM, mat(0xd62728), -HALF - T / 2, HALF, 0);
addBox(T, ROOM, ROOM, mat(0x2ca02c), HALF + T / 2, HALF, 0);
addBox(3, 6, 3, mat(0xe8e8e8), -1.8, 3, -1.5);
addBox(3, 3, 3, mat(0xe8e8e8), 1.8, 1.5, 1.5);
const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), mat(0xf5f5f5, 0.3));
sphere.position.set(2.4, 1.0, 3.0);
root.add(sphere);

const lightDummy = new Object3D();
lightDummy.position.set(0, ROOM - 0.5, 0);
scene.add(lightDummy);
const ptLight = new PointLight(0xffffff, 80, 0, 2);
ptLight.userData['lightmapIgnore'] = true;
lightDummy.add(ptLight);

const meshes: Mesh[] = [];
root.traverse((o) => {
  if (o instanceof Mesh) meshes.push(o);
});

scene.updateMatrixWorld(true);

let ptData: BVHSceneData | null = null;
let pt: PTRenderer | null = null;

async function initPT(): Promise<void> {
  scene.updateMatrixWorld(true);
  ptData = buildBVHScene(scene);

  pt = new PTRenderer({
    fragmentShader: bvhFrag,
    sceneIsDynamic: false,
    sceneUniforms: {
      tTriangleTexture: { value: ptData.triangleTexture },
      tAABBTexture: { value: ptData.aabbTexture },
      tAlbedoArray: { value: ptData.albedoArray },
      uHasSkyTexture: { value: false },
      tHDRTexture: { value: null },
      uSkyLightIntensity: { value: 1.0 },
      tLightTexture: { value: null },
      uNumPTLights: { value: 0 },
    },
  });

  await pt.init(renderer);
  controls.addEventListener('change', () => pt?.notifyCameraMoving());
}

const statusEl = document.getElementById('status');
if (!statusEl) throw new Error('[pt-baked] missing #status element');

let baking = false;

async function runBake(): Promise<void> {
  if (baking) return;
  baking = true;
  statusEl.textContent = 'Generating UV2 coords…';

  await loadXAtlasThree();
  await generateAtlases([meshes]);

  statusEl.textContent = 'Baking PT lightmap…';

  const sceneData = buildBVHScene(scene);
  const baker = new PTBaker();
  let samplesDone = 0;
  const SAMPLES = 256;

  const result = await baker.bake(renderer, meshes, sceneData, {
    size: 1024,
    samples: SAMPLES,
    skyIntensity: 1.0,
    yieldEvery: 8,
    onProgress: (pct) => {
      samplesDone = Math.round(pct * SAMPLES);
      statusEl.textContent = `Baking… ${Math.round(pct * 100)}% (${samplesDone}/${SAMPLES} samples)`;
    },
  });

  for (const mesh of meshes) {
    const m = mesh.material as MeshStandardMaterial;
    m.lightMap = result.texture.texture;
    m.lightMapIntensity = 1.0;
    m.needsUpdate = true;
  }

  disposeBVHSceneData(sceneData);
  baker.dispose();
  baking = false;
  statusEl.textContent = `Done - ${SAMPLES} samples, 1024² px`;
}

const bakeButton = document.getElementById('btn-bake');
if (!bakeButton) throw new Error('[pt-baked] missing #btn-bake element');
bakeButton.addEventListener('click', () => {
  void runBake();
});

let lastMs = performance.now();

function tick(): void {
  requestAnimationFrame(tick);
  controls.update();
  const now = performance.now();
  const delta = now - lastMs;
  lastMs = now;
  const w = W(),
    h = H();
  const half = Math.floor(w / 2);

  renderer.setScissorTest(true);

  if (pt) {
    renderer.setViewport(0, 0, half, h);
    renderer.setScissor(0, 0, half, h);
    pt.render(renderer, camera, delta);
  }

  ptLight.visible = false;
  renderer.setViewport(half, 0, w - half, h);
  renderer.setScissor(half, 0, w - half, h);
  renderer.render(scene, camera);
  ptLight.visible = true;

  renderer.setScissorTest(false);
}

void initPT().then(() => {
  tick();
});
