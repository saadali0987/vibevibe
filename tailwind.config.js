/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      colors: {
        vibe: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A855F7",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        }
      },
      backgroundImage: {
        "grid-light": "linear-gradient(90deg, rgba(238,242,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(238,242,255,0.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px), linear-gradient(180deg, rgba(15,23,42,0.3) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
