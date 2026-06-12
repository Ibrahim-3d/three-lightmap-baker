import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

type ProjectJson = {
  version: 1;
  scenePresetId: string;
  importedModel?: {
    kind: 'glb' | 'gltf';
    fileName: string;
    mimeType: string;
    dataBase64: string;
  };
  bakedLightmaps?: Array<{
    resolution: number;
    meshIndexes: number[];
    dataBase64: string;
  }>;
  options: {
    lightMapSize: number;
    targetSamples: number;
    layer: string;
  };
  assets: Array<{
    name: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
    material?: {
      color: number;
      roughness: number;
      metalness: number;
    };
  }>;
};

test.describe('project save/load', () => {
  test('round-trips built-in preset, options, and asset-library additions', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const initialMeshes = await page.evaluate(() => {
      const w = window as unknown as { __baker: { getMeshCount(): number } };
      return w.__baker.getMeshCount();
    });

    const project = await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            addAsset(
              spec: { kind: 'primitive'; id: string },
              worldPos: [number, number, number],
            ): string;
            lookupObject(id: string): {
              name: string;
              position: { set(x: number, y: number, z: number): void };
              rotation: { set(x: number, y: number, z: number): void };
              scale: { set(x: number, y: number, z: number): void };
              material?: {
                color: { setHex(hex: number): void };
                roughness: number;
                metalness: number;
              };
            } | null;
            options: {
              lightMapSize: number;
              targetSamples: number;
              layer: string;
            };
            serializeProject(): ProjectJson;
          };
        }
      ).__baker;

      const id = baker.addAsset({ kind: 'primitive', id: 'cube' }, [1.25, 1.5, -0.75]);
      const cube = baker.lookupObject(id);
      if (!cube) throw new Error('cube not found after addAsset');
      cube.name = 'Saved Cube';
      cube.position.set(1.25, 1.5, -0.75);
      cube.rotation.set(0, 0.45, 0);
      cube.scale.set(1.4, 0.8, 1.1);
      cube.material?.color.setHex(0x3366cc);
      if (cube.material) {
        cube.material.roughness = 0.42;
        cube.material.metalness = 0.15;
      }

      baker.options.lightMapSize = 512;
      baker.options.targetSamples = 96;
      baker.options.layer = 'combined';

      return baker.serializeProject();
    });

    expect(project.version).toBe(1);
    expect(project.scenePresetId).toBe('cornell.advanced');
    expect(project.options.lightMapSize).toBe(512);
    expect(project.options.targetSamples).toBe(96);
    expect(project.assets).toHaveLength(1);
    expect(project.assets[0].name).toBe('Saved Cube');
    expect(project.assets[0].material?.color).toBe(0x3366cc);

    await page.evaluate(async (saved) => {
      const baker = (
        window as unknown as {
          __baker: {
            loadScenePreset(id: string): Promise<void>;
            loadProject(project: ProjectJson): Promise<void>;
          };
        }
      ).__baker;
      await baker.loadScenePreset('cornell.classic');
      await baker.loadProject(saved);
    }, project);

    const restored = await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            getMeshCount(): number;
            options: { lightMapSize: number; targetSamples: number; layer: string };
            serializeProject(): ProjectJson;
          };
        }
      ).__baker;
      return {
        meshCount: baker.getMeshCount(),
        options: baker.options,
        project: baker.serializeProject(),
      };
    });

    expect(restored.meshCount).toBe(initialMeshes + 1);
    expect(restored.options.lightMapSize).toBe(512);
    expect(restored.options.targetSamples).toBe(96);
    expect(restored.project.scenePresetId).toBe('cornell.advanced');
    expect(restored.project.assets).toHaveLength(1);
    expect(restored.project.assets[0].name).toBe('Saved Cube');
    expect(restored.project.assets[0].position).toEqual([1.25, 1.5, -0.75]);
    expect(restored.project.assets[0].scale).toEqual([1.4, 0.8, 1.1]);
    expect(restored.project.assets[0].material?.roughness).toBeCloseTo(0.42, 5);
    expect(restored.project.assets[0].material?.metalness).toBeCloseTo(0.15, 5);
  });

  test('round-trips an imported glTF scene embedded in Project JSON', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const imported = await page.evaluate(async () => {
      function bytesToBase64(bytes: Uint8Array): string {
        let binary = '';
        for (const byte of bytes) binary += String.fromCharCode(byte);
        return btoa(binary);
      }

      const geometry = new ArrayBuffer(44);
      const floats = new Float32Array(geometry, 0, 9);
      floats.set([-0.5, 0, 0, 0.5, 0, 0, 0, 1, 0]);
      const indices = new Uint16Array(geometry, 36, 3);
      indices.set([0, 1, 2]);

      const gltf = {
        asset: { version: '2.0' },
        buffers: [
          {
            uri: `data:application/octet-stream;base64,${bytesToBase64(new Uint8Array(geometry))}`,
            byteLength: geometry.byteLength,
          },
        ],
        bufferViews: [
          { buffer: 0, byteOffset: 0, byteLength: 36, target: 34962 },
          { buffer: 0, byteOffset: 36, byteLength: 6, target: 34963 },
        ],
        accessors: [
          {
            bufferView: 0,
            componentType: 5126,
            count: 3,
            type: 'VEC3',
            min: [-0.5, 0, 0],
            max: [0.5, 1, 0],
          },
          { bufferView: 1, componentType: 5123, count: 3, type: 'SCALAR' },
        ],
        materials: [
          {
            pbrMetallicRoughness: {
              baseColorFactor: [0.2, 0.45, 0.9, 1],
              metallicFactor: 0,
              roughnessFactor: 0.5,
            },
          },
        ],
        meshes: [
          {
            name: 'Imported Project Mesh',
            primitives: [{ attributes: { POSITION: 0 }, indices: 1, material: 0 }],
          },
        ],
        nodes: [{ name: 'Imported Project Triangle', mesh: 0 }],
        scenes: [{ nodes: [0] }],
        scene: 0,
      };

      const project: ProjectJson = {
        version: 1,
        scenePresetId: 'imported.glb',
        importedModel: {
          kind: 'gltf',
          fileName: 'imported-project-triangle.gltf',
          mimeType: 'model/gltf+json',
          dataBase64: bytesToBase64(new TextEncoder().encode(JSON.stringify(gltf))),
        },
        options: { lightMapSize: 256, targetSamples: 32, layer: 'combined' },
        assets: [],
        bakedLightmaps: [
          {
            resolution: 1,
            meshIndexes: [0],
            dataBase64: bytesToBase64(new Uint8Array(new Float32Array([1, 1, 1, 1]).buffer)),
          },
        ],
      };

      const baker = (
        window as unknown as {
          __baker: {
            getMeshCount(): number;
            getSceneTree(): Array<{ name: string; kind: string }>;
            meshes: Array<{ material: { lightMap: unknown; lightMapIntensity: number } }>;
            loadProject(project: ProjectJson): Promise<void>;
            serializeProject(): ProjectJson;
          };
        }
      ).__baker;

      await baker.loadProject(project);
      return {
        meshCount: baker.getMeshCount(),
        hasLightmap: !!baker.meshes[0]?.material.lightMap,
        lightMapIntensity: baker.meshes[0]?.material.lightMapIntensity,
        tree: baker.getSceneTree(),
        project: baker.serializeProject(),
      };
    });

    expect(imported.meshCount).toBe(1);
    expect(imported.hasLightmap).toBe(true);
    expect(imported.lightMapIntensity).toBe(1);
    expect(imported.tree.filter((node) => node.kind === 'mesh')).toHaveLength(1);
    expect(imported.project.scenePresetId).toBe('imported.glb');
    expect(imported.project.importedModel?.kind).toBe('gltf');
    expect(imported.project.importedModel?.fileName).toBe('imported-project-triangle.gltf');
    expect(imported.project.bakedLightmaps).toHaveLength(1);
    expect(imported.project.bakedLightmaps?.[0].resolution).toBe(1);

    const restored = await page.evaluate(async (saved) => {
      const baker = (
        window as unknown as {
          __baker: {
            getMeshCount(): number;
            getSceneTree(): Array<{ name: string; kind: string }>;
            meshes: Array<{ material: { lightMap: unknown; lightMapIntensity: number } }>;
            loadScenePreset(id: string): Promise<void>;
            loadProject(project: ProjectJson): Promise<void>;
            serializeProject(): ProjectJson;
          };
        }
      ).__baker;
      await baker.loadScenePreset('cornell.advanced');
      await baker.loadProject(saved);
      return {
        meshCount: baker.getMeshCount(),
        hasLightmap: !!baker.meshes[0]?.material.lightMap,
        lightMapIntensity: baker.meshes[0]?.material.lightMapIntensity,
        tree: baker.getSceneTree(),
        project: baker.serializeProject(),
      };
    }, imported.project);

    expect(restored.meshCount).toBe(1);
    expect(restored.hasLightmap).toBe(true);
    expect(restored.lightMapIntensity).toBe(1);
    expect(restored.tree.filter((node) => node.kind === 'mesh')).toHaveLength(1);
    expect(restored.project.scenePresetId).toBe('imported.glb');
    expect(restored.project.importedModel?.dataBase64).toBe(
      imported.project.importedModel?.dataBase64,
    );
    expect(restored.project.bakedLightmaps).toHaveLength(1);
  });
});
