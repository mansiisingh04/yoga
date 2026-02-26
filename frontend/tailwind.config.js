/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to check your components!
  ],
  theme: {
    extend: {
      letterSpacing: {
        alo: '0.2em',
      }
    },
  },
  plugins: [],
}