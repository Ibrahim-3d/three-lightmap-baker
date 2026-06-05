import { Color } from 'three';
import { BakeError } from '../errors';
import type { PostProcessOptions } from '../lightmap/Refinement';
import type { GPUCapabilities } from '../gpu/Capabilities';
import type { LightmapBakerOptions, TimeoutProtectionOptions } from './types';

// Pure helpers shared by `LightmapBaker.constructor` and `bake()`. No GL state,
// no class fields - all inputs come through parameters so this file is unit-
// testable in isolation.

export const toLinearColor = (c: Color | string | number | undefined, fallback: number): Color =>
  new Color(c ?? fallback).convertSRGBToLinear();

export const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0;

/**
 * Default refinement options - merged onto user overrides in the constructor.
 * Frozen-by-convention; treat as read-only.
 */
export const DEFAULT_REFINEMENT: PostProcessOptions = {
  dilationIterations: 4,
  denoiseEnabled: true,
  denoiseSigma: 2.5,
  denoiseThreshold: 0.18,
  denoiseKSigma: 1.0,
};

/**
 * Validate every numeric/required field BEFORE allocating GPU resources. Each
 * failure throws a single BakeError so the caller sees one structured error
 * instead of a cascade of secondary failures.
 */
export function validateOptions(opts: LightmapBakerOptions): void {
  const samples = opts.samples ?? 96;
  if (!Number.isFinite(samples) || samples < 1 || samples > 4096)
    throw new BakeError(`samples must be 1-4096, got ${samples}`, 'validation');

  const casts = opts.castsPerFrame ?? 5;
  if (!Number.isFinite(casts) || casts < 1 || casts > 256)
    throw new BakeError(`castsPerFrame must be 1-256, got ${casts}`, 'validation');

  const aoOptions = typeof opts.ao === 'boolean' ? undefined : opts.ao;
  const giOptions = typeof opts.gi === 'boolean' ? undefined : opts.gi;

  const aoSamples = aoOptions?.samples;
  if (aoSamples !== undefined && (!Number.isFinite(aoSamples) || aoSamples < 0 || aoSamples > 64))
    throw new BakeError(`ao.samples must be 0-64, got ${aoSamples}`, 'validation');

  const bounces = opts.bounces ?? 1;
  if (!Number.isInteger(bounces) || bounces < 0 || bounces > 8)
    throw new BakeError(`bounces must be integer 0-8, got ${bounces}`, 'validation');

  const resolution = opts.resolution ?? 1024;
  if (!Number.isFinite(resolution) || resolution < 16 || resolution > 4096)
    throw new BakeError(`resolution must be 16-4096, got ${resolution}`, 'validation');
  if (!isPowerOfTwo(resolution))
    throw new BakeError(`resolution must be a power of two, got ${resolution}`, 'validation');

  const superSample = opts.superSample ?? 1;
  if (!Number.isInteger(superSample) || superSample < 1 || superSample > 4)
    throw new BakeError(`superSample must be integer 1-4, got ${superSample}`, 'validation');
  if (resolution * superSample > 4096)
    throw new BakeError(
      `resolution × superSample must be ≤ 4096, got ${resolution * superSample}`,
      'validation',
    );

  if (opts.light?.intensity !== undefined && opts.light.intensity < 0)
    throw new BakeError(`light.intensity must be >= 0, got ${opts.light.intensity}`, 'validation');
  if (opts.light?.size !== undefined && opts.light.size < 0)
    throw new BakeError(`light.size must be >= 0, got ${opts.light.size}`, 'validation');

  if (giOptions?.intensity !== undefined && giOptions.intensity < 0)
    throw new BakeError(`gi.intensity must be >= 0, got ${giOptions.intensity}`, 'validation');
  if (giOptions?.skyIntensity !== undefined && giOptions.skyIntensity < 0)
    throw new BakeError(
      `gi.skyIntensity must be >= 0, got ${giOptions.skyIntensity}`,
      'validation',
    );

  if (aoOptions?.distance !== undefined && aoOptions.distance < 0)
    throw new BakeError(`ao.distance must be >= 0, got ${aoOptions.distance}`, 'validation');

  // Validate top-level density (Phase 1 - density-aware multi-atlas).
  if (opts.texelsPerMeter !== undefined) {
    const tpm = opts.texelsPerMeter;
    if (!Number.isFinite(tpm) || tpm <= 0 || tpm > 1024)
      throw new BakeError(`texelsPerMeter must be in (0, 1024], got ${tpm}`, 'validation');
  }

  // Validate per-mesh resolution + density overrides.
  for (const [uuid, override] of Object.entries(opts.perMesh ?? {})) {
    const r = override.resolution;
    if (r !== undefined) {
      if (!Number.isFinite(r) || r < 128 || r > 4096)
        throw new BakeError(`perMesh[${uuid}].resolution must be 128-4096, got ${r}`, 'validation');
      if (!isPowerOfTwo(r))
        throw new BakeError(
          `perMesh[${uuid}].resolution must be a power of two, got ${r}`,
          'validation',
        );
    }
    const d = override.density;
    if (d !== undefined && (!Number.isFinite(d) || d < 0.1 || d > 10))
      throw new BakeError(`perMesh[${uuid}].density must be in [0.1, 10], got ${d}`, 'validation');
  }

  // Density mode and per-mesh resolution are mutually exclusive (orthogonal sizing
  // strategies). When `texelsPerMeter` is set, all atlases share `resolution`;
  // per-mesh `resolution` overrides are ignored. Surface as a warning, not an error.
  if (opts.texelsPerMeter !== undefined && import.meta.env.DEV) {
    const overrides = Object.entries(opts.perMesh ?? {}).filter(
      ([, o]) => o.resolution !== undefined,
    );
    if (overrides.length > 0) {
      console.warn(
        `[baker] texelsPerMeter is set; perMesh[].resolution overrides on ${overrides.length} mesh(es) will be ignored - density mode uses one shared resolution.`,
      );
    }
  }

  // Validate timeout-protection overrides (defaults applied later from capabilities).
  const tp = opts.timeoutProtection;
  if (tp?.initialTileSize !== undefined) {
    const t = tp.initialTileSize;
    if (!Number.isFinite(t) || t < 16 || t > 4096)
      throw new BakeError(
        `timeoutProtection.initialTileSize must be 16-4096, got ${t}`,
        'validation',
      );
  }
  if (tp?.maxBatchMs !== undefined && (!Number.isFinite(tp.maxBatchMs) || tp.maxBatchMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxBatchMs must be > 0, got ${tp.maxBatchMs}`,
      'validation',
    );
  if (tp?.maxFrameMs !== undefined && (!Number.isFinite(tp.maxFrameMs) || tp.maxFrameMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxFrameMs must be > 0, got ${tp.maxFrameMs}`,
      'validation',
    );
}

/**
 * Resolve timeout-protection settings from user opts + detected GPU capabilities.
 * Pure function for testability - no side effects beyond the capability log.
 */
export function resolveTimeoutProtection(
  user: TimeoutProtectionOptions | undefined,
  caps: GPUCapabilities,
): Required<TimeoutProtectionOptions> {
  const safe = user?.safeMode ?? false;
  return {
    safeMode: safe,
    initialTileSize: user?.initialTileSize ?? (safe ? 64 : caps.initialTileSize),
    maxBatchMs: user?.maxBatchMs ?? (safe ? 100 : caps.maxBatchMs),
    maxFrameMs: user?.maxFrameMs ?? caps.maxFrameMs,
    autoAdapt: user?.autoAdapt ?? true,
  };
}
