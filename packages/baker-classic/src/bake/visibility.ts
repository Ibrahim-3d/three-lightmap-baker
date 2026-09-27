import type { Object3D } from 'three';
export function isBakeVisible(object: Object3D): boolean {
  for (let current: Object3D | null = object; current; current = current.parent) {
    if (!current.visible || current.userData.lightmapIgnore) return false;
  }
  return true;
}
