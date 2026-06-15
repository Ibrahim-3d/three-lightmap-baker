import { Texture, WebGLRenderer } from 'three';
export type CompositeOverrides = Partial<{
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    aoIntensity: number;
    aoExponent: number;
    /** Swap the AO source texture (e.g. after an AO-only re-bake). */
    aoTex: Texture;
}>;
export type CompositeResult = {
    /** Combined (direct*directIntensity + indirect*giIntensity)*remappedAO - linear float RT texture. */
    texture: Texture;
    /** Re-render the composite, optionally overriding any uniform / swapping aoTex. */
    refresh: (overrides?: CompositeOverrides) => void;
    dispose: () => void;
};
/**
 * Allocate a composite RT and render
 *   (direct*directIntensity + indirect*giIntensity) * remappedAO
 * into it. AO comes from a separate texture (AOMapper output) so the AO pass
 * can re-bake independently of the bounce pass.
 *
 * Call `refresh()` each frame (or on slider change) to keep it current.
 * Pass `{ aoTex: newTex }` to swap the AO source after an AO-only re-bake.
 *
 * Ownership: all GPU resources are inside the returned CompositeResult; caller
 * disposes via CompositeResult.dispose(). Pattern matches PostProcess.ts.
 */
export declare const runComposite: (renderer: WebGLRenderer, lightmapTextures: {
    direct: Texture;
    indirect: Texture;
    ao: Texture;
}, resolution: number, opts: {
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    aoIntensity: number;
    aoExponent: number;
}) => CompositeResult;
//# sourceMappingURL=Composite.d.ts.map