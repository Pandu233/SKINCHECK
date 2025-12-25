/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
        center: true,
        padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        },
    },
        extend: {
            colors: {
            primary: "#2563eb",        // blue-600
            primarySoft: "#eff6ff",    // blue-50
            surface: "#ffffff",
            muted: "#6b7280",          // gray-500
            dark: "#0f172a",
            },
            fontFamily: {
                sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                soft: "0 10px 25px -5px rgba(0,0,0,0.08)",
                strong: "0 25px 50px -12px rgba(0,0,0,0.15)",
            },
        },
    },
    plugins: [],
}
