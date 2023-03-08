/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
      'blue': '#243c5a',
      'red': '#FF0000',
      'black': "#000",
      'white-2': "#d2d2d2d2",
      'purple': "#7238D1"
    }},
  },
  plugins: [],
}