/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading-zine': ['Actor', 'Belgrano', 'sans-serif'],
        'body-zine': ['Alan Sans', 'sans-serif'],
        'brush': ['Caveat Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}
