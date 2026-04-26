import { CornellBoxExample } from './CornellBoxExample';
import { loadXAtlasThree } from '../lib';

void (async (): Promise<void> => {
  await loadXAtlasThree();
  const app = new CornellBoxExample();
  window.addEventListener('resize', () => app.updateSize());
})();
