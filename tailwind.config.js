/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        1: "repeat( auto-fit, minmax(250px, 1fr) )",
        2: "repeat( auto-fit,180px )",
        3: "repeat( auto-fit,300px )",
        4: "repeat( auto-fit,350px )",
      },
    },
    fontFamily: {
      poppins: "Poppins",
      lato: "Lato",
      playfair: "Playfair Display",
    },
    colors: {
      blue: {
        100: "#0044CB",
        200: "#195ABD",
        300: "#233568",
        400: "#5FA9E0",
        500: "#C3E5FF",
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

        300: "#717675",
      },
      cream: "#FFFBEB",
      light: "#F2FDFF",
      yellow: {
        400: "#FF794B",
      },
      txtBlack: "#091815",
    },
  },
  plugins: [],
};
