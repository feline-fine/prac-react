/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'nav-green': '#dbe0d1',
          'light-black': "#222222",
          'sage-200': "#bac4a7"
        },
        fontFamily: {
          josefins: ["Josefin Sans", "sans-serif"],
        }
    },
  },
  plugins: [],
}

