import type { Material, Mesh, MeshStandardMaterial, Texture } from 'three';

type StandardMaterial = MeshStandardMaterial & { _originalMap?: Texture | null };

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

type Usage = {
  mesh: Mesh;
  slot: number;
  source: StandardMaterial;
  lightMap: Texture;
  map: Texture | null;
};

type MaterialState = {
  material: StandardMaterial;
  map: Texture | null;
  lightMap: Texture | null;
  lightMapIntensity: number;
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
export function mountMeshLightmaps(
  bindings: Iterable<MeshLightmapBinding>,
  options: MountLightmapOptions = {},
): () => void {
  const intensity = options.intensity ?? 1;
  if (options.temporary && options.persistent) {
    throw new Error('[baker] a lightmap material mount cannot be temporary and persistent');
  }
  const managed = options.temporary === true || options.persistent === true;
  const originalAssignments = new Map<Mesh, Material | Material[]>();
  const usagesByMaterial = new Map<StandardMaterial, Usage[]>();
  const materialStates: MaterialState[] = [];
  const clonedMaterials = new Set<StandardMaterial>();
  const lightMapChannels = new Map<Texture, number>();
  const mountedAssignments = new Map<Mesh, Material | Material[]>();
  let restored = false;

  for (const { mesh, lightMap } of bindings) {
    originalAssignments.set(mesh, mesh.material);
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (let slot = 0; slot < materials.length; slot++) {
      const candidate = materials[slot];
      if (!isStandardMaterial(candidate)) continue;
      const resolvedMap = options.resolveBaseColorMap?.(mesh, candidate);
      const usage: Usage = {
        mesh,
        slot,
        source: candidate,
        lightMap,
        map: resolvedMap === undefined ? candidate.map : resolvedMap,
      };
      const usages = usagesByMaterial.get(candidate);
      if (usages) usages.push(usage);
      else usagesByMaterial.set(candidate, [usage]);
    }
  }

  const restore = (): void => {
    if (restored) return;
    restored = true;
    if (managed) {
      for (const [mesh, material] of originalAssignments) {
        if (options.temporary || mesh.material === mountedAssignments.get(mesh)) {
          mesh.material = material;
        }
      }
      for (const state of materialStates) {
        state.material.map = state.map;
        state.material.lightMap = state.lightMap;
        state.material.lightMapIntensity = state.lightMapIntensity;
        state.material.needsUpdate = true;
      }
      for (const [texture, channel] of lightMapChannels) texture.channel = channel;
      for (const material of clonedMaterials) material.dispose();
    }
  };

  try {
    const replacements = new Map<Mesh, Map<number, StandardMaterial>>();
    const configured = new Set<StandardMaterial>();

    for (const [source, usages] of usagesByMaterial) {
      const variants: Array<{
        lightMap: Texture;
        map: Texture | null;
        material: StandardMaterial;
      }> = [];
      for (const usage of usages) {
        let variant = variants.find(
          (candidate) => candidate.lightMap === usage.lightMap && candidate.map === usage.map,
        );
        if (!variant) {
          const material =
            variants.length === 0 && !options.persistent
              ? source
              : (source.clone() as StandardMaterial);
          if (material !== source) clonedMaterials.add(material);
          if (options.persistent) {
            material.userData = {
              ...material.userData,
              bakerOwnedLightmapMaterial: true,
            };
          }
          variant = { lightMap: usage.lightMap, map: usage.map, material };
          variants.push(variant);
        }
        let meshReplacements = replacements.get(usage.mesh);
        if (!meshReplacements) {
          meshReplacements = new Map();
          replacements.set(usage.mesh, meshReplacements);
        }
        meshReplacements.set(usage.slot, variant.material);

        if (!configured.has(variant.material)) {
          configured.add(variant.material);
          if (options.temporary && variant.material === source) {
            materialStates.push({
              material: source,
              map: source.map,
              lightMap: source.lightMap,
              lightMapIntensity: source.lightMapIntensity,
            });
          }
          if (!lightMapChannels.has(usage.lightMap)) {
            lightMapChannels.set(usage.lightMap, usage.lightMap.channel);
          }
          variant.material.map = usage.map;
          variant.material.lightMap = usage.lightMap;
          usage.lightMap.channel = 2;
          variant.material.lightMapIntensity = intensity;
          variant.material.needsUpdate = true;
        }
      }
    }

    for (const [mesh, slotReplacements] of replacements) {
      const original = originalAssignments.get(mesh);
      if (!original) continue;
      if (Array.isArray(original)) {
        let changed = false;
        const next = original.map((material, slot) => {
          const replacement = slotReplacements.get(slot) ?? material;
          if (replacement !== material) changed = true;
          return replacement;
        });
        if (changed) mesh.material = next;
      } else {
        const replacement = slotReplacements.get(0);
        if (replacement && replacement !== original) mesh.material = replacement;
      }
      mountedAssignments.set(mesh, mesh.material);
    }
  } catch (error) {
    if (managed) restore();
    throw error;
  }

  return restore;
}

function isStandardMaterial(value: unknown): value is StandardMaterial {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial === true
  );
}
