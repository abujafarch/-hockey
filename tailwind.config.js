/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImages:{
           'gridone': "url('/img/2.png')",
        }
      },
    },
    plugins: [],
  }