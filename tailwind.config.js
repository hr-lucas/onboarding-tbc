/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
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
        boxColor: '#202020',
        greenBtn: '#00A510',
      },
      maxWidth: {
        'xx': '1440px',
      },
      minWidth: {
        'xx': '1920px',
      },
      fontFamily: {
        mon: ['Montserrat']
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

  },
  plugins: [],
}

