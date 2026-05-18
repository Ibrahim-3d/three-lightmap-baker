import type { Object3D, Scene } from 'three';
import type { SceneNode } from '../signals/ui';

/**
 * Generic orchestrator interface — the contract `<App/>` and its shell
 * components depend on. The concrete implementation (today
 * `apps/playground/CornellBoxExample.ts`) implements this plus its own
 * package-specific extension.
 *
 * Shell components never touch THREE directly; they go through this contract.
 * Renderer-specific UI (e.g. `BakePage` from baker-classic) casts to its
 * own narrower interface.
 */
export interface Orchestrator {
  setSelection(id: string | null): void;
  setGizmoMode(mode: 'translate' | 'rotate' | 'scale'): void;
  setNodeVisible(id: string, visible: boolean): void;
  getSceneTree(): SceneNode[];
  lookupObject(id: string): Object3D | null;
  loadScenePreset(id: string): Promise<void>;
  getScene(): Scene;

  /**
   * Optional renderer operations. Bake-capable renderers (baker-classic,
   * future pt-baker) implement these; pure-preview renderers do not. Shell
   * surfaces (`<StaleBanner/>`, generic menus) feature-detect.
   */
  requestBake?(): Promise<void>;
  exportSceneGLB?(): Promise<void>;
}

let instance: Orchestrator | null = null;

export function setOrchestrator(o: Orchestrator): void {
  instance = o;
}

export function getOrchestrator(): Orchestrator | null {
  return instance;
}

/**
 * Typed accessor for renderer-specific UI. Each renderer package supplies its
 * own narrower interface (e.g. `BakerOrchestrator`) and uses this to grab the
 * instance with the cast applied once.
 */
export function getOrchestratorAs<T extends Orchestrator>(): T | null {
  return instance as T | null;
}
