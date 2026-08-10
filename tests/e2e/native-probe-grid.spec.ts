import { expect, test } from '@playwright/test';
import { bakeDraft, TEST_URL, trackConsoleErrors, waitBakeDone, waitReady } from './helpers';

test.describe('native Three.js LightProbeGrid runtime', () => {
  test('captures the baked static scene into a GPU L2 SH grid and persists recapture data', async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const { errors } = trackConsoleErrors(page);
    await page.goto(TEST_URL);
    await waitReady(page);
    await bakeDraft(page);
    await waitBakeDone(page);

    const captured = await page.evaluate(async () => {
      type Host = {
        options: Record<string, unknown> & {
          probeStatus: string;
          probeCount: number;
        };
        generateProbes(): Promise<void>;
        loadProject(project: ReturnType<Host['serializeProject']>): Promise<void>;
        serializeProject(): {
          probeVolume?: unknown;
          nativeProbeGrid?: {
            runtime: string;
            counts: [number, number, number];
            capture: { cubemapSize: number };
          };
        };
        probeController: {
          activeRuntime: string | null;
          nativeGrid: {
            isLightProbeGrid: boolean;
            texture: { isData3DTexture: boolean } | null;
            resolution: { toArray(): number[] };
          } | null;
          nativeHelper: unknown;
          demoMesh: unknown;
          demoBinding: unknown;
          lastGenerationStats: { runtime?: string; cubemapSize?: number } | null;
        };
      };

      const baker = (window as unknown as { __baker: Host }).__baker;
      Object.assign(baker.options, {
        probeRuntime: 'native',
        probeSpacing: 5,
        probePadding: 0,
        probeMaxProbes: 64,
        probeCubemapSize: 4,
        probeIntensity: 1,
        probeShow: true,
        probeDemoEnabled: true,
        probeDemoAnimate: false,
      });
      await baker.generateProbes();

      const saved = baker.serializeProject();
      const grid = baker.probeController.nativeGrid;
      const initial = {
        status: baker.options.probeStatus,
        count: baker.options.probeCount,
        activeRuntime: baker.probeController.activeRuntime,
        isNativeGrid: grid?.isLightProbeGrid ?? false,
        hasGpuTexture: grid?.texture?.isData3DTexture ?? false,
        resolution: grid?.resolution.toArray() ?? null,
        hasHelper: !!baker.probeController.nativeHelper,
        hasDemo: !!baker.probeController.demoMesh,
        hasLegacyBinding: !!baker.probeController.demoBinding,
        stats: baker.probeController.lastGenerationStats,
      };

      await baker.loadProject(saved);
      const restoredGrid = baker.probeController.nativeGrid;
      return {
        ...initial,
        nativeDescriptor: saved.nativeProbeGrid ?? null,
        legacyPayload: saved.probeVolume ?? null,
        restored: {
          status: baker.options.probeStatus,
          count: baker.options.probeCount,
          activeRuntime: baker.probeController.activeRuntime,
          isNativeGrid: restoredGrid?.isLightProbeGrid ?? false,
          hasGpuTexture: restoredGrid?.texture?.isData3DTexture ?? false,
        },
      };
    });

    expect(captured.status).toBe('ready');
    expect(captured.activeRuntime).toBe('native');
    expect(captured.count).toBeGreaterThan(0);
    expect(captured.count).toBeLessThanOrEqual(64);
    expect(captured.isNativeGrid).toBe(true);
    expect(captured.hasGpuTexture).toBe(true);
    expect(captured.resolution).toHaveLength(3);
    expect(captured.hasHelper).toBe(true);
    expect(captured.hasDemo).toBe(true);
    expect(captured.hasLegacyBinding).toBe(false);
    expect(captured.stats?.runtime).toBe('native');
    expect(captured.stats?.cubemapSize).toBe(4);
    expect(captured.nativeDescriptor?.runtime).toBe('three-light-probe-grid');
    expect(captured.nativeDescriptor?.capture.cubemapSize).toBe(4);
    expect(captured.legacyPayload).toBeNull();
    expect(captured.restored).toEqual({
      status: 'ready',
      count: captured.count,
      activeRuntime: 'native',
      isNativeGrid: true,
      hasGpuTexture: true,
    });
    expect(errors).toEqual([]);
  });
});
