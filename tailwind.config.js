/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(180deg, #A8D7FF 0%, #6171FF 100%)",
        "orange-gradient": "linear-gradient(180deg, #FFC677 0%, #FF9500 100%)",
        "pink-gradient": "linear-gradient(180deg, #DE9CFF 0%, #AF52DE 100%)",
        "gray-gradient": "linear-gradient(180deg, #FFFFFF 0%, #C8C8C8 100%)",
      },
      fontFamily: {
        prompt: ['"Prompt"', "sans-serif"],
        oliver: ['"Oliver"', "cursive"],
        calSans: ['"Cal Sans"'],
        nunitoSans: ['"Nunito Sans"'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-blue-gradient": {
          "background-image":
            "linear-gradient(180deg, #A8D7FF 0%, #6171FF 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".text-orange-gradient": {
          "background-image":
            "linear-gradient(180deg, #FFC677 0%, #FF9500 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".text-pink-gradient": {
          "background-image":
            "linear-gradient(180deg, #DE9CFF 0%, #AF52DE 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".text-gray-gradient": {
          "background-image":
            "linear-gradient(180deg, #FFFFFF 0%, #C8C8C8 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      });
    },
  ],
  safelist: [
    "bg-gradient-to-b",
    "from-[#FFC677]",
    "from-[#A8D7FF]",
    "from-[#DE9CFF]",
    "from-[#BB5BF3]",
    "to-[#FF9500]",
    "to-[#6171FF]",
    "to-[#AF52DE]",
    "to-[#6900EE]",
  ],
};
