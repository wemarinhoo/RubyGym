/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral0: "#F8F8FF",
        neutral100: "#9F9F9F",
        neutral200: "#2F2F2F",
        neutral300: "#000000",
        primary: "#B80100",
        secondary: "#00FB73"
      },
      fontFamily: {
        "sans-serif": ["Roboto", "sans-serif"],
        "grotesk": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

