/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'primary' : ["Lobster", "sans-serif"],
        'logo' : ["Bebas Neue", "sans-serif"]
      }
    },
  },
  plugins: [],
}

