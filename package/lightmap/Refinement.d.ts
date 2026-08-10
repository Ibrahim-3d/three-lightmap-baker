import { Texture, WebGLRenderer } from 'three';
export type PostProcessOptions = {
    dilationIterations: number;
    denoiseEnabled: boolean;
    denoiseSigma: number;
    denoiseThreshold: number;
    denoiseKSigma: number;
};
export type PostProcessResult = {
    /** Final post-processed lightmap texture (consume as MeshStandardMaterial.lightMap). */
    texture: Texture;
    /** Call to release the ping-pong RTs when bake is replaced. */
    dispose: () => void;
};
/**
 * Run dilation N times, then optional bilateral denoise once. Returns the final RT's texture.
 *
 * Pipeline:  src --(dilate)x N --> A --(denoise?)--> B --> result
 *
 * Two RTs are allocated and ping-ponged. Caller owns disposal via the returned handle.
 */
export declare const runPostProcess: (renderer: WebGLRenderer, src: Texture, positions: Texture, resolution: number, opts: PostProcessOptions, onProgress?: (percent: number) => void) => Promise<PostProcessResult>;
//# sourceMappingURL=Refinement.d.ts.map