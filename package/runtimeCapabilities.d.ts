export type LightmapRuntimeKind = 'browser' | 'offscreen-browser' | 'node' | 'unknown';
export type LightmapRuntimeFeature = 'webgl2' | 'float-color-buffer' | 'offscreen-canvas' | 'raf' | 'texture-download-export' | 'filesystem-export' | 'node-headless-bake';
export type LightmapRuntimeFeatureStatus = 'available' | 'unavailable' | 'unknown';
export type LightmapRuntimeCapabilities = {
    runtime: LightmapRuntimeKind;
    canBake: boolean;
    rendererStrategy: 'webgl-browser' | 'node-headless-unavailable';
    features: Record<LightmapRuntimeFeature, LightmapRuntimeFeatureStatus>;
    limitations: string[];
};
type RuntimeProbeGlobals = {
    window?: unknown;
    document?: {
        createElement?: (tagName: string) => unknown;
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