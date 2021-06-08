const colors = {
    primary: "#3490dc",
    secondary: "#ffed4a",
    danger: "#e3342f",
    "my-theme": "#502649",
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
            backgroundImage: (theme) => ({
                "bg-img": "url('/img/bg.webp')",
            }),
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
