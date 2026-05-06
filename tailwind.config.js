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
        plum: '#8B5E7C',
        olive: '#6B8A6B',
        beige: '#E7D7C1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'runCat': 'runCat 10s linear infinite alternate',
        'runDog': 'runDog 12s linear infinite alternate',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 },
        },
        runCat: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(calc(100vw - 80px))' },
        },
        runDog: {
          '0%': { transform: 'translateX(calc(100vw - 80px))' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
}