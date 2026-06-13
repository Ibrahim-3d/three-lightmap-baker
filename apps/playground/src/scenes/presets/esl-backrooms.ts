/**
 * ESL Backrooms demo port. Source:
 *   enhance-shader-lighting/example/scenes/TheBackroomsDemo.js
 *
 * Indoor maze scene. ESL ran a CompressionPass + positional audio (hum +
 * roaming steps) on top of standard post-fx. Audio + compression-pass are
 * deferred to post-fx task #4; here we land only geometry, spawn camera,
 * per-mesh PBR tweaks, and box-projected envmap metadata.
 */
import { Color, Mesh, type MeshStandardMaterial, Object3D, Vector2 } from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';
import { createAmbientDust } from './ambient-particles';
import {
  applyBoxProjectedEnv,
  applyLightmapMode,
  ESL_BASE,
  type EslLightmapMode,
  eulerToTarget,
  loadEslGLB,
  logFirstMaterial,
  normalisePBRMaterials,
} from './esl-shared';

const SPAWN_POS = [1.16, 1.35, -1.647] as const;
const SPAWN_EULER = [0.002, -1.578, 0] as const;

const ENV_SIZE_X = 17.035 * 2;
const ENV_SIZE_Z = 17.035 * 2;
const ENV_SIZE_Y = 3.73277 + 0.5;

type WallTweak = { name: string; roughness: number; metalness: number; normalScale: number };

const TWEAKS: WallTweak[] = [
  { name: 'MG_Walls003', roughness: 0.12, metalness: 0, normalScale: 1.49 },
  { name: 'MG_Walls003_1', roughness: 0.79, metalness: 0.18, normalScale: 2.56 },
  { name: 'MG_Walls003_2', roughness: 1.06, metalness: 0.13, normalScale: 3.48 },
];

async function build(parent: Object3D): Promise<SceneBuildResult> {
  const root = new Object3D();
  root.name = 'esl-backrooms-root';
  parent.add(root);

  const mode: EslLightmapMode = (parent.userData?.eslLightmapMode as EslLightmapMode) ?? 'ours';

  const gltf = await loadEslGLB(`${ESL_BASE}/backrooms.optimized.glb`);
  root.add(gltf.scene);

  for (const t of TWEAKS) {
    const obj = gltf.scene.getObjectByName(t.name) as Mesh | undefined;
    if (!obj?.isMesh) continue;
    const mat = obj.material as MeshStandardMaterial;
    if (!mat || Array.isArray(mat)) continue;
    mat.roughness = t.roughness;
    mat.metalness = t.metalness;
    mat.color = new Color(0xffffff);
    if (mat.normalScale) mat.normalScale.copy(new Vector2(t.normalScale, t.normalScale));
    mat.needsUpdate = true;
  }

  normalisePBRMaterials(gltf.scene);
  applyLightmapMode(gltf.scene, mode);
  applyBoxProjectedEnv(gltf.scene, [0, 0.851841, 0], [ENV_SIZE_X, ENV_SIZE_Y, ENV_SIZE_Z]);
  logFirstMaterial(gltf.scene, 'backrooms');
  // No sun: backrooms is windowless. Ceiling-fluorescent vibe deferred to a
  // proper emissive ceiling pass; for now bake leans on skyIntensity fill.

  root.add(
    createAmbientDust([{ center: [0, -0.5, 0], size: [ENV_SIZE_X, ENV_SIZE_Z], count: 500 }]),
  );

  root.userData.eslPostFX = {
    fov: 83,
    toneMappingExposure: 1.35,
    fogColor: 0x707656,
    fogDensity: 0,
    envMapIntensity: 7.1,
    bloom1: { intensity: 0.3, threshold: 0.64, smoothing: 1, kernelSize: 2 },
    bloom2: { intensity: 0.69, threshold: 0.09, smoothing: 0.19, kernelSize: 5 },
    lut: 'backrooms.3dl',
    lensDistortion: { baseIor: 0.828, bandOffset: 0.0026, jitter: 5.1 },
    hue: 0,
    saturation: 0.03,
    gamma: 0.9,
    envMapHdr: 'envBackrooms.hdr',
    envMapPos: [0, 0.851841, 0],
    envMapSize: [ENV_SIZE_X, ENV_SIZE_Y, ENV_SIZE_Z],
    compressionPass: true,
    sky: false,
  };

  const cam = eulerToTarget(
    [SPAWN_POS[0], SPAWN_POS[1], SPAWN_POS[2]],
    [SPAWN_EULER[0], SPAWN_EULER[1], SPAWN_EULER[2]],
    3,
    83,
  );

  return {
    camera: cam,
    background: 0x111111,
    envmapUrl: `${ESL_BASE}/envBackrooms.hdr`,
    skyIntensity: 0,
    disableFallbackLight: true,
  };
}

sceneRegistry.register({
  id: 'esl.backrooms',
  label: 'ESL - Backrooms',
  category: 'esl',
  description:
    'Port of enhance-shader-lighting Backrooms demo. Indoor maze. Audio + compression-pass deferred to PostFX task #4.',
  source: {
    name: '0beqz / enhance-shader-lighting',
    url: 'https://github.com/0beqz/enhance-shader-lighting',
    license: 'MIT',
    author: '0beqz',
  },
  referenceUrl: 'https://enhance-shader-lighting.vercel.app/?scene=backrooms',
  build,
  defaultBakeSettings: {
    lightMapSize: 2048,
    targetSamples: 384,
    bounces: 3,
    casts: 6,
    texelsPerMeter: 1,
  },
  schemaVersion: 1,
});
