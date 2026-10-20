import { getOrchestratorAs, type Orchestrator } from 'shared';
import type { ExportFormat } from 'baker-classic';

/**
 * Renderer-specific extension of the generic `Orchestrator`. The playground
 * app's `CornellBoxExample` implements this; baker-classic's UI panels
 * resolve the live instance through `getBakerOrchestrator()`.
 */
export type BakerQualityPreset = 'Custom' | 'Draft' | 'Preview' | 'Production' | 'Final';

export interface BakerOptions {
  preset: string;
  layer: string;
  quality: BakerQualityPreset;
  lightMapSize: number;
  casts: number;
  targetSamples: number;
  bounces: number;
  safeMode: boolean;
  filterMode: string;
  directLightEnabled: boolean;
  indirectLightEnabled: boolean;
  ambientLightEnabled: boolean;
  ambientDistance: number;
  aoIntensity: number;
  aoExponent: number;
  aoSamples: number;
  texelsPerMeter: number;
  lightSize: number;
  lightIntensity: number;
  lightColor: string;
  directIntensity: number;
  giIntensity: number;
  skyColor: string;
  skyIntensity: number;
  pause: boolean;
  showGizmo: boolean;
  autoBake: boolean;
  autoApplyRefinement: boolean;
  dilationIterations: number;
  denoiseEnabled: boolean;
  denoiseSigma: number;
  denoiseThreshold: number;
  denoiseKSigma: number;
  secondaryLightEnabled: boolean;
  secondaryDirX: number;
  secondaryDirY: number;
  secondaryDirZ: number;
  secondaryIntensity: number;
  secondaryColor: string;
  samples: number;
  spp: number;
  etaSec: number;
  refinementStatus: string;
  exportFormat: ExportFormat;
  perMesh: Record<string, { scaleInLightmap: number; exclude: boolean }>;

  /** Installed by the playground probe extension. Optional for library hosts. */
  probeRuntime?: 'native' | 'legacy';
  probeSpacing?: number;
  probePadding?: number;
  probeIntensity?: number;
  probeSampleStride?: number;
  probeFillIterations?: number;
  probeMaxProbes?: number;
  probeCubemapSize?: number;
  probeShow?: boolean;
  probeDemoEnabled?: boolean;
  probeDemoAnimate?: boolean;
  probeStatus?: 'idle' | 'generating' | 'ready' | 'stale' | 'error';
  probeProgress?: number;
  probeCount?: number;
  probePreviewCount?: number;
  probePreviewOverLimit?: boolean;
}

export interface BakerOrchestrator extends Orchestrator {
  options: BakerOptions;
  setQuality(q: BakerQualityPreset): void;
  requestBake(): Promise<void>;
  cancelBake(): void;
  saveProject(): void;
  openProjectFile(): void;
  requestAORebake(): Promise<void>;
  exportFinal(): Promise<void>;
  exportSceneGLB(): Promise<void>;
  getAtlasPreviewInfo(): { layer: string; count: number; resolution: number };
  renderAtlasPreview(canvas: HTMLCanvasElement): boolean;
  previewProbes?(): void;
  generateProbes?(): Promise<void>;
  clearProbes?(): void;
  setProbeVisibility?(visible: boolean): void;
  setProbeDemoEnabled?(enabled: boolean): void;
  setProbeDemoAnimation?(enabled: boolean): void;
  setProbeIntensity?(intensity: number): void;
  refreshComposites(overrides: {
    directIntensity?: number;
    giIntensity?: number;
    aoEnabled?: boolean;
    aoIntensity?: number;
    aoExponent?: number;
  }): void;
}

export function getBakerOrchestrator(): BakerOrchestrator | null {
  return getOrchestratorAs<BakerOrchestrator>();
}
