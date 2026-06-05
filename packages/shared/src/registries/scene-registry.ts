import type { Object3D } from 'three';

const DEBUG = import.meta.env.DEV;

/**
 * Scene preset registry. Stub scaffold for parallel agent work; populated by
 * `scenes/presets/*.ts` files which call `sceneRegistry.register(...)`.
 *
 * Bake-quality + camera + light defaults live on each preset so the picker
 * can swap them as a single transaction.
 */
export type LicenseInfo = {
  name: string;
  url: string;
  license: 'MIT' | 'CC0' | 'CC-BY' | 'CC-BY-SA' | 'Proprietary';
  author?: string;
};

/** App-defined free-form category. Playground app uses
 *  `'cornell' | 'threejs-port' | 'interior' | 'isometric' | 'showcase'`. */
export type SceneCategory = string;

export type ScenePreset = {
  id: string;
  label: string;
  category: SceneCategory;
  description: string;
  thumb?: string;
  source?: LicenseInfo;
  referenceUrl?: string;
  /** Build the scene contents into `parent` (typically the `SceneController.cornellRoot`).
   *  All preset-created meshes and lights must be parented under `parent` so the
   *  loader can dispose them as a unit on the next preset swap.
   *  Return the camera/light hints the loader applies after build. */
  build: (parent: Object3D) => Promise<SceneBuildResult> | SceneBuildResult;
  defaultBakeSettings?: {
    lightMapSize?: number;
    targetSamples?: number;
    bounces?: number;
    casts?: number;
    texelsPerMeter?: number;
  };
  schemaVersion: 1;
};

export type SceneBuildResult = {
  camera?: { position: [number, number, number]; target: [number, number, number] };
  lightDummy?: { position: [number, number, number] };
  background?: number; // 0xRRGGBB
  /** Optional HDR equirectangular file. Loaded by the scene controller via
   *  RGBELoader + PMREMGenerator, assigned to `scene.environment`. Used by
   *  presets that have no in-scene lights (ESL demos, env-lit imports). */
  envmapUrl?: string;
  /** Optional override for the baker's hemisphere-miss sky intensity. Persists
   *  into `ptSettings.skyIntensity` so the next bake uses it. ESL outdoor
   *  scenes want 3-5; closed indoor scenes want 0-1. */
  skyIntensity?: number;
  /** If true, the shell's default `lightDummy` fallback RectAreaLight stays
   *  hidden even when the preset has zero in-scene lights. Used by presets
   *  that want the user to see a fully-dark scene when they delete every light
   *  (ESL demos). Default false = keep legacy fallback for primitive presets. */
  disableFallbackLight?: boolean;
};

class Registry {
  private presets: ScenePreset[] = [];
  register(p: ScenePreset): void {
    if (this.presets.find((q) => q.id === p.id)) {
      if (DEBUG) console.warn(`[baker] scene-registry: duplicate id ${p.id} - replacing`);
      this.presets = this.presets.filter((q) => q.id !== p.id);
    }
    this.presets.push(p);
  }
  list(): ReadonlyArray<ScenePreset> {
    return this.presets;
  }
  get(id: string): ScenePreset | undefined {
    return this.presets.find((p) => p.id === id);
  }
  listByCategory(): Map<ScenePreset['category'], ScenePreset[]> {
    const m = new Map<ScenePreset['category'], ScenePreset[]>();
    for (const p of this.presets) {
      const arr = m.get(p.category) ?? [];
      arr.push(p);
      m.set(p.category, arr);
    }
    return m;
  }
}

export const sceneRegistry = new Registry();
