/**
 * Shared loader + helpers for the three ESL demo presets
 * (gym / desert / backrooms). Each demo preset stays tiny by delegating GLB
 * fetch, DRACO setup, camera spawn conversion, and material tweaks here.
 *
 * Lightmap mode:
 *   - 'ours'   - default. Leave the GLB material alone; our baker will write
 *                its own lightmap into it via the normal pipeline.
 *   - 'theirs' - copy GLB's `material.emissiveMap` into `material.lightMap`
 *                (ESL convention: Blender bakes land in the emissive slot)
 *                and null the emissive. Wire for future A/B compare. Read off
 *                `userData.eslLightmapMode` on the scene root.
 */
import {
  DirectionalLight,
  Euler,
  Mesh,
  type MeshStandardMaterial,
  Object3D,
  Vector2,
  Vector3,
} from 'three';
import { makeBoxProjectedEnvMapPatch } from './box-projected-env';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export type EslLightmapMode = 'ours' | 'theirs';

export type EslSpawn = {
  position: [number, number, number];
  euler: [number, number, number]; // YXZ order
};

export type EslMeshTweak = {
  name: string;
  roughness?: number;
  metalness?: number;
  normalScale?: [number, number];
};

let _draco: DRACOLoader | null = null;
function getDraco(): DRACOLoader {
  if (_draco) return _draco;
  const d = new DRACOLoader();
  d.setDecoderConfig({ type: 'js' });
  d.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  _draco = d;
  return d;
}

let _gltf: GLTFLoader | null = null;
function getLoader(): GLTFLoader {
  if (_gltf) return _gltf;
  _gltf = new GLTFLoader();
  _gltf.setDRACOLoader(getDraco());
  return _gltf;
}

export async function loadEslGLB(url: string): Promise<GLTF> {
  const loader = getLoader();
  return new Promise<GLTF>((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
}

/**
 * Convert ESL's `(Vector3 spawn, Euler spawn)` pair into the
 * `(position, target)` pair our SceneBuildResult uses for OrbitControls.
 * Target = position + forward(euler) where camera forward is -Z in local.
 */
export function eulerToTarget(
  pos: [number, number, number],
  euler: [number, number, number],
  distance = 5,
): { position: [number, number, number]; target: [number, number, number] } {
  const e = new Euler(euler[0], euler[1], euler[2], 'YXZ');
  const forward = new Vector3(0, 0, -1).applyEuler(e).normalize();
  return {
    position: pos,
    target: [
      pos[0] + forward.x * distance,
      pos[1] + forward.y * distance,
      pos[2] + forward.z * distance,
    ],
  };
}

/**
 * Apply ESL-style per-mesh `material.setValues({...})` tweaks by name.
 * Roughness clamped to PBR-legal [0,1] - ESL ships values >1 (gym floor=2.26)
 * which their shader patch absorbs via `roughnessPower`. Without that patch
 * raw values >1 break Three's IBL path.
 */
export function applyMeshTweaks(root: Object3D, tweaks: EslMeshTweak[]): number {
  let applied = 0;
  for (const t of tweaks) {
    const obj = root.getObjectByName(t.name) as Mesh | undefined;
    if (!obj || !(obj as Mesh).isMesh) continue;
    const mat = (obj as Mesh).material as MeshStandardMaterial;
    if (!mat) continue;
    if (t.roughness !== undefined) mat.roughness = Math.min(1, Math.max(0, t.roughness));
    if (t.metalness !== undefined) mat.metalness = Math.min(1, Math.max(0, t.metalness));
    if (t.normalScale && mat.normalScale) {
      mat.normalScale.copy(new Vector2(t.normalScale[0], t.normalScale[1]));
    }
    mat.needsUpdate = true;
    applied++;
  }
  return applied;
}

/**
 * Normalise all standard-material params on a freshly-loaded GLB so they fit
 * Three's vanilla PBR path (no ESL shader patch). Clamps roughness/metalness
 * (gym ships R=2.26 → undefined behaviour in IBL), forces `envMapIntensity`
 * to 0 so a leaked HDR probe can't blow out the scene. Also enables shadow
 * casting + receiving on every mesh for real-time preview occlusion.
 */
export function normalisePBRMaterials(root: Object3D): void {
  root.traverse((obj) => {
    const m = obj as Mesh;
    if (!m.isMesh) return;
    // Enable real-time shadow casting/receiving so pre-bake solid view shows
    // directional sun shadows instead of looking flat-unlit.
    m.castShadow = true;
    m.receiveShadow = true;
    const mat = m.material as MeshStandardMaterial;
    if (!mat || Array.isArray(mat)) return;
    if (typeof mat.roughness === 'number') {
      mat.roughness = Math.min(1, Math.max(0, mat.roughness));
    }
    if (typeof mat.metalness === 'number') {
      mat.metalness = Math.min(1, Math.max(0, mat.metalness));
    }
    // ESL GLBs ship envMapIntensity tuned for ESL's shader patch (gym=7.77).
    // We don't have that patch, so even a faint scene.environment leaks bright
    // ambient through. Force to 0 - user can crank in WorldPage if they want.
    mat.envMapIntensity = 0;
    mat.needsUpdate = true;
  });
}

/**
 * Spawn a DirectionalLight standing in for the HDR sun present in ESL's
 * Blender bake. Our baker doesn't sample HDR - only flat `skyColor` - so
 * without an explicit sun light, the bake misses the sharp directional
 * contribution that gives ESL scenes their punch.
 *
 * `direction` points FROM the sun TO the scene origin (normalised).
 * The light is placed `distance` units back along the inverse direction.
 */
export function addSunLight(
  root: Object3D,
  direction: [number, number, number],
  intensity = 1,
  distance = 50,
): DirectionalLight {
  const sun = new DirectionalLight(0xffffff, intensity);
  sun.position.set(-direction[0] * distance, -direction[1] * distance, -direction[2] * distance);
  // Our baker reads light direction from the world-space Z axis of the light
  // object (NOT from `target.position`). Default DirectionalLight has identity
  // rotation → always lights from +Z regardless of position. Force the rotation
  // by aiming at the origin so the baker picks up the intended direction.
  sun.lookAt(0, 0, 0);
  sun.updateMatrixWorld(true);
  sun.name = 'ESL Sun';
  // Three real-time preview shadow map. Pre-bake "solid view" otherwise has
  // no occlusion → surfaces lit uniformly = scene looks unlit. Shadow map
  // gives some directional shape until the path-traced bake lands. Bake itself
  // is unaffected (it casts BVH shadow rays regardless).
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = distance * 4;
  const half = distance;
  sun.shadow.camera.left = -half;
  sun.shadow.camera.right = half;
  sun.shadow.camera.top = half;
  sun.shadow.camera.bottom = -half;
  sun.shadow.bias = -0.0005;
  root.add(sun);
  return sun;
}

/**
 * Lightmap-mode switch. Reads `userData.eslLightmapMode` on `parent` (or
 * defaults to 'ours').
 *
 *   - 'theirs' moves Blender's pre-baked lightmap from the GLB's
 *     `emissiveMap` slot into `lightMap` (ESL convention). Keeps emissive
 *     color zero so it doesn't double up.
 *   - 'ours' STRIPS every Blender-bake artifact (emissive color/map/intensity,
 *     aoMap, existing lightMap) so our baker rebuilds the lighting from
 *     scratch. Otherwise the pre-baked layer leaks into the render and the
 *     scene looks "pre-lit" even before our bake runs.
 */
export function applyLightmapMode(root: Object3D, mode: EslLightmapMode): void {
  root.traverse((obj) => {
    const m = obj as Mesh;
    if (!m.isMesh) return;
    const mat = m.material as MeshStandardMaterial;
    if (!mat || Array.isArray(mat)) return;
    if (mode === 'theirs') {
      // Move Blender bake from emissive slot into lightmap slot.
      if (mat.emissiveMap && !mat.lightMap) {
        mat.lightMap = mat.emissiveMap;
        mat.lightMapIntensity = 1;
      }
    } else {
      // Mode 'ours': flush every cached bake channel.
      mat.lightMap = null;
      mat.lightMapIntensity = 1;
      mat.aoMap = null;
      mat.aoMapIntensity = 1;
    }
    // Always: zero the emissive contribution. The map carried Blender's bake;
    // the color uniform sometimes ships non-zero too (gym props use it). Both
    // get nuked so emission can't add a second lighting term on top of our
    // path-traced lightmap.
    mat.emissiveMap = null;
    if (mat.emissive) mat.emissive.setRGB(0, 0, 0);
    mat.emissiveIntensity = 0;
    mat.needsUpdate = true;
  });
}

/** Shorthand for the ESL public asset folder. */
export const ESL_BASE = '/esl-demos';

/**
 * Apply ESL's box-projected envmap shader patch to every standard material in
 * `root`. The HDR probe stops looking like a flat sphere reflection and starts
 * appearing parallax-correct against the bounding box (gym/backrooms interior).
 *
 * Effect only visible once `scene.environment` + `material.envMapIntensity`
 * are both > 0. Default ESL preset state has them at 0 (silent gate) so the
 * scene stays dark until user opts in via WorldPage.
 */
export function applyBoxProjectedEnv(
  root: Object3D,
  envPos: [number, number, number],
  envSize: [number, number, number],
): void {
  const pos = new Vector3(envPos[0], envPos[1], envPos[2]);
  const size = new Vector3(envSize[0], envSize[1], envSize[2]);
  const patch = makeBoxProjectedEnvMapPatch(pos, size);
  root.traverse((obj) => {
    const m = obj as Mesh;
    if (!m.isMesh) return;
    const mat = m.material as MeshStandardMaterial;
    if (!mat || Array.isArray(mat)) return;
    const prev = mat.onBeforeCompile;
    mat.onBeforeCompile = (shader, renderer) => {
      patch(shader);
      prev?.(shader, renderer);
    };
    // Force shader rebuild so the patch lands on first render.
    mat.customProgramCacheKey = () => `boxproj:${envPos.join(',')}:${envSize.join(',')}`;
    mat.needsUpdate = true;
  });
}

/**
 * One-shot console dump of the first mesh's material state. Helpful while we
 * iterate on which slots the GLB ships. Behind DEBUG flag.
 */
export function logFirstMaterial(root: Object3D, tag: string): void {
  const DEBUG = import.meta.env.DEV;
  if (!DEBUG) return;
  let first: Mesh | undefined;
  root.traverse((obj) => {
    if (first) return;
    const m = obj as Mesh;
    if (m.isMesh) first = m;
  });
  if (!first) return;
  const mat = first.material as MeshStandardMaterial;
  const yn = (x: unknown): string => (x ? 'Y' : '-');
  const r = (n: number | undefined): string => (n === undefined ? '?' : n.toFixed(2));
  const uv = first.geometry.attributes.uv;
  const uv2 = first.geometry.attributes.uv2;
  let uvMin = Infinity,
    uvMax = -Infinity;
  if (uv) {
    for (let i = 0; i < uv.count; i++) {
      const x = uv.getX(i),
        y = uv.getY(i);
      if (x < uvMin) uvMin = x;
      if (y < uvMin) uvMin = y;
      if (x > uvMax) uvMax = x;
      if (y > uvMax) uvMax = y;
    }
  }
  const repeat = mat.map ? `${mat.map.repeat.x.toFixed(2)},${mat.map.repeat.y.toFixed(2)}` : '-';
  const summary =
    `name=${mat.name || first.name} ` +
    `map=${yn(mat.map)} repeat=${repeat} ` +
    `lightMap=${yn(mat.lightMap)} aoMap=${yn(mat.aoMap)} ` +
    `emissive=${mat.emissive?.getHexString()} emiInt=${r(mat.emissiveIntensity)} ` +
    `R=${r(mat.roughness)} M=${r(mat.metalness)} envInt=${r(mat.envMapIntensity)} ` +
    `uv=${yn(uv)} uvRange=[${uvMin.toFixed(2)}..${uvMax.toFixed(2)}] uv2=${yn(uv2)}`;
  console.info(`[baker] esl/${tag} ${summary}`);
}
