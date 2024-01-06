/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ffa500",
        secondary: "#ff6700",
      },
    },
  },
  plugins: [],
};
