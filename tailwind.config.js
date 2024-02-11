/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        '8b3dff': "#8b3dff",
        '0d1216': "#0d1216",
        'ffffff': "#ffffff",
      },
      colors: {
        '8b3dff': "#8b3dff",
        '0d1216': "#0d1216",
        'ffffff': "#ffffff",
        '7f41dc': "#7f41dc",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1247px',
        '2xl': '1536px',
        '3xl': '1636px',
      },
      fontFamily: {
        sans: [],
        'reem': ['Reem Kufi', 'sans-serif'],
        'jacques': ['Jacques Francois', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

