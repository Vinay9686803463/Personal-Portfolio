
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
                background: "#0B1220",
                surface: "#0F192B",
                card: "#111D32",
                accent: "#60A5FA",
                accentLight: "#A5D8FF",
                textPrimary: "#F1F5F9",
                textSecondary: "#A7B5C9",
                borderColor: "#26364D"
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
