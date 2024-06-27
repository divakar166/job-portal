/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif']
      },
      gridTemplateColumns:{
        "70/30":"70% 28%"
      },
      outline:{
        white: ['2px solid #ffffff', '2px'],
        black: ['2px solid #000000', '2px'],
        slate: ['1px solid #eaeaea', '1px'],
        red: ['2px solid #EE4B2B', '2px'],
        blue: ['1px solid #bfdbfe', '1px'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.outline-white-2': {
          outline: '2px solid #ffffff',
        },
        '.outline-white-1': {
          outline: '1px solid #ffffff',
        },
        '.outline-black-2': {
          outline: '2px solid #000000',
        },
        '.outline-black-1': {
          outline: '1px solid #000000',
        },
        '.outline-slate-1': {
          outline: '1px solid #eaeaea',
        },
        '.outline-red-2': {
          outline: '2px solid #EE4B2B',
        },
        '.outline-blue-1': {
          outline: '1px solid #bfdbfe',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

