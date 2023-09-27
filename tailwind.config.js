module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: 20,
      sm: 24,
      md: 36,
      lg: 64,
      xl: 72,
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#fff',
      yellow: {
        50: '#FFD60A2b',
        200: '#FFC300',
      },
      blue: {
        100: '#EBF4FF',
        200: '#D6EBFF',
        300: '#10589B',
        400: '#003566',
        500: '#001D3D',
        600: '#000814',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
};
