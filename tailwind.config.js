const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './library/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        ...colors,
        'light-gold': '#f5bc51',
        'dark-gold': '#533519',
        primary: {
          50: '#fffee5',
          100: '#fffcbf',
          200: '#fff993',
          300: '#fff76e',
          400: '#fff549',
          500: '#ffeb2e', // Your original primary color
          600: '#ffd621',
          700: '#ffc519',
          800: '#ffae12',
          900: '#ff970c',
        },
        secondary: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373', // Your original secondary color
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0c0c0c',
        },
        neutral: {
          50: '#ffffff',
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c', // Your original neutral color
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#262626',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
