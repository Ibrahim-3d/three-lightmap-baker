import type { Box3, Object3D, WebGLRenderer } from 'three';
import type { GenerateProbeVolumeOptions, ProbeBakeHooks, ProbeBakeSource, ProbeBakeStats } from './types';
import type { ProbeVolume } from './ProbeVolume';
export type GeneratedProbeVolume = {
    volume: ProbeVolume;
    stats: ProbeBakeStats;
};
/** Generate, bake, and return a probe volume in one call. */
export declare function generateProbeVolume(renderer: WebGLRenderer, sourceObject: Object3D | Box3, bakeSource: ProbeBakeSource, options?: GenerateProbeVolumeOptions, hooks?: ProbeBakeHooks): Promise<GeneratedProbeVolume>;
//# sourceMappingURL=generateProbeVolume.d.ts.map