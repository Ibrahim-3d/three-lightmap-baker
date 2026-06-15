import { ShaderMaterial, Texture } from 'three';
export declare class DilationMaterial extends ShaderMaterial {
    customProgramCacheKey(): string;
    constructor(opts?: {
        map?: Texture;
        positions?: Texture;
        resolution?: number;
    });
}
//# sourceMappingURL=DilationMaterial.d.ts.map