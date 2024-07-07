/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Wittgenstein": ["Wittgenstein, serif"],
        "Playwrite":["Playwrite IT Moderna, cursive"],
        "LibreFranklin":["Libre Franklin, sans-serif"],
        "Lexend":["Lexend, sans-serif"] 
    } 
    },
  },
  plugins: [],
}

