/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      scale: {
        '1025': '1.025',
      }
    },
  },
  plugins: [],
};
