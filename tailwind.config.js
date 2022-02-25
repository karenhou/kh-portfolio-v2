module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lb: "#99CDFF",
        mb: "#339ACC",
        db: "#000033",
        gr: "#336666",
        or: "FFCC99",
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwindcss/nesting"),
  ],
};
