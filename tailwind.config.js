/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roc: ["roc-grotesk", "sans-serif"],
        ballinger: ["ballinger", "sans-serif"],
      },
      colors: {
        denim: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#92c5fe",
          400: "#5fa6fb",
          500: "#3a83f7",
          600: "#2464ec",
          700: "#1c4ed8",
          800: "#1d41b0",
          900: "#1d3a8b",
        },
        gray: {
          50: "#f6f5f6",
          100: "#e9e4e8",
          200: "#d5ccd5",
          300: "#b7a9b7",
          400: "#927e91",
          500: "#786276",
          600: "#665463",
          700: "#564854",
          800: "#4a4049",
          900: "#292428",
        },
      },
    },
    colors: {},
  },
  plugins: [],
};
