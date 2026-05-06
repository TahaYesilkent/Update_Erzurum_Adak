/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1B4332',
          primary: '#2D6A4F',
          light: '#D8F3DC',
        }
      }
    },
  },
  plugins: [],
}