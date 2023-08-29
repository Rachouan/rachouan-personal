/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./structures/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rachouan: ["degular-display", "sans-serif"],
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
          50: "#ecece9",
          100: "#d9d6ce",
          200: "#bfb7ab",
          300: "#9c9281",
          400: "#736c5e",
          500: "#565043",
          600: "#3d392f",
          700: "#282620",
          800: "#191815",
          900: "#0b0b09",
        },
        green: {
          50: "#f1fcf3",
          100: "#e0f8e4",
          200: "#c2f0cb",
          300: "#92e3a2",
          400: "#43c65e",
          500: "#34b34f",
          600: "#26933d",
          700: "#217433",
          800: "#1f5c2c",
          900: "#1b4c26",
        },
      },
    },
  },
  plugins: [],
};
