// Module augmentation — adds `shaderIntersectFunction` (shipped in upstream's
// index.js but omitted from index.d.ts). The empty `export {}` below is what
// makes this file a module, which in turn makes `declare module` an augmentation
// rather than a full replacement of the upstream type definitions.
import 'three-mesh-bvh';

declare module 'three-mesh-bvh' {
  export const shaderIntersectFunction: string;
}

export {};
