import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const r = (p) => path.resolve(rootDir, p);

export default defineConfig({
  build: {
    outDir: r('dist/package'),
    emptyOutDir: false,
    lib: {
      entry: r('packages/baker-classic/src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['three', 'three-mesh-bvh', 'xatlas-three'],
    },
  },
});
