import { Color, type Mesh, type WebGLRenderer } from 'three';
import { ProbeVolume } from './ProbeVolume';
import { readFloatTexture } from './readFloatTexture';
import type {
  ProbeBakeHooks,
  ProbeBakeOptions,
  ProbeBakeSource,
  ProbeBakeStats,
  ProbeBlackSpatialStatistics,
  ProbeRGBStatistics,
} from './types';

type AxisCell = { low: number; high: number; t: number };
type RGB = readonly [number, number, number];

type RGBAccumulator = {
  sampleCount: number;
  minRGB: [number, number, number];
  maxRGB: [number, number, number];
  sumRGB: [number, number, number];
  luminances: number[];
  nonZeroCount: number;
  effectivelyBlackCount: number;
  invalidValueCount: number;
};

const BLACK_THRESHOLD = 1.0e-6;

/**
 * Approximate diffuse probe irradiance from the baked surface atlases.
 *
 * World-position/normal atlas texels are paired with the final albedo-free
 * incoming-light field and the source surface's material albedo. Multiplication
 * reconstructs the source's reflected diffuse contribution in the baker's
 * normalized energy convention (the baker deliberately omits a separate source
 * 1/PI here). Samples are shifted into the visible hemisphere and distributed
 * into surrounding probes. Empty probes are then filled by neighbour diffusion.
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
  const surfaceOffset = finiteNonNegative(options.surfaceOffset ?? defaultOffset, 'surfaceOffset');
  const accum = new Float64Array(volume.probeCount * 3);
  const weights = new Float64Array(volume.probeCount);
  const sourceLightmap = createRGBAccumulator();
  const projectedSurfaceLight = createRGBAccumulator();
  let sampledTexels = 0;
  let validSourceSamples = 0;
  let contributingTexels = 0;
  let probeContributions = 0;
  let invalidPositionTexels = 0;
  let invalidSurfaceReferences = 0;
  let invalidNormalTexels = 0;
  let invalidRadianceTexels = 0;

  checkAbort(hooks.signal);
  const groups = source.groups;
  for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
    const group = groups[groupIndex];
    if (!group) throw new Error(`[baker:probes] missing bake group ${groupIndex}`);
    const resolution = group.internalResolution;
    const positions = readFloatTexture(renderer, group.textures.position, resolution);
    const normals = readFloatTexture(renderer, group.textures.normal, resolution);
    const incomingLighting = readFloatTexture(
      renderer,
      group.textures.refinement ?? group.textures.composite,
      resolution,
    );
    const sourceAlbedo = readFloatTexture(renderer, group.textures.surfaceAlbedo, resolution);

    for (let y = 0; y < resolution; y += sampleStride) {
      for (let x = 0; x < resolution; x += sampleStride) {
        const pixel = (y * resolution + x) * 4;
        const encodedMeshId = positions[pixel + 3] ?? 0;
        if (encodedMeshId < 0.5) continue;
        sampledTexels++;

        const px = positions[pixel] ?? 0;
        const py = positions[pixel + 1] ?? 0;
        const pz = positions[pixel + 2] ?? 0;
        if (![px, py, pz].every(Number.isFinite)) {
          invalidPositionTexels++;
          continue;
        }
        let nx = normals[pixel] ?? 0;
        let ny = normals[pixel + 1] ?? 0;
        let nz = normals[pixel + 2] ?? 0;
        const normalLength = Math.hypot(nx, ny, nz);
        if (![nx, ny, nz, normalLength].every(Number.isFinite) || normalLength < 1.0e-6) {
          invalidNormalTexels++;
          continue;
        }
        nx /= normalLength;
        ny /= normalLength;
        nz /= normalLength;

        const rawR = incomingLighting[pixel] ?? 0;
        const rawG = incomingLighting[pixel + 1] ?? 0;
        const rawB = incomingLighting[pixel + 2] ?? 0;
        if (![rawR, rawG, rawB].every(Number.isFinite)) {
          invalidRadianceTexels++;
          sourceLightmap.invalidValueCount += countInvalidValues(rawR, rawG, rawB);
          continue;
        }
        const sourceR = Math.max(0, rawR);
        const sourceG = Math.max(0, rawG);
        const sourceB = Math.max(0, rawB);
        addRGBSample(sourceLightmap, sourceR, sourceG, sourceB);
        const albedoR = sourceAlbedo[pixel] ?? NaN;
        const albedoG = sourceAlbedo[pixel + 1] ?? NaN;
        const albedoB = sourceAlbedo[pixel + 2] ?? NaN;
        if (![albedoR, albedoG, albedoB].every(Number.isFinite)) {
          invalidSurfaceReferences++;
          continue;
        }
        const [rr, rg, rb] = projectProbeSourceDiffuse(
          [sourceR, sourceG, sourceB],
          [Math.max(0, albedoR), Math.max(0, albedoG), Math.max(0, albedoB)],
        );
        addRGBSample(projectedSurfaceLight, rr, rg, rb);
        validSourceSamples++;

        if (Math.max(rr, rg, rb) <= BLACK_THRESHOLD) continue;

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
                distance > 1.0e-6 ? Math.max(0, (nx * dxp + ny * dyp + nz * dzp) / distance) : 1;
              const weight = trilinearWeight * Math.max(0.05, facing);
              if (weight <= 0) continue;

              const index = xi + volume.counts[0] * (yi + volume.counts[1] * zi);
              const offset = index * 3;
              accum[offset] = (accum[offset] ?? 0) + rr * weight;
              accum[offset + 1] = (accum[offset + 1] ?? 0) + rg * weight;
              accum[offset + 2] = (accum[offset + 2] ?? 0) + rb * weight;
              weights[index] = (weights[index] ?? 0) + weight;
              probeContributions++;
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
  let populatedEffectivelyBlack = 0;
  let fallbackEffectivelyBlack = 0;
  for (let index = 0; index < volume.probeCount; index++) {
    const offset = index * 3;
    const wasPopulated = valid[index] === 1;
    if (!wasPopulated) {
      values[offset] = fallback.r;
      values[offset + 1] = fallback.g;
      values[offset + 2] = fallback.b;
      emptyAfterFill++;
    }
    values[offset] = (values[offset] ?? 0) * intensity;
    values[offset + 1] = (values[offset + 1] ?? 0) * intensity;
    values[offset + 2] = (values[offset + 2] ?? 0) * intensity;
    const isBlack =
      Math.max(values[offset] ?? 0, values[offset + 1] ?? 0, values[offset + 2] ?? 0) <=
      BLACK_THRESHOLD;
    if (isBlack) {
      if (wasPopulated) populatedEffectivelyBlack++;
      else fallbackEffectivelyBlack++;
    }
  }
  volume.irradiance.set(values);
  hooks.onProgress?.(1);

  const filledByDiffusion = emptyBeforeFill - emptyAfterFill;

  return {
    probeCount: volume.probeCount,
    grid: {
      counts: [...volume.counts],
      bounds: {
        min: [volume.bounds.min.x, volume.bounds.min.y, volume.bounds.min.z],
        max: [volume.bounds.max.x, volume.bounds.max.y, volume.bounds.max.z],
      },
      actualSpacing: [volume.spacing.x, volume.spacing.y, volume.spacing.z],
    },
    blackThreshold: BLACK_THRESHOLD,
    sampledTexels,
    validSourceSamples,
    contributingTexels,
    probeContributions,
    invalidPositionTexels,
    invalidSurfaceReferences,
    invalidNormalTexels,
    invalidRadianceTexels,
    emptyBeforeFill,
    filledByDiffusion,
    emptyAfterFill,
    fallbackFilled: emptyAfterFill,
    populatedEffectivelyBlack,
    fallbackEffectivelyBlack,
    sourceLightmap: summarizeRGB(sourceLightmap),
    projectedSurfaceLight: summarizeRGB(projectedSurfaceLight),
    irradiance: summarizeRGBValues(values),
    blackProbeLocations: summarizeBlackProbeLocations(values, volume, source),
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

/**
 * Read material slot zero's solid base color. Kept as a small compatibility
 * utility; probe baking itself consumes the GPU-rasterized textured albedo atlas.
 */
export function readProbeSurfaceAlbedo(mesh: Mesh): [number, number, number] | null {
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  const material = materials[0] as { color?: { r: number; g: number; b: number } } | undefined;
  const color = material?.color;
  if (!color) return [1, 1, 1];
  if (![color.r, color.g, color.b].every(Number.isFinite)) return null;
  return [Math.max(0, color.r), Math.max(0, color.g), Math.max(0, color.b)];
}

/**
 * Apply source diffuse reflectance once in the baker's normalized light units.
 * The target object's Lambertian BRDF is a separate runtime operation.
 */
export function projectProbeSourceDiffuse(incoming: RGB, albedo: RGB): [number, number, number] {
  return [incoming[0] * albedo[0], incoming[1] * albedo[1], incoming[2] * albedo[2]];
}

function createRGBAccumulator(): RGBAccumulator {
  return {
    sampleCount: 0,
    minRGB: [Infinity, Infinity, Infinity],
    maxRGB: [-Infinity, -Infinity, -Infinity],
    sumRGB: [0, 0, 0],
    luminances: [],
    nonZeroCount: 0,
    effectivelyBlackCount: 0,
    invalidValueCount: 0,
  };
}

function addRGBSample(accumulator: RGBAccumulator, r: number, g: number, b: number): void {
  accumulator.sampleCount++;
  accumulator.minRGB[0] = Math.min(accumulator.minRGB[0], r);
  accumulator.minRGB[1] = Math.min(accumulator.minRGB[1], g);
  accumulator.minRGB[2] = Math.min(accumulator.minRGB[2], b);
  accumulator.maxRGB[0] = Math.max(accumulator.maxRGB[0], r);
  accumulator.maxRGB[1] = Math.max(accumulator.maxRGB[1], g);
  accumulator.maxRGB[2] = Math.max(accumulator.maxRGB[2], b);
  accumulator.sumRGB[0] += r;
  accumulator.sumRGB[1] += g;
  accumulator.sumRGB[2] += b;
  accumulator.luminances.push(0.2126 * r + 0.7152 * g + 0.0722 * b);
  if (Math.max(r, g, b) > BLACK_THRESHOLD) accumulator.nonZeroCount++;
  else accumulator.effectivelyBlackCount++;
}

function summarizeRGBValues(values: Float32Array): ProbeRGBStatistics {
  const accumulator = createRGBAccumulator();
  for (let offset = 0; offset < values.length; offset += 3) {
    const r = values[offset] ?? 0;
    const g = values[offset + 1] ?? 0;
    const b = values[offset + 2] ?? 0;
    if (![r, g, b].every(Number.isFinite)) {
      accumulator.invalidValueCount += countInvalidValues(r, g, b);
      continue;
    }
    addRGBSample(accumulator, r, g, b);
  }
  return summarizeRGB(accumulator);
}

function summarizeRGB(accumulator: RGBAccumulator): ProbeRGBStatistics {
  const count = accumulator.sampleCount;
  const luminances = accumulator.luminances.sort((a, b) => a - b);
  const minRGB: [number, number, number] = count ? [...accumulator.minRGB] : [0, 0, 0];
  const maxRGB: [number, number, number] = count ? [...accumulator.maxRGB] : [0, 0, 0];
  const averageRGB: [number, number, number] = count
    ? (accumulator.sumRGB.map((value) => value / count) as [number, number, number])
    : [0, 0, 0];
  const averageLuminance = count ? luminances.reduce((sum, value) => sum + value, 0) / count : 0;
  return {
    sampleCount: count,
    minRGB,
    maxRGB,
    averageRGB,
    minLuminance: luminances[0] ?? 0,
    maxLuminance: luminances[luminances.length - 1] ?? 0,
    averageLuminance,
    luminancePercentiles: {
      p10: percentile(luminances, 0.1),
      p50: percentile(luminances, 0.5),
      p90: percentile(luminances, 0.9),
      p99: percentile(luminances, 0.99),
    },
    nonZeroCount: accumulator.nonZeroCount,
    nonZeroPercentage: count ? (accumulator.nonZeroCount / count) * 100 : 0,
    effectivelyBlackCount: accumulator.effectivelyBlackCount,
    effectivelyBlackPercentage: count ? (accumulator.effectivelyBlackCount / count) * 100 : 0,
    invalidValueCount: accumulator.invalidValueCount,
  };
}

function summarizeBlackProbeLocations(
  values: Float32Array,
  volume: ProbeVolume,
  source: ProbeBakeSource,
): ProbeBlackSpatialStatistics {
  const [nx, ny, nz] = volume.counts;
  const min: [number, number, number] = [Infinity, Infinity, Infinity];
  const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
  let boundaryCount = 0;
  let interiorCount = 0;
  let insideGeometryBoundsCount = 0;
  let interiorOpenSpaceCount = 0;
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const index = x + nx * (y + ny * z);
        const offset = index * 3;
        const r = values[offset] ?? 0;
        const g = values[offset + 1] ?? 0;
        const b = values[offset + 2] ?? 0;
        if (![r, g, b].every(Number.isFinite) || Math.max(r, g, b) > BLACK_THRESHOLD) continue;
        const px = volume.bounds.min.x + volume.spacing.x * x;
        const py = volume.bounds.min.y + volume.spacing.y * y;
        const pz = volume.bounds.min.z + volume.spacing.z * z;
        min[0] = Math.min(min[0], px);
        min[1] = Math.min(min[1], py);
        min[2] = Math.min(min[2], pz);
        max[0] = Math.max(max[0], px);
        max[1] = Math.max(max[1], py);
        max[2] = Math.max(max[2], pz);
        const boundary =
          x === 0 || y === 0 || z === 0 || x === nx - 1 || y === ny - 1 || z === nz - 1;
        const insideGeometry = source.groups.some((group) =>
          group.meshes.some((mesh) => {
            if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
            if (!mesh.geometry.boundingBox) return false;
            const localPosition = volume.getPosition(index);
            mesh.worldToLocal(localPosition);
            return mesh.geometry.boundingBox.containsPoint(localPosition);
          }),
        );
        if (insideGeometry) insideGeometryBoundsCount++;
        if (boundary) {
          boundaryCount++;
        } else {
          interiorCount++;
          if (!insideGeometry) interiorOpenSpaceCount++;
        }
      }
    }
  }
  return {
    boundaryCount,
    interiorCount,
    insideGeometryBoundsCount,
    openSpaceCount: boundaryCount + interiorCount - insideGeometryBoundsCount,
    interiorOpenSpaceCount,
    bounds: boundaryCount + interiorCount > 0 ? { min, max } : null,
  };
}

function percentile(sorted: number[], quantile: number): number {
  if (!sorted.length) return 0;
  const position = (sorted.length - 1) * quantile;
  const low = Math.floor(position);
  const high = Math.ceil(position);
  if (low === high) return sorted[low] ?? 0;
  const t = position - low;
  return (sorted[low] ?? 0) * (1 - t) + (sorted[high] ?? 0) * t;
}

function countInvalidValues(...values: number[]): number {
  return values.reduce((count, value) => count + (Number.isFinite(value) ? 0 : 1), 0);
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
  if (!Number.isFinite(value) || value < 0)
    throw new Error(`[baker:probes] ${name} must be finite and >= 0`);
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
