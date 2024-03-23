/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          10: "#141927",
        },
      },
      screens: {
        xs: '400px',
        '3xl': '2200px',
        '4xl': '2500px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        0: '0px',
        '1xl': '4px',
        '3xl': '22px',
      },
    },
  },
  plugins: [],
}