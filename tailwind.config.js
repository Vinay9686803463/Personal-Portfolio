
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
                background: "#050711",
                surface: "#10121F",
                card: "#151827",
                accent: "#7957F6",
                accentLight: "#A78BFA",
                textPrimary: "#F4F5FA",
                textSecondary: "#969BAD",
                borderColor: "rgba(255, 255, 255, 0.08)"
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
