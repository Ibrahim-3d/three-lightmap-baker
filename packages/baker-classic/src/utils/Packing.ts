import { Mesh, Vector3 } from 'three';

/**
 * Lightmap atlas bin-packing — density-aware.
 *
 * Goal: assign N meshes to M atlases so that each atlas is filled close to (but
 * not over) its capacity. The user picks ONE knob — `texelsPerMeter` — which
 * determines how many lightmap texels each square world-meter of surface gets.
 * Meshes with more world-space surface need more texels and therefore more
 * atlas area; small props share an atlas, big walls/floors get their own.
 *
 * This file is pure math + a greedy bin-packer. It does NOT touch the GPU,
 * does NOT modify geometry, does NOT call xatlas. The demo (and `LightmapBaker`)
 * consume the assignment list to drive per-atlas xatlas packs and per-atlas
 * bake passes downstream.
 */

const v0 = new Vector3();
const v1 = new Vector3();
const v2 = new Vector3();
const e1 = new Vector3();
const e2 = new Vector3();
const cr = new Vector3();

/**
 * Sum of triangle areas in WORLD space. Walks the geometry's index buffer
 * (or vertex buffer if non-indexed) and applies `mesh.matrixWorld` to each
 * vertex before computing the triangle's cross-product / 2 area.
 *
 * Caller must have flushed `scene.updateMatrixWorld(true)` first — this
 * function reads `matrixWorld` directly without re-computing.
 *
 * Returns 0 for meshes with no position attribute (treated as no-op).
 */
export function computeMeshSurfaceArea(mesh: Mesh): number {
  const g = mesh.geometry;
  const posAttr = g.attributes.position;
  if (!posAttr) return 0;

  const m = mesh.matrixWorld;
  let area = 0;

  const triArea = (ai: number, bi: number, ci: number): number => {
    v0.fromBufferAttribute(posAttr, ai).applyMatrix4(m);
    v1.fromBufferAttribute(posAttr, bi).applyMatrix4(m);
    v2.fromBufferAttribute(posAttr, ci).applyMatrix4(m);
    e1.subVectors(v1, v0);
    e2.subVectors(v2, v0);
    cr.crossVectors(e1, e2);
    return cr.length() * 0.5;
  };

  if (g.index) {
    const idx = g.index.array;
    for (let i = 0; i < idx.length; i += 3) {
      area += triArea(idx[i] as number, idx[i + 1] as number, idx[i + 2] as number);
    }
  } else {
    for (let i = 0; i < posAttr.count; i += 3) {
      area += triArea(i, i + 1, i + 2);
    }
  }

  return area;
}

export interface BinPackOptions {
  /** Atlas side length in texels (e.g. 1024). All atlases share this size. */
  atlasResolution: number;
  /**
   * Target texel density — texels per world unit (typically meters).
   * Higher = more lightmap detail per mesh, more atlases required.
   */
  texelsPerMeter: number;
  /**
   * Per-mesh density multiplier keyed by `mesh.uuid`. 2.0 = double density,
   * 0.5 = half. Used by an "Important This Mesh" UI knob. Missing entries
   * default to 1.0.
   */
  perMeshScale?: Record<string, number>;
  /**
   * Per-bin fill safety margin. Default 0.95. xatlas chart packing rarely
   * achieves 100% efficiency; leaving a 5% headroom prevents the last mesh
   * placed in a bin from causing chart overflow that triggers a re-pack.
   */
  fillRatio?: number;
}

export interface BinAssignment {
  /** 0-indexed atlas this mesh is assigned to. */
  atlasIdx: number;
  mesh: Mesh;
  /** Fraction of one atlas this mesh occupies (0..1) at its requested density. */
  uvFraction: number;
  /** World-space surface area (units²). Cached for downstream debug logging. */
  surfaceArea: number;
}

/**
 * Greedy first-fit-decreasing bin-pack. One "bin" = one atlas of side
 * `atlasResolution`. Each mesh's UV demand is proportional to its world-space
 * surface area times `texelsPerMeter²`.
 *
 * Algorithm:
 *  1. Compute per-mesh `uvFraction = surfaceArea * texelsPerMeter² / atlasTexels`.
 *  2. Sort meshes largest-first.
 *  3. For each mesh, place it in the first existing bin whose
 *     `currentFill + uvFraction <= fillRatio`. If none fits, open a new bin.
 *
 * If a single mesh's `uvFraction` exceeds `fillRatio` (one mesh demands more
 * than one atlas can hold at the target density), it's clamped to `fillRatio`
 * and gets its own atlas — its effective density falls below the user's target,
 * which the texel-density debug visualization will surface as a red band.
 *
 * Returns one `BinAssignment` per input mesh, in input order (not sort order).
 */
export function binPackMeshes(meshes: Mesh[], opts: BinPackOptions): BinAssignment[] {
  const fillRatio = opts.fillRatio ?? 0.95;
  const atlasTexels = opts.atlasResolution * opts.atlasResolution;
  const tpm2 = opts.texelsPerMeter * opts.texelsPerMeter;

  type Item = {
    mesh: Mesh;
    inputIdx: number;
    surfaceArea: number;
    uvFraction: number;
  };

  const items: Item[] = meshes.map((mesh, inputIdx) => {
    const surfaceArea = computeMeshSurfaceArea(mesh);
    const scale = opts.perMeshScale?.[mesh.uuid] ?? 1.0;
    const texelsNeeded = surfaceArea * tpm2 * scale * scale;
    const uvFraction = atlasTexels > 0 ? texelsNeeded / atlasTexels : 0;
    return { mesh, inputIdx, surfaceArea, uvFraction };
  });

  // Sort descending — first-fit-decreasing minimizes wasted space.
  const sorted = [...items].sort((a, b) => b.uvFraction - a.uvFraction);

  const binFills: number[] = [];
  const out: BinAssignment[] = new Array(meshes.length);

  for (const item of sorted) {
    let frac = item.uvFraction;
    if (frac > fillRatio) {
      // Single mesh too big for one atlas at the target density. Clamp + warn.
      // Effective density of this mesh will be ~sqrt(fillRatio / uvFraction)
      // times the target — the texel-density debug layer makes this visible.
      const tag =
        item.mesh.name ||
        `Mesh ${item.inputIdx + 1} (${item.mesh.geometry.type.replace('Geometry', '')})`;
      console.warn(
        `[baker] mesh "${tag}" wants ${(frac * 100).toFixed(0)}% of one ${opts.atlasResolution}² atlas at ${opts.texelsPerMeter} texels/m — clamping to ${(fillRatio * 100).toFixed(0)}% (effective density reduced)`,
      );
      frac = fillRatio;
    }

    let placedBin = -1;
    for (let i = 0; i < binFills.length; i++) {
      if (binFills[i]! + frac <= fillRatio) {
        binFills[i] = binFills[i]! + frac;
        placedBin = i;
        break;
      }
    }
    if (placedBin < 0) {
      placedBin = binFills.length;
      binFills.push(frac);
    }

    out[item.inputIdx] = {
      atlasIdx: placedBin,
      mesh: item.mesh,
      uvFraction: frac,
      surfaceArea: item.surfaceArea,
    };
  }

  return out;
}
