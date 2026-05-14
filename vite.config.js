import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
    base: '/three-lightmap-baker/',
    plugins: [preact()],
    server: {
        port: 5173,
        strictPort: true,
        fs: {
            // Vite 2.6 server.fs.strict blocks @fs paths to node_modules/@prefresh
            // (used by @preact/preset-vite HMR). Disabled to unblock dev server.
            strict: false,
        },
    },
})
