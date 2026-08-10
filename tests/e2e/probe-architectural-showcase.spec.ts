import { expect, test, type Page } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

const SHOWCASE_ID = 'showcase.probe-architectural';
const OUTPUT_DIRECTORY = resolve('showcase/probe-architectural');
const SPACINGS = [1.2, 0.65, 0.5] as const;

type RGB = [number, number, number];
type Sample = { position: RGB; rgb: RGB; luminance: number };

async function loadShowcase(page: Page): Promise<void> {
  await page.goto(TEST_URL);
  await waitReady(page);
  await page.evaluate(async (id) => {
    const baker = (
      window as unknown as { __baker: { loadScenePreset(value: string): Promise<void> } }
    ).__baker;
    await baker.loadScenePreset(id);
  }, SHOWCASE_ID);
  await page.waitForFunction(
    () =>
      (window as unknown as { __baker?: { getMeshCount(): number } }).__baker?.getMeshCount() ===
      15,
  );
}

async function renderView(
  page: Page,
  position: RGB,
  target: RGB,
  options: { cutaway?: boolean } = {},
): Promise<void> {
  await page.evaluate(
    ({ position: cameraPosition, target: cameraTarget, cutaway }) => {
      type RenderObject = {
        visible: boolean;
        userData?: Record<string, unknown>;
        traverse?(callback: (object: RenderObject) => void): void;
      };
      const baker = (
        window as unknown as {
          __baker: {
            sceneController: {
              camera: {
                position: { fromArray(value: number[]): void };
                updateProjectionMatrix(): void;
              };
              controls: { target: { fromArray(value: number[]): void }; update(): void };
              gridHelper: { visible: boolean };
              axesHelper: { visible: boolean };
              lightTransformController: { visible: boolean };
              scene: {
                children: RenderObject[];
                traverse(callback: (object: RenderObject) => void): void;
              };
              renderer: { render(scene: unknown, camera: unknown): void };
            };
          };
        }
      ).__baker;
      const controller = baker.sceneController;
      controller.camera.position.fromArray(cameraPosition);
      controller.controls.target.fromArray(cameraTarget);
      controller.camera.updateProjectionMatrix();
      controller.controls.update();
      controller.gridHelper.visible = false;
      controller.axesHelper.visible = false;
      controller.lightTransformController.visible = false;
      for (const child of controller.scene.children) {
        const helper = child.userData?.lightHelper as RenderObject | undefined;
        if (helper) helper.visible = false;
        const cameraHelper = child.userData?.cameraHelper as RenderObject | undefined;
        if (cameraHelper) cameraHelper.visible = false;
      }
      controller.scene.traverse((object) => {
        if (object.userData?.probeShowcaseCutaway) object.visible = !cutaway;
      });
      controller.renderer.render(controller.scene, controller.camera);
    },
    { position, target, cutaway: options.cutaway ?? true },
  );
  await page.waitForTimeout(100);
}

async function captureCanvas(page: Page, filename: string): Promise<void> {
  await page
    .locator('canvas')
    .first()
    .screenshot({ path: resolve(OUTPUT_DIRECTORY, filename) });
}

test.describe('probe architectural showcase', () => {
  test('contains the intended solid-material architectural stress geometry', async ({ page }) => {
    await loadShowcase(page);

    const structure = await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            getScene(): {
              traverse(
                callback: (object: {
                  isMesh?: boolean;
                  name: string;
                  material?:
                    | { map?: unknown; color?: { toArray(): number[] } }
                    | Array<{ map?: unknown; color?: { toArray(): number[] } }>;
                  userData?: Record<string, unknown>;
                }) => void,
              ): void;
            };
          };
        }
      ).__baker;
      const meshes: Array<{
        name: string;
        materialCount: number;
        hasMap: boolean;
        color: number[] | null;
      }> = [];
      const samples: string[] = [];
      baker.getScene().traverse((object) => {
        const sample = object.userData?.probeShowcaseSample;
        if (typeof sample === 'string') samples.push(sample);
        if (!object.isMesh || !object.userData?.probeShowcaseStatic) return;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        meshes.push({
          name: object.name,
          materialCount: materials.length,
          hasMap: materials.some((material) => !!material?.map),
          color: materials[0]?.color?.toArray() ?? null,
        });
      });
      return { meshes, samples: samples.sort() };
    });

    expect(structure.meshes).toHaveLength(15);
    expect(structure.meshes.every((mesh) => mesh.materialCount === 1 && !mesh.hasMap)).toBe(true);
    expect(structure.meshes.map((mesh) => mesh.name)).toEqual(
      expect.arrayContaining([
        'Main Floor',
        'Main Ceiling',
        'Separator North',
        'Separator South',
        'Door Header',
        'Alcove Back',
        'Green Zone Column',
        'Red Zone Wall',
        'Green Zone Wall',
      ]),
    );
    expect(structure.samples).toEqual([
      'alcove',
      'doorway',
      'greenZone',
      'neutralCenter',
      'redZone',
      'wallGreenSide',
      'wallRedSide',
    ]);
  });

  test('measures three RGB-probe densities and captures the deterministic showcase', async ({
    page,
  }) => {
    test.skip(
      process.env.BAKER_MEASURE_PROBE_SHOWCASE !== '1',
      'Set BAKER_MEASURE_PROBE_SHOWCASE=1 for the deliberate GPU measurement run.',
    );
    test.setTimeout(600_000);
    mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
    const { errors } = trackConsoleErrors(page);
    await page.setViewportSize({ width: 1280, height: 800 });
    await loadShowcase(page);

    const bakeStarted = Date.now();
    await page.evaluate(() => {
      const baker = (window as unknown as { __baker: { setQuality(value: string): void } }).__baker;
      baker.setQuality('Draft');
    });
    await waitBakeDone(page, 240_000);
    const bake = await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            getBakeElapsedMs(): number;
            getBakeGroupCount(): number;
            options: { samples: number; targetSamples: number; lightMapSize: number };
          };
        }
      ).__baker;
      return {
        elapsedMs: baker.getBakeElapsedMs(),
        wallClockMs: Date.now(),
        groups: baker.getBakeGroupCount(),
        samples: baker.options.samples,
        targetSamples: baker.options.targetSamples,
        lightMapSize: baker.options.lightMapSize,
      };
    });
    bake.wallClockMs -= bakeStarted;

    await page.evaluate(() => {
      const baker = (
        window as unknown as {
          __baker: {
            setLayer(value: string): void;
            probeController: { clearPreview(): void };
          };
        }
      ).__baker;
      baker.probeController.clearPreview();
      baker.setLayer('combined');
    });
    await renderView(page, [10.8, 5.2, 13.2], [0, 1.7, -0.8]);
    await captureCanvas(page, '01-architectural-static-bake.png');

    const preview = await page.evaluate(() => {
      type PreviewHost = {
        options: Record<string, unknown>;
        previewProbes(): void;
        probeController: {
          previewView: {
            result: {
              probeCount: number;
              counts: RGB;
              actualSpacing: RGB;
              bounds: { min: { toArray(): number[] }; max: { toArray(): number[] } };
              overLimit: boolean;
            };
          } | null;
        };
      };
      const baker = (window as unknown as { __baker: PreviewHost }).__baker;
      Object.assign(baker.options, {
        probeSpacing: 0.65,
        probePadding: 0.1,
        probeMaxProbes: 8192,
      });
      baker.previewProbes();
      const result = baker.probeController.previewView?.result;
      return result
        ? {
            probeCount: result.probeCount,
            counts: result.counts,
            actualSpacing: result.actualSpacing,
            bounds: {
              min: result.bounds.min.toArray(),
              max: result.bounds.max.toArray(),
            },
            overLimit: result.overLimit,
          }
        : null;
    });
    expect(preview).not.toBeNull();
    expect(preview?.overLimit).toBe(false);
    await renderView(page, [10.8, 5.2, 13.2], [0, 1.7, -0.8]);
    await captureCanvas(page, '02-layout-preview.png');

    const experiments: Array<Record<string, unknown>> = [];
    let defaultResult: {
      samples: Record<string, Sample>;
      path: Array<Sample & { id: string }>;
      leakage: Record<string, number>;
      stats: Record<string, unknown>;
      serializedBytes: number;
      markerPositions: Record<string, RGB>;
    } | null = null;

    for (const targetSpacing of SPACINGS) {
      const result = await page.evaluate(async (spacing) => {
        type Marker = {
          position: { toArray(): number[] };
          userData?: Record<string, unknown>;
        };
        type Volume = {
          bounds: { min: { toArray(): number[] }; max: { toArray(): number[] } };
          counts: RGB;
          spacing: { toArray(): number[] };
          sample(position: { x: number; y: number; z: number }): {
            r: number;
            g: number;
            b: number;
          };
          toJSON(): unknown;
        };
        type Host = {
          options: Record<string, unknown> & { probeStatus: string };
          generateProbes(): Promise<void>;
          setProbeDemoAnimation(value: boolean): void;
          getScene(): { traverse(callback: (object: Marker) => void): void };
          probeController: {
            volume: Volume | null;
            lastGenerationStats: Record<string, unknown>;
            demoMesh: { position: { fromArray(value: number[]): void } } | null;
            demoBinding: {
              update(): void;
              getLastIrradiance(): { r: number; g: number; b: number };
            } | null;
          };
        };
        const baker = (window as unknown as { __baker: Host }).__baker;
        Object.assign(baker.options, {
          probeSpacing: spacing,
          probePadding: 0.1,
          probeIntensity: 1,
          probeSampleStride: 3,
          probeFillIterations: 5,
          probeMaxProbes: 8192,
          probeShow: true,
          probeDemoEnabled: true,
          probeDemoAnimate: false,
        });
        baker.setProbeDemoAnimation(false);
        await baker.generateProbes();
        if (baker.options.probeStatus !== 'ready') {
          throw new Error(`Probe generation ended in ${baker.options.probeStatus}`);
        }
        const volume = baker.probeController.volume;
        if (!volume) throw new Error('Probe generation did not install a volume');

        const markerPositions: Record<string, RGB> = {};
        baker.getScene().traverse((object) => {
          const id = object.userData?.probeShowcaseSample;
          if (typeof id === 'string') markerPositions[id] = object.position.toArray() as RGB;
        });
        const luminance = (rgb: RGB): number => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        const sampleAt = (position: RGB): Sample => {
          const value = volume.sample({ x: position[0], y: position[1], z: position[2] });
          const rgb: RGB = [value.r, value.g, value.b];
          return { position, rgb, luminance: luminance(rgb) };
        };
        const samples = Object.fromEntries(
          Object.entries(markerPositions).map(([id, position]) => [id, sampleAt(position)]),
        ) as Record<string, Sample>;

        const wallRed = samples.wallRedSide!;
        const wallGreen = samples.wallGreenSide!;
        const epsilon = 1e-9;
        const redSignal = (rgb: RGB): number => Math.max(0, rgb[0] - rgb[1]);
        const greenSignal = (rgb: RGB): number => Math.max(0, rgb[1] - rgb[0]);
        const fraction = (rgb: RGB, channel: number): number =>
          rgb[channel]! / Math.max(epsilon, rgb[0] + rgb[1] + rgb[2]);
        const leakage = {
          redSignalIntoGreenRatio:
            redSignal(wallGreen.rgb) / Math.max(epsilon, redSignal(wallRed.rgb)),
          greenSignalIntoRedRatio:
            greenSignal(wallRed.rgb) / Math.max(epsilon, greenSignal(wallGreen.rgb)),
          redFractionTransferRatio:
            fraction(wallGreen.rgb, 0) / Math.max(epsilon, fraction(wallRed.rgb, 0)),
          greenFractionTransferRatio:
            fraction(wallRed.rgb, 1) / Math.max(epsilon, fraction(wallGreen.rgb, 1)),
          luminanceSideRatio:
            Math.min(wallRed.luminance, wallGreen.luminance) /
            Math.max(epsilon, Math.max(wallRed.luminance, wallGreen.luminance)),
        };

        const anchors = ['redZone', 'doorway', 'greenZone', 'alcove'] as const;
        const path: Array<Sample & { id: string }> = [];
        for (let segment = 0; segment < anchors.length - 1; segment++) {
          const from = markerPositions[anchors[segment]!]!;
          const to = markerPositions[anchors[segment + 1]!]!;
          for (let step = 0; step < 5; step++) {
            if (segment > 0 && step === 0) continue;
            const t = step / 4;
            const position: RGB = [
              from[0] + (to[0] - from[0]) * t,
              from[1] + (to[1] - from[1]) * t,
              from[2] + (to[2] - from[2]) * t,
            ];
            path.push({
              id: `${anchors[segment]}-${anchors[segment + 1]}-${step}`,
              ...sampleAt(position),
            });
          }
        }
        let maxAdjacentRGBDelta = 0;
        let sumAdjacentRGBDelta = 0;
        for (let index = 1; index < path.length; index++) {
          const previous = path[index - 1]!.rgb;
          const current = path[index]!.rgb;
          const delta = Math.hypot(
            current[0] - previous[0],
            current[1] - previous[1],
            current[2] - previous[2],
          );
          maxAdjacentRGBDelta = Math.max(maxAdjacentRGBDelta, delta);
          sumAdjacentRGBDelta += delta;
        }
        const blackThreshold = 1e-6;
        const blackFlashes = path.filter(
          (point) => Math.max(...point.rgb) <= blackThreshold,
        ).length;
        let maxRuntimeSampleDifference = 0;
        let runtimeBlackFlashes = 0;
        const demo = baker.probeController.demoMesh;
        const binding = baker.probeController.demoBinding;
        if (!demo || !binding)
          throw new Error('Dynamic MeshStandardMaterial probe demo is missing');
        for (const point of path) {
          demo.position.fromArray(point.position);
          binding.update();
          const runtime = binding.getLastIrradiance();
          const runtimeRGB: RGB = [runtime.r, runtime.g, runtime.b];
          maxRuntimeSampleDifference = Math.max(
            maxRuntimeSampleDifference,
            Math.hypot(
              runtimeRGB[0] - point.rgb[0],
              runtimeRGB[1] - point.rgb[1],
              runtimeRGB[2] - point.rgb[2],
            ),
          );
          if (Math.max(...runtimeRGB) <= blackThreshold) runtimeBlackFlashes++;
        }
        const jitterByAnchor: Record<string, number> = {};
        for (const id of anchors) {
          const center = samples[id]!;
          let maxDelta = 0;
          for (const [dx, dz] of [
            [-0.05, 0],
            [0.05, 0],
            [0, -0.05],
            [0, 0.05],
          ] as const) {
            const nearby = sampleAt([
              center.position[0] + dx,
              center.position[1],
              center.position[2] + dz,
            ]);
            maxDelta = Math.max(
              maxDelta,
              Math.hypot(
                nearby.rgb[0] - center.rgb[0],
                nearby.rgb[1] - center.rgb[1],
                nearby.rgb[2] - center.rgb[2],
              ),
            );
          }
          jitterByAnchor[id] =
            maxDelta / Math.max(epsilon, Math.hypot(center.rgb[0], center.rgb[1], center.rgb[2]));
        }
        const json = JSON.stringify(volume.toJSON());
        return {
          targetSpacing: spacing,
          actualSpacing: volume.spacing.toArray(),
          counts: volume.counts,
          bounds: { min: volume.bounds.min.toArray(), max: volume.bounds.max.toArray() },
          status: baker.options.probeStatus,
          stats: baker.probeController.lastGenerationStats,
          samples,
          leakage,
          path,
          pathMetrics: {
            blackFlashes,
            maxAdjacentRGBDelta,
            averageAdjacentRGBDelta: sumAdjacentRGBDelta / Math.max(1, path.length - 1),
            jitterByAnchor,
            runtimeBlackFlashes,
            maxRuntimeSampleDifference,
          },
          serializedBytes: new TextEncoder().encode(json).byteLength,
          markerPositions,
        };
      }, targetSpacing);

      expect(result.status).toBe('ready');
      expect(result.actualSpacing.every((value) => value <= targetSpacing + 1e-9)).toBe(true);
      expect((result.stats as { probeCount: number }).probeCount).toBeLessThanOrEqual(8192);
      expect((result.stats as { invalidPositionTexels: number }).invalidPositionTexels).toBe(0);
      expect((result.stats as { invalidSurfaceReferences: number }).invalidSurfaceReferences).toBe(
        0,
      );
      expect((result.stats as { invalidRadianceTexels: number }).invalidRadianceTexels).toBe(0);
      expect(result.pathMetrics.maxRuntimeSampleDifference).toBeLessThan(1e-6);
      experiments.push(result);

      if (targetSpacing === 0.65) {
        defaultResult = result;

        await page.evaluate(() => {
          const baker = (
            window as unknown as {
              __baker: {
                setLayer(value: string): void;
                setProbeVisibility(value: boolean): void;
                setProbeDemoEnabled(value: boolean): void;
              };
            }
          ).__baker;
          baker.setLayer('combined');
          baker.setProbeVisibility(true);
          baker.setProbeDemoEnabled(false);
        });
        await renderView(page, [10.8, 5.2, 13.2], [0, 1.7, -0.8]);
        await captureCanvas(page, '03-generated-probe-colors.png');

        await page.evaluate(() => {
          (window as unknown as { __baker: { setLayer(value: string): void } }).__baker.setLayer(
            'probes',
          );
        });
        await renderView(page, [10.8, 5.2, 13.2], [0, 1.7, -0.8]);
        await captureCanvas(page, '04-probe-only.png');

        await page.evaluate(() => {
          const baker = (
            window as unknown as {
              __baker: {
                setLayer(value: string): void;
                setProbeVisibility(value: boolean): void;
                setProbeDemoEnabled(value: boolean): void;
              };
            }
          ).__baker;
          baker.setLayer('combined');
          baker.setProbeVisibility(false);
          baker.setProbeDemoEnabled(true);
        });
        await page.evaluate((position) => {
          const controller = (
            window as unknown as {
              __baker: {
                probeController: {
                  demoMesh: { position: { fromArray(value: number[]): void } } | null;
                  demoBinding: { update(): void } | null;
                };
              };
            }
          ).__baker.probeController;
          controller.demoMesh?.position.fromArray(position);
          controller.demoBinding?.update();
        }, result.markerPositions.doorway);
        await renderView(page, [10.8, 5.2, 13.2], [0, 1.7, -0.8]);
        await captureCanvas(page, '05-combined-result.png');

        const dynamicCaptures = [
          ['06-dynamic-red-zone.png', 'redZone', [-1.3, 3.1, 5.1], [-4.3, 1.1, 0.2]],
          ['07-dynamic-doorway.png', 'doorway', [-4.5, 2.45, 0], [0, 1.05, 0]],
          ['08-dynamic-second-zone.png', 'greenZone', [6.5, 3.1, 3.4], [4.2, 1.1, 0.2]],
          ['09-dynamic-alcove.png', 'alcove', [5.65, 2.8, -0.4], [5.65, 1.1, -4.85]],
        ] as const;
        // Isolate the probe-driven part of the dynamic material in captures
        // 06-09. The baked static surfaces remain visible; only live direct
        // lights are temporarily hidden, without changing probe intensity or
        // applying a display normalization.
        await page.evaluate(() => {
          const scene = (
            window as unknown as {
              __baker: {
                getScene(): {
                  traverse(
                    callback: (object: {
                      isLight?: boolean;
                      visible: boolean;
                      userData: Record<string, unknown>;
                    }) => void,
                  ): void;
                };
              };
            }
          ).__baker.getScene();
          scene.traverse((object) => {
            if (!object.isLight) return;
            object.userData.probeShowcaseCaptureWasVisible = object.visible;
            object.visible = false;
          });
        });
        for (const [filename, id, cameraPosition, cameraTarget] of dynamicCaptures) {
          const point = result.markerPositions[id]!;
          await page.evaluate((position) => {
            const controller = (
              window as unknown as {
                __baker: {
                  probeController: {
                    demoMesh: { position: { fromArray(value: number[]): void } } | null;
                    demoBinding: { update(): void } | null;
                  };
                };
              }
            ).__baker.probeController;
            controller.demoMesh?.position.fromArray(position);
            controller.demoBinding?.update();
          }, point);
          await renderView(page, [...cameraPosition], [...cameraTarget]);
          await captureCanvas(page, filename);
        }
        await page.evaluate(() => {
          const scene = (
            window as unknown as {
              __baker: {
                getScene(): {
                  traverse(
                    callback: (object: {
                      isLight?: boolean;
                      visible: boolean;
                      userData: Record<string, unknown>;
                    }) => void,
                  ): void;
                };
              };
            }
          ).__baker.getScene();
          scene.traverse((object) => {
            if (!object.isLight) return;
            object.visible = object.userData.probeShowcaseCaptureWasVisible === true;
            delete object.userData.probeShowcaseCaptureWasVisible;
          });
        });

        await page.evaluate(() => {
          const baker = (
            window as unknown as {
              __baker: {
                setProbeVisibility(value: boolean): void;
                setProbeDemoEnabled(value: boolean): void;
              };
            }
          ).__baker;
          baker.setProbeDemoEnabled(false);
          baker.setProbeVisibility(true);
        });
        await renderView(page, [4.6, 5.5, 4.7], [0, 1.05, -2.45]);
        await captureCanvas(page, '10-wall-leakage-comparison.png');
      }
    }

    expect(defaultResult).not.toBeNull();
    // The spacing loop ends on the fine grid. Reinstall the default-region
    // grid so runtime and payload performance are measured at 0.65 m.
    await page.evaluate(async () => {
      type Host = { options: Record<string, unknown>; generateProbes(): Promise<void> };
      const baker = (window as unknown as { __baker: Host }).__baker;
      Object.assign(baker.options, {
        probeSpacing: 0.65,
        probePadding: 0.1,
        probeIntensity: 1,
        probeSampleStride: 3,
        probeFillIterations: 5,
        probeMaxProbes: 8192,
        probeShow: false,
        probeDemoEnabled: true,
        probeDemoAnimate: false,
      });
      await baker.generateProbes();
    });
    const performance = await page.evaluate(
      async (positions) => {
        type Host = {
          setLayer(value: string): void;
          setProbeVisibility(value: boolean): void;
          setProbeDemoEnabled(value: boolean): void;
          setProbeDemoAnimation(value: boolean): void;
          sceneController: {
            renderer: {
              render(scene: unknown, camera: unknown): void;
              getContext(): { finish(): void };
            };
            scene: unknown;
            camera: unknown;
          };
          probeController: {
            demoMesh: { position: { fromArray(value: number[]): void } } | null;
            demoBinding: { update(): void } | null;
          };
        };
        const baker = (window as unknown as { __baker: Host }).__baker;
        baker.setLayer('combined');
        baker.setProbeDemoAnimation(false);
        const measure = (
          mode: 'baseline' | 'dynamic' | 'debug',
        ): { averageFrameMs: number; fps: number; frames: number } => {
          baker.setProbeDemoEnabled(mode === 'dynamic');
          baker.setProbeVisibility(mode === 'debug');
          const { renderer, scene, camera } = baker.sceneController;
          const gl = renderer.getContext();
          const frames = 300;
          const started = performance.now();
          for (let index = 0; index < frames; index++) {
            if (mode === 'dynamic' && baker.probeController.demoMesh) {
              baker.probeController.demoMesh.position.fromArray(
                positions[index % positions.length]!,
              );
              baker.probeController.demoBinding?.update();
            }
            renderer.render(scene, camera);
            gl.finish();
          }
          const averageFrameMs = (performance.now() - started) / frames;
          return { averageFrameMs, fps: 1000 / averageFrameMs, frames };
        };
        // Warm shader variants before timing them.
        for (const mode of ['baseline', 'dynamic', 'debug'] as const) {
          baker.setProbeDemoEnabled(mode === 'dynamic');
          baker.setProbeVisibility(mode === 'debug');
          baker.sceneController.renderer.render(
            baker.sceneController.scene,
            baker.sceneController.camera,
          );
          baker.sceneController.renderer.getContext().finish();
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        }
        const median = (
          mode: 'baseline' | 'dynamic' | 'debug',
        ): { averageFrameMs: number; fps: number; frames: number; rounds: number } => {
          const rounds = Array.from({ length: 5 }, () => measure(mode)).sort(
            (a, b) => a.averageFrameMs - b.averageFrameMs,
          );
          return { ...rounds[2]!, rounds: rounds.length };
        };
        const withoutDebugProbes = median('baseline');
        const dynamicProbeLighting = median('dynamic');
        const debugProbeVisualization = median('debug');
        return {
          withoutDebugProbes,
          dynamicProbeLighting,
          debugProbeVisualization,
          dynamicIncrementalMs:
            dynamicProbeLighting.averageFrameMs - withoutDebugProbes.averageFrameMs,
          debugIncrementalMs:
            debugProbeVisualization.averageFrameMs - withoutDebugProbes.averageFrameMs,
        };
      },
      defaultResult!.path.map((point) => point.position),
    );

    const counts = experiments.map(
      (experiment) => (experiment.stats as { probeCount: number }).probeCount,
    );
    expect(counts[0]).toBeLessThan(counts[1]!);
    expect(counts[1]).toBeLessThan(counts[2]!);

    const report = {
      generatedAt: new Date().toISOString(),
      branch: 'feat/probe-architectural-showcase',
      baseline: 'b3082c6c7aeef80d00d71bcefc345b39bdaf5bea',
      scenePreset: SHOWCASE_ID,
      bake,
      preview,
      experiments,
      defaultPerformance: performance,
      screenshotFiles: [
        '01-architectural-static-bake.png',
        '02-layout-preview.png',
        '03-generated-probe-colors.png',
        '04-probe-only.png',
        '05-combined-result.png',
        '06-dynamic-red-zone.png',
        '07-dynamic-doorway.png',
        '08-dynamic-second-zone.png',
        '09-dynamic-alcove.png',
        '10-wall-leakage-comparison.png',
      ],
    };
    writeFileSync(
      resolve(OUTPUT_DIRECTORY, 'measurements.json'),
      `${JSON.stringify(report, null, 2)}\n`,
      'utf8',
    );

    const hardErrors = errors.filter((error) => !error.includes('[baker:debug]'));
    expect(hardErrors, `unexpected showcase errors: ${hardErrors.join('; ')}`).toEqual([]);
  });
});
