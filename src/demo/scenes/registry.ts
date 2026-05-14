import type { Scene } from 'three';

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

export type ScenePreset = {
    id: string;
    label: string;
    category: 'cornell' | 'threejs-port' | 'interior' | 'isometric' | 'showcase';
    description: string;
    thumb?: string;
    source?: LicenseInfo;
    referenceUrl?: string;
    /** Build the scene contents into `scene` (or a child Object3D added to it).
     *  Return the camera/light hints the loader applies after build. */
    build: (scene: Scene) => Promise<SceneBuildResult> | SceneBuildResult;
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
};

class Registry {
    private presets: ScenePreset[] = [];
    register(p: ScenePreset): void {
        if (this.presets.find((q) => q.id === p.id)) {
            console.warn(`[scene-registry] duplicate id ${p.id} — replacing`);
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
