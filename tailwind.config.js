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
        '8B3DFF': "#8B3DFF",
        '0D1216': "#0D1216",
        'FFFFFF': "#FFFFFF",
      },
      colors: {
        '8B3DFF': "#8B3DFF",
        '0D1216': "#0D1216",
        'FFFFFF': "#FFFFFF",
      },
      fontFamily: {
        sans: [],
        'reem': ['Reem Kufi', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}

