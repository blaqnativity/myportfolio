// const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#ECE4F9",
          100: "#E0D3F5",
          200: "#C7B2ED",
          300: "#AE91E6",
          400: "#946FDE",
          500: "#7A4ED6",
          600: "#602FCD",
          700: "#47249B",
          800: "#2F1869",
          900: "#190D38",
          950: "#0D071F",
        },
        black: {
          100: "#f6f6f6",
          200: "#e7e7e7",
          300: "#d1d1d1",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
