const colors = {
    primary: "#3490dc",
    secondary: "#ffed4a",
    danger: "#e3342f",
    // "my-theme": "#02c0a8",
    // "my-theme": "#0898af",
    "my-theme": "#305454",
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
