
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],

    darkMode: "class",

    theme: {
        extend: {
            colors: {
                background: "#172331",
                surface: "#253443",
                accent: "#91A9BC",
                textPrimary: "#F4F5F6",
                textMuted: "#B1BBC6",
                borderColor: "#3D4E5F"
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
                editorial: ["Newsreader", "serif"],
                mono: ["Fira Code", "monospace"]
            }
        }
    },

    plugins: []
};
