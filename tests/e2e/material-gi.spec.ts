import { expect, test } from '@playwright/test';
import {
  BufferGeometry,
  BufferAttribute,
  Color,
  DataTexture,
  FloatType,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  RGBAFormat,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  extractPerTriangleMaterials,
  mergeGeometry,
} from '../../packages/baker-classic/src/utils/GeometryUtils.ts';
import { LightmapperMaterial } from '../../packages/baker-classic/src/lightmap/LightmapperMaterial.ts';
import { projectProbeSourceDiffuse } from '../../packages/baker-classic/src/probes/bakeProbeIrradiance.ts';
import { TEST_URL, trackConsoleErrors, waitReady } from './helpers';

const validationModuleUrl = `/three-lightmap-baker/@fs/${process.cwd().replace(/\\/g, '/')}/tests/browser/materialGIValidation.ts`;

test('textured albedo reaches the GPU secondary-bounce transport @hardware-gpu', async ({
  page,
}) => {
  const { errors } = trackConsoleErrors(page);
  await page.goto(TEST_URL);
  await waitReady(page);
  const result = await page.evaluate(async (moduleUrl) => {
    const validation = (await import(moduleUrl)) as {
      validateTexturedBounce(renderer: unknown): {
        indirect: [number, number, number];
        expectedAlbedo: [number, number, number];
        sourceAlbedo: [number, number, number];
      };
    };
    const baker = (
      window as unknown as {
        __baker: { sceneController: { renderer: unknown } };
      }
    ).__baker;
    return validation.validateTexturedBounce(baker.sceneController.renderer);
  }, validationModuleUrl);
  const [r, g, b] = result.indirect;
  expect(Math.max(r, g, b)).toBeGreaterThan(0.01);
  expect(r / g).toBeCloseTo(result.expectedAlbedo[0] / result.expectedAlbedo[1], 1);
  expect(b / r).toBeCloseTo(result.expectedAlbedo[2] / result.expectedAlbedo[0], 1);
  result.sourceAlbedo.forEach((value, index) =>
    expect(value).toBeCloseTo(result.expectedAlbedo[index] ?? 0, 2),
  );
  expect(errors).toEqual([]);
});

test('base-color transport respects UV0, UV1, and standard sRGB decoding @hardware-gpu', async ({
  page,
}) => {
  const { errors } = trackConsoleErrors(page);
  await page.goto(TEST_URL);
  await waitReady(page);
  const cases = await page.evaluate(async (moduleUrl) => {
    const validation = (await import(moduleUrl)) as {
      validateBaseColorUvAndSrgb(renderer: unknown): Record<
        'uv0' | 'uv1' | 'srgb',
        {
          indirect: [number, number, number];
          expectedAlbedo: [number, number, number];
          sourceAlbedo: [number, number, number];
          extractedUvs: number[];
          compactBaseColorAtlas: boolean;
          compactSurfaceAlbedo: boolean;
        }
      >;
    };
    const baker = (window as unknown as { __baker: { sceneController: { renderer: unknown } } })
      .__baker;
    return validation.validateBaseColorUvAndSrgb(baker.sceneController.renderer);
  }, validationModuleUrl);

  for (const [name, result] of Object.entries(cases)) {
    const [r, g, b] = result.indirect;
    expect(Math.max(r, g, b), `${name} secondary bounce`).toBeGreaterThan(0.005);
    expect(
      Math.abs(r / g - result.expectedAlbedo[0] / result.expectedAlbedo[1]),
      `${name} red/green ratio`,
    ).toBeLessThan(0.12);
    expect(
      Math.abs(b / g - result.expectedAlbedo[2] / result.expectedAlbedo[1]),
      `${name} blue/green ratio`,
    ).toBeLessThan(0.12);
    result.sourceAlbedo.forEach((value, index) =>
      expect(value, `${name} primary albedo ${index}`).toBeCloseTo(
        result.expectedAlbedo[index] ?? 0,
        2,
      ),
    );
    expect(result.compactBaseColorAtlas).toBe(true);
    expect(result.compactSurfaceAlbedo).toBe(true);
  }
  for (let offset = 0; offset < cases.uv0.extractedUvs.length; offset += 2) {
    expect(cases.uv0.extractedUvs[offset]).toBeCloseTo(0.25, 5);
    expect(cases.uv1.extractedUvs[offset]).toBeCloseTo(0.75, 5);
  }
  expect(errors).toEqual([]);
});

test('deterministic textured and grouped-material transport uses one albedo convention', () => {
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    'position',
    new BufferAttribute(
      new Float32Array([-2, 0, 0, -1, 0, 0, -2, 1, 0, 1, 0, 0, 2, 0, 0, 1, 1, 0]),
      3,
    ),
  );
  geometry.setAttribute(
    'normal',
    new BufferAttribute(
      new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
      3,
    ),
  );
  geometry.setAttribute(
    'uv',
    new BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), 2),
  );
  geometry.setAttribute('uv2', geometry.getAttribute('uv').clone());
  geometry.addGroup(0, 3, 0);
  geometry.addGroup(3, 3, 1);

  const redMap = dataMap([0.4, 0.2, 0.1, 1]);
  const blueMap = dataMap([0.1, 0.25, 0.8, 1]);
  const red = new MeshStandardMaterial({ color: new Color(0.5, 1, 1), map: redMap });
  const blue = new MeshStandardMaterial({ color: new Color(1, 0.5, 0.25), map: blueMap });
  const mesh = new Mesh(geometry, [red, blue]);
  mesh.updateMatrixWorld(true);

  const merged = mergeGeometry([mesh]);
  const bvh = new MeshBVH(merged);
  const surfaces = extractPerTriangleMaterials(merged, [mesh]);

  expect([...surfaces.materialSlots].sort()).toEqual([0, 1]);
  for (let triangle = 0; triangle < surfaces.totalTriangles; triangle++) {
    const slot = surfaces.materialSlots[triangle];
    const offset = triangle * 3;
    if (slot === 0) {
      expect(surfaces.maps[triangle]).toBe(redMap);
      expect([...surfaces.albedo.slice(offset, offset + 3)]).toEqual([0.5, 1, 1]);
    } else {
      expect(surfaces.maps[triangle]).toBe(blueMap);
      expect([...surfaces.albedo.slice(offset, offset + 3)]).toEqual([1, 0.5, 0.25]);
    }
  }

  const lightmapperMaterial = createMaterial(bvh, redMap);
  const shader = lightmapperMaterial.fragmentShader;
  expect(shader).toContain('vec3 hitAlbedo   = readSurfaceAlbedo(fi.w, bary)');
  expect(shader.match(/return baseColor \* mapColor;/g)).toHaveLength(1);

  const texturedAlbedo = [0.5 * 0.4, 1 * 0.2, 1 * 0.1] as const;
  expect(projectProbeSourceDiffuse([2, 2, 2], texturedAlbedo)).toEqual([0.4, 0.4, 0.2]);

  const solid = new Mesh(
    new BufferGeometry().copy(geometry),
    new MeshStandardMaterial({ color: 0xffffff }),
  );
  solid.updateMatrixWorld(true);
  const solidMerged = mergeGeometry([solid]);
  const solidBvh = new MeshBVH(solidMerged);
  const solidSurfaces = extractPerTriangleMaterials(solidMerged, [solid]);
  expect(solidSurfaces.maps.every((map) => map === null)).toBe(true);
  expect([...solidSurfaces.albedo.slice(0, 3)]).toEqual([1, 1, 1]);

  lightmapperMaterial.dispose();
  red.dispose();
  blue.dispose();
  redMap.dispose();
  blueMap.dispose();
  geometry.dispose();
  merged.dispose();
  solid.geometry.dispose();
  (solid.material as MeshStandardMaterial).dispose();
  solidMerged.dispose();
  void solidBvh;
});

function dataMap(rgba: readonly [number, number, number, number]): DataTexture {
  const texture = new DataTexture(new Float32Array(rgba), 1, 1, RGBAFormat, FloatType);
  texture.needsUpdate = true;
  return texture;
}

function createMaterial(bvh: MeshBVH, texture: DataTexture): LightmapperMaterial {
  return new LightmapperMaterial({
    bvh,
    invModelMatrix: new Matrix4(),
    positions: texture,
    normals: texture,
    albedoTex: texture,
    emissiveTex: texture,
    uv01Tex: texture,
    uv2MapTex: texture,
    mapRectTex: texture,
    mapTransform0Tex: texture,
    mapTransform1Tex: texture,
    albedoMapAtlas: texture,
    materialTextureSize: 1,
    casts: 1,
    bounces: 1,
    lightsTex: texture,
    lightCount: 0,
    skyColor: new Color(),
    skyIntensity: 0,
    opacity: 1,
    sampleIndex: 0,
    directLightEnabled: true,
    indirectLightEnabled: true,
  });
}
