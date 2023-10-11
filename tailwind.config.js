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
      },
      backgroundImage: {
        'profile-background': "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
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

