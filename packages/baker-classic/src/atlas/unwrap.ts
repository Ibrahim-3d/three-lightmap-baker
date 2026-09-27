import { BufferAttribute, type BufferGeometry } from 'three';
import type { PackOptions } from 'xatlas-three';
import { AtlasWorker } from './AtlasWorker';
import { BakeError } from '../errors';

export type PackedAtlas = {
  width: number;
  height: number;
  atlasCount: number;
  meshCount: number;
  meshes: Array<{
    mesh: string;
    vertexCount: number;
    index: Uint16Array;
    oldIndexes: Uint16Array;
    vertex: {
      vertices: Float32Array;
      normals?: Float32Array;
      coords?: Float32Array;
      coords1: Float32Array;
    };
    subMeshes?: Array<{ index: number; count: number; atlasIndex: number }>;
  }>;
};

/** Commit only complete worker output; callers retain snapshots across packing retries. */
export async function unwrapGeometry(
  worker: AtlasWorker,
  geometries: BufferGeometry[],
  options: PackOptions,
): Promise<PackedAtlas> {
  await worker.call('createAtlas');
  for (const geometry of geometries) {
    const position = geometry.getAttribute('position');
    const index = geometry.index;
    // xatlasjs 0.2.0 copies input and output indices through Uint16Array.
    if (
      !index ||
      position.itemSize !== 3 ||
      position.count > 65535 ||
      Array.from(index.array).some((value) => value < 0 || value >= position.count || value > 65535)
    ) {
      throw new BakeError(
        'xatlas requires indexed geometry with at most 65535 vertices; split this mesh before baking',
        'unwrap',
      );
    }
    const added = await worker.call(
      'addMesh',
      index.array,
      position.array,
      geometry.getAttribute('normal')?.array,
      geometry.getAttribute('uv')?.array,
      geometry.uuid,
      false,
      false,
      geometry.userData.worldScale ?? 1,
    );
    if (!added) throw new BakeError('xatlas rejected input geometry', 'unwrap');
  }
  const atlas = await worker.call<PackedAtlas>('generateAtlas', {}, options, true);
  if (
    atlas.meshCount !== geometries.length ||
    atlas.meshes.length !== geometries.length ||
    new Set(atlas.meshes.map((mesh) => mesh.mesh)).size !== geometries.length
  )
    throw new BakeError('xatlas returned incomplete geometry', 'unwrap');
  for (const output of atlas.meshes) {
    const geometry = geometries.find((g) => g.uuid === output.mesh);
    if (
      !geometry ||
      output.vertexCount > 65535 ||
      output.vertexCount !== output.oldIndexes.length ||
      output.vertex.coords1.length !== output.vertexCount * 2 ||
      output.index.length !== geometry.index?.count ||
      Array.from(output.oldIndexes).some((i) => i >= geometry.getAttribute('position').count) ||
      Array.from(output.index).some((i) => i >= output.vertexCount)
    )
      throw new BakeError(
        'xatlas returned invalid or overflowing geometry; split the mesh',
        'unwrap',
      );
  }
  for (const output of atlas.meshes) {
    const geometry = geometries.find((g) => g.uuid === output.mesh);
    if (!geometry) throw new BakeError('xatlas returned unknown geometry', 'unwrap');
    // Remap every attribute from the original vertex, preserving its type and normalization.
    for (const [name, attribute] of Object.entries(geometry.attributes)) {
      const original = attribute as BufferAttribute;
      const ArrayType = original.array.constructor as {
        new (length: number): typeof original.array;
      };
      const remapped = new BufferAttribute(
        new ArrayType(output.vertexCount * original.itemSize),
        original.itemSize,
        original.normalized,
      );
      remapped.gpuType = original.gpuType;
      for (let i = 0; i < output.vertexCount; i++)
        for (let component = 0; component < original.itemSize; component++)
          remapped.array[i * original.itemSize + component] = original.array[
            (output.oldIndexes[i] as number) * original.itemSize + component
          ] as number;
      geometry.setAttribute(name, remapped);
    }
    geometry.setAttribute('uv2', new BufferAttribute(output.vertex.coords1, 2));
    geometry.setIndex(new BufferAttribute(output.index, 1));
    geometry.userData.xAtlasSubMeshes = output.subMeshes;
  }
  await worker.call('destroyAtlas');
  return atlas;
}
