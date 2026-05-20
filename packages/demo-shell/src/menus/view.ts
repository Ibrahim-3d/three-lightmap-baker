import { atlasViewerVisible, layout, menuRegistry, showAxes, showGrid } from 'shared';

/**
 * View menu (T-D9). Toggles remember the last non-zero width in a local
 * closure so collapsing then re-opening restores the user's chosen width.
 */

let lastOutlinerW = 280;
let lastInspectorW = 320;

menuRegistry.register('View', {
  id: 'view.toggle-outliner',
  label: 'Toggle Outliner',
  action: () => {
    const cur = layout.value.outlinerW;
    if (cur > 0) {
      lastOutlinerW = cur;
      layout.value = { ...layout.value, outlinerW: 0 };
    } else {
      layout.value = { ...layout.value, outlinerW: lastOutlinerW || 280 };
    }
  },
});

menuRegistry.register('View', {
  id: 'view.toggle-inspector',
  label: 'Toggle Inspector',
  action: () => {
    const cur = layout.value.inspectorW;
    if (cur > 0) {
      lastInspectorW = cur;
      layout.value = { ...layout.value, inspectorW: 0 };
    } else {
      layout.value = { ...layout.value, inspectorW: lastInspectorW || 320 };
    }
  },
});

menuRegistry.register('View', {
  id: 'view.toggle-grid',
  label: 'Show Ground Grid',
  separatorBefore: true,
  action: () => {
    showGrid.value = !showGrid.value;
  },
});

menuRegistry.register('View', {
  id: 'view.toggle-axes',
  label: 'Show World Axes',
  action: () => {
    showAxes.value = !showAxes.value;
  },
});

menuRegistry.register('View', {
  id: 'view.toggle-atlas-viewer',
  label: 'Toggle Atlas Viewer',
  hotkey: 'A',
  separatorBefore: true,
  action: () => {
    atlasViewerVisible.value = !atlasViewerVisible.value;
  },
});

menuRegistry.register('View', {
  id: 'view.reset-layout',
  label: 'Reset Layout',
  separatorBefore: true,
  action: () => {
    lastOutlinerW = 280;
    lastInspectorW = 320;
    layout.value = { ...layout.value, outlinerW: 280, inspectorW: 320 };
  },
});
