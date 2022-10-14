/** @type {import('tailwindcss').Config} */

const { neutral } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', 
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      darkThemeBg: 'hsl(207, 26%, 17%)',
      lightThemeBg: 'hsl(0, 0%, 98%)',
      darkThemeHeader: 'hsl(209, 23%, 22%)',
      lightThemeText: 'hsl(200, 15%, 8%)',
      neutralText: 'hsl(0, 0%, 100%)',
      lightInput: 'hsl(0, 0%, 52%)'
    }
  },
  plugins: [],
}
