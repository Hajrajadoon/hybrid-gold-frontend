/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all your source files
    "./public/index.html",         // your HTML file
  ],
  theme: {
    extend: {}, // you can add custom theme settings here
  },
  plugins: [], // no extra plugins needed for now
};
