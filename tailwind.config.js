/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.jsx',
    './main.jsx',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      /* ───────── Material Design 3 Color Tokens ───────── */
      colors: {
        /* Primary */
        primary: {
          DEFAULT: '#1a4a6e',
          container: '#1e3a5f',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#b8cfe0',
        },

        /* Secondary */
        secondary: {
          DEFAULT: '#0D9488',
          fixed: {
            DEFAULT: '#ccfbf1',
            dim: '#5eead4',
            variant: '#99f6e4',
          },
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          fixed: {
            DEFAULT: '#134e4a',
            variant: '#115e59',
          },
        },

        /* Tertiary */
        tertiary: {
          DEFAULT: '#7c3aed',
          container: '#ede9fe',
          fixed: {
            DEFAULT: '#ddd6fe',
            dim: '#a78bfa',
          },
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#5b21b6',
        },

        /* Surface */
        surface: {
          DEFAULT: '#f8fafc',
          variant: '#e2e8f0',
          container: {
            DEFAULT: '#f1f5f9',
            low: '#f5f7fa',
            lowest: '#ffffff',
            high: '#e2e8f0',
            highest: '#cbd5e1',
          },
        },
        'on-surface': {
          DEFAULT: '#1e293b',
          variant: '#64748b',
        },

        /* Outline */
        outline: {
          DEFAULT: '#94a3b8',
          variant: '#cbd5e1',
        },

        /* Background */
        background: '#f0f4f8',

        /* Error */
        error: {
          DEFAULT: '#dc2626',
          container: '#fee2e2',
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#991b1b',
        },
      },

      /* ───────── Custom Spacing Tokens ───────── */
      spacing: {
        'space-xs': '0.5rem',    /* 8px */
        'space-sm': '0.75rem',   /* 12px */
        'space-md': '1rem',      /* 16px */
        'space-lg': '1.5rem',    /* 24px */
        'space-xl': '2rem',      /* 32px */
      },

      /* ───────── Custom Typography ───────── */
      fontFamily: {
        'headline-lg': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-md': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-sm': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-lg': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-md': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-sm': ['"Plus Jakarta Sans"', 'sans-serif'],
        'label-regular': ['"Plus Jakarta Sans"', 'sans-serif'],
        'label-micro': ['"Plus Jakarta Sans"', 'sans-serif'],
        'metric-display': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'headline-lg': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'headline-md': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'headline-sm': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.625rem', fontWeight: '400' }],
        'body-md': ['0.875rem', { lineHeight: '1.375rem', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'label-regular': ['0.8125rem', { lineHeight: '1.125rem', fontWeight: '500' }],
        'label-micro': ['0.6875rem', { lineHeight: '1rem', fontWeight: '500' }],
        'metric-display': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
      },

      /* ───────── Animations ───────── */
      keyframes: {
        'toast-in': {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'toast-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-1rem)', opacity: '0' },
        },
      },
      animation: {
        'toast-in': 'toast-in 0.3s ease-out',
        'toast-out': 'toast-out 0.3s ease-in forwards',
      },

      /* ───────── Border Radius ───────── */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
