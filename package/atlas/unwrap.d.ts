import { type BufferGeometry } from 'three';
import type { PackOptions } from 'xatlas-three';
import { AtlasWorker } from './AtlasWorker';
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
        subMeshes?: Array<{
            index: number;
            count: number;
            atlasIndex: number;
        }>;
    }>;
};
/** Commit only complete worker output; callers retain snapshots across packing retries. */
export declare function unwrapGeometry(worker: AtlasWorker, geometries: BufferGeometry[], options: PackOptions): Promise<PackedAtlas>;
//# sourceMappingURL=unwrap.d.ts.map