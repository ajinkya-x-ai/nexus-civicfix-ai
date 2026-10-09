/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        command: {
          bg: '#070b14',
          surface: '#0d1527',
          surfaceElevated: '#131e38',
          card: '#0f1a30',
          border: '#1e2d4a',
          borderLight: '#2a3e66',
          borderCyan: 'rgba(6, 182, 212, 0.3)',
        },
        cyan: {
          glow: '#00f0ff',
          neon: '#06b6d4',
          dim: '#0e7490',
        },
        teal: {
          accent: '#14b8a6',
        },
        status: {
          routine: '#38bdf8',
          standard: '#10b981',
          elevated: '#f59e0b',
          urgent: '#ef4444',
          pending: '#94a3b8',
          running: '#06b6d4',
          completed: '#10b981',
          failed: '#f43f5e',
          skipped: '#64748b',
          waiting: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px -3px rgba(6, 182, 212, 0.25)',
        'cyan-glow-lg': '0 0 30px -4px rgba(6, 182, 212, 0.35)',
        'panel': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
