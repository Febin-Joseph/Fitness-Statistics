/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgBlue: {
          10: "#141927",
        },
        yellow: {
          10: "#FF8B00",
        }
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
        '4xl': '40px'
      },
    },
  },
  plugins: [],
}