/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'evergreen-50': '#2aa78ed7',
        'evergreen-100': '#2AA78D',
        'evergreen-200': '#2B4341',
      }
    },
  },
  plugins: [],
}

