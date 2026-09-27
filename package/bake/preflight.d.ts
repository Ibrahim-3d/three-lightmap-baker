import { type Object3D } from 'three';
export type BakeSceneIssue = {
    severity: 'error' | 'warning';
    object: string;
    message: string;
};
/** Diagnose unsupported scene data before UV edits or GPU allocations. */
export declare function preflightBakeScene(scene: Object3D): BakeSceneIssue[];
//# sourceMappingURL=preflight.d.ts.map