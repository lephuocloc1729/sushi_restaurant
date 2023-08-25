/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b1454a",
        creamson: "#fff0de",
        secondary: "#121212",
        "white-100": "rgba(255, 255, 255, 0.1)",
        "white-200": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
