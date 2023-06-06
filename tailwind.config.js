/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { maxWidth: {
      '1/2': '300px',
    }},
  },
  plugins: [],
}

