const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lb: "#99CDFF",
        peach: "#FF9999",
        mb: "#339ACC",
        db: "#000033",
        gr: "#336666",
        or: "#FFCC99",
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
