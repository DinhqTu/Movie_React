/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "san-serif"],
      },
      colors: {
        primary: "#CF2122",
        bgColor: "#06121e",
      },
      boxShadow: {
        boxShadow: "0 0 0 0.225rem rgba(66, 139, 202, 0.35)",
      },
    },
  },
  plugins: [],
};
