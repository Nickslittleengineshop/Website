/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'exo2': ['Exo 2', 'sans-serif'],
        'sans': ['Exo 2', 'sans-serif'], // Override default sans font
      },
      colors: {
        steel: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        industrial: {
          yellow: '#f59e0b',
          orange: '#ea580c',
          red: '#dc2626',
        }
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #374151 0%, #1f2937 25%, #374151 50%, #1f2937 75%, #374151 100%)',
        'steel-plate': 'linear-gradient(135deg, #6b7280 0%, #374151 50%, #6b7280 100%)',
        'chain-pattern': 'repeating-linear-gradient(90deg, #f59e0b 0px, #f59e0b 10px, #374151 10px, #374151 20px)',
      },
      boxShadow: {
        'industrial': '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'steel': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(245, 158, 11, 0.2), 0 0 30px rgba(245, 158, 11, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};