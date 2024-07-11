/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      width: {
        '625': '655px',
        '550':'550px',
        '350':'350px',
      },
    },
    screens:{
      xl:'1300px',
      lg:'1213px',
      md:'1020px',
      sm:'728px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}