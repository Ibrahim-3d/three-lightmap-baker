import { ShaderMaterial, type Texture } from 'three';
export type DenoiseMaterialOptions = {
    map: Texture;
    normals?: Texture;
    sigma?: number;
    threshold?: number;
    kSigma?: number;
};
/** Chart- and normal-guided bilateral filter in linear irradiance space. */
export declare class DenoiseMaterial extends ShaderMaterial {
    constructor(options: DenoiseMaterialOptions);
}
//# sourceMappingURL=DenoiseMaterial.d.ts.map