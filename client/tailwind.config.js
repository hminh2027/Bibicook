/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bebecook: "rgb(31,59,120)",
        primary: "rgb(154, 220, 255)",
        secondary: "rgb(255, 248, 154)",
        third: "rgb(255, 178, 166)",
        forth: "rgb(255, 138, 174)",
        "pink-salmon": {
          50: "#fff1f5",
          100: "#ffe3ea",
          200: "#ffccdb",
          300: "#ff8aae",
          400: "#fe6e9e",
          500: "#f83b7e",
          600: "#e5196c",
          700: "#c20e5b",
          800: "#a20f53",
          900: "#8b104d",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(154, 220, 255)",

          secondary: "rgb(255, 248, 154)",

          accent: "rgb(255, 178, 166)",

          neutral: "rgb(255, 138, 174)",

          "base-100": "#E6E3E8",

          info: "#657EE2",

          success: "#22c55e",

          warning: "#eab308",

          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
