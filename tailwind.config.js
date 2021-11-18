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
      sm: "425px",
      md: { max: "767px" },
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
