import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope"],
    },
    extend: {},
  },
  darkMode: "dark",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FEEBEC",
              100: "#FDD3D5",
              200: "#FCA7AB",
              300: "#FA7B81",
              400: "#F84E57",
              500: "#F62731",
              600: "#E50914",
              700: "#AC070F",
              800: "#71040A",
              900: "#3B0205",
              950: "#1D0103",
              foreground: "#FFFFFF",
              DEFAULT: "#E50914",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#FEEBEC",
              100: "#FDD3D5",
              200: "#FCA7AB",
              300: "#FA7B81",
              400: "#F84E57",
              500: "#F62731",
              600: "#E50914",
              700: "#AC070F",
              800: "#71040A",
              900: "#3B0205",
              950: "#1D0103",
              foreground: "#FFFFFF",
              DEFAULT: "#E50914",
            },
          },
        },
      },
    }),
  ],
};
