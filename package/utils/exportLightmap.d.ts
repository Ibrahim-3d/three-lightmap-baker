import { Texture, WebGLRenderer } from 'three';
/**
 * LDR PNG with Reinhard tonemap + sRGB gamma encode.
 * Y-flip applied (WebGL bottom-up → PNG top-down).
 */
export declare function exportPNG(renderer: WebGLRenderer, source: Texture, resolution: number, filename: string): Promise<void>;
/** Linear HDR EXR via three.js EXRExporter. */
export declare function exportEXR(renderer: WebGLRenderer, source: Texture, resolution: number, filename: string): Promise<void>;
/** Headerless Float32 RGBA dump (resolution × resolution × 4 floats, little-endian). */
export declare function exportRaw(renderer: WebGLRenderer, source: Texture, resolution: number, filename: string): void;
export type ExportFormat = 'png' | 'exr' | 'bin';
/** Dispatch by format. Filename should be the base - extension is enforced per format. */
export declare function exportLightmap(renderer: WebGLRenderer, source: Texture, resolution: number, filename: string, format: ExportFormat): Promise<void>;
//# sourceMappingURL=exportLightmap.d.ts.map