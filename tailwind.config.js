/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                carbon: {
                    deep: '#18181b',
                    light: '#3f3f46',
                    card: '#27272a',
                    border: 'rgba(255, 255, 255, 0.1)',
                },
                accent: {
                    green: '#00ff88',
                    amber: '#ffaa00',
                    red: '#ff4444',
                },
                text: {
                    main: '#ffffff',
                    dim: '#a1a1aa',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                'pulse-glow': 'pulseGlow 2s infinite',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
                pulseGlow: { '0%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.4)' }, '70%': { opacity: '1', boxShadow: '0 0 0 10px rgba(0, 255, 136, 0)' }, '100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0, 255, 136, 0)' } }
            }
        },
    },
    plugins: [],
}
