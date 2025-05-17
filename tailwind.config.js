/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        xs: "420px", // ✅ This will now work as a responsive prefix
      },
    },
  },
  plugins: [],
}

