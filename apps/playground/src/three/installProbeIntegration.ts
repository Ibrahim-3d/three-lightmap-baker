import type { LightmapBakeResult, NativeLightProbeGridJSON, ProbeVolumeJSON } from 'baker-classic';
import { bumpOptions } from 'shared';
import type { Scene, Texture, WebGLRenderer } from 'three';
import type { CornellBoxExample } from '../CornellBoxExample';
import { ProbeController, type PlaygroundProbeOptions } from './ProbeController';

type ProbeStatus = 'idle' | 'generating' | 'ready' | 'stale' | 'error';

type ProbeOptionBag = {
  layer: string;
  probeRuntime: 'native' | 'legacy';
  probeSpacing: number;
  probePadding: number;
  probeIntensity: number;
  probeSampleStride: number;
  probeFillIterations: number;
  probeMaxProbes: number;
  probeCubemapSize: number;
  probeShow: boolean;
  probeDemoEnabled: boolean;
  probeDemoAnimate: boolean;
  probeStatus: ProbeStatus;
  probeProgress: number;
  probeCount: number;
  probePreviewCount: number;
  probePreviewOverLimit: boolean;
};

type ProbeProject = {
  options?: Record<string, unknown>;
  probeVolume?: ProbeVolumeJSON;
  nativeProbeGrid?: NativeLightProbeGridJSON;
  [key: string]: unknown;
};

type ProbeHost = {
  options: Record<string, unknown> & ProbeOptionBag;
  sceneController: { renderer: WebGLRenderer; scene: Scene };
  bakeController: {
    bakeResult: LightmapBakeResult | null;
    bakeGroups: ReadonlyArray<{
      atlasIdx: number;
      composite: { texture: Texture };
      refinement: { texture: Texture } | null;
    }>;
  };
  renderModeRunner: {
    setProbeOnlyHandler(handler: (active: boolean) => boolean): void;
    setBeforeBakeHandler(handler: () => void): void;
  };
  externalHooks: {
    onSceneLoad?: () => void;
    onBakeError?: (message: string) => void;
  };
  projectFileInput?: HTMLInputElement;
  serializeProject(): ProbeProject;
  loadProject(project: ProbeProject): Promise<void>;
  saveProject(): void;
  previewProbes?: () => void;
  generateProbes?: () => Promise<void>;
  clearProbes?: () => void;
  setProbeVisibility?: (visible: boolean) => void;
  setProbeDemoEnabled?: (enabled: boolean) => void;
  setProbeDemoAnimation?: (enabled: boolean) => void;
  setProbeIntensity?: (intensity: number) => void;
  probeController?: ProbeController;
};

const DEFAULTS: Omit<ProbeOptionBag, 'layer'> = {
  probeRuntime: 'native',
  probeSpacing: 1.25,
  probePadding: 0.1,
  probeIntensity: 1,
  probeSampleStride: 3,
  probeFillIterations: 5,
  probeMaxProbes: 1024,
  probeCubemapSize: 8,
  probeShow: true,
  probeDemoEnabled: true,
  probeDemoAnimate: true,
  probeStatus: 'idle',
  probeProgress: 0,
  probeCount: 0,
  probePreviewCount: 0,
  probePreviewOverLimit: false,
};

/** Install playground-only probe behavior onto the existing orchestrator. */
export function installProbeIntegration(app: CornellBoxExample): ProbeController {
  const host = app as unknown as ProbeHost;
  installDefaults(host.options);

  const controller = new ProbeController(
    host.sceneController.renderer,
    host.sceneController.scene,
    () => host.bakeController.bakeResult,
    () => host.bakeController.bakeGroups,
  );
  let activeProbeAbort: AbortController | null = null;

  const resetPreview = (): void => {
    host.options.probePreviewCount = 0;
    host.options.probePreviewOverLimit = false;
  };

  const invalidate = (): void => {
    activeProbeAbort?.abort();
    activeProbeAbort = null;
    controller.clear();
    resetStatus(host.options);
    resetPreview();
    bumpOptions();
  };

  host.probeController = controller;
  host.renderModeRunner.setProbeOnlyHandler((active) => {
    controller.setProbeOnly(active);
    return active ? controller.hasVolume : true;
  });
  host.renderModeRunner.setBeforeBakeHandler(invalidate);

  host.previewProbes = (): void => {
    try {
      const result = controller.preview(readControllerOptions(host.options));
      host.options.probePreviewCount = result.probeCount;
      host.options.probePreviewOverLimit = result.overLimit;
    } catch (error) {
      controller.clearPreview();
      resetPreview();
      console.warn('[baker:probes] layout preview failed:', error);
    }
    bumpOptions();
  };

  const previousOnSceneLoad = host.externalHooks.onSceneLoad;
  host.externalHooks.onSceneLoad = () => {
    invalidate();
    previousOnSceneLoad?.();
    requestAnimationFrame(() => host.previewProbes?.());
  };

  host.generateProbes = async (): Promise<void> => {
    if (host.options.probeStatus === 'generating') return;
    if (host.options.probePreviewOverLimit) {
      const message = `Target layout needs ${host.options.probePreviewCount} probes; maximum is ${host.options.probeMaxProbes}. Reduce density or raise the safety cap explicitly.`;
      host.externalHooks.onBakeError?.(message);
      return;
    }

    const abort = new AbortController();
    activeProbeAbort = abort;
    host.options.probeStatus = 'generating';
    host.options.probeProgress = 0;
    controller.clearPreview();
    bumpOptions();

    let reported = -1;
    try {
      const stats = await controller.generate(readControllerOptions(host.options), {
        signal: abort.signal,
        onProgress: (progress) => {
          if (abort.signal.aborted) return;
          const quantized = Math.floor(progress * 100);
          if (quantized === reported && progress < 1) return;
          reported = quantized;
          host.options.probeProgress = progress;
          bumpOptions();
        },
      });
      if (abort.signal.aborted) return;
      host.options.probeStatus = 'ready';
      host.options.probeProgress = 1;
      host.options.probeCount = controller.probeCount;
      host.options.probePreviewCount = controller.probeCount;
      host.options.probePreviewOverLimit = false;
      controller.setShowProbes(host.options.probeShow);
      controller.setDemoEnabled(host.options.probeDemoEnabled);
      controller.setDemoAnimation(host.options.probeDemoAnimate);
      controller.setIntensity(host.options.probeIntensity);
      if (host.options.layer === 'probes') controller.setProbeOnly(true);
      console.info('[baker:probes] generated', {
        requested: {
          targetSpacing: host.options.probeSpacing,
          padding: host.options.probePadding,
          maxProbes: host.options.probeMaxProbes,
        },
        ...stats,
      });
    } catch (error) {
      const aborted =
        abort.signal.aborted || (error instanceof Error && error.name === 'AbortError');
      if (aborted) {
        if (activeProbeAbort === abort) resetStatus(host.options);
      } else {
        host.options.probeStatus = 'error';
        host.options.probeProgress = 0;
        host.options.probeCount = controller.probeCount;
        const message = error instanceof Error ? error.message : String(error);
        console.error('[baker:probes] generation failed:', error);
        host.externalHooks.onBakeError?.(`Probe generation failed: ${message}`);
      }
    } finally {
      if (activeProbeAbort === abort) activeProbeAbort = null;
      bumpOptions();
    }
  };

  host.clearProbes = (): void => {
    invalidate();
    host.previewProbes?.();
  };
  host.setProbeVisibility = (visible): void => controller.setShowProbes(visible);
  host.setProbeDemoEnabled = (enabled): void => controller.setDemoEnabled(enabled);
  host.setProbeDemoAnimation = (enabled): void => controller.setDemoAnimation(enabled);
  host.setProbeIntensity = (intensity): void => {
    controller.setIntensity(intensity);
    if (controller.activeRuntime === 'native') host.options.probeStatus = 'stale';
  };

  installPersistence(host, controller, invalidate);
  installProjectFileSurface(host);
  startProbeLoop(controller);
  requestAnimationFrame(() => host.previewProbes?.());
  return controller;
}

function installPersistence(
  host: ProbeHost,
  controller: ProbeController,
  invalidate: () => void,
): void {
  const originalSerialize = host.serializeProject.bind(host);
  host.serializeProject = (): ProbeProject => {
    const project = originalSerialize();
    return {
      ...project,
      options: {
        ...(project.options ?? {}),
        ...persistedOptions(host.options),
      },
      probeVolume: controller.serialize(),
      nativeProbeGrid: controller.serializeNative(),
    };
  };

  const originalLoad = host.loadProject.bind(host);
  host.loadProject = async (project: ProbeProject): Promise<void> => {
    invalidate();
    await originalLoad(project);
    installDefaults(host.options);
    applyPersistedOptions(host.options, project.options);

    if (project.nativeProbeGrid && host.options.probeRuntime === 'native') {
      await controller.restoreNative(project.nativeProbeGrid, readControllerOptions(host.options));
      host.options.probeStatus = 'ready';
      host.options.probeProgress = 1;
      host.options.probeCount = controller.probeCount;
      host.options.probePreviewCount = controller.probeCount;
      host.options.probePreviewOverLimit = false;
      if (host.options.layer === 'probes') controller.setProbeOnly(true);
    } else if (project.probeVolume) {
      controller.restore(project.probeVolume, readControllerOptions(host.options));
      host.options.probeRuntime = 'legacy';
      host.options.probeStatus = 'ready';
      host.options.probeProgress = 1;
      host.options.probeCount = controller.probeCount;
      host.options.probePreviewCount = controller.probeCount;
      host.options.probePreviewOverLimit = false;
      if (host.options.layer === 'probes') controller.setProbeOnly(true);
    } else {
      resetStatus(host.options);
      requestAnimationFrame(() => host.previewProbes?.());
    }
    bumpOptions();
  };
}

function installProjectFileSurface(host: ProbeHost): void {
  if (host.projectFileInput) {
    host.projectFileInput.accept = '.3dl,.json,application/json';
  }
  host.saveProject = (): void => {
    const blob = new Blob([JSON.stringify(host.serializeProject(), null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'three-lightmap-baker-project.3dl';
    anchor.click();
    URL.revokeObjectURL(url);
  };
}

function installDefaults(options: ProbeHost['options']): void {
  for (const [key, value] of Object.entries(DEFAULTS)) {
    if (options[key] === undefined) options[key] = value;
  }
}

function readControllerOptions(options: ProbeOptionBag): PlaygroundProbeOptions {
  return {
    runtime: options.probeRuntime,
    spacing: options.probeSpacing,
    padding: options.probePadding,
    intensity: options.probeIntensity,
    sampleStride: Math.max(1, Math.floor(options.probeSampleStride)),
    fillIterations: Math.max(0, Math.floor(options.probeFillIterations)),
    maxProbes: Math.max(1, Math.floor(options.probeMaxProbes)),
    cubemapSize: Math.max(1, Math.floor(options.probeCubemapSize)),
    showProbes: options.probeShow,
    showDemo: options.probeDemoEnabled,
    animateDemo: options.probeDemoAnimate,
  };
}

function persistedOptions(options: ProbeOptionBag): Record<string, unknown> {
  return {
    probeRuntime: options.probeRuntime,
    probeSpacing: options.probeSpacing,
    probePadding: options.probePadding,
    probeIntensity: options.probeIntensity,
    probeSampleStride: options.probeSampleStride,
    probeFillIterations: options.probeFillIterations,
    probeMaxProbes: options.probeMaxProbes,
    probeCubemapSize: options.probeCubemapSize,
    probeShow: options.probeShow,
    probeDemoEnabled: options.probeDemoEnabled,
    probeDemoAnimate: options.probeDemoAnimate,
  };
}

function applyPersistedOptions(
  options: ProbeHost['options'],
  persisted: Record<string, unknown> | undefined,
): void {
  if (!persisted) return;
  const numericKeys = [
    'probeSpacing',
    'probePadding',
    'probeIntensity',
    'probeSampleStride',
    'probeFillIterations',
    'probeMaxProbes',
    'probeCubemapSize',
  ] as const;
  for (const key of numericKeys) {
    const value = persisted[key];
    if (typeof value === 'number' && Number.isFinite(value)) options[key] = value;
  }
  const booleanKeys = ['probeShow', 'probeDemoEnabled', 'probeDemoAnimate'] as const;
  for (const key of booleanKeys) {
    const value = persisted[key];
    if (typeof value === 'boolean') options[key] = value;
  }
  const runtime = persisted.probeRuntime;
  if (runtime === 'native' || runtime === 'legacy') options.probeRuntime = runtime;
}

function resetStatus(options: ProbeOptionBag): void {
  options.probeStatus = 'idle';
  options.probeProgress = 0;
  options.probeCount = 0;
}

function startProbeLoop(controller: ProbeController): void {
  const tick = (timeMs: number): void => {
    controller.update(timeMs / 1000);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
