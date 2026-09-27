import { ShaderMaterial, type Texture } from 'three';
/** Propagate one chart's color/owner into each empty texel, without mixing charts. */
export declare class DilationMaterial extends ShaderMaterial {
    constructor(opts?: {
        map?: Texture;
        positions?: Texture;
        owners?: Texture;
        resolution?: number;
        fill?: boolean;
    });
}
//# sourceMappingURL=DilationMaterial.d.ts.map