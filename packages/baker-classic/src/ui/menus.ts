import { menuRegistry } from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * Baker-classic menu items. Registered when the app calls
 * `registerBakerClassicUI()`. Owns: Render → Re-bake, Render → Re-bake AO,
 * File → Export Lightmap PNG.
 */

export function registerBakerMenus(): void {
  menuRegistry.register('Render', {
    id: 'render.rebake',
    label: 'Re-bake',
    hotkey: 'B',
    action: () => {
      void getBakerOrchestrator()?.requestBake();
    },
  });

  menuRegistry.register('Render', {
    id: 'render.rebake-ao',
    label: 'Re-bake AO only',
    action: () => {
      void getBakerOrchestrator()?.requestAORebake();
    },
  });

  menuRegistry.register('File', {
    id: 'file.export-lightmap',
    label: 'Export Lightmap PNG',
    separatorBefore: true,
    action: () => {
      void getBakerOrchestrator()?.exportFinal();
    },
  });
}
