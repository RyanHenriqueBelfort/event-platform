/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blurBackground.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      screens: {
        '345': '365px',
        '425': '425px'
      },
      colors: {
        project: {
          100: '#5b1d99',
          200: '#0074b4',
          300: '#00b34c',
          400: '#ffd41f',
          500: '#fc6e3d',
          600: '#1c0b2b',
          700: '#005582'
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
