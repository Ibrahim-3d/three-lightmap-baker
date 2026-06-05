import { menuRegistry } from 'shared';

/**
 * Help menu (T-D9).
 */

menuRegistry.register('Help', {
  id: 'help.hotkeys',
  label: 'Keyboard Shortcuts',
  action: () => {
    alert(
      [
        'KEYBOARD SHORTCUTS',
        '',
        'Transform gizmo:',
        '  W   Translate    E   Rotate    R   Scale',
        '',
        'Bake / view:',
        '  B   Re-bake (when stale)',
        '  A   Toggle Atlas Maps viewer',
        '',
        'Camera (Blender numpad convention):',
        '  1 / Shift+1   Front / Back',
        '  3 / Shift+3   Right / Left',
        '  7 / Shift+7   Top / Bottom',
        '  0             Perspective',
        '',
        'Selection:',
        '  Esc           Deselect',
        '  Del / Bksp    Delete selected node',
      ].join('\n'),
    );
  },
});

menuRegistry.register('Help', {
  id: 'help.github',
  label: 'GitHub',
  action: () => {
    window.open('https://github.com/lucas-jones/three-lightmap-baker', '_blank');
  },
});

menuRegistry.register('Help', {
  id: 'help.about',
  label: 'About',
  separatorBefore: true,
  action: () => {
    alert(
      'Lightmap Studio - browser-native path-traced GI lightmap baker for Three.js.\nOpen source: github.com/lucas-jones/three-lightmap-baker',
    );
  },
});
