import { CornellBoxExample } from './CornellBoxExample';
import { loadXAtlasThree } from './atlas/generateAtlas';

(async () => {
    await loadXAtlasThree();
    const app = new CornellBoxExample();
    window.addEventListener('resize', () => app.updateSize());
})();
