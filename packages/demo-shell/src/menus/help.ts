import { menuRegistry } from 'shared';

/**
 * Help menu (T-D9).
 */

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
    console.log('[demo] Help → About (stub)');
  },
});
