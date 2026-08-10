import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

test.describe('playground probe integration', () => {
  test('layout preview honors target spacing, is independent, and is never persisted', async ({
    page,
  }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const preview = await page.evaluate(() => {
      type ProbeHost = {
        options: Record<string, unknown> & {
          probeSpacing: number;
          probePadding: number;
          probeMaxProbes: number;
          probeStatus: string;
          probeCount: number;
          probePreviewCount: number;
          probePreviewOverLimit: boolean;
        };
        previewProbes(): void;
        serializeProject(): { probeVolume?: unknown };
        probeController: {
          volume: unknown;
          previewView: {
            result: {
              probeCount: number;
              counts: readonly number[];
              actualSpacing: readonly number[];
            };
          } | null;
        };
      };
      const baker = (window as unknown as { __baker: ProbeHost }).__baker;
      Object.assign(baker.options, {
        probeSpacing: 0.25,
        probePadding: 0,
        probeMaxProbes: 64,
      });
      baker.previewProbes();
      const saved = baker.serializeProject();
      return {
        spacing: baker.options.probeSpacing,
        status: baker.options.probeStatus,
        bakedCount: baker.options.probeCount,
        previewCount: baker.options.probePreviewCount,
        overLimit: baker.options.probePreviewOverLimit,
        previewResult: baker.probeController.previewView?.result ?? null,
        hasBakedVolume: !!baker.probeController.volume,
        persistedProbe: saved.probeVolume ?? null,
      };
    });

    expect(preview.spacing).toBe(0.25);
    expect(preview.status).toBe('idle');
    expect(preview.bakedCount).toBe(0);
    expect(preview.previewCount).toBeGreaterThan(64);
    expect(preview.overLimit).toBe(true);
    expect(preview.previewResult?.probeCount).toBe(preview.previewCount);
    expect(preview.previewResult?.actualSpacing.every((value) => value <= preview.spacing)).toBe(
      true,
    );
    expect(preview.hasBakedVolume).toBe(false);
    expect(preview.persistedProbe).toBeNull();
  });

  test('generates lit probes from a real bake and drives the dynamic demo', async ({ page }) => {
    test.setTimeout(120_000);
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);

    await bakeDraft(page);
    await waitBakeDone(page);

    const generated = await page.evaluate(async () => {
      type ProbeHost = {
        options: Record<string, unknown> & {
          probeStatus: string;
          probeProgress: number;
          probeCount: number;
          probeSpacing: number;
          probePadding: number;
          probeSampleStride: number;
          probeFillIterations: number;
          probeMaxProbes: number;
          probeShow: boolean;
          probeDemoEnabled: boolean;
          probeDemoAnimate: boolean;
        };
        generateProbes(): Promise<void>;
        probeController: {
          volume: {
            irradiance: Float32Array;
            counts: [number, number, number];
            getPosition(index: number): { toArray(): number[] };
          } | null;
          debugView: {
            mesh: { instanceColor: { array: ArrayLike<number> } | null };
          } | null;
          demoMesh: { position: { x: number; y: number; z: number } } | null;
          demoBinding: { getLastIrradiance(): { toArray(): number[] } } | null;
          lastGenerationStats: {
            probeCount: number;
            grid: { actualSpacing: [number, number, number] };
            invalidPositionTexels: number;
            invalidSurfaceReferences: number;
            invalidNormalTexels: number;
            invalidRadianceTexels: number;
            emptyBeforeFill: number;
            emptyAfterFill: number;
            fallbackFilled: number;
            populatedEffectivelyBlack: number;
            fallbackEffectivelyBlack: number;
            sourceLightmap: {
              nonZeroPercentage: number;
              maxRGB: [number, number, number];
            };
            projectedSurfaceLight: {
              averageRGB: [number, number, number];
              nonZeroPercentage: number;
            };
            irradiance: {
              nonZeroPercentage: number;
              effectivelyBlackCount: number;
              effectivelyBlackPercentage: number;
              minLuminance: number;
              maxLuminance: number;
              averageLuminance: number;
              luminancePercentiles: { p50: number; p90: number };
            };
            blackProbeLocations: {
              boundaryCount: number;
              interiorCount: number;
              insideGeometryBoundsCount: number;
              openSpaceCount: number;
              interiorOpenSpaceCount: number;
            };
          } | null;
        };
      };

      const baker = (window as unknown as { __baker: ProbeHost }).__baker;
      Object.assign(baker.options, {
        probeRuntime: 'legacy',
        probeSpacing: 0.65,
        probePadding: 0.1,
        probeSampleStride: 3,
        probeFillIterations: 5,
        probeMaxProbes: 8192,
        probeShow: true,
        probeDemoEnabled: true,
        probeDemoAnimate: true,
      });
      await baker.generateProbes();

      const values = Array.from(baker.probeController.volume?.irradiance ?? []);
      const debugColors = Array.from(
        baker.probeController.debugView?.mesh.instanceColor?.array ?? [],
      );
      let strongestRed = { excess: -Infinity, value: [0, 0, 0], position: [0, 0, 0] };
      let strongestGreen = { excess: -Infinity, value: [0, 0, 0], position: [0, 0, 0] };
      for (let index = 0; index < values.length / 3; index++) {
        const value = [
          values[index * 3] ?? 0,
          values[index * 3 + 1] ?? 0,
          values[index * 3 + 2] ?? 0,
        ];
        const position = baker.probeController.volume?.getPosition(index).toArray() ?? [0, 0, 0];
        const redExcess = value[0] - value[1];
        const greenExcess = value[1] - value[0];
        if (redExcess > strongestRed.excess) strongestRed = { excess: redExcess, value, position };
        if (greenExcess > strongestGreen.excess) {
          strongestGreen = { excess: greenExcess, value, position };
        }
      }
      const counts = baker.probeController.volume?.counts ?? [0, 0, 0];
      const [nx, ny, nz] = counts;
      const slabAverage = (x: number): [number, number, number] => {
        const sum = [0, 0, 0];
        let samples = 0;
        for (let z = 1; z < Math.max(1, nz - 1); z++) {
          for (let y = 1; y < Math.max(1, ny - 1); y++) {
            const offset = (x + nx * (y + ny * z)) * 3;
            sum[0] += values[offset] ?? 0;
            sum[1] += values[offset + 1] ?? 0;
            sum[2] += values[offset + 2] ?? 0;
            samples++;
          }
        }
        return samples ? [sum[0] / samples, sum[1] / samples, sum[2] / samples] : [0, 0, 0];
      };
      const start = baker.probeController.demoMesh
        ? [
            baker.probeController.demoMesh.position.x,
            baker.probeController.demoMesh.position.y,
            baker.probeController.demoMesh.position.z,
          ]
        : null;

      return {
        status: baker.options.probeStatus,
        progress: baker.options.probeProgress,
        count: baker.options.probeCount,
        values,
        start,
        hasInstanceColors: !!baker.probeController.debugView?.mesh.instanceColor,
        debugColorRange: {
          min: debugColors.length ? Math.min(...debugColors) : 0,
          max: debugColors.length ? Math.max(...debugColors) : 0,
        },
        hasDemo: !!baker.probeController.demoMesh,
        startIrradiance: baker.probeController.demoBinding?.getLastIrradiance().toArray() ?? null,
        stats: baker.probeController.lastGenerationStats,
        leftSlab: slabAverage(Math.min(1, Math.max(0, nx - 1))),
        rightSlab: slabAverage(Math.max(0, nx - 2)),
        strongestRed,
        strongestGreen,
      };
    });

    expect(generated.status).toBe('ready');
    expect(generated.progress).toBe(1);
    expect(generated.count).toBeGreaterThan(0);
    expect(generated.count).toBeLessThanOrEqual(8192);
    expect(generated.values).toHaveLength(generated.count * 3);
    expect(Math.max(...generated.values)).toBeGreaterThan(1e-6);
    expect(generated.hasInstanceColors).toBe(true);
    expect(generated.hasDemo).toBe(true);
    expect(generated.start).not.toBeNull();
    expect(generated.startIrradiance).not.toBeNull();
    expect(generated.stats).not.toBeNull();

    expect(generated.stats?.invalidPositionTexels).toBe(0);
    expect(generated.stats?.invalidSurfaceReferences).toBe(0);
    expect(generated.stats?.invalidNormalTexels).toBe(0);
    expect(generated.stats?.invalidRadianceTexels).toBe(0);
    expect(generated.stats?.grid.actualSpacing.every((value) => value <= 0.65)).toBe(true);
    expect(generated.stats?.sourceLightmap.nonZeroPercentage).toBeGreaterThan(25);
    expect(Math.max(...(generated.stats?.sourceLightmap.maxRGB ?? []))).toBeGreaterThan(1);
    expect(generated.stats?.irradiance.nonZeroPercentage).toBeGreaterThan(98);
    expect(generated.stats?.irradiance.effectivelyBlackPercentage).toBeLessThan(2);
    expect(generated.stats?.irradiance.maxLuminance).toBeGreaterThan(1);
    expect(generated.stats?.irradiance.averageLuminance).toBeGreaterThan(0.1);
    expect(generated.stats?.irradiance.luminancePercentiles.p50).toBeGreaterThan(0.1);
    expect(generated.stats?.fallbackFilled).toBeLessThan(generated.count * 0.01);
    expect(
      (generated.stats?.populatedEffectivelyBlack ?? 0) +
        (generated.stats?.fallbackEffectivelyBlack ?? 0),
    ).toBe(generated.stats?.irradiance.effectivelyBlackCount);
    expect(generated.stats?.fallbackEffectivelyBlack).toBe(0);
    expect(generated.stats?.populatedEffectivelyBlack).toBe(
      generated.stats?.irradiance.effectivelyBlackCount,
    );
    expect(generated.stats?.fallbackFilled).toBe(generated.stats?.emptyAfterFill);
    expect(generated.stats?.populatedEffectivelyBlack).toBe(0);
    expect(generated.stats?.blackProbeLocations.interiorOpenSpaceCount).toBe(0);
    expect(generated.leftSlab[0]).toBeGreaterThan(generated.leftSlab[1]);
    expect(generated.strongestRed.excess).toBeGreaterThan(0.1);
    expect(generated.strongestGreen.excess).toBeGreaterThan(0.1);

    if (process.env.BAKER_CAPTURE_PROBES === '1') {
      await page.screenshot({ path: 'tmp/cornell-probes-combined.png' });
      await page.evaluate(() => {
        (window as unknown as { __baker: { setLayer(id: string): void } }).__baker.setLayer(
          'probes',
        );
      });
      await page.waitForTimeout(250);
      await page.screenshot({ path: 'tmp/cornell-probes-only.png' });
      await page.evaluate((greenPosition) => {
        type Renderable = {
          visible: boolean;
          isMesh?: boolean;
          isLine?: boolean;
          isPoints?: boolean;
          isSprite?: boolean;
          isLight?: boolean;
          userData?: Record<string, unknown>;
        };
        const baker = (
          window as unknown as {
            __baker: {
              setLayer(id: string): void;
              setProbeVisibility(visible: boolean): void;
              setProbeDemoAnimation(visible: boolean): void;
              getScene(): {
                environment: unknown;
                traverse(callback: (object: Renderable) => void): void;
              };
              probeController: {
                demoMesh: { position: { fromArray(value: number[]): void } } | null;
                demoBinding: { update(): void } | null;
              };
            };
          }
        ).__baker;
        baker.setLayer('combined');
        baker.setProbeVisibility(false);
        baker.setProbeDemoAnimation(false);
        baker.probeController.demoMesh?.position.fromArray(greenPosition);
        baker.probeController.demoBinding?.update();
        const scene = baker.getScene();
        scene.environment = null;
        scene.traverse((object) => {
          const renderable = object.isMesh || object.isLine || object.isPoints || object.isSprite;
          if (object.isLight) object.visible = false;
          if (renderable && !object.userData?.bakerProbeDemo) object.visible = false;
        });
      }, generated.strongestGreen.position);
      await page.waitForTimeout(250);
      await page.screenshot({ path: 'tmp/cornell-probe-dynamic-only.png' });
    }

    await page.waitForTimeout(750);
    const end = await page.evaluate(() => {
      const mesh = (
        window as unknown as {
          __baker: {
            probeController: {
              demoMesh: { position: { x: number; y: number; z: number } } | null;
            };
          };
        }
      ).__baker.probeController.demoMesh;
      const binding = (
        window as unknown as {
          __baker: {
            probeController: {
              demoBinding: { getLastIrradiance(): { toArray(): number[] } } | null;
            };
          };
        }
      ).__baker.probeController.demoBinding;
      return {
        position: mesh ? [mesh.position.x, mesh.position.y, mesh.position.z] : null,
        irradiance: binding?.getLastIrradiance().toArray() ?? null,
      };
    });
    expect(end.position).not.toEqual(generated.start);
    expect(end.irradiance).not.toBeNull();
    expect(end.irradiance).not.toEqual(generated.startIrradiance);

    const hard = errors.filter((error) => !error.includes('[baker:debug]'));
    expect(hard, `unexpected errors during probe generation: ${hard.join('; ')}`).toEqual([]);
  });

  test('restores probe data, demo state, and probe-only render mode', async ({ page }) => {
    await page.goto(TEST_URL);
    await waitReady(page);

    const result = await page.evaluate(async () => {
      type ProbeVolumeJSON = {
        version: 1;
        bounds: { min: [number, number, number]; max: [number, number, number] };
        counts: [number, number, number];
        irradiance: number[];
      };
      type Project = {
        options: Record<string, unknown>;
        probeVolume?: ProbeVolumeJSON;
        [key: string]: unknown;
      };
      type ProbeHost = {
        options: Record<string, unknown>;
        probeController: {
          probeCount: number;
          debugView: unknown;
          demoMesh: unknown;
        };
        serializeProject(): Project;
        loadProject(project: Project): Promise<void>;
        setLayer(id: string): void;
        getScene(): {
          traverse(
            callback: (object: {
              isMesh?: boolean;
              visible: boolean;
              userData?: Record<string, unknown>;
            }) => void,
          ): void;
        };
      };

      const baker = (window as unknown as { __baker: ProbeHost }).__baker;
      const project = baker.serializeProject();
      project.options = {
        ...project.options,
        layer: 'combined',
        probeRuntime: 'legacy',
        probeSpacing: 1,
        probePadding: 0.1,
        probeIntensity: 1.25,
        probeSampleStride: 3,
        probeFillIterations: 4,
        probeMaxProbes: 128,
        probeShow: true,
        probeDemoEnabled: true,
        probeDemoAnimate: false,
      };
      project.probeVolume = {
        version: 1,
        bounds: { min: [-1, 0, -1], max: [1, 2, 1] },
        counts: [2, 2, 2],
        irradiance: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      };

      await baker.loadProject(project);
      const saved = baker.serializeProject();

      baker.setLayer('probes');
      let visibleRegularInProbeMode = 0;
      baker.getScene().traverse((object) => {
        if (!object.isMesh || object.userData?.bakerProbeDebug) return;
        if (object.visible) visibleRegularInProbeMode++;
      });

      baker.setLayer('combined');
      let visibleRegularInCombined = 0;
      baker.getScene().traverse((object) => {
        if (!object.isMesh || object.userData?.bakerProbeDebug) return;
        if (object.visible) visibleRegularInCombined++;
      });

      return {
        status: baker.options.probeStatus,
        count: baker.options.probeCount,
        controllerCount: baker.probeController.probeCount,
        hasDebug: !!baker.probeController.debugView,
        hasDemo: !!baker.probeController.demoMesh,
        savedProbe: saved.probeVolume,
        visibleRegularInProbeMode,
        visibleRegularInCombined,
      };
    });

    expect(result.status).toBe('ready');
    expect(result.count).toBe(8);
    expect(result.controllerCount).toBe(8);
    expect(result.hasDebug).toBe(true);
    expect(result.hasDemo).toBe(true);
    expect(result.savedProbe?.counts).toEqual([2, 2, 2]);
    expect(result.savedProbe?.irradiance).toHaveLength(24);
    expect(result.visibleRegularInProbeMode).toBe(0);
    expect(result.visibleRegularInCombined).toBeGreaterThan(0);
  });
});
