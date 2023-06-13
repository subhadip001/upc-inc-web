/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: "Poppins",
      lato: "Lato",
    },
    colors: {
      blue: {
        100: "#0044CB",
        200: "#195ABD",
        300: "#233568",
      },
      black: "#000000",
      white: "#FFFFFF",
      aliceblue: "#F8FDFF00",
      bglight:
        "background: radial-gradient(50% 50% at 50% 50%, rgba(248, 253, 255, 0) 0%, #F8FDFF 99.69%)",
      bisque: "#FFF4CA",
      grey: {
        100: "#767C7B",
        200: "#5E6261",
      },
    },
  },
  plugins: [],
};
