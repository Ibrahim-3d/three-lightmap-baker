import { getOrchestratorAs, type Orchestrator } from 'shared';
import type { ExportFormat } from '../utils/exportLightmap';

/**
 * Renderer-specific extension of the generic `Orchestrator`. The playground
 * app's `CornellBoxExample` implements this; baker-classic's UI panels
 * resolve the live instance through `getBakerOrchestrator()`.
 *
 * The exact shape mirrors the methods + `options` bag the panels read/write.
 * Concrete narrowing of `options` lives in the implementation; the panels
 * treat it as a free-form record.
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
}

export interface BakerOrchestrator extends Orchestrator {
  options: BakerOptions;
  setQuality(q: BakerQualityPreset): void;
  requestBake(): Promise<void>;
  requestAORebake(): Promise<void>;
  exportFinal(): Promise<void>;
  exportSceneGLB(): Promise<void>;
  /**
   * View-time refresh of every group's composite RT with new intensity
   * uniforms. Cheap — no rebake. Used by per-layer intensity sliders.
   */
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
