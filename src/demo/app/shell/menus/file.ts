import { menuRegistry } from '../../../state/menuRegistry';
import { getOrchestrator } from '../../../state/orchestrator';

/**
 * File menu wiring (T-D9). Items registered at module load.
 * `Open .glb…` triggers the hidden file input owned by `CornellBoxExample.initUI`.
 */

function clickGlbInput(): void {
  // Preferred id (when CornellBoxExample is updated to set one); fall back to
  // the type/accept selector matching the hidden input.
  const byId = document.getElementById('baker-glb-input') as HTMLInputElement | null;
  const input =
    byId ??
    (document.querySelector('input[type="file"][accept=".glb,.gltf"]') as HTMLInputElement | null);
  input?.click();
}

menuRegistry.register('File', {
  id: 'file.new',
  label: 'New Scene',
  action: () => {
    console.log('[demo] File → New Scene (stub)');
  },
});

menuRegistry.register('File', {
  id: 'file.open-glb',
  label: 'Open .glb…',
  hotkey: 'Ctrl+O',
  action: clickGlbInput,
});

menuRegistry.register('File', {
  id: 'file.export-lightmap',
  label: 'Export Lightmap PNG',
  separatorBefore: true,
  action: () => {
    void getOrchestrator()?.exportFinal();
  },
});

menuRegistry.register('File', {
  id: 'file.export-glb',
  label: 'Export Scene as GLB',
  action: () => {
    void getOrchestrator()?.exportSceneGLB();
  },
});
