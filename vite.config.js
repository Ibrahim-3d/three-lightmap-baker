import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
    base: '/three-lightmap-baker/',
    plugins: [preact()],
    server: {
        port: 5173,
        strictPort: true,
    },
})
