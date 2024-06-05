/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    textColor: {
      blueGradientText: "#A8D7FF",
      orangeGradientText: "#FFC677",
      pinkGradientText: "#DE9CFF",
      grayGradientText: "#C8C8C8",
    },
  },
  plugins: [],
};
