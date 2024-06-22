/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'color-dark1': '#112D4E',
        'color-light1': '#DBE2EF',
        'color-dark2': '#3F72AF',
        'color-light2': '#F9F7F7',
        'color-light3': '#dbe2ee80',
      },
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
}

