/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
