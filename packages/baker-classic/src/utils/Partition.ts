import { Mesh } from 'three';
import { binPackMeshes } from './Packing';

/**
 * Mesh partitioning for the public LightmapBaker.bake() pipeline.
 *
 * Two orthogonal strategies:
 *
 *  1. Resolution mode - meshes share atlases keyed by `resolution`.
 *     A mesh with `perMesh[uuid].resolution = 2048` lands in its own 2048²
 *     atlas group; meshes without an override go into the `globalRes` group.
 *
 *  2. Density mode - meshes are bin-packed by world-space surface area.
 *     Triggered when the bake call passes `texelsPerMeter`. All packed
 *     atlases share `atlasResolution`; per-mesh `density` weights atlas
 *     demand. Meshes that can't fit one atlas at target density auto-spawn
 *     additional atlases via `binPackMeshes`.
 *
 * Excluded meshes are never assigned to a group, but the caller still
 * builds the BVH from ALL meshes (excluded ones cast shadows + contribute
 * GI without receiving a lightmap).
 */

export type PerMeshOverride = {
  resolution?: number;
  density?: number;
  exclude?: boolean;
};

export type Partition = {
  /** Meshes skipped entirely - no UV unwrap, no lightmap. */
  excluded: Mesh[];
  /** Group key → meshes. Key semantics depend on mode (resolution vs atlasIdx). */
  groups: Map<number, Mesh[]>;
  /** All packed groups share this lightmap side length. */
  resolution: number;
};

/**
 * Resolution-keyed partition. Group keys are the resolution in texels.
 * Always returns at least one group (containing all non-excluded meshes
 * at `globalRes`) when no `perMesh.resolution` overrides apply.
 */
export function partitionByResolution(
  meshes: Mesh[],
  perMesh: Record<string, PerMeshOverride>,
  globalRes: number,
): Partition {
  const excluded: Mesh[] = [];
  const groups = new Map<number, Mesh[]>();
  for (const m of meshes) {
    const override = perMesh[m.uuid] ?? {};
    if (override.exclude === true) {
      excluded.push(m);
      continue;
    }
    const res = override.resolution ?? globalRes;
    if (!groups.has(res)) groups.set(res, []);
    groups.get(res)!.push(m);
  }
  if (groups.size === 0 && excluded.length < meshes.length) {
    groups.set(
      globalRes,
      meshes.filter((m) => !perMesh[m.uuid]?.exclude),
    );
  }
  return { excluded, groups, resolution: globalRes };
}

/**
 * Density-keyed partition via bin-packing. Group keys are atlas indices
 * (0, 1, 2, …) - all atlases share `atlasResolution`. The number of groups
 * is determined by the packer based on world-space surface area + density.
 *
 * Per-mesh `resolution` overrides are IGNORED in this mode (they're
 * mutually exclusive with density-aware sizing). The caller is expected
 * to surface a DEV warning when both are set.
 */
export function partitionByDensity(
  meshes: Mesh[],
  perMesh: Record<string, PerMeshOverride>,
  atlasResolution: number,
  texelsPerMeter: number,
): Partition {
  const excluded: Mesh[] = [];
  const eligible: Mesh[] = [];
  for (const m of meshes) {
    if (perMesh[m.uuid]?.exclude === true) excluded.push(m);
    else eligible.push(m);
  }

  // Build perMeshScale from per-mesh density values.
  const perMeshScale: Record<string, number> = {};
  for (const m of eligible) {
    const d = perMesh[m.uuid]?.density;
    if (d !== undefined && d !== 1.0) perMeshScale[m.uuid] = d;
  }

  const groups = new Map<number, Mesh[]>();
  if (eligible.length === 0) {
    return { excluded, groups, resolution: atlasResolution };
  }

  const assignments = binPackMeshes(eligible, {
    atlasResolution,
    texelsPerMeter,
    perMeshScale,
  });

  // Group meshes by atlas index - preserves input order within each group.
  for (let i = 0; i < eligible.length; i++) {
    const a = assignments[i]!;
    if (!groups.has(a.atlasIdx)) groups.set(a.atlasIdx, []);
    groups.get(a.atlasIdx)!.push(a.mesh);
  }

  return { excluded, groups, resolution: atlasResolution };
}
