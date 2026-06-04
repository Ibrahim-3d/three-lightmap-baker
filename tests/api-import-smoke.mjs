import { LightmapBaker, loadXAtlasThree } from '../dist/package/index.js';

if (typeof LightmapBaker !== 'function') {
  throw new Error('LightmapBaker export is missing');
}

if (typeof loadXAtlasThree !== 'function') {
  throw new Error('loadXAtlasThree export is missing');
}

console.log('[smoke] package exports are importable');
