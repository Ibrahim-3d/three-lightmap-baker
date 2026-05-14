/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/demo/**/*.{ts,tsx,html}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg-0': 'var(--color-bg-0)',
                'bg-1': 'var(--color-bg-1)',
                'bg-2': 'var(--color-bg-2)',
                'bg-3': 'var(--color-bg-3)',
                border: 'var(--color-border)',
                accent: 'var(--color-accent)',
                stale: 'var(--color-stale)',
                'text-0': 'var(--color-text-0)',
                'text-1': 'var(--color-text-1)',
                'text-2': 'var(--color-text-2)',
            },
            fontFamily: {
                ui: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
            },
        },
    },
    plugins: [],
}
