/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#202020',
        borderColor: '#313131',
      }
    },
  },
  plugins: [],
}

