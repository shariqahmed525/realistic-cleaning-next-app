const colors = {
    primary: "#3490dc",
    danger: "#e3342f",
    "my-gray": "#f1f3f7",
    secondary: "#ffed4a",
    "my-theme": "#305454",
    "logo-theme-primary": "#17E7CD",
    "logo-theme-secondary": "#1d1c1e",
    "my-theme-bg": "darkslategray",
};

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
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
