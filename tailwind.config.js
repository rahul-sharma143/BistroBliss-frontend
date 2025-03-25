/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.hml", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlayFair: ["Playfair", "serif"],
        DMsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        grayBlack: "#2C2F24",
        wine: "#AD343E",
        bg: "#DBDFD0",
        BackGround: "#F9F9F7",
      },
      animation: {
        bounce: "bounce 1s infinite",
        scaleUp: "scaleUp 0.6s ease-out",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(5)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" }, // Start from a smaller size
          "100%": { transform: "scale(1)" }, // End at original size
        },
      },
    },
  },
  plugins: [],
};
