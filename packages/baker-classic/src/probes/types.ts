import type { Box3, ColorRepresentation, Vector3 } from 'three';
import type { BakeGroupView } from '../bake/types';

export type ProbeGridCounts = readonly [number, number, number];
export type ProbeGridSpacing = number | Vector3 | readonly [number, number, number];

/** Grid layout controls. Provide either `counts` or `spacing`; counts wins. */
export type ProbeGridOptions = {
  /** Explicit world-space bounds. When omitted, bounds are derived from the source object. */
  bounds?: Box3;
  /** Approximate world-space spacing. Default 1 world unit. */
  spacing?: ProbeGridSpacing;
  /** Exact probe counts on X/Y/Z. Every component must be a positive integer. */
  counts?: ProbeGridCounts;
  /** Expand derived or explicit bounds by this world-space amount. Default 0. */
  padding?: number;
  /** Safety cap. Generation throws instead of silently allocating an oversized volume. */
  maxProbes?: number;
};

/** Minimal lightmap result surface consumed by probe baking. */
export type ProbeBakeSource = {
  readonly groups: ReadonlyArray<BakeGroupView>;
};

export type ProbeBakeOptions = {
  /** Read every Nth atlas texel on both axes. Default 2. */
  sampleStride?: number;
  /** Offset surface samples along their normal before distributing them into the grid. */
  surfaceOffset?: number;
  /** Number of six-neighbour diffusion passes used to fill probes with no direct samples. */
  fillIterations?: number;
  /** Final multiplier applied to generated irradiance. Default 1. */
  intensity?: number;
  /** Explicit color used for probes still empty after diffusion. Defaults to the volume average. */
  fallbackColor?: ColorRepresentation;
  /** Atlas rows processed before yielding to the browser. Default 24. */
  rowsPerYield?: number;
};

export type ProbeBakeHooks = {
  /** Progress in the inclusive range 0..1. */
  onProgress?: (percent: number) => void;
  signal?: AbortSignal;
};

export type ProbeBakeStats = {
  probeCount: number;
  sampledTexels: number;
  contributingTexels: number;
  emptyBeforeFill: number;
  emptyAfterFill: number;
  durationMs: number;
};

export type GenerateProbeVolumeOptions = ProbeGridOptions & {
  bake?: ProbeBakeOptions;
};

export type ProbeVolumeJSON = {
  version: 1;
  bounds: {
    min: [number, number, number];
    max: [number, number, number];
  };
  counts: [number, number, number];
  irradiance: number[];
};
