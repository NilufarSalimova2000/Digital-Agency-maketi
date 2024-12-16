/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1100px"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1210px"
        }
      }
    },
  },
  plugins: [],
}