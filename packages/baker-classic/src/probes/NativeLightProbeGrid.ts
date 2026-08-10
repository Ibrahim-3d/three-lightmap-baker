import { Box3, type Object3D, type Scene, Vector3, type WebGLRenderer } from 'three';
import {
  LightProbeGrid,
  type LightProbeGridBakeOptions,
} from 'three/examples/jsm/lighting/LightProbeGrid.js';
import { generateProbeGrid } from './generateProbeGrid';
import type { ProbeGridOptions, ProbeGridStatistics } from './types';

export type NativeLightProbeGridOptions = ProbeGridOptions & LightProbeGridBakeOptions;

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
  const layout = generateProbeGrid(source, options);
  const counts = nativeCounts(layout.counts);
  const probeCount = counts[0] * counts[1] * counts[2];
  const maxProbes = options.maxProbes ?? 8192;
  if (probeCount > maxProbes) {
    throw new Error(
      `[baker:probes] native grid requires ${probeCount} probes, exceeding maxProbes=${maxProbes}`,
    );
  }

  const bounds = layout.bounds.clone();
  const size = bounds.getSize(new Vector3());
  const center = bounds.getCenter(new Vector3());
  const grid = new LightProbeGrid(size.x, size.y, size.z, counts[0], counts[1], counts[2]);
  grid.name = 'Native L2 SH Light Probe Grid';
  grid.position.copy(center);
  grid.userData.bakerProbeGrid = true;
  grid.userData.bakerProbeRuntime = 'native';
  grid.updateBoundingBox();

  const capture = {
    cubemapSize: positiveInteger(options.cubemapSize ?? 8, 'cubemapSize'),
    near: positiveNumber(options.near ?? 0.1, 'near'),
    far: positiveNumber(options.far ?? 100, 'far'),
    bounces: nonNegativeInteger(options.bounces ?? 0, 'bounces'),
  };
  if (capture.far <= capture.near) {
    grid.dispose();
    throw new Error('[baker:probes] native probe far plane must be greater than near plane');
  }

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
): NativeLightProbeGridResult {
  if (descriptor.version !== 1 || descriptor.runtime !== 'three-light-probe-grid') {
    throw new Error('[baker:probes] unsupported native light probe grid descriptor');
  }
  const bounds = new Box3(
    new Vector3(...descriptor.bounds.min),
    new Vector3(...descriptor.bounds.max),
  );
  return captureNativeLightProbeGrid(renderer, scene, bounds, {
    bounds,
    counts: descriptor.counts,
    padding: 0,
    maxProbes: descriptor.counts[0] * descriptor.counts[1] * descriptor.counts[2],
    ...descriptor.capture,
  });
}

function nativeCounts(counts: readonly [number, number, number]): [number, number, number] {
  return [Math.max(2, counts[0]), Math.max(2, counts[1]), Math.max(2, counts[2])];
}

function positiveInteger(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(`[baker:probes] ${name} must be a positive integer`);
  }
  return value;
}

function nonNegativeInteger(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`[baker:probes] ${name} must be a non-negative integer`);
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
