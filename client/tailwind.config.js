/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mongoose: {
          '50': '#f9f6f3',
          '100': '#f1ece3',
          '200': '#e2d7c6',
          '300': '#cfbca2',
          '400': '#bda080',
          '500': '#ad8762',
          '600': '#a07556',
          '700': '#855e49',
          '800': '#6c4e40',
          '900': '#584136',
          '950': '#2f201b',
        },
      },
    },
  },
  plugins: [],
};
