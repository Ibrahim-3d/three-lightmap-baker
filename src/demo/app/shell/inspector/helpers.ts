import { Color, type Object3D, type Mesh, type MeshStandardMaterial } from 'three';
import { getOrchestrator } from '../../../state/orchestrator';
import { isStale, objectTick, optionsTick, sceneTree } from '../../../state/signals';

/** Find the selected scene Object3D by id. Returns null when nothing is selected. */
export function lookupSelected(id: string | null): Object3D | null {
    if (!id) return null;
    const app = getOrchestrator();
    if (!app) return null;
    return app.sceneController.lookupObject(id);
}

export function isMesh(obj: Object3D | null): obj is Mesh {
    return !!obj && (obj as Mesh).isMesh === true;
}

export function meshMaterial(mesh: Mesh): MeshStandardMaterial | null {
    const mat = mesh.material;
    if (Array.isArray(mat)) return null;
    return mat as MeshStandardMaterial;
}

/** Convert THREE Color to "#rrggbb". */
export function colorToHex(c: Color): string {
    return `#${c.getHexString()}`;
}

/** Apply a "#rrggbb" string to a THREE Color (sRGB → linear). */
export function hexToColor(c: Color, hex: string): void {
    c.set(hex).convertSRGBToLinear();
}

/** Bump signals so Preact re-renders inspector fields after a write. */
export function bumpOptions(): void {
    optionsTick.value++;
}

export function bumpObject(): void {
    objectTick.value++;
}

/** Refresh the visible-state slice of sceneTree from THREE truth. */
export function refreshTreeFromScene(): void {
    const app = getOrchestrator();
    if (!app) return;
    sceneTree.value = app.getSceneTree();
}

/** Flag a re-bake is needed. */
export function markStale(): void {
    isStale.value = true;
}
