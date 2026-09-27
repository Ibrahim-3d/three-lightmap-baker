import { type Texture, type WebGLRenderer } from 'three';
export type PostProcessOptions = {
    dilationIterations: number;
    denoiseEnabled: boolean;
    denoiseSigma: number;
    denoiseThreshold: number;
    denoiseKSigma: number;
};
export type PostProcessResult = {
    texture: Texture;
    dispose: () => void;
};
/** Own all temporary render resources until the result is handed to the caller. */
export declare const runPostProcess: (renderer: WebGLRenderer, src: Texture, positions: Texture, resolution: number, opts: PostProcessOptions, onProgress?: (percent: number) => void, controls?: {
    signal?: AbortSignal;
    normals?: Texture;
}) => Promise<PostProcessResult>;
//# sourceMappingURL=Refinement.d.ts.map