import type { LightmapBakeResult, ProbeVolumeJSON } from 'baker-classic';
import { bumpOptions } from 'shared';
import type { Scene, WebGLRenderer } from 'three';
import type { CornellBoxExample } from '../CornellBoxExample';
import { ProbeController, type PlaygroundProbeOptions } from './ProbeController';

type ProbeStatus = 'idle' | 'generating' | 'ready' | 'error';

type ProbeOptionBag = {
  layer: string;
  probeSpacing: number;
  probePadding: number;
  probeIntensity: number;
  probeSampleStride: number;
  probeFillIterations: number;
  probeMaxProbes: number;
  probeShow: boolean;
  probeDemoEnabled: boolean;
  probeDemoAnimate: boolean;
  probeStatus: ProbeStatus;
  probeProgress: number;
  probeCount: number;
};

type ProbeProject = {
  options?: Record<string, unknown>;
  probeVolume?: ProbeVolumeJSON;
  [key: string]: unknown;
};

type ProbeHost = {
  options: Record<string, unknown> & ProbeOptionBag;
  sceneController: { renderer: WebGLRenderer; scene: Scene };
  bakeController: { bakeResult: LightmapBakeResult | null };
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
  generateProbes?: () => Promise<void>;
  clearProbes?: () => void;
  setProbeVisibility?: (visible: boolean) => void;
  setProbeDemoEnabled?: (enabled: boolean) => void;
  setProbeDemoAnimation?: (enabled: boolean) => void;
  setProbeIntensity?: (intensity: number) => void;
  probeController?: ProbeController;
};

const DEFAULTS: Omit<ProbeOptionBag, 'layer'> = {
  probeSpacing: 0.65,
  probePadding: 0.1,
  probeIntensity: 1,
  probeSampleStride: 3,
  probeFillIterations: 5,
  probeMaxProbes: 2048,
  probeShow: true,
  probeDemoEnabled: true,
  probeDemoAnimate: true,
  probeStatus: 'idle',
  probeProgress: 0,
  probeCount: 0,
};

/** Install playground-only probe behavior onto the existing orchestrator. */
export function installProbeIntegration(app: CornellBoxExample): ProbeController {
  const host = app as unknown as ProbeHost;
  installDefaults(host.options);

  const controller = new ProbeController(
    host.sceneController.renderer,
    host.sceneController.scene,
    () => host.bakeController.bakeResult,
  );
  host.probeController = controller;
  host.renderModeRunner.setProbeOnlyHandler((active) => {
    controller.setProbeOnly(active);
    return active ? controller.hasVolume : true;
  });
  host.renderModeRunner.setBeforeBakeHandler(() => {
    if (!controller.hasVolume) return;
    controller.clear();
    resetStatus(host.options);
    bumpOptions();
  });

  const previousOnSceneLoad = host.externalHooks.onSceneLoad;
  host.externalHooks.onSceneLoad = () => {
    controller.clear();
    resetStatus(host.options);
    bumpOptions();
    previousOnSceneLoad?.();
  };

  host.generateProbes = async (): Promise<void> => {
    if (host.options.probeStatus === 'generating') return;
    host.options.probeStatus = 'generating';
    host.options.probeProgress = 0;
    bumpOptions();

    let reported = -1;
    try {
      const stats = await controller.generate(readControllerOptions(host.options), {
        onProgress: (progress) => {
          const quantized = Math.floor(progress * 100);
          if (quantized === reported && progress < 1) return;
          reported = quantized;
          host.options.probeProgress = progress;
          bumpOptions();
        },
      });
      host.options.probeStatus = 'ready';
      host.options.probeProgress = 1;
      host.options.probeCount = controller.probeCount;
      controller.setShowProbes(host.options.probeShow);
      controller.setDemoEnabled(host.options.probeDemoEnabled);
      controller.setDemoAnimation(host.options.probeDemoAnimate);
      controller.setIntensity(host.options.probeIntensity);
      if (host.options.layer === 'probes') controller.setProbeOnly(true);
      console.info('[baker:probes] generated', stats);
    } catch (error) {
      host.options.probeStatus = 'error';
      host.options.probeProgress = 0;
      host.options.probeCount = 0;
      const message = error instanceof Error ? error.message : String(error);
      console.error('[baker:probes] generation failed:', error);
      host.externalHooks.onBakeError?.(`Probe generation failed: ${message}`);
    } finally {
      bumpOptions();
    }
  };

  host.clearProbes = (): void => {
    controller.clear();
    resetStatus(host.options);
    bumpOptions();
  };
  host.setProbeVisibility = (visible): void => controller.setShowProbes(visible);
  host.setProbeDemoEnabled = (enabled): void => controller.setDemoEnabled(enabled);
  host.setProbeDemoAnimation = (enabled): void => controller.setDemoAnimation(enabled);
  host.setProbeIntensity = (intensity): void => controller.setIntensity(intensity);

  installPersistence(host, controller);
  installProjectFileSurface(host);
  startProbeLoop(controller);
  return controller;
}

function installPersistence(host: ProbeHost, controller: ProbeController): void {
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
    };
  };

  const originalLoad = host.loadProject.bind(host);
  host.loadProject = async (project: ProbeProject): Promise<void> => {
    await originalLoad(project);
    installDefaults(host.options);
    applyPersistedOptions(host.options, project.options);

    if (project.probeVolume) {
      controller.restore(project.probeVolume, readControllerOptions(host.options));
      host.options.probeStatus = 'ready';
      host.options.probeProgress = 1;
      host.options.probeCount = controller.probeCount;
      if (host.options.layer === 'probes') controller.setProbeOnly(true);
    } else {
      controller.clear();
      resetStatus(host.options);
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
    spacing: options.probeSpacing,
    padding: options.probePadding,
    intensity: options.probeIntensity,
    sampleStride: Math.max(1, Math.floor(options.probeSampleStride)),
    fillIterations: Math.max(0, Math.floor(options.probeFillIterations)),
    maxProbes: Math.max(1, Math.floor(options.probeMaxProbes)),
    showProbes: options.probeShow,
    showDemo: options.probeDemoEnabled,
    animateDemo: options.probeDemoAnimate,
  };
}

function persistedOptions(options: ProbeOptionBag): Record<string, unknown> {
  return {
    probeSpacing: options.probeSpacing,
    probePadding: options.probePadding,
    probeIntensity: options.probeIntensity,
    probeSampleStride: options.probeSampleStride,
    probeFillIterations: options.probeFillIterations,
    probeMaxProbes: options.probeMaxProbes,
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
