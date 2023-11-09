/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "primary-checkbox": 'url("./src/assets/images/icon-list.svg")'
      },
      screens: {
        "sm": "375px",
        "lg": "1440px",
      },
    },
    colors: {
      "tomato": "hsl(4, 100%, 67%)",
      "secondary-tomato": "hsl(5, 99%, 95%)",
      "dark-tomato": "hsl(5, 34%, 60%)",
      "dark-slate-grey": "hsl(234, 29%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      "grey": "hsl(231, 7%, 60%)",
      "secondary-grey": "hsl(240, 2% 77%)",
      "white": "hsl(0, 0%, 100%)",
      "black": "hsla(0, 0%, 0%)"
    },
    fontFamily: {
      "Roboto": ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}