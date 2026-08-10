import { Box3, Color, Vector3 } from 'three';
import type { ProbeVolumeJSON } from './types';

const EPSILON = 1.0e-8;

type AxisSample = {
  low: number;
  high: number;
  t: number;
};

/** CPU-side regular probe grid with baker-normalized RGB irradiance and trilinear sampling. */
export class ProbeVolume {
  readonly bounds: Box3;
  readonly counts: [number, number, number];
  readonly spacing: Vector3;
  readonly irradiance: Float32Array;

  constructor(bounds: Box3, counts: readonly [number, number, number], irradiance?: Float32Array) {
    if (bounds.isEmpty()) throw new Error('[baker:probes] probe bounds cannot be empty');

    const normalizedCounts: [number, number, number] = [
      ProbeVolume.validateCount(counts[0], 'x'),
      ProbeVolume.validateCount(counts[1], 'y'),
      ProbeVolume.validateCount(counts[2], 'z'),
    ];
    const probeCount = normalizedCounts[0] * normalizedCounts[1] * normalizedCounts[2];
    const expectedValues = probeCount * 3;
    if (irradiance && irradiance.length !== expectedValues) {
      throw new Error(
        `[baker:probes] irradiance length ${irradiance.length} does not match ${expectedValues}`,
      );
    }

    this.bounds = bounds.clone();
    this.counts = normalizedCounts;
    const size = this.bounds.getSize(new Vector3());
    this.spacing = new Vector3(
      normalizedCounts[0] > 1 ? size.x / (normalizedCounts[0] - 1) : 0,
      normalizedCounts[1] > 1 ? size.y / (normalizedCounts[1] - 1) : 0,
      normalizedCounts[2] > 1 ? size.z / (normalizedCounts[2] - 1) : 0,
    );
    this.irradiance = irradiance ? irradiance.slice() : new Float32Array(expectedValues);
  }

  get probeCount(): number {
    return this.counts[0] * this.counts[1] * this.counts[2];
  }

  index(x: number, y: number, z: number): number {
    const [nx, ny, nz] = this.counts;
    if (
      !Number.isInteger(x) ||
      !Number.isInteger(y) ||
      !Number.isInteger(z) ||
      x < 0 ||
      y < 0 ||
      z < 0 ||
      x >= nx ||
      y >= ny ||
      z >= nz
    ) {
      throw new RangeError(`[baker:probes] probe coordinate out of range: ${x}, ${y}, ${z}`);
    }
    return x + nx * (y + ny * z);
  }

  getPosition(index: number, target: Vector3 = new Vector3()): Vector3 {
    this.validateIndex(index);
    const [nx, ny] = this.counts;
    const x = index % nx;
    const yz = Math.floor(index / nx);
    const y = yz % ny;
    const z = Math.floor(yz / ny);
    return target.set(
      this.bounds.min.x + this.spacing.x * x,
      this.bounds.min.y + this.spacing.y * y,
      this.bounds.min.z + this.spacing.z * z,
    );
  }

  getIrradiance(index: number, target: Color = new Color()): Color {
    this.validateIndex(index);
    const offset = index * 3;
    return target.setRGB(
      this.irradiance[offset] ?? 0,
      this.irradiance[offset + 1] ?? 0,
      this.irradiance[offset + 2] ?? 0,
    );
  }

  setIrradiance(index: number, color: Color): this {
    this.validateIndex(index);
    const offset = index * 3;
    this.irradiance[offset] = color.r;
    this.irradiance[offset + 1] = color.g;
    this.irradiance[offset + 2] = color.b;
    return this;
  }

  /** Sample the volume at a world-space point. Points outside the volume clamp to its edge. */
  sample(position: Vector3, target: Color = new Color()): Color {
    const x = this.axisSample(position.x, this.bounds.min.x, this.bounds.max.x, this.counts[0]);
    const y = this.axisSample(position.y, this.bounds.min.y, this.bounds.max.y, this.counts[1]);
    const z = this.axisSample(position.z, this.bounds.min.z, this.bounds.max.z, this.counts[2]);

    let r = 0;
    let g = 0;
    let b = 0;
    for (let dz = 0; dz <= 1; dz++) {
      const zi = dz === 0 ? z.low : z.high;
      const wz = dz === 0 ? 1 - z.t : z.t;
      for (let dy = 0; dy <= 1; dy++) {
        const yi = dy === 0 ? y.low : y.high;
        const wy = dy === 0 ? 1 - y.t : y.t;
        for (let dx = 0; dx <= 1; dx++) {
          const xi = dx === 0 ? x.low : x.high;
          const wx = dx === 0 ? 1 - x.t : x.t;
          const weight = wx * wy * wz;
          if (weight <= 0) continue;
          const offset = this.index(xi, yi, zi) * 3;
          r += (this.irradiance[offset] ?? 0) * weight;
          g += (this.irradiance[offset + 1] ?? 0) * weight;
          b += (this.irradiance[offset + 2] ?? 0) * weight;
        }
      }
    }
    return target.setRGB(r, g, b);
  }

  clone(): ProbeVolume {
    return new ProbeVolume(this.bounds, this.counts, this.irradiance);
  }

  toJSON(): ProbeVolumeJSON {
    return {
      version: 1,
      bounds: {
        min: [this.bounds.min.x, this.bounds.min.y, this.bounds.min.z],
        max: [this.bounds.max.x, this.bounds.max.y, this.bounds.max.z],
      },
      counts: [...this.counts],
      irradiance: Array.from(this.irradiance),
    };
  }

  static fromJSON(json: ProbeVolumeJSON): ProbeVolume {
    if (json.version !== 1) {
      throw new Error(`[baker:probes] unsupported probe volume version: ${String(json.version)}`);
    }
    const bounds = new Box3(new Vector3(...json.bounds.min), new Vector3(...json.bounds.max));
    return new ProbeVolume(bounds, json.counts, new Float32Array(json.irradiance));
  }

  private axisSample(value: number, min: number, max: number, count: number): AxisSample {
    if (count <= 1 || Math.abs(max - min) <= EPSILON) return { low: 0, high: 0, t: 0 };
    const normalized = Math.min(1, Math.max(0, (value - min) / (max - min))) * (count - 1);
    const low = Math.floor(normalized);
    const high = Math.min(count - 1, low + 1);
    return { low, high, t: normalized - low };
  }

  private validateIndex(index: number): void {
    if (!Number.isInteger(index) || index < 0 || index >= this.probeCount) {
      throw new RangeError(`[baker:probes] probe index out of range: ${index}`);
    }
  }

  private static validateCount(value: number, axis: string): number {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error(`[baker:probes] ${axis} probe count must be a positive integer`);
    }
    return value;
  }
}
