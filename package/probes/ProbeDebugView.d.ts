import { Group, InstancedMesh } from 'three';
import { ProbeVolume } from './ProbeVolume';
export type ProbeDebugViewOptions = {
    radius?: number;
    exposure?: number;
    opacity?: number;
    widthSegments?: number;
    heightSegments?: number;
};
/** Colored instanced spheres for inspecting probe placement and irradiance. */
export declare class ProbeDebugView extends Group {
    readonly volume: ProbeVolume;
    readonly mesh: InstancedMesh;
    private readonly geometry;
    private readonly material;
    private readonly probePosition;
    private readonly probeMatrix;
    private readonly color;
    private exposure;
    constructor(volume: ProbeVolume, options?: ProbeDebugViewOptions);
    setExposure(exposure: number): void;
    refresh(): void;
    refreshColors(): void;
    dispose(): void;
}
export declare function createProbeDebugView(volume: ProbeVolume, options?: ProbeDebugViewOptions): ProbeDebugView;
//# sourceMappingURL=ProbeDebugView.d.ts.map