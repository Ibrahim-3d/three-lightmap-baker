/**
 * Diagnostics - graphics-engineer-grade instrumentation for the bake pipeline.
 *
 * Goal: when the bake crashes (CONTEXT_LOST) but the symptoms don't match
 * obvious causes (memory, mipmap, filter), surface enough numbers to pinpoint
 * the actual driver state at every boundary.
 *
 * NOT a feature. Pull the wires when the bug is gone.
 */
import { WebGLRenderer } from 'three';
export type DiagSnapshot = {
    label: string;
    t: number;
    glError: string;
    threejs: {
        geometries: number;
        textures: number;
        programs: number;
        calls: number;
        triangles: number;
    };
};
export declare class Diagnostics {
    readonly renderer: WebGLRenderer;
    private start;
    private snapshots;
    private lastCalls;
    private lastTriangles;
    constructor(renderer: WebGLRenderer);
    banner(): void;
    /** Snapshot point. Call at every meaningful boundary. */
    snap(label: string): DiagSnapshot;
    /**
     * Wrap any GL operation, force a sync via gl.finish(), report duration and
     * any error. Slow - use only at boundaries, not hot loops.
     */
    measure<T>(label: string, fn: () => T): T;
    contextLossInfo(): void;
    dump(): DiagSnapshot[];
}
//# sourceMappingURL=Diagnostics.d.ts.map