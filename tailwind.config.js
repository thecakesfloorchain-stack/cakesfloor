/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#131313',
        'surface-container': '#20201f',
        'on-surface': '#e5e2e0',
        primary: '#ffb954',
        'on-primary': '#452b00',
        secondary: '#cfc4bf',
        outline: '#9e8e7c',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
