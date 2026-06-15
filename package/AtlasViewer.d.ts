import { Texture, WebGLRenderer } from 'three';
export type AtlasViewerCorner = 'tl' | 'tr' | 'bl' | 'br';
export type AtlasViewerOptions = {
    /** On-canvas square size in CSS px. Default 256. */
    size?: number;
    /** Margin from canvas edges in CSS px. Default 20. */
    margin?: number;
    /** Which corner. Default 'br'. */
    corner?: AtlasViewerCorner;
    /** Apply 1/2.2 gamma encode for display. Default true (most layers are linear float). */
    sRGB?: boolean;
};
export declare class AtlasViewer {
    visible: boolean;
    collapsed: boolean;
    size: number;
    margin: number;
    corner: AtlasViewerCorner;
    private scene;
    private cam;
    private quad;
    private mat;
    private headerEl;
    /** Layer label shown in the header. Updated by the host each frame. */
    private layerLabel;
    /**
     * Multi-atlas mode. When set, render() lays them out in a grid filling the
     * panel. When null, falls back to the single `mat.uniforms.map` texture.
     */
    private textures;
    private prevScissor;
    private prevViewport;
    constructor(opts?: AtlasViewerOptions);
    setTexture(tex: Texture | null): void;
    /**
     * Render N textures in a grid (cols = ceil(sqrt(N)), rows = ceil(N/cols))
     * filling the same `size`-px panel. Each cell is a square. Pass `[]` or null
     * to revert to the single-texture `setTexture` path.
     */
    setTextures(texs: Texture[] | null): void;
    setSRGB(v: boolean): void;
    setSize(px: number): void;
    setMargin(px: number): void;
    setCorner(c: AtlasViewerCorner): void;
    setCollapsed(v: boolean): void;
    /** Updates the active-layer label shown in the header. */
    setLayerLabel(label: string): void;
    /**
     * Opt-in: attach an HTML header bar with click-to-collapse.
     * Library users running headless can skip this.
     */
    attachHeader(parent?: HTMLElement): void;
    detachHeader(): void;
    private refreshHeaderText;
    /**
     * Position the HTML header bar to sit just above the WebGL viewer rect.
     * Coordinates are CSS px (matching `getBoundingClientRect`).
     */
    private positionHeader;
    /** Render the overlay. MUST be called after the main scene render in the same frame. */
    render(renderer: WebGLRenderer): void;
    dispose(): void;
}
//# sourceMappingURL=AtlasViewer.d.ts.map