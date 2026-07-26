import { Box3, type Object3D, Vector3 } from 'three';
import { ProbeVolume } from './ProbeVolume';
import type { ProbeGridCounts, ProbeGridOptions, ProbeGridSpacing } from './types';

const MIN_SPACING = 1.0e-4;

/** Build an empty regular probe volume from an object or explicit Box3. */
export function generateProbeGrid(
  source: Object3D | Box3,
  options: ProbeGridOptions = {},
): ProbeVolume {
  const bounds = resolveBounds(source, options);
  const counts = options.counts
    ? normalizeCounts(options.counts)
    : countsFromSpacing(bounds, normalizeSpacing(options.spacing ?? 1));

  const probeCount = counts[0] * counts[1] * counts[2];
  const maxProbes = Math.max(1, Math.floor(options.maxProbes ?? 4096));
  if (probeCount > maxProbes) {
    throw new Error(
      `[baker:probes] grid requires ${probeCount} probes, exceeding maxProbes=${maxProbes}`,
    );
  }

  return new ProbeVolume(bounds, counts);
}

function resolveBounds(source: Object3D | Box3, options: ProbeGridOptions): Box3 {
  const bounds = options.bounds
    ? options.bounds.clone()
    : source instanceof Box3
      ? source.clone()
      : new Box3().setFromObject(source, true);

  if (bounds.isEmpty()) {
    throw new Error('[baker:probes] cannot derive probe bounds from an empty object');
  }

  const padding = options.padding ?? 0;
  if (!Number.isFinite(padding) || padding < 0) {
    throw new Error('[baker:probes] padding must be a finite non-negative number');
  }
  if (padding > 0) bounds.expandByScalar(padding);
  return bounds;
}

function normalizeCounts(counts: ProbeGridCounts): [number, number, number] {
  const normalized = counts.map((value) => Math.floor(value)) as [number, number, number];
  if (
    normalized.some(
      (value, axis) => !Number.isFinite(value) || value < 1 || value !== counts[axis],
    )
  ) {
    throw new Error('[baker:probes] counts must contain positive integers');
  }
  return normalized;
}

function normalizeSpacing(spacing: ProbeGridSpacing): Vector3 {
  if (typeof spacing === 'number') {
    validateSpacingValue(spacing);
    return new Vector3(spacing, spacing, spacing);
  }
  if (spacing instanceof Vector3) {
    validateSpacingValue(spacing.x);
    validateSpacingValue(spacing.y);
    validateSpacingValue(spacing.z);
    return spacing.clone();
  }
  const result = new Vector3(spacing[0], spacing[1], spacing[2]);
  validateSpacingValue(result.x);
  validateSpacingValue(result.y);
  validateSpacingValue(result.z);
  return result;
}

function countsFromSpacing(bounds: Box3, spacing: Vector3): [number, number, number] {
  const size = bounds.getSize(new Vector3());
  return [
    countForAxis(size.x, spacing.x),
    countForAxis(size.y, spacing.y),
    countForAxis(size.z, spacing.z),
  ];
}

function countForAxis(size: number, spacing: number): number {
  if (size <= MIN_SPACING) return 1;
  return Math.max(2, Math.ceil(size / spacing) + 1);
}

function validateSpacingValue(value: number): void {
  if (!Number.isFinite(value) || value < MIN_SPACING) {
    throw new Error(`[baker:probes] spacing must be at least ${MIN_SPACING}`);
  }
}
