import { Box3, type Object3D, type Scene, type WebGLRenderer } from 'three';
import { LightProbeGrid } from 'three/addons/lighting/LightProbeGrid.js';
import type { ProbeGridOptions, ProbeGridStatistics } from './types';
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
 * This low-level API captures the scene exactly as configured. Applications
 * capturing a completed bake should prefer `captureLightmappedProbeGrid`,
 * which owns static-scene isolation and exception-safe state restoration.
 */
export declare function captureNativeLightProbeGrid(renderer: WebGLRenderer, scene: Scene, source: Object3D | Box3, options?: NativeLightProbeGridOptions): NativeLightProbeGridResult;
export declare function captureNativeLightProbeGridFromJSON(renderer: WebGLRenderer, scene: Scene, descriptor: NativeLightProbeGridJSON, options?: NativeLightProbeGridRestoreOptions): NativeLightProbeGridResult;
//# sourceMappingURL=NativeLightProbeGrid.d.ts.map