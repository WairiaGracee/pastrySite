/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#2C1A0E",
          light: "#3D2512",
          mid: "#5C3D22",
          soft: "#8B6347",
        },
        blush: {
          DEFAULT: "#F2A7A7",
          light: "#FAD4D4",
          pale: "#FDF0F0",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EAE0",
          mid: "#E8DDD0",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Outfit'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
