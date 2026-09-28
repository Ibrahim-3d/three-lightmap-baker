import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  root,
  base: '/',
  resolve: {
    alias: { 'baker-classic': path.resolve(root, 'packages/baker-classic/src/index.ts') },
  },
  server: { port: 5173, strictPort: true },
});
