/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "sans-serif"],
      },
      fontSize: {
        12: [
          "0.75rem",
          {
            lineHeight: "150%",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "150%",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "150%",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "150%",
          },
        ],
        20: [
          "1.25rem",
          {
            lineHeight: "150%",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "150%",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "150%",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "150%",
          },
        ],
        44: [
          "2.75rem",
          {
            lineHeight: "150%",
          },
        ],
      },
      colors: {
        grey: {
          1000: "#14151f",
          900: "#323442",
          800: "#454757",
          700: "#5e6072",
          600: "#787a8f",
          500: "#989aa8",
          400: "#b6b8c2",
          300: "#cecfd7",
          200: "#ededf0",
          100: "#f7f7f9",
        },
        pink:{
        900:"#DC4867",
        800:"#f87c95",
        700:"#f98da3",
        600:"#faa3b4",
        500:"#ffb6c5",
        400:"#feced8",
        300:"#ffdee5",
        200:"#ffe8ed",
        100:"#fff2f5",
        },
        blue:{
          700:"#4070a0",
          600:"#5391ca",
          500:"#8cb6dc",
          400:"#afcdea",
          300:"#cde2f5",
          200:"#deecf9",
          100:"#ecf4fc",
        }
      },
      boxShadow: {
        1: "0px 18px 60px 0px rgba(7, 12, 52, 0.15)",
        2: "0px 0px 0px 0px rgba(95, 104, 123, 0.10), 0px 5px 10px 0px rgba(95, 104, 123, 0.09), 0px 19px 19px 0px rgba(95, 104, 123, 0.08), 0px 42px 25px 0px rgba(95, 104, 123, 0.05), 0px 74px 30px 0px rgba(95, 104, 123, 0.01), 0px 116px 32px 0px rgba(95, 104, 123, 0.00)",
        3: "0px 5px 11px 0px rgba(95, 104, 123, 0.12)",
      },
      animation: {
        "fade-text": "fadeOut 3s linear infinite",
      },
      keyframes: {
        fadeOut: {
          "0%": { color: "#3A3A3A" },
          "50%": { color: "#9FE870" },
          "100%": { color: "#9FE870" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
