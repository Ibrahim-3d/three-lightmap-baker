import {
  BufferAttribute,
  Color,
  Group,
  Mesh,
  type BufferGeometry,
  type InstancedMesh,
  type Material,
  type MeshStandardMaterial,
  type Object3D,
} from 'three';
import type { PerMeshOverride } from '../utils/Partition';
import { isBakeVisible } from './visibility';

/** Clone receiver geometry and expand static instances for independent UV charts. */
export function prepareBakeScene(
  scene: Object3D,
  perMesh: Record<string, PerMeshOverride>,
): { meshes: Mesh[]; perMesh: Record<string, PerMeshOverride>; restore: () => void } {
  const sources: Mesh[] = [];
  scene.traverse((object) => {
    if (!(object as Mesh).isMesh || !isBakeVisible(object)) return;
    const mesh = object as Mesh;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (materials.some((m) => (m as MeshStandardMaterial).isMeshStandardMaterial))
      sources.push(mesh);
  });
  const meshes: Mesh[] = [];
  const overrides = { ...perMesh };
  const undos: Array<() => void> = [];
  let restored = false;
  const restore = (): void => {
    if (restored) return;
    restored = true;
    for (const undo of undos.reverse()) undo();
  };
  try {
    for (const mesh of sources) {
      if ((mesh as InstancedMesh).isInstancedMesh) {
        const source = mesh as InstancedMesh;
        const count = source.count;
        const group = new Group();
        const geometries: BufferGeometry[] = [];
        const materials: Material[] = [];
        undos.push(() => {
          group.removeFromParent();
          source.count = count;
          geometries.forEach((g) => g.dispose());
          materials.forEach((m) => m.dispose());
        });
        for (let i = 0; i < count; i++) {
          const color = new Color();
          if (source.instanceColor) source.getColorAt(i, color);
          const originals = Array.isArray(source.material) ? source.material : [source.material];
          const copies = originals.map((m) => {
            const copy = m.clone() as MeshStandardMaterial;
            materials.push(copy);
            if (source.instanceColor && copy.color) copy.color.multiply(color);
            return copy;
          });
          const geometry = source.geometry.clone();
          geometries.push(geometry);
          normalizeGeometry(geometry);
          const instance = new Mesh(geometry, Array.isArray(source.material) ? copies : copies[0]);
          instance.name = `${source.name || source.uuid}[${i}]`;
          instance.matrixAutoUpdate = false;
          source.getMatrixAt(i, instance.matrix);
          instance.layers.mask = source.layers.mask;
          instance.castShadow = source.castShadow;
          instance.receiveShadow = source.receiveShadow;
          instance.userData = {
            ...source.userData,
            lightmapSourceInstance: { uuid: source.uuid, index: i },
          };
          group.add(instance);
          meshes.push(instance);
          overrides[instance.uuid] = perMesh[source.uuid] ?? {};
        }
        source.count = 0;
        source.add(group);
      } else {
        const original = mesh.geometry,
          clone = original.clone();
        undos.push(() => {
          if (mesh.geometry === clone) mesh.geometry = original;
          clone.dispose();
        });
        mesh.geometry = clone;
        normalizeGeometry(clone);
        meshes.push(mesh);
      }
    }
    scene.updateWorldMatrix(true, true);
    return { meshes, perMesh: overrides, restore };
  } catch (error) {
    restore();
    throw error;
  }
}
function normalizeGeometry(geometry: BufferGeometry): void {
  for (const [name, attr] of Object.entries(geometry.attributes)) {
    if ('isInterleavedBufferAttribute' in attr) {
      const values = new Float32Array(attr.count * attr.itemSize);
      for (let i = 0; i < attr.count; i++)
        for (let c = 0; c < attr.itemSize; c++)
          values[i * attr.itemSize + c] = attr.getComponent(i, c);
      geometry.setAttribute(name, new BufferAttribute(values, attr.itemSize));
    }
  }
  const position = geometry.getAttribute('position');
  if (!geometry.index) geometry.setIndex(Array.from({ length: position.count }, (_, i) => i));
  if (!geometry.hasAttribute('normal')) geometry.computeVertexNormals();
}
