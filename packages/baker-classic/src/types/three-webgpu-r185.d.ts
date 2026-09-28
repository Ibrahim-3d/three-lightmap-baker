declare module 'three/webgpu' {
  export { HalfFloatType, LinearFilter, RenderTarget, Texture } from 'three';

  import type { Camera, Material, Mesh, Object3D, RenderTarget } from 'three';

  export class NodeMaterial extends Material {
    fragmentNode: unknown;
  }

  export class WebGPURenderer {
    autoClear: boolean;
    getRenderTarget(): RenderTarget | null;
    setRenderTarget(target: RenderTarget | null): void;
    render(object: Object3D, camera: Camera): void;
  }

  export class QuadMesh extends Mesh {
    constructor(material?: Material | null);
    render(renderer: WebGPURenderer): void;
  }
}

declare module 'three/tsl' {
  import type { Texture } from 'three';

  export function texture(value: Texture): unknown;
}
