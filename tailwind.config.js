/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // You can add custom colors, spacing, fonts here if needed
      colors: {
        gold: "#D4AF37",
        goldSoft: "#F6E27F",
        ink: "#0A1220",
        slate: "#475569",
      },
    },
  },
  plugins: [],
};
