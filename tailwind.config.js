/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    screens : {
      sm: '360px',
      md: '834px',
      lg: '1440px',
      xl: '1640px'
    },
    // screens : {
    //   'sm': '576px',
    //   // => @media (min-width: 576px) { ... }

    //   'md': '960px',
    //   // => @media (min-width: 960px) { ... }

    //   'lg': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // },
    fontFamily : {
      'roboto': ['Roboto', 'sans-serif' ],
      'serif-pro': ['Source Serif Pro', 'serif'],
      'alegreya-sans': ['Alegreya Sans', 'sans-serif']
    },
    extend: 

    {colors : {
      "bit-red": "#800000",
      "bit-yellow": "#E7D7C1",
      "bit-blue": "#062242",
      "bit-lightblue": "#7EB2DD",
      "white": "#FFFFFF",
      "black": "#000000",
      "grey": "#D9D9D9",
    }
  },
  },
  plugins: [],
};

