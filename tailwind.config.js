const colors = {
  primary: "#3490dc",
  danger: "#e3342f",
  dark: "#2e3d49",
  "my-gray": "#f4f9fe",
  secondary: "#ffed4a",
  "my-theme": "#01b3e4",
  "dark-my-theme": "#016682",
  "secondary-my-theme": "#017a9b",
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    extend: {
      colors: {
        ...colors,
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
        text: "text",
      },
      width: {
        26: "7.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
