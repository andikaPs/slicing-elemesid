/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8BAC3E',
        secondary: '#757575',
        dark: '#333333',
      },
      boxShadow: {
        custom: '0px 8px 32px rgba(102, 107, 226, 0.35)',
      },
    },
  },
  plugins: [],
}
