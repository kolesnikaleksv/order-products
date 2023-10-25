/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': '#F16801',
        'pink': '#F8EAE0',
        'ultra-light-gray': '#D1D1D1',
        'light-gray': '#969696',
        'gray': '#5D6165',
        'dark-gray': '#363836',
        'red': '#E63027',
        'light-yellow': '#E6E4D7',
        'green': '#8BC34A',
        'blue': '#158BA7',
        'body': '#eff1f2'
      }
    },
  },
  plugins: [],
}

