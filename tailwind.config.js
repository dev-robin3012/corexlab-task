module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: "#ffffff",
      dark: "#525252",
      gray: "#FAFBFD",
      lightGray: "#F1F5FE",
      blue: "#1155CC",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    screens: {
      xs: { max: "500px" },
      sm: { max: "639px" },
      md: { max: "769px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
