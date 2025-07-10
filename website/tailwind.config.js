/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6',
          dark: '#2563eb'
        },
        neutral: {
          850: '#1f1f23',
          925: '#141417',
        },
        accent: {
          cyan: '#22d3ee',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#f87171',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#d4d4d8',
            h1: {
              color: '#ffffff',
              fontWeight: '700',
            },
            h2: {
              color: '#ffffff',
              fontWeight: '600',
            },
            h3: {
              color: '#ffffff',
              fontWeight: '600',
            },
            h4: {
              color: '#ffffff',
              fontWeight: '600',
            },
            code: {
              color: '#d4d4d8',
              backgroundColor: '#27272a',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#18181b',
              border: '1px solid #3f3f46',
              borderRadius: '0.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              color: '#a1a1aa',
              borderLeftColor: '#3b82f6',
            },
            a: {
              color: '#60a5fa',
              textDecoration: 'none',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            strong: {
              color: '#ffffff',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
          },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'particle-float': 'particle-float 20s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'particle-float': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-10px, -10px)' },
          '50%': { transform: 'translate(10px, -20px)' },
          '75%': { transform: 'translate(-5px, -15px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'scale-in': {
          from: { 
            opacity: '0', 
            transform: 'scale(0.9)' 
          },
          to: { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 32px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 32px rgba(34, 211, 238, 0.3)',
        'glow-emerald': '0 0 32px rgba(52, 211, 153, 0.3)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.16)',
        'dark-soft': '0 2px 8px rgba(0, 0, 0, 0.4)',
        'dark-medium': '0 4px 16px rgba(0, 0, 0, 0.5)',
        'dark-large': '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
