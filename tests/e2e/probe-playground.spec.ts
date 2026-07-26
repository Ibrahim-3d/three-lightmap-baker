import { expect, test } from '@playwright/test';
import { TEST_URL, waitReady } from './helpers';

test.describe('playground probe integration', () => {
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
          traverse(callback: (object: { isMesh?: boolean; visible: boolean; userData?: Record<string, unknown> }) => void): void;
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
        irradiance: [
          1, 0, 0,
          0, 1, 0,
          1, 0, 0,
          0, 1, 0,
          1, 0, 0,
          0, 1, 0,
          1, 0, 0,
          0, 1, 0,
        ],
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
