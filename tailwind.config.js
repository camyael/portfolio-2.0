/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundColor: {
      'gray': '#F3F3F3',
      'gray-secondary': '#E1E1E1',
      'pink-main': '#B17686',
      'pink-secondary': '#F5B5C5',
      'pink-lightPink': '#F4EBED',
    },
    colors: {
      'pink-main': '#B17686',
      'pink-secondary': '#F5B5C5',
      'gray': '#F3F3F3',
      'pink-main-transparent': 'hsla(344,27%,58%,50%)',
      'black': '#444444',
      'from-white': 'hsla(0, 0%, 100%, 0.5)',
      'to-white': 'hsla(0, 0%, 100%, 1)',
      'from-lightPink': 'rgba(244, 235, 237, 0.52)',
      'to-lightPink': '#F4EBED'
    },
    fontFamily: {
      'main': ['Times New Roman'],
      'secundary': ['Poppins','sans-serif']
    },
    extend: {
      backgroundImage: {
        'moon': "url('/src/assets/img/background/moon.png')"
      }
    },
  },
  plugins: [],
}

