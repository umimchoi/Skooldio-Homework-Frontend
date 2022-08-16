/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "greenish-teal": "#2ecc71",
        "warm-gray": "#9b9b9b",
        "light-gray": "#f3f3f3",
        grapefruit: "#ff5a5a",
        "ocean-blue": "#48b6a3",
        "warm-gray-2": "#5f5f5f",
      },
    },
  },
  plugins: [],
};
