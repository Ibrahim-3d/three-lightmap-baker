/**
 * Cross-package primitives. Registries, generic signals, and reusable UI
 * controls live here. Both `demo-shell/` and renderer packages
 * (`baker-classic/`, `pt-renderer/`, etc.) import from here so they
 * never need to import from each other directly.
 */

// Registries — extension points renderers register into at app boot.
export { panelRegistry, panelTick } from './registries/panel-registry';
export type { PanelDescriptor, PanelComponent } from './registries/panel-registry';

export { menuRegistry, menuTick } from './registries/menu-registry';
export type { MenuId, MenuItem } from './registries/menu-registry';

export { getOrchestrator, getOrchestratorAs, setOrchestrator } from './registries/orchestrator';
export type { Orchestrator } from './registries/orchestrator';

export { sceneRegistry } from './registries/scene-registry';
export type {
  ScenePreset,
  SceneBuildResult,
  SceneCategory,
  LicenseInfo,
} from './registries/scene-registry';

// Asset catalog (primitives + lights) used by the shell's asset library.
export { primitiveCatalog, createAsset } from './assets/primitives';
export type { AssetSpec, AssetCategory, PrimitiveDef, LightDef } from './assets/primitives';

// Signals — UI state shared across packages.
export {
  selectedId,
  sceneTree,
  gizmoMode,
  optionsTick,
  objectTick,
  activeSceneId,
  layout,
  logBuffer,
  inspectorTab,
  viewLayers,
  atlasViewerVisible,
  dirtyMeshIds,
  log,
} from './signals/ui';
export type {
  SceneNode,
  SceneNodeKind,
  LogEntry,
  LogLevel,
  ViewLayerDescriptor,
} from './signals/ui';

export {
  bakeStatus,
  bakeProgress,
  isStale,
  renderMode,
  compareMode,
  isBaking,
  ptSettings,
  hdriTexture,
} from './signals/bake';
export type { BakeStatus, PTSettings } from './signals/bake';

// UI primitives — generic fields + helpers used by both shell and panel packages.
export {
  Row,
  Section,
  TextField,
  NumberField,
  RangeField,
  ColorField,
  BoolField,
  SelectField,
} from './ui/Field';

export {
  lookupSelected,
  isMesh,
  meshMaterial,
  colorToHex,
  hexToColor,
  bumpOptions,
  bumpObject,
  refreshTreeFromScene,
  markStale,
} from './ui/helpers';
