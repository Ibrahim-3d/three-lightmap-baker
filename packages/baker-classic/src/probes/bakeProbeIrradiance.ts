import { Color, type WebGLRenderer } from 'three';
import { ProbeVolume } from './ProbeVolume';
import { readFloatTexture } from './readFloatTexture';
import type {
  ProbeBakeHooks,
  ProbeBakeOptions,
  ProbeBakeSource,
  ProbeBakeStats,
} from './types';

type AxisCell = { low: number; high: number; t: number };

/**
 * Approximate diffuse probe irradiance from the baked surface atlases.
 *
 * World-position/normal atlas texels are paired with the final baked radiance,
 * shifted slightly into the visible hemisphere, and distributed into the eight
 * surrounding probes. Empty interior probes are then filled by neighbour
 * diffusion. This is intentionally an MVP bridge from baked surfaces to dynamic
 * objects; it does not claim directional SH reconstruction.
 */
export async function bakeProbeIrradianceFromLightmaps(
  renderer: WebGLRenderer,
  source: ProbeBakeSource,
  volume: ProbeVolume,
  options: ProbeBakeOptions = {},
  hooks: ProbeBakeHooks = {},
): Promise<ProbeBakeStats> {
  const started = now();
  const sampleStride = positiveInteger(options.sampleStride ?? 2, 'sampleStride');
  const rowsPerYield = positiveInteger(options.rowsPerYield ?? 24, 'rowsPerYield');
  const fillIterations = nonNegativeInteger(options.fillIterations ?? 4, 'fillIterations');
  const intensity = finiteNonNegative(options.intensity ?? 1, 'intensity');
  const defaultOffset = smallestPositiveSpacing(volume) * 0.2;
  const surfaceOffset = finiteNonNegative(
    options.surfaceOffset ?? defaultOffset,
    'surfaceOffset',
  );
  const accum = new Float64Array(volume.probeCount * 3);
  const weights = new Float64Array(volume.probeCount);
  let sampledTexels = 0;
  let contributingTexels = 0;

  checkAbort(hooks.signal);
  const groups = source.groups;
  for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
    const group = groups[groupIndex]!;
    const resolution = group.internalResolution;
    const positions = readFloatTexture(renderer, group.textures.position, resolution);
    const normals = readFloatTexture(renderer, group.textures.normal, resolution);
    const radiance = readFloatTexture(
      renderer,
      group.textures.refinement ?? group.textures.composite,
      resolution,
    );

    for (let y = 0; y < resolution; y += sampleStride) {
      for (let x = 0; x < resolution; x += sampleStride) {
        const pixel = (y * resolution + x) * 4;
        if ((positions[pixel + 3] ?? 0) < 0.5) continue;
        sampledTexels++;

        const px = positions[pixel] ?? 0;
        const py = positions[pixel + 1] ?? 0;
        const pz = positions[pixel + 2] ?? 0;
        let nx = normals[pixel] ?? 0;
        let ny = normals[pixel + 1] ?? 0;
        let nz = normals[pixel + 2] ?? 0;
        const normalLength = Math.hypot(nx, ny, nz);
        if (normalLength < 1.0e-6) continue;
        nx /= normalLength;
        ny /= normalLength;
        nz /= normalLength;

        const rr = Math.max(0, radiance[pixel] ?? 0);
        const rg = Math.max(0, radiance[pixel + 1] ?? 0);
        const rb = Math.max(0, radiance[pixel + 2] ?? 0);
        if (![px, py, pz, rr, rg, rb].every(Number.isFinite)) continue;

        const sx = px + nx * surfaceOffset;
        const sy = py + ny * surfaceOffset;
        const sz = pz + nz * surfaceOffset;
        const cx = axisCell(sx, volume.bounds.min.x, volume.bounds.max.x, volume.counts[0]);
        const cy = axisCell(sy, volume.bounds.min.y, volume.bounds.max.y, volume.counts[1]);
        const cz = axisCell(sz, volume.bounds.min.z, volume.bounds.max.z, volume.counts[2]);
        let contributed = false;

        for (let dz = 0; dz <= 1; dz++) {
          const zi = dz === 0 ? cz.low : cz.high;
          const wz = dz === 0 ? 1 - cz.t : cz.t;
          for (let dy = 0; dy <= 1; dy++) {
            const yi = dy === 0 ? cy.low : cy.high;
            const wy = dy === 0 ? 1 - cy.t : cy.t;
            for (let dx = 0; dx <= 1; dx++) {
              const xi = dx === 0 ? cx.low : cx.high;
              const wx = dx === 0 ? 1 - cx.t : cx.t;
              const trilinearWeight = wx * wy * wz;
              if (trilinearWeight <= 0) continue;

              const probeX = volume.bounds.min.x + volume.spacing.x * xi;
              const probeY = volume.bounds.min.y + volume.spacing.y * yi;
              const probeZ = volume.bounds.min.z + volume.spacing.z * zi;
              const dxp = probeX - px;
              const dyp = probeY - py;
              const dzp = probeZ - pz;
              const distance = Math.hypot(dxp, dyp, dzp);
              const facing =
                distance > 1.0e-6
                  ? Math.max(0, (nx * dxp + ny * dyp + nz * dzp) / distance)
                  : 1;
              const weight = trilinearWeight * Math.max(0.05, facing);
              if (weight <= 0) continue;

              const index = xi + volume.counts[0] * (yi + volume.counts[1] * zi);
              const offset = index * 3;
              accum[offset] += rr * weight;
              accum[offset + 1] += rg * weight;
              accum[offset + 2] += rb * weight;
              weights[index] += weight;
              contributed = true;
            }
          }
        }
        if (contributed) contributingTexels++;
      }

      if (Math.floor(y / sampleStride) % rowsPerYield === 0) {
        checkAbort(hooks.signal);
        const groupProgress = Math.min(1, (y + sampleStride) / resolution);
        hooks.onProgress?.(((groupIndex + groupProgress) / Math.max(1, groups.length)) * 0.9);
        await yieldToBrowser();
      }
    }
  }

  const values = new Float32Array(volume.probeCount * 3);
  const valid = new Uint8Array(volume.probeCount);
  let emptyBeforeFill = 0;
  let averageR = 0;
  let averageG = 0;
  let averageB = 0;
  let validCount = 0;
  for (let index = 0; index < volume.probeCount; index++) {
    const weight = weights[index] ?? 0;
    const offset = index * 3;
    if (weight > 1.0e-8) {
      const r = (accum[offset] ?? 0) / weight;
      const g = (accum[offset + 1] ?? 0) / weight;
      const b = (accum[offset + 2] ?? 0) / weight;
      values[offset] = r;
      values[offset + 1] = g;
      values[offset + 2] = b;
      valid[index] = 1;
      averageR += r;
      averageG += g;
      averageB += b;
      validCount++;
    } else {
      emptyBeforeFill++;
    }
  }

  diffuseEmptyProbes(values, valid, volume.counts, fillIterations, hooks);
  const fallback = options.fallbackColor
    ? new Color(options.fallbackColor)
    : validCount > 0
      ? new Color(averageR / validCount, averageG / validCount, averageB / validCount)
      : new Color(0, 0, 0);
  let emptyAfterFill = 0;
  for (let index = 0; index < volume.probeCount; index++) {
    const offset = index * 3;
    if (!valid[index]) {
      values[offset] = fallback.r;
      values[offset + 1] = fallback.g;
      values[offset + 2] = fallback.b;
      emptyAfterFill++;
    }
    values[offset] = (values[offset] ?? 0) * intensity;
    values[offset + 1] = (values[offset + 1] ?? 0) * intensity;
    values[offset + 2] = (values[offset + 2] ?? 0) * intensity;
  }
  volume.irradiance.set(values);
  hooks.onProgress?.(1);

  return {
    probeCount: volume.probeCount,
    sampledTexels,
    contributingTexels,
    emptyBeforeFill,
    emptyAfterFill,
    durationMs: now() - started,
  };
}

function diffuseEmptyProbes(
  values: Float32Array,
  valid: Uint8Array,
  counts: readonly [number, number, number],
  iterations: number,
  hooks: ProbeBakeHooks,
): void {
  const [nx, ny, nz] = counts;
  const neighbours = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
  ] as const;

  for (let iteration = 0; iteration < iterations; iteration++) {
    checkAbort(hooks.signal);
    const nextValues = values.slice();
    const nextValid = valid.slice();
    for (let z = 0; z < nz; z++) {
      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          const index = x + nx * (y + ny * z);
          if (valid[index]) continue;
          let r = 0;
          let g = 0;
          let b = 0;
          let count = 0;
          for (const [ox, oy, oz] of neighbours) {
            const xx = x + ox;
            const yy = y + oy;
            const zz = z + oz;
            if (xx < 0 || yy < 0 || zz < 0 || xx >= nx || yy >= ny || zz >= nz) continue;
            const neighbour = xx + nx * (yy + ny * zz);
            if (!valid[neighbour]) continue;
            const offset = neighbour * 3;
            r += values[offset] ?? 0;
            g += values[offset + 1] ?? 0;
            b += values[offset + 2] ?? 0;
            count++;
          }
          if (count > 0) {
            const offset = index * 3;
            nextValues[offset] = r / count;
            nextValues[offset + 1] = g / count;
            nextValues[offset + 2] = b / count;
            nextValid[index] = 1;
          }
        }
      }
    }
    values.set(nextValues);
    valid.set(nextValid);
    hooks.onProgress?.(0.9 + ((iteration + 1) / Math.max(1, iterations)) * 0.1);
  }
}

function axisCell(value: number, min: number, max: number, count: number): AxisCell {
  if (count <= 1 || Math.abs(max - min) <= 1.0e-8) return { low: 0, high: 0, t: 0 };
  const normalized = Math.min(1, Math.max(0, (value - min) / (max - min))) * (count - 1);
  const low = Math.floor(normalized);
  return { low, high: Math.min(count - 1, low + 1), t: normalized - low };
}

function smallestPositiveSpacing(volume: ProbeVolume): number {
  const values = [volume.spacing.x, volume.spacing.y, volume.spacing.z].filter((v) => v > 0);
  return values.length ? Math.min(...values) : 0.5;
}

function positiveInteger(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 1) throw new Error(`[baker:probes] ${name} must be >= 1`);
  return value;
}

function nonNegativeInteger(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 0) throw new Error(`[baker:probes] ${name} must be >= 0`);
  return value;
}

function finiteNonNegative(value: number, name: string): number {
  if (!Number.isFinite(value) || value < 0) throw new Error(`[baker:probes] ${name} must be finite and >= 0`);
  return value;
}

function checkAbort(signal?: AbortSignal): void {
  if (!signal?.aborted) return;
  const error = new Error('[baker:probes] probe generation aborted');
  error.name = 'AbortError';
  throw error;
}

function yieldToBrowser(): Promise<void> {
  if (typeof requestAnimationFrame === 'function') {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  return Promise.resolve();
}

function now(): number {
  return typeof performance !== 'undefined' ? performance.now() : Date.now();
}
