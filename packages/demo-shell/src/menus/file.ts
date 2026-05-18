import { getOrchestrator, menuRegistry } from 'shared';

/**
 * Generic File menu items: New, Open, Export Scene GLB. Renderer-specific
 * export entries (e.g. "Export Lightmap PNG") live in the renderer
 * package's UI registrar.
 *
 * `Open .glb…` triggers the hidden file input owned by the orchestrator.
 */

function clickGlbInput(): void {
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
  id: 'file.export-glb',
  label: 'Export Scene as GLB',
  separatorBefore: true,
  action: () => {
    const app = getOrchestrator();
    if (!app?.exportSceneGLB) return;
    void app.exportSceneGLB();
  },
});
