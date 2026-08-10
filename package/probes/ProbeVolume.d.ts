import { Box3, Color, Vector3 } from 'three';
import type { ProbeVolumeJSON } from './types';
/** CPU-side regular probe grid with baker-normalized RGB irradiance and trilinear sampling. */
export declare class ProbeVolume {
    readonly bounds: Box3;
    readonly counts: [number, number, number];
    readonly spacing: Vector3;
    readonly irradiance: Float32Array;
    constructor(bounds: Box3, counts: readonly [number, number, number], irradiance?: Float32Array);
    get probeCount(): number;
    index(x: number, y: number, z: number): number;
    getPosition(index: number, target?: Vector3): Vector3;
    getIrradiance(index: number, target?: Color): Color;
    setIrradiance(index: number, color: Color): this;
    /** Sample the volume at a world-space point. Points outside the volume clamp to its edge. */
    sample(position: Vector3, target?: Color): Color;
    clone(): ProbeVolume;
    toJSON(): ProbeVolumeJSON;
    static fromJSON(json: ProbeVolumeJSON): ProbeVolume;
    private axisSample;
    private validateIndex;
    private static validateCount;
}
//# sourceMappingURL=ProbeVolume.d.ts.map