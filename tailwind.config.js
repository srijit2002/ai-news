/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#0d0d0d",
        "gray-dark": "#000",
        yellow: "#f6e54b",
      },
    },
  },
  plugins: [],
};
