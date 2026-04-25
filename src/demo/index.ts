import { CornellBoxExample } from './CornellBoxExample';
import { loadXAtlasThree } from '../lib';

(async () => {
  await loadXAtlasThree();
  const app = new CornellBoxExample();
  window.addEventListener('resize', () => app.updateSize());
})();
