/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "main-dark-blue": "hsl(217, 54%, 11%)",
        "card-dark-blue": "hsl(216, 50%, 16%)",
        "line-dark blue": "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
