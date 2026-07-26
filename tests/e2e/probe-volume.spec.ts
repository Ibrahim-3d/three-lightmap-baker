import { expect, test } from '@playwright/test';
import { Box3, BoxGeometry, Color, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import {
  ProbeVolume,
  bindProbeLighting,
  generateProbeGrid,
} from '../../packages/baker-classic/src/index';

test.describe('probe volume core', () => {
  test('generates a bounded regular grid from requested spacing', () => {
    const bounds = new Box3(new Vector3(0, 0, 0), new Vector3(2, 1, 1));
    const volume = generateProbeGrid(bounds, { spacing: 1 });

    expect(volume.counts).toEqual([3, 2, 2]);
    expect(volume.probeCount).toBe(12);
    expect(volume.getPosition(0).toArray()).toEqual([0, 0, 0]);
    expect(volume.getPosition(volume.probeCount - 1).toArray()).toEqual([2, 1, 1]);
  });

  test('trilinearly interpolates RGB irradiance and round-trips JSON', () => {
    const volume = new ProbeVolume(
      new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)),
      [2, 2, 2],
    );

    for (let z = 0; z <= 1; z++) {
      for (let y = 0; y <= 1; y++) {
        for (let x = 0; x <= 1; x++) {
          volume.setIrradiance(volume.index(x, y, z), new Color(x, y, z));
        }
      }
    }

    const center = volume.sample(new Vector3(0.5, 0.5, 0.5));
    expect(center.r).toBeCloseTo(0.5, 6);
    expect(center.g).toBeCloseTo(0.5, 6);
    expect(center.b).toBeCloseTo(0.5, 6);

    const restored = ProbeVolume.fromJSON(volume.toJSON());
    const restoredCenter = restored.sample(new Vector3(0.5, 0.5, 0.5));
    expect(restoredCenter.r).toBeCloseTo(center.r, 6);
    expect(restoredCenter.g).toBeCloseTo(center.g, 6);
    expect(restoredCenter.b).toBeCloseTo(center.b, 6);
  });

  test('injects probe irradiance into PBR indirect diffuse and restores hooks', () => {
    const volume = new ProbeVolume(
      new Box3(new Vector3(-1, -1, -1), new Vector3(1, 1, 1)),
      [2, 2, 2],
    );
    for (let index = 0; index < volume.probeCount; index++) {
      volume.setIrradiance(index, new Color(0.4, 0.2, 0.1));
    }

    const material = new MeshStandardMaterial({ color: 0xffffff, emissive: 0x000000 });
    const mesh = new Mesh(new BoxGeometry(1, 1, 1), material);
    const originalOnBeforeCompile = material.onBeforeCompile;
    const originalProgramKey = material.customProgramCacheKey;
    const binding = bindProbeLighting(mesh, volume);
    binding.update();

    expect(material.emissive.getHex()).toBe(0x000000);
    expect(material.onBeforeCompile).not.toBe(originalOnBeforeCompile);

    const shader = {
      uniforms: {} as Record<string, unknown>,
      vertexShader: '',
      fragmentShader: '#include <lights_fragment_begin>',
    };
    material.onBeforeCompile(shader as never, {} as never);
    expect(shader.fragmentShader).toContain('reflectedLight.indirectDiffuse');
    const uniform = shader.uniforms.bakerProbeIrradiance as { value: Color };
    expect(uniform.value.r).toBeCloseTo(0.4, 6);
    expect(uniform.value.g).toBeCloseTo(0.2, 6);
    expect(uniform.value.b).toBeCloseTo(0.1, 6);

    binding.dispose();
    expect(material.onBeforeCompile).toBe(originalOnBeforeCompile);
    expect(material.customProgramCacheKey).toBe(originalProgramKey);
    mesh.geometry.dispose();
    material.dispose();
  });
});
