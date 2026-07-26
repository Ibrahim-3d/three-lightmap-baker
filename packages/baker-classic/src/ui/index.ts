import { panelRegistry } from 'shared';
import { BakePage } from './BakePage';
import { AtlasPage } from './AtlasPage';
import { LightmapPage } from './LightmapPage';
import { LightPage } from './LightPage';
import { ProbesPage } from './ProbesPage';
import { WorldPage } from './WorldPage';
import { registerBakerMenus } from './menus';

/**
 * Public UI surface for baker-classic. The playground app calls
 * `registerBakerClassicUI()` once at boot; this wires the renderer-specific
 * inspector tabs plus the Render menu items and lightmap export actions.
 *
 * Idempotent - the underlying registries replace by `id`.
 */
export function registerBakerClassicUI(): void {
  panelRegistry.register({ id: 'lightmap', label: 'Lightmap', component: LightmapPage });
  panelRegistry.register({ id: 'atlas', label: 'Atlas', component: AtlasPage });
  panelRegistry.register({ id: 'bake', label: 'Bake', component: BakePage });
  panelRegistry.register({ id: 'probes', label: 'Probes', component: ProbesPage });
  panelRegistry.register({ id: 'light', label: 'Light', component: LightPage });
  panelRegistry.register({ id: 'world', label: 'World', component: WorldPage });
  registerBakerMenus();
}

export { AtlasPage, BakePage, LightmapPage, LightPage, ProbesPage, WorldPage };
export type { BakerOptions, BakerOrchestrator, BakerQualityPreset } from './orchestrator';
export { getBakerOrchestrator } from './orchestrator';
