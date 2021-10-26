module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      body: ['Assistant', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#e52c1c',
        secondary: '#0d0f68',
        black: '#0c0f31',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
