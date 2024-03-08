/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*;{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
         white: "#CEDAE8",
         black: "#151618",
      },
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      lg: "1200px",
    }
  },
  plugins: [],
}

