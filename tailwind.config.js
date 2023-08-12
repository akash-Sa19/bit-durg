/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      sml: "576px",
      md: "834px",
      // m: '1000px',
      mdl: "1275px",
      lg: "1440px",
      xl: "1640px",
      xxl: "1940px",
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "serif-pro": ["Source Serif Pro", "serif"],
      "alegreya-sans": ["Alegreya Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "bit-red": "#800000",
        "bit-yellow": "#E7D7C1",
        "bit-blue": "#062242",
        "bit-lightblue": "#7EB2DD",
        "bit-CreamLite": "rgba(231, 215, 193, 0.25)",
        "bit-Cream": "#E7D7C1",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
