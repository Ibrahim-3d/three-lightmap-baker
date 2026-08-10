import type { Box3, ColorRepresentation, Vector3 } from 'three';
import type { BakeGroupView } from '../bake/types';
export type ProbeGridCounts = readonly [number, number, number];
export type ProbeGridSpacing = number | Vector3 | readonly [number, number, number];
/** Grid layout controls. Provide either `counts` or `spacing`; counts wins. */
export type ProbeGridOptions = {
    /** Explicit world-space bounds. When omitted, bounds are derived from the source object. */
    bounds?: Box3;
    /** Target/maximum world-space spacing. Actual endpoint-fit spacing never exceeds it. Default 0.65. */
    spacing?: ProbeGridSpacing;
    /** Exact probe counts on X/Y/Z. Every component must be a positive integer. */
    counts?: ProbeGridCounts;
    /** Expand derived or explicit bounds by this world-space amount. Default 0.1. */
    padding?: number;
    /** Safety cap. Default 8192. Generation throws instead of changing spacing. */
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
export type ProbeRGBStatistics = {
    sampleCount: number;
    minRGB: [number, number, number];
    maxRGB: [number, number, number];
    averageRGB: [number, number, number];
    minLuminance: number;
    maxLuminance: number;
    averageLuminance: number;
    luminancePercentiles: {
        p10: number;
        p50: number;
        p90: number;
        p99: number;
    };
    nonZeroCount: number;
    nonZeroPercentage: number;
    effectivelyBlackCount: number;
    effectivelyBlackPercentage: number;
    invalidValueCount: number;
};
export type ProbeGridStatistics = {
    counts: [number, number, number];
    bounds: {
        min: [number, number, number];
        max: [number, number, number];
    };
    actualSpacing: [number, number, number];
};
export type ProbeBlackSpatialStatistics = {
    boundaryCount: number;
    interiorCount: number;
    insideGeometryBoundsCount: number;
    openSpaceCount: number;
    interiorOpenSpaceCount: number;
    bounds: {
        min: [number, number, number];
        max: [number, number, number];
    } | null;
};
export type ProbeBakeStats = {
    probeCount: number;
    grid: ProbeGridStatistics;
    blackThreshold: number;
    sampledTexels: number;
    validSourceSamples: number;
    contributingTexels: number;
    probeContributions: number;
    invalidPositionTexels: number;
    invalidSurfaceReferences: number;
    invalidNormalTexels: number;
    invalidRadianceTexels: number;
    emptyBeforeFill: number;
    filledByDiffusion: number;
    /** Structurally unpopulated probes after diffusion and before fallback assignment. */
    emptyAfterFill: number;
    fallbackFilled: number;
    /** Populated probes whose valid value is physically at or below blackThreshold. */
    populatedEffectivelyBlack: number;
    /** Fallback-assigned probes whose fallback value is at or below blackThreshold. */
    fallbackEffectivelyBlack: number;
    sourceLightmap: ProbeRGBStatistics;
    projectedSurfaceLight: ProbeRGBStatistics;
    irradiance: ProbeRGBStatistics;
    blackProbeLocations: ProbeBlackSpatialStatistics;
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
//# sourceMappingURL=types.d.ts.map