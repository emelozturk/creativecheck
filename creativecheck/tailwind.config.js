/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["'Plus Jakarta Sans'", "sans-serif"] },
      colors: {
        brand: { purple: "#7c3aed", pink: "#ec4899", orange: "#f97316", teal: "#06b6d4" }
      }
    }
  },
  plugins: []
}
