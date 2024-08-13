const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          400: '#63b3ed',
          500: '#4299e1',
        },
        darkBlue: {
          700: '#2b6cb0',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}