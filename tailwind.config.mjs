/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      fontSize: {
        base: '18px',
      },
      colors: {
        blue: {
          DEFAULT: '#43388C',
          50: '#F6F5F9',
          100: '#ECEBF4',
          200: '#D0CDE2',
          300: '#B4AFD1',
          400: '#7B74AF',
          500: '#43388C',
          600: '#3C327E',
          700: '#282254',
          800: '#1E193F',
          900: '#14112A',
        },
      },
    },
  },
};
