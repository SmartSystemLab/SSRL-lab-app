/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/*.jsx"],
  theme: {
    extend: {
      colors: {
        logo: "#FFA500",
        navBg1: "rgba(116, 247, 105, 0.22)",
        navBg2: "#225522",
        errorMsg: "#EE1D52",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};