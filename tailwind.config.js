const { fontFamily} = require('tailwindcss/defaultTheme');
const colors=require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './library/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container:{
      center:true,
      padding:"1.5rem",
      screens:{
        "2xl":"1360px",
      }
    },
    extend: {
      fontFamily:{
        sans:['var(--font-inter)',...fontFamily.sans]
      },
      colors:{
    ...colors,    
    'light-gold':"#f5bc51",
    "dark-gold":"533519"
    
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}