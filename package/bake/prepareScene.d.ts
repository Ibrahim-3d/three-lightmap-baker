import { Mesh, type Object3D } from 'three';
import type { PerMeshOverride } from '../utils/Partition';
/** Clone receiver geometry and expand static instances for independent UV charts. */
export declare function prepareBakeScene(scene: Object3D, perMesh: Record<string, PerMeshOverride>): {
    meshes: Mesh[];
    perMesh: Record<string, PerMeshOverride>;
    restore: () => void;
};
//# sourceMappingURL=prepareScene.d.ts.map