module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1DB954', // Spotify green
        secondary: '#163a11',
        tertiary: '#99a0a3',
        border: '#ffc72c', // Bee color
        background: '#000000', // Dark background color
        customYellow: 'ffc72c',
        gray: {
          900: '#b3b6b4', // Replace the default color with '#87cea8'
          800: '#a48c5d',
          600: '#bfc0a0',
          500: '#bfc0a0',
        },
        lime: {
          700: '#4d7c0f',
        },
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
