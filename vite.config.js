import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const r = (p) => path.resolve(rootDir, p)

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/three-lightmap-baker/',
    root: r('apps/playground'),
    plugins: [preact()],
    resolve: {
        alias: {
            'shared': r('packages/shared/src/index.ts'),
            'baker-classic/ui': r('packages/baker-classic/src/ui/index.ts'),
            'baker-classic': r('packages/baker-classic/src/index.ts'),
            'demo-shell/theme.css': r('packages/demo-shell/src/theme.css'),
            'demo-shell': r('packages/demo-shell/src/index.ts'),
            'pt-renderer/ui': r('packages/pt-renderer/src/ui/index.ts'),
            'pt-renderer/shaders': r('packages/pt-renderer/src/shaders'),
            'pt-renderer': r('packages/pt-renderer/src/index.ts'),
            'pt-baker/shaders': r('packages/pt-baker/src/shaders'),
            'pt-baker': r('packages/pt-baker/src/index.ts'),
        },
    },
    build: {
        outDir: r('dist'),
        emptyOutDir: true,
    },
    server: {
        port: 5173,
        strictPort: true,
        // Allow the workspace root so Vite can resolve packages/* + apps/*.
        fs: {
            strict: true,
            allow: [rootDir],
        },
    },
})
