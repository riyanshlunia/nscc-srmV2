/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'sponsi': "url('./src/assets/Background.png')",
      },
    },
  },
  plugins: [],
}