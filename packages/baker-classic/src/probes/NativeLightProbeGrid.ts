import { Box3, type Object3D, type Scene, Vector3, type WebGLRenderer } from 'three';
import { LightProbeGrid } from 'three/addons/lighting/LightProbeGrid.js';
import { generateProbeGrid } from './generateProbeGrid';
import type { ProbeGridOptions, ProbeGridStatistics } from './types';

const DEFAULT_NATIVE_MAX_PROBES = 1024;
const HARD_MAX_PROBES = 32768;
const MAX_CUBEMAP_SIZE = 64;
const MAX_BOUNCES = 8;

export type NativeLightProbeGridCaptureOptions = {
  cubemapSize?: number;
  near?: number;
  far?: number;
  bounces?: number;
};

export type NativeLightProbeGridOptions = ProbeGridOptions & NativeLightProbeGridCaptureOptions;

export type NativeLightProbeGridRestoreOptions = {
  /** Runtime safety cap applied independently of descriptor contents. Default 1024. */
  maxProbes?: number;
};

export type NativeLightProbeGridJSON = {
  version: 1;
  runtime: 'three-light-probe-grid';
  bounds: {
    min: [number, number, number];
    max: [number, number, number];
  };
  counts: [number, number, number];
  capture: {
    cubemapSize: number;
    near: number;
    far: number;
    bounces: number;
  };
};

export type NativeLightProbeGridStats = {
  runtime: 'native';
  probeCount: number;
  grid: ProbeGridStatistics;
  cubemapSize: number;
  durationMs: number;
};

export type NativeLightProbeGridResult = {
  grid: LightProbeGrid;
  stats: NativeLightProbeGridStats;
  descriptor: NativeLightProbeGridJSON;
};

/**
 * Capture the currently rendered scene into Three.js' native GPU L2 SH grid.
 *
 * The caller controls which scene objects and lighting are visible during the
 * capture. This keeps the package helper usable for both fully baked static
 * scenes and conventional real-time scenes while leaving editor state policy
 * outside the library.
 */
export function captureNativeLightProbeGrid(
  renderer: WebGLRenderer,
  scene: Scene,
  source: Object3D | Box3,
  options: NativeLightProbeGridOptions = {},
): NativeLightProbeGridResult {
  const maxProbes = resolveProbeLimit(options.maxProbes);
  const capture = normalizeCaptureOptions(options);
  const layout = generateProbeGrid(source, {
    bounds: options.bounds,
    spacing: options.spacing,
    counts: options.counts,
    padding: options.padding,
    maxProbes,
  });
  const counts = validateNativeCounts(nativeCounts(layout.counts));
  const probeCount = probeCountFor(counts, maxProbes);

  const bounds = layout.bounds.clone();
  const size = bounds.getSize(new Vector3());
  const center = bounds.getCenter(new Vector3());
  const grid = new LightProbeGrid(size.x, size.y, size.z, counts[0], counts[1], counts[2]);
  grid.name = 'Native L2 SH Light Probe Grid';
  grid.position.copy(center);
  grid.userData.bakerProbeGrid = true;
  grid.userData.bakerProbeRuntime = 'native';
  grid.updateBoundingBox();

  scene.add(grid);
  const started = now();
  try {
    grid.bake(renderer, scene, capture);
  } catch (error) {
    scene.remove(grid);
    grid.dispose();
    throw error;
  }

  const actualSpacing: [number, number, number] = [
    counts[0] > 1 ? size.x / (counts[0] - 1) : 0,
    counts[1] > 1 ? size.y / (counts[1] - 1) : 0,
    counts[2] > 1 ? size.z / (counts[2] - 1) : 0,
  ];
  const descriptor: NativeLightProbeGridJSON = {
    version: 1,
    runtime: 'three-light-probe-grid',
    bounds: {
      min: bounds.min.toArray() as [number, number, number],
      max: bounds.max.toArray() as [number, number, number],
    },
    counts,
    capture,
  };
  return {
    grid,
    descriptor,
    stats: {
      runtime: 'native',
      probeCount,
      grid: {
        counts,
        bounds: descriptor.bounds,
        actualSpacing,
      },
      cubemapSize: capture.cubemapSize,
      durationMs: now() - started,
    },
  };
}

export function captureNativeLightProbeGridFromJSON(
  renderer: WebGLRenderer,
  scene: Scene,
  descriptor: NativeLightProbeGridJSON,
  options: NativeLightProbeGridRestoreOptions = {},
): NativeLightProbeGridResult {
  const validated = validateDescriptor(descriptor, resolveProbeLimit(options.maxProbes));
  return captureNativeLightProbeGrid(renderer, scene, validated.bounds, {
    bounds: validated.bounds,
    counts: validated.counts,
    padding: 0,
    maxProbes: validated.maxProbes,
    ...validated.capture,
  });
}

type ResolvedCaptureOptions = Required<NativeLightProbeGridCaptureOptions>;

function validateDescriptor(
  descriptor: NativeLightProbeGridJSON,
  maxProbes: number,
): {
  bounds: Box3;
  counts: [number, number, number];
  capture: ResolvedCaptureOptions;
  maxProbes: number;
} {
  if (!isRecord(descriptor)) {
    throw new Error('[baker:probes] native light probe grid descriptor must be an object');
  }
  if (descriptor.version !== 1 || descriptor.runtime !== 'three-light-probe-grid') {
    throw new Error('[baker:probes] unsupported native light probe grid descriptor');
  }
  if (!isRecord(descriptor.bounds)) {
    throw new Error('[baker:probes] native probe bounds must contain min and max vectors');
  }
  const min = validateVector(descriptor.bounds.min, 'bounds.min');
  const max = validateVector(descriptor.bounds.max, 'bounds.max');
  if (min.some((value, axis) => value >= max[axis]!)) {
    throw new Error('[baker:probes] native probe bounds must have positive finite extents');
  }
  const counts = validateNativeCounts(descriptor.counts);
  probeCountFor(counts, maxProbes);
  if (!isRecord(descriptor.capture)) {
    throw new Error('[baker:probes] native probe capture settings must be an object');
  }
  for (const key of ['cubemapSize', 'near', 'far', 'bounces'] as const) {
    if (!(key in descriptor.capture)) {
      throw new Error(`[baker:probes] native probe descriptor is missing capture.${key}`);
    }
  }
  return {
    bounds: new Box3(new Vector3(...min), new Vector3(...max)),
    counts,
    capture: normalizeCaptureOptions(descriptor.capture),
    maxProbes,
  };
}

function nativeCounts(counts: readonly [number, number, number]): [number, number, number] {
  return [Math.max(2, counts[0]), Math.max(2, counts[1]), Math.max(2, counts[2])];
}

function validateNativeCounts(value: unknown): [number, number, number] {
  if (!Array.isArray(value) || value.length !== 3) {
    throw new Error('[baker:probes] native probe counts must contain exactly three integers');
  }
  const counts = value as unknown[];
  if (counts.some((count) => !Number.isSafeInteger(count) || (count as number) < 2)) {
    throw new Error('[baker:probes] native probe counts must be safe integers of at least 2');
  }
  return [counts[0], counts[1], counts[2]] as [number, number, number];
}

function probeCountFor(counts: readonly [number, number, number], maxProbes: number): number {
  const probeCount = counts[0] * counts[1] * counts[2];
  if (!Number.isSafeInteger(probeCount)) {
    throw new Error('[baker:probes] native probe count exceeds the safe integer range');
  }
  if (probeCount > maxProbes) {
    throw new Error(
      `[baker:probes] native grid requires ${probeCount} probes, exceeding maxProbes=${maxProbes}`,
    );
  }
  return probeCount;
}

function resolveProbeLimit(value: number | undefined): number {
  const configured = positiveInteger(value ?? DEFAULT_NATIVE_MAX_PROBES, 'maxProbes');
  return Math.min(configured, HARD_MAX_PROBES);
}

function normalizeCaptureOptions(
  value: NativeLightProbeGridCaptureOptions,
): ResolvedCaptureOptions {
  const cubemapSize = positiveInteger(value.cubemapSize ?? 8, 'cubemapSize');
  if (cubemapSize > MAX_CUBEMAP_SIZE) {
    throw new Error(
      `[baker:probes] cubemapSize ${cubemapSize} exceeds the hard limit of ${MAX_CUBEMAP_SIZE}`,
    );
  }
  const near = positiveNumber(value.near ?? 0.1, 'near');
  const far = positiveNumber(value.far ?? 100, 'far');
  if (far <= near) {
    throw new Error('[baker:probes] native probe far plane must be greater than near plane');
  }
  return {
    cubemapSize,
    near,
    far,
    bounces: nonNegativeInteger(value.bounces ?? 0, 'bounces', MAX_BOUNCES),
  };
}

function validateVector(value: unknown, name: string): [number, number, number] {
  if (
    !Array.isArray(value) ||
    value.length !== 3 ||
    value.some((component) => typeof component !== 'number' || !Number.isFinite(component))
  ) {
    throw new Error(`[baker:probes] native probe ${name} must contain three finite numbers`);
  }
  return [value[0] as number, value[1] as number, value[2] as number];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function positiveInteger(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(`[baker:probes] ${name} must be a positive integer`);
  }
  return value;
}

function nonNegativeInteger(value: number, name: string, max: number): number {
  if (!Number.isInteger(value) || value < 0 || value > max) {
    throw new Error(`[baker:probes] ${name} must be an integer from 0 to ${max}`);
  }
  return value;
}

function positiveNumber(value: number, name: string): number {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`[baker:probes] ${name} must be finite and greater than zero`);
  }
  return value;
}

function now(): number {
  return typeof performance === 'undefined' ? Date.now() : performance.now();
}
