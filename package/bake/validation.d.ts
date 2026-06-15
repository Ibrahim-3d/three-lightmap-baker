import { Color } from 'three';
import type { PostProcessOptions } from '../lightmap/Refinement';
import type { GPUCapabilities } from '../gpu/Capabilities';
import type { LightmapBakerOptions, TimeoutProtectionOptions } from './types';
export declare const toLinearColor: (c: Color | string | number | undefined, fallback: number) => Color;
export declare const isPowerOfTwo: (n: number) => boolean;
/**
 * Default refinement options - merged onto user overrides in the constructor.
 * Frozen-by-convention; treat as read-only.
 */
export declare const DEFAULT_REFINEMENT: PostProcessOptions;
/**
 * Validate every numeric/required field BEFORE allocating GPU resources. Each
 * failure throws a single BakeError so the caller sees one structured error
 * instead of a cascade of secondary failures.
 */
export declare function validateOptions(opts: LightmapBakerOptions): void;
/**
 * Resolve timeout-protection settings from user opts + detected GPU capabilities.
 * Pure function for testability - no side effects beyond the capability log.
 */
export declare function resolveTimeoutProtection(user: TimeoutProtectionOptions | undefined, caps: GPUCapabilities): Required<TimeoutProtectionOptions>;
//# sourceMappingURL=validation.d.ts.map