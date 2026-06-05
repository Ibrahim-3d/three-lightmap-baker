/**
 * ESL Gym demo port. Source:
 *   enhance-shader-lighting/example/scenes/GymDemo.js
 *
 * Loads ~5.5 MB GLB at /esl-demos/gym.optimized.glb, sets the ESL spawn
 * camera, applies their per-mesh material tweaks, and registers default bake
 * settings tuned for the larger scene. Default lightmap mode = 'ours' (let
 * our baker rewrite the lightmap); switch to 'theirs' via the scene root
 * userData (UI toggle land in task #5).
 *
 * Post-FX parity (bloom2, LUT, lens distortion, fog, exposure 1.81, fov 56)
 * lives in task #4 - applied at scene-pick time, not in this file.
 */
import { Object3D } from 'three';
import { sceneRegistry, type SceneBuildResult } from 'shared';
import { createAmbientDust } from './ambient-particles';
import {
  addSunLight,
  applyBoxProjectedEnv,
  applyLightmapMode,
  applyMeshTweaks,
  ESL_BASE,
  type EslLightmapMode,
  type EslMeshTweak,
  eulerToTarget,
  loadEslGLB,
  logFirstMaterial,
  normalisePBRMaterials,
} from './esl-shared';

const SPAWN_POS = [9.357940673828125, 3, -25] as const;
const SPAWN_EULER = [0, -Math.PI, 0] as const;

const TWEAKS: EslMeshTweak[] = [
  { name: 'floor', roughness: 2.26, metalness: 0.23, normalScale: [1.5, 1.5] },
  { name: 'props', roughness: 0.62, metalness: 0.16, normalScale: [1, 1] },
  { name: 'props2_4', roughness: 0.67, metalness: 0.16, normalScale: [1, 1] },
  { name: 'props2_5', roughness: 0.53, metalness: 0.04, normalScale: [1, 1] },
  { name: 'props2_2', roughness: 0.48, metalness: 0.55, normalScale: [1, -1] },
  { name: 'props2_3', roughness: 0.79, metalness: 0.13, normalScale: [0.39, 0.39] },
  // exteriors 1..6: same defaults; exterior_3 overrides normalScale below.
  ...[1, 2, 3, 4, 5, 6].map(
    (i): EslMeshTweak => ({
      name: `exterior_${i}`,
      roughness: 0.84,
      metalness: 0.12,
      normalScale: [1, 1],
    }),
  ),
  { name: 'exterior_3', normalScale: [0.48, 0.48] },
];

async function build(parent: Object3D): Promise<SceneBuildResult> {
  const root = new Object3D();
  root.name = 'esl-gym-root';
  parent.add(root);

  // Default mode. UI can flip this via userData before re-running the preset
  // (or, future: a scene-level Lightmap Mode dropdown wired through signals).
  const mode: EslLightmapMode = (parent.userData?.eslLightmapMode as EslLightmapMode) ?? 'ours';

  const gltf = await loadEslGLB(`${ESL_BASE}/gym.optimized.glb`);
  root.add(gltf.scene);

  applyMeshTweaks(gltf.scene, TWEAKS);
  normalisePBRMaterials(gltf.scene);
  applyLightmapMode(gltf.scene, mode);
  // Parallax-correct envmap against the gym interior box. Numbers match the
  // ESL GymDemo.js source (envMapPos / envMapSize). Patch is silent until
  // user enables env intensity via WorldPage.
  applyBoxProjectedEnv(gltf.scene, [9.35794, 1, -2.42829], [37.95, 25, 66.95]);
  logFirstMaterial(gltf.scene, 'gym');

  // ESL gym uses Kloofendal HDR with sun rotated to y=4.94 rad ≈ 283°.
  // sin(4.94) ≈ -0.97, cos(4.94) ≈ 0.23. Sun comes from the west, slightly
  // back-of-camera, pitched ~45° down. direction = where sun POINTS (toward
  // origin), so it's roughly (+0.97, -0.7, -0.23) normalised.
  addSunLight(root, [0.78, -0.56, -0.18], 2, 80);

  // ESL adds a dust-mote zone here (`addAmbientDustZone(0,-3,0, 40,70, 500)`).
  root.add(createAmbientDust([{ center: [0, -3, 0], size: [40, 70], count: 500 }]));

  // Stash the ESL look-config so task #4's PostFX wiring can read it on
  // scene-switch without re-importing this file. Read by ScenePicker layer.
  root.userData.eslPostFX = {
    fov: 56,
    toneMappingExposure: 1.8125,
    fogColor: 0x707656,
    fogDensity: 0.0012,
    envMapIntensity: 7.77,
    bloom1: { intensity: 1.53, threshold: 0.64, smoothing: 1.55, kernelSize: 3 },
    bloom2: { intensity: 0.25, threshold: 0.32, smoothing: 0.5, kernelSize: 5 },
    lut: 'gym.3dl',
    lensDistortion: { baseIor: 0.935, bandOffset: 0.0011, jitter: 4 },
    hue: 0,
    saturation: 0.29,
    gamma: 0.8,
    envMapHdr: 'envGym.hdr',
    envMapPos: [9.35794, 1, -2.42829],
    envMapSize: [37.95, 25, 66.95],
  };

  const cam = eulerToTarget(
    [SPAWN_POS[0], SPAWN_POS[1], SPAWN_POS[2]],
    [SPAWN_EULER[0], SPAWN_EULER[1], SPAWN_EULER[2]],
    10,
  );

  return {
    camera: cam,
    background: 0x707656,
    envmapUrl: `${ESL_BASE}/envGym.hdr`,
    // Probe loaded but environmentIntensity defaults to 0 + per-material
    // envMapIntensity=0 → no visual leak. User cranks WorldPage slider to
    // turn it on; box-projection is already wired so reflections will be
    // parallax-correct the moment the env contribution > 0.
    skyIntensity: 0,
    disableFallbackLight: true,
  };
}

sceneRegistry.register({
  id: 'esl.gym',
  label: 'ESL - Gym',
  category: 'esl',
  description:
    'Port of enhance-shader-lighting Gym demo. ~5.5 MB GLB. Default lightmap mode = ours (re-bake). Post-FX parity wired via task #4.',
  source: {
    name: '0beqz / enhance-shader-lighting',
    url: 'https://github.com/0beqz/enhance-shader-lighting',
    license: 'MIT',
    author: '0beqz',
  },
  referenceUrl: 'https://enhance-shader-lighting.vercel.app/?scene=gym',
  build,
  defaultBakeSettings: {
    lightMapSize: 2048,
    targetSamples: 256,
    bounces: 2,
    casts: 4,
    texelsPerMeter: 8,
  },
  schemaVersion: 1,
});
