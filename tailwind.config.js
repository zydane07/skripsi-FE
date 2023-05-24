/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#A8C6FF",
                secondary: "#D5D8FF",
                hover: "#C0BAF5",
                white: "#F4F5FE",
                black: "#212121",
            },
            fontFamily: {
                Montserrat: ["Montserrat, sans-serif"],
            },
            container: {
                padding: "4rem",
                center: true,
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1037px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [require("tailwindcss-debug-screens")],
};
