import { Group, InstancedMesh } from 'three';
import { ProbeVolume } from './ProbeVolume';
export type ProbeDebugViewOptions = {
    radius?: number;
    opacity?: number;
    widthSegments?: number;
    heightSegments?: number;
};
/** Colored instanced spheres using a fixed display-only c/(1+c) tone mapping. */
export declare class ProbeDebugView extends Group {
    readonly volume: ProbeVolume;
    readonly mesh: InstancedMesh;
    private readonly geometry;
    private readonly material;
    private readonly colorAttribute;
    private readonly probePosition;
    private readonly probeMatrix;
    private readonly color;
    constructor(volume: ProbeVolume, options?: ProbeDebugViewOptions);
    refresh(): void;
    refreshColors(): void;
    dispose(): void;
}
export declare function createProbeDebugView(volume: ProbeVolume, options?: ProbeDebugViewOptions): ProbeDebugView;
//# sourceMappingURL=ProbeDebugView.d.ts.map