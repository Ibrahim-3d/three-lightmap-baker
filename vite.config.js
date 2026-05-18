import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
    base: '/three-lightmap-baker/',
    plugins: [preact()],
    server: {
        port: 5173,
        strictPort: true,
        // Keep Vite's filesystem restriction on. The previous `strict: false`
        // workaround opened arbitrary `@fs` paths to anything reachable on the
        // dev port; instead explicitly allow only the workspace root, which is
        // sufficient for @preact/preset-vite's prefresh HMR in this single-
        // package repo.
        fs: {
            strict: true,
            allow: ['.'],
        },
    },
})
