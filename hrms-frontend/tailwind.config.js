/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "antique":["Zen+Antique" , 'sans-serif']}
    },
  },
  plugins: [],
}

