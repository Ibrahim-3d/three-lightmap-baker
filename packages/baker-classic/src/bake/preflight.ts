import {
  Matrix4,
  type Mesh,
  type InstancedMesh,
  type MeshStandardMaterial,
  type Object3D,
} from 'three';
import { isBakeVisible } from './visibility';

export type BakeSceneIssue = { severity: 'error' | 'warning'; object: string; message: string };
/** Diagnose unsupported scene data before UV edits or GPU allocations. */
export function preflightBakeScene(scene: Object3D): BakeSceneIssue[] {
  const issues: BakeSceneIssue[] = [];
  scene.updateWorldMatrix(true, true);
  scene.traverse((object) => {
    if (!(object as Mesh).isMesh || !isBakeVisible(object)) return;
    const mesh = object as Mesh;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const report = (message: string, severity: 'error' | 'warning' = 'error'): void => {
      issues.push({ severity, object: mesh.name || mesh.uuid, message });
    };
    if (!materials.some((m) => (m as MeshStandardMaterial).isMeshStandardMaterial)) {
      report(
        'Unsupported bake material. Use MeshStandardMaterial or MeshPhysicalMaterial; ShaderMaterial, RawShaderMaterial and node/TSL materials are not supported.',
        'warning',
      );
      return;
    }
    const geometry = mesh.geometry;
    if ('isSkinnedMesh' in mesh || Object.keys(geometry.morphAttributes).length)
      report('Skinned and morph geometry must be frozen before baking.');
    const position = geometry.getAttribute('position');
    if (!position || position.itemSize !== 3 || position.count === 0) {
      report('Missing or invalid positions.');
      return;
    }
    for (const name of ['position', 'normal', 'uv', 'uv1', 'uv2']) {
      const attr = geometry.getAttribute(name);
      if (!attr) continue;
      if (attr.count !== position.count || attr.itemSize !== (name.startsWith('uv') ? 2 : 3))
        report(`Invalid ${name} shape.`);
      let invalid = false;
      for (let i = 0; i < attr.count && !invalid; i++)
        for (let c = 0; c < attr.itemSize; c++) {
          if (!Number.isFinite(attr.getComponent(i, c))) {
            invalid = true;
            break;
          }
        }
      if (invalid) report(`Non-finite ${name} attribute.`);
    }
    const count = geometry.index?.count ?? position.count;
    if (count % 3) report('Geometry must contain complete triangles.');
    if (geometry.index)
      for (let i = 0; i < geometry.index.count; i++) {
        const index = geometry.index.getX(i);
        if (!Number.isInteger(index) || index < 0 || index >= position.count) {
          report('Invalid geometry index.');
          break;
        }
      }
    if (
      geometry.drawRange.start !== 0 ||
      (geometry.drawRange.count !== Infinity && geometry.drawRange.count !== count)
    )
      report('Partial draw ranges must be extracted before baking.');
    for (const group of geometry.groups) {
      if (
        !Number.isInteger(group.start) ||
        !Number.isInteger(group.count) ||
        group.start < 0 ||
        group.count < 0 ||
        group.start % 3 ||
        group.count % 3 ||
        group.start + group.count > count ||
        (Array.isArray(mesh.material) && !materials[group.materialIndex ?? 0])
      )
        report('Invalid material group.');
    }
    const validMatrix = (m: Matrix4): boolean =>
      m.elements.every(Number.isFinite) && Math.abs(m.determinant()) > 1e-12;
    if (!validMatrix(mesh.matrixWorld)) report('Non-finite or singular world transform.');
    if ((mesh as InstancedMesh).isInstancedMesh) {
      const source = mesh as InstancedMesh;
      if (
        !Number.isInteger(source.count) ||
        source.count < 0 ||
        source.count > source.instanceMatrix.count
      )
        report('Invalid instance count.');
      const matrix = new Matrix4();
      for (let i = 0; i < Math.min(source.count, source.instanceMatrix.count); i++) {
        source.getMatrixAt(i, matrix);
        if (!validMatrix(matrix)) {
          report('Non-finite or singular instance transform.');
          break;
        }
      }
    }
    for (const material of materials) {
      const m = material as MeshStandardMaterial & { transmission?: number };
      if (!m.isMeshStandardMaterial)
        report('Mixed unsupported materials use approximate diffuse transport.', 'warning');
      if (
        m.transparent ||
        m.alphaTest > 0 ||
        m.normalMap ||
        m.displacementMap ||
        m.emissiveMap ||
        (m.transmission ?? 0) > 0 ||
        m.vertexColors
      )
        report(
          'Transparency, transmission, vertex colors and mapped surface details are approximated as opaque diffuse transport.',
          'warning',
        );
    }
  });
  return issues;
}
