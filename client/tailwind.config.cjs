/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatedBackground: {
          from: { "background-position": "0 0" },
          to: { "background-position": "300px 0%" },
        },
      },
      animation: {
        animatedBackground: "animatedBackground 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this for antd!
  },
  important: "#root",
};
