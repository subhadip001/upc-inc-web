/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: "Poppins",
    },
    colors: {
      blue: {
        100: "#0044CB",
        200: "#195ABD",
      },
      black: "#000000",
      white: "#FFFFFF",
      aliceblue: "#F8FDFF00",
    },
  },
  plugins: [],
};
