/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(228, 13%, 92%)",
        "accent": "hsl(172, 100%, 44%)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        "minmax": "minmax(100px, 1fr), 1fr",
      },
      boxShadow: {
        "card": "0 0 1.875rem 0.625rem hsl(0, 1%, 74%)",
      }
    },
  },
  plugins: [],
}