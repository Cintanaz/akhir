/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#F9F4E0',
          100: '#F4EAC1',
          200: '#EAD683',
          300: '#E1C244',
          400: '#D4AF37',
          500: '#B89429',
          600: '#8C701F',
          700: '#604C15',
          800: '#34290B',
          900: '#080601',
          950: '#000000',
        },
        purple: {
          pastel: '#C8A2C8',
        },
      },
    },
  },
  plugins: [],
};