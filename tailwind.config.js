/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    boxShadow: {
      custom: '0px 0px 239px 14px rgba(227,200,255,1)'
    },
    extend: {},
  },
  plugins: [],
}

