import {
    FloatType,
    LinearFilter,
    LinearMipMapLinearFilter,
    Mesh,
    OrthographicCamera,
    PlaneGeometry,
    ShaderMaterial,
    Texture,
    WebGLRenderer,
    WebGLRenderTarget,
} from "three";
import { DilationMaterial } from "./DilationMaterial";
import { DenoiseMaterial } from "../denoise/DenoiseMaterial";

export type PostProcessOptions = {
    dilationIterations: number;   // Task 5 spec: 4
    denoiseEnabled: boolean;
    denoiseSigma: number;         // bilateral spatial sigma
    denoiseThreshold: number;     // bilateral range sigma (edge sharpness)
    denoiseKSigma: number;        // kernel radius multiplier
};

export type PostProcessResult = {
    /** Final post-processed lightmap texture (consume as MeshStandardMaterial.lightMap). */
    texture: Texture;
    /** Call to release the ping-pong RTs when bake is replaced. */
    dispose: () => void;
};

const fsQuad = new Mesh(new PlaneGeometry(2, 2));
const fsCam = new OrthographicCamera();

/**
 * Run dilation N times, then optional bilateral denoise once. Returns the final RT's texture.
 *
 * Pipeline:  src --(dilate)x N --> A --(denoise?)--> B --> result
 *
 * Two RTs are allocated and ping-ponged. Caller owns disposal via the returned handle.
 */
export const runPostProcess = async (
    renderer: WebGLRenderer,
    src: Texture,
    positions: Texture,
    resolution: number,
    opts: PostProcessOptions,
    onProgress?: (percent: number) => void,
): Promise<PostProcessResult> => {
    const makeRT = () => new WebGLRenderTarget(resolution, resolution, {
        type: FloatType,
        minFilter: LinearMipMapLinearFilter,
        magFilter: LinearFilter,
        generateMipmaps: true,
    });
    const rtA = makeRT();
    const rtB = makeRT();

    const draw = (mat: ShaderMaterial, target: WebGLRenderTarget) => {
        fsQuad.material = mat;
        renderer.setRenderTarget(target);
        renderer.render(fsQuad, fsCam);
        renderer.setRenderTarget(null);
    };

    const dilate = new DilationMaterial({ positions, resolution });

    let read: WebGLRenderTarget = rtA;   // tracks "where is the latest result"
    let write: WebGLRenderTarget = rtB;
    let input: Texture = src;

    const totalPasses = Math.max(0, opts.dilationIterations) + (opts.denoiseEnabled ? 1 : 0);
    let completedPasses = 0;

    for (let i = 0; i < Math.max(0, opts.dilationIterations); i++) {
        dilate.uniforms.map.value = input;
        draw(dilate, write);
        input = write.texture;
        // swap
        const tmp = read; read = write; write = tmp;
        
        completedPasses++;
        onProgress?.(completedPasses / totalPasses);
        // Allow UI to repaint
        await new Promise(resolve => requestAnimationFrame(resolve));
    }

    if (opts.denoiseEnabled) {
        const denoise = new DenoiseMaterial({
            map: input,
            sigma: opts.denoiseSigma,
            threshold: opts.denoiseThreshold,
            kSigma: opts.denoiseKSigma,
        }) as unknown as ShaderMaterial;
        draw(denoise, write);
        input = write.texture;
        denoise.dispose();
        const tmp = read; read = write; write = tmp;

        completedPasses++;
        onProgress?.(completedPasses / totalPasses);
        await new Promise(resolve => requestAnimationFrame(resolve));
    }

    dilate.dispose();

    // `read` now holds the unused RT; the result is in the *other* one (last `write` before swap).
    // After the swap the just-written RT is `read`. So `read.texture` is correct iff at least one
    // pass ran. If zero passes ran, we just return src directly.
    const ranAny = opts.dilationIterations > 0 || opts.denoiseEnabled;
    const result = ranAny ? read.texture : src;

    return {
        texture: result,
        dispose: () => { rtA.dispose(); rtB.dispose(); },
    };
};
