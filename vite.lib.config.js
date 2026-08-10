import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const r = (p) => path.resolve(rootDir, p);

export default defineConfig({
  build: {
    outDir: r('dist/package'),
    emptyOutDir: true,
    lib: {
      entry: r('packages/baker-classic/src/index.ts'),
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: (id) =>
        id === 'three' ||
        id.startsWith('three/') ||
        id === 'three-mesh-bvh' ||
        id === 'xatlas-three',
    },
  },
});
