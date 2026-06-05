import { menuRegistry } from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * Baker-classic menu items. Registered when the app calls
 * `registerBakerClassicUI()`. Owns: Render → Re-bake, Render → Re-bake AO,
 * Render → Path-Traced Bake, File → Export Lightmap PNG.
 */

export function registerBakerMenus(): void {
  menuRegistry.register('Render', {
    id: 'render.rebake',
    label: 'Quick Bake',
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

  // Path-Traced Bake menu item hidden 2026-05-19 with PT preview.
  // PTBaker code stays in tree - re-enable by uncommenting when PT polish resumes.
  // menuRegistry.register('Render', {
  //   id: 'render.pt-bake',
  //   label: 'Path-Traced Bake',
  //   separatorBefore: true,
  //   action: () => {
  //     const orc = getBakerOrchestrator() as unknown as { requestPTBake?(): Promise<void> } | null;
  //     void orc?.requestPTBake?.();
  //   },
  // });

  menuRegistry.register('File', {
    id: 'file.export-lightmap',
    label: 'Export Lightmap PNG',
    separatorBefore: true,
    action: () => {
      void getBakerOrchestrator()?.exportFinal();
    },
  });
}
