export type LightmapRuntimeKind = 'browser' | 'offscreen-browser' | 'node' | 'unknown';
export type LightmapRuntimeFeature = 'webgl2' | 'webgpu' | 'float-color-buffer' | 'offscreen-canvas' | 'raf' | 'texture-download-export' | 'filesystem-export' | 'node-headless-bake';
export type LightmapRuntimeFeatureStatus = 'available' | 'unavailable' | 'unknown';
export type LightmapRuntimeBackend = 'webgl' | 'webgpu';
export type LightmapRuntimeCapabilities = {
    runtime: LightmapRuntimeKind;
    /**
     * True when the currently shipping baker can execute in this runtime.
     * WebGPU availability alone does not make this true until the WebGPU bake
     * path reaches product parity.
     */
    canBake: boolean;
    /** Backend the shipping baker would select today. */
    selectedBackend: 'webgl' | null;
    /** Raw runtime availability, independent from current product support. */
    backends: Record<LightmapRuntimeBackend, LightmapRuntimeFeatureStatus>;
    rendererStrategy: 'webgl-browser' | 'node-headless-unavailable';
    features: Record<LightmapRuntimeFeature, LightmapRuntimeFeatureStatus>;
    limitations: string[];
};
type RuntimeProbeGlobals = {
    window?: unknown;
    document?: {
        createElement?: (tagName: string) => unknown;
    };
    navigator?: {
        gpu?: unknown;
    };
    OffscreenCanvas?: new (width: number, height: number) => {
        getContext?: (contextId: string) => unknown;
    };
    WebGL2RenderingContext?: unknown;
    requestAnimationFrame?: unknown;
    process?: {
        versions?: {
            node?: string;
        };
    };
};
export declare function getLightmapRuntimeCapabilities(globals?: RuntimeProbeGlobals): LightmapRuntimeCapabilities;
export {};
//# sourceMappingURL=runtimeCapabilities.d.ts.map