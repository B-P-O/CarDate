/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        secondary: {
          DEFAULT: " #50C878 ",
          100: " #46d246",
          200: " #28a428",
          300: " #0a290a",
          400: " #99e699"

        },
        black: {
          DEFAULT: " #0d0d0d",
          100: " #333333",
          200: " #4d4d4d",
          300: " #000000",
          400: " #121212"
        },
        gray: {
          100: " #b3b3b3",
          200: " #E0E0E0"
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
