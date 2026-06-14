import type { Mesh, MeshStandardMaterial, Texture } from 'three';

/** Demo-side mesh handle. `_originalMap` is read by the Albedo render mode. */
export type SceneObj = Mesh & {
  material:
    | (MeshStandardMaterial & { _originalMap?: Texture | null })
    | Array<MeshStandardMaterial & { _originalMap?: Texture | null }>;
};

/** Per-mesh editor overrides feeding the library bake. */
export type PerMeshEntry = { scaleInLightmap: number; exclude: boolean };

export type PerMeshMap = Record<string, PerMeshEntry>;

/** Density viz + render-mode shared option subset. */
export type RenderModeOptions = {
  layer: string;
  texelsPerMeter: number;
  lightMapSize: number;
  directLightEnabled: boolean;
  perMesh: PerMeshMap;
};
