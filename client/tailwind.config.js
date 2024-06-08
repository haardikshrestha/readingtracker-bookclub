/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mongoose": {
          50: "#fbf7f1",
          100: "#f2e5d0",
          200: "#ecd8bc",
          300: "#dfbd92",
          400: "#d29b65",
          500: "#c88247",
          600: "#ba6d3c",
          700: "#9b5633",
          800: "#7d472f",
          900: "#653b29",
          950: "#361d14",
        },
      },
    },
  },
  plugins: [],
};
