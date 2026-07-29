import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

test.describe('playground probe integration', () => {
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
          volume: { irradiance: Float32Array } | null;
          debugView: { mesh: { instanceColor: unknown } } | null;
          demoMesh: { position: { x: number; y: number; z: number } } | null;
        };
      };

      const baker = (window as unknown as { __baker: ProbeHost }).__baker;
      Object.assign(baker.options, {
        probeSpacing: 2,
        probePadding: 0,
        probeSampleStride: 8,
        probeFillIterations: 2,
        probeMaxProbes: 128,
        probeShow: true,
        probeDemoEnabled: true,
        probeDemoAnimate: true,
      });
      await baker.generateProbes();

      const values = Array.from(baker.probeController.volume?.irradiance ?? []);
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
        hasDemo: !!baker.probeController.demoMesh,
      };
    });

    expect(generated.status).toBe('ready');
    expect(generated.progress).toBe(1);
    expect(generated.count).toBeGreaterThan(0);
    expect(generated.count).toBeLessThanOrEqual(128);
    expect(generated.values).toHaveLength(generated.count * 3);
    expect(Math.max(...generated.values)).toBeGreaterThan(1e-6);
    expect(generated.hasInstanceColors).toBe(true);
    expect(generated.hasDemo).toBe(true);
    expect(generated.start).not.toBeNull();

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
      return mesh ? [mesh.position.x, mesh.position.y, mesh.position.z] : null;
    });
    expect(end).not.toEqual(generated.start);

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
