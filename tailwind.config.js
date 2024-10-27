/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        ttransparent: "transparent",
        tprimary: "#0abab5",
        tsecondary: "#7fb398",
        ttertiary: "#FF9C00",
        talert: "#F40030",
        ttextPrimary: "#23312f",
        taccent: "#ffae9e",
        tneutral: "#f2f7f7",
      },
      fontFamily: {
        primary: ["Questrial", "sans-serif"],
        secondary: ["Afacad", "sans-serif"],
        tertiary: ["Raleway", "sans-serif"],
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
};
