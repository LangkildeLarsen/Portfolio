/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          'headlines': ['"Urbanist"'],
          'boody': ['"Inter"'],
        },
        colors: {
          'bagg': '#060606',
          'bagg1': '#000000',
        },
      },
    },
  };