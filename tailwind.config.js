/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050a0f',
        surface: '#0a1520',
        panel: '#0d1e2e',
        cyan: {
          400: '#00e5ff',
          500: '#00bcd4',
          glow: '#00e5ff',
        },
        green: {
          400: '#00ff88',
          glow: '#00ff88',
        },
        text: {
          primary: '#e8f4f8',
          secondary: '#7a9bb5',
          muted: '#3d5a73',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end) infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 229, 255, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 229, 255, 0.7)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
