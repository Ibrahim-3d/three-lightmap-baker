/**
 * PT renderer UI registration.
 * Call `registerPTRendererUI()` once at app boot (after `registerBakerClassicUI()`).
 * Adds the "Path Tracer" inspector tab and wires the Render menu toggle.
 */

import { panelRegistry, menuRegistry, renderMode } from 'shared';
import { PTPage } from './PTPage';

export { PTPage } from './PTPage';

let _registered = false;

export function registerPTRendererUI(): void {
  if (_registered) return;
  _registered = true;

  // Inspector tab - visible only when in path-traced mode.
  panelRegistry.register({
    id: 'pathtracer',
    label: 'Path Tracer',
    component: PTPage,
    when: () => renderMode.value === 'pathtraced',
  });

  // Render menu item - toggle between rasterisation and PT.
  menuRegistry.register('Render', {
    id: 'toggle-pathtracer',
    label: 'Path Traced',
    separatorBefore: true,
    action: () => {
      renderMode.value = renderMode.value === 'pathtraced' ? 'combined' : 'pathtraced';
    },
  });
}
