/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/*.jsx"],
  theme: {
    extend: {
      colors: {
        logo: '#FFA500',
        navBg1: '#74F769',
        navBg2: '#225522',
        errorMsg: '#EE1D52',
      }
    },
  },
  plugins: [],
};

