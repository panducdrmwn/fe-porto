/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         'Inter': ['inter', 'sans-serif'],
         mono: ['"Space Mono"', 'monospace']
      },
      animation: {
        'shimmer-ui': 'shimmer-ui 3s infinite linear',
      },
      keyframes: {
         'shimmer-ui': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 0%' }, // Moves the gradient across
        },
      }
    },
  },
  plugins: [
    
  ],
}

