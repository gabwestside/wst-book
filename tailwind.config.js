/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'evergreen-100': '#2B4341',
        'evergreen-200': '#2AA78D',
      }
    },
  },
  plugins: [],
}

