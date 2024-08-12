const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#FFCC33',
      black: '#1A1A1A',
      white: colors.white,
      gray: colors.gray,
      red: { 500: 'rgb(255, 104, 116)' },
      green: {
        500: 'rgb(0, 206, 122)',
      },
      yellow: { 500: 'rgb(255, 189, 63)' },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
