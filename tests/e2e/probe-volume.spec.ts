import { expect, test } from '@playwright/test';
import { Box3, BoxGeometry, Color, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { bindProbeLighting } from '../../packages/baker-classic/src/probes/ProbeLightingBinding.ts';
import { createProbeDebugView } from '../../packages/baker-classic/src/probes/ProbeDebugView.ts';
import {
  projectProbeSourceDiffuse,
  readProbeSurfaceAlbedo,
} from '../../packages/baker-classic/src/probes/bakeProbeIrradiance.ts';
import { generateProbeGrid } from '../../packages/baker-classic/src/probes/generateProbeGrid.ts';
import { ProbeVolume } from '../../packages/baker-classic/src/probes/ProbeVolume.ts';

test.describe('probe volume core', () => {
  test('covers bounds with endpoint-fit spacing no larger than the target', () => {
    const bounds = new Box3(new Vector3(0, 0, 0), new Vector3(2, 1, 1));
    const targetSpacing = new Vector3(0.7, 0.6, 0.5);
    const volume = generateProbeGrid(bounds, { spacing: targetSpacing, padding: 0 });

    expect(volume.counts).toEqual([4, 3, 3]);
    expect(volume.probeCount).toBe(36);
    expect(volume.getPosition(0).toArray()).toEqual([0, 0, 0]);
    expect(volume.getPosition(volume.probeCount - 1).toArray()).toEqual([2, 1, 1]);
    expect(volume.spacing.x).toBeLessThanOrEqual(targetSpacing.x);
    expect(volume.spacing.y).toBeLessThanOrEqual(targetSpacing.y);
    expect(volume.spacing.z).toBeLessThanOrEqual(targetSpacing.z);
  });

  test('treats maxProbes as a hard cap without enlarging target spacing', () => {
    const bounds = new Box3(new Vector3(0, 0, 0), new Vector3(2, 1, 1));
    expect(() => generateProbeGrid(bounds, { spacing: 0.25, padding: 0, maxProbes: 64 })).toThrow(
      'grid requires 225 probes, exceeding maxProbes=64',
    );
    const accepted = generateProbeGrid(bounds, { spacing: 0.25, padding: 0, maxProbes: 225 });
    expect(accepted.probeCount).toBe(225);
    expect(accepted.spacing.toArray().every((value) => value <= 0.25)).toBe(true);
  });

  test('applies source albedo once in controlled baker-normalized energy units', () => {
    const geometry = new BoxGeometry(1, 1, 1);
    const makeMesh = (color: Color): Mesh =>
      new Mesh(geometry, new MeshStandardMaterial({ color }));
    const white = makeMesh(new Color().setRGB(1, 1, 1));
    const gray = makeMesh(new Color().setRGB(0.5, 0.5, 0.5));
    const red = makeMesh(new Color().setRGB(1, 0, 0));
    const incoming = [2, 2, 2] as const;
    const projected = [white, gray, red].map((mesh) => {
      const albedo = readProbeSurfaceAlbedo(mesh);
      expect(albedo).not.toBeNull();
      return projectProbeSourceDiffuse(incoming, albedo ?? [0, 0, 0]);
    });

    expect(projected[0]).toEqual([2, 2, 2]);
    expect(projected[1]).toEqual([1, 1, 1]);
    expect(projected[2]).toEqual([2, 0, 0]);
    expect((projected[1]?.[0] ?? 0) / (projected[0]?.[0] ?? 1)).toBeCloseTo(0.5, 6);
    expect((projected[2]?.[0] ?? 0) / (projected[0]?.[0] ?? 1)).toBeCloseTo(1, 6);
    expect((projected[2]?.[1] ?? 0) / (projected[0]?.[1] ?? 1)).toBe(0);

    for (const mesh of [white, gray, red]) (mesh.material as MeshStandardMaterial).dispose();
    geometry.dispose();
  });

  test('trilinearly interpolates RGB irradiance and round-trips JSON', () => {
    const volume = new ProbeVolume(new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)), [2, 2, 2]);

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
      volume.setIrradiance(index, new Color(6, 3, 1.5));
    }

    const material = new MeshStandardMaterial({
      color: new Color().setRGB(0.5, 0.25, 0.125),
      emissive: 0x000000,
    });
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
    expect(uniform.value.r).toBeCloseTo(6, 6);
    expect(uniform.value.g).toBeCloseTo(3, 6);
    expect(uniform.value.b).toBeCloseTo(1.5, 6);
    expect(shader.fragmentShader.match(/material\.diffuseColor/g)).toHaveLength(1);
    expect(shader.fragmentShader.match(/RECIPROCAL_PI/g)).toHaveLength(1);
    expect(material.color.toArray()).toEqual([0.5, 0.25, 0.125]);

    binding.dispose();
    expect(material.onBeforeCompile).toBe(originalOnBeforeCompile);
    expect(material.customProgramCacheKey).toBe(originalProgramKey);
    mesh.geometry.dispose();
    material.dispose();
  });

  test('uses fixed display tone mapping without changing probe data', () => {
    const volume = new ProbeVolume(new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)), [2, 1, 1]);
    volume.setIrradiance(0, new Color(0, 0, 0));
    volume.setIrradiance(1, new Color(0.004, 0.002, 0.001));
    const storedBefore = Array.from(volume.irradiance);
    const jsonBefore = volume.toJSON();
    const debug = createProbeDebugView(volume);
    const colors = Array.from(debug.mesh.instanceColor?.array ?? []);

    expect(colors.slice(0, 3)).toEqual([0, 0, 0]);
    expect(colors[3]).toBeCloseTo(0.004 / 1.004, 6);
    expect(colors[4]).toBeCloseTo(0.002 / 1.002, 6);
    expect(colors[5]).toBeCloseTo(0.001 / 1.001, 6);
    expect(Array.from(volume.irradiance)).toEqual(storedBefore);
    expect(volume.toJSON()).toEqual(jsonBefore);
    const sampled = volume.sample(new Vector3(1, 0, 0));
    expect(sampled.r).toBeCloseTo(0.004, 6);
    expect(sampled.g).toBeCloseTo(0.002, 6);
    expect(sampled.b).toBeCloseTo(0.001, 6);
    debug.dispose();
  });
});
