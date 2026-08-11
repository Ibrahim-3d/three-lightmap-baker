import type { Mesh, MeshStandardMaterial, Texture } from 'three';
export type MeshLightmapBinding = {
    mesh: Mesh;
    lightMap: Texture;
};
export type MountLightmapOptions = {
    intensity?: number;
    temporary?: boolean;
    /** Package-owned persistent layer: clone every bound material and restore/dispose on cleanup. */
    persistent?: boolean;
    resolveBaseColorMap?: (mesh: Mesh, material: MeshStandardMaterial) => Texture | null | undefined;
};
/**
 * Mount per-mesh lightmaps without allowing one shared material object to be
 * assigned conflicting textures. Temporary capture uses the source material
 * for one variant and clones only conflicts. Persistent mounting clones every
 * bound variant so owners outside `bindings` can never be mutated indirectly.
 *
 * Managed mounts return an exception-safe cleanup callback. Temporary cleanup
 * restores exact material references/state; persistent cleanup restores bound
 * owners and disposes every package-owned clone.
 */
export declare function mountMeshLightmaps(bindings: Iterable<MeshLightmapBinding>, options?: MountLightmapOptions): () => void;
//# sourceMappingURL=LightmapMaterials.d.ts.map