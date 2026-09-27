import { BufferAttribute, type BufferGeometry } from 'three';
/** Label UV-connected triangles. Match full edges, never isolated equal UV vertices. */
export declare function createChartIds(geometry: BufferGeometry, firstId?: number): {
    attribute: BufferAttribute;
    nextId: number;
};
//# sourceMappingURL=chartIds.d.ts.map