module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f7',
          100: '#ffe3ec',
          200: '#ffb8d2',
          300: '#ff80ad',
          400: '#ff4d8a',
          500: '#ff2a6b',
          600: '#e51f5f',
          700: '#b51546',
          800: '#870f30',
          900: '#5d0a1f'
        }
      },
      boxShadow: {
        glow: '0 6px 24px rgba(255, 42, 107, 0.18)'
      }
    }
  },
  plugins: [],
};
