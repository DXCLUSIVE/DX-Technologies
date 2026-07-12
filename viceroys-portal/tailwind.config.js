/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#f9f2f2',
          100: '#f3e5e5',
          200: '#e7cbcb',
          300: '#d9a8a8',
          400: '#c97575',
          500: '#b85252',
          600: '#8B1538',
          700: '#7a1230',
          800: '#661028',
          900: '#551020',
        },
        visa: {
          pink: '#FFB6D9',
          darkpink: '#FF1493',
          blue: '#1E3A8A',
          lightblue: '#3B82F6',
          gold: '#FFC107',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}