/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fascinate: ['"Fascinate"', 'cursive'],
      },
      textShadow: {
        "sm" : "1px 1px 2px rgba(0,0,0,0.5)",
        "md" : "2px 2px 4px rgba(0,0,0,0.5)",
        "lg" : "4px 4px 8px rgba(0,0,0,0.5)"
      },
    },
  },
  plugins: [require('daisyui'),require('tailwindcss-textshadow')],
}

