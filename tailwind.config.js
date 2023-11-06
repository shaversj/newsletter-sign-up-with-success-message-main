/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "sm": "375px",
      "lg": "1440px",
    },
    colors: {
      "tomato": "hsl(4, 100%, 67%)",
      "dark-slate-grey": "hsl(234, 29%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      "grey": "hsl(231, 7%, 60%)",
      "white": "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      "Roboto": ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}