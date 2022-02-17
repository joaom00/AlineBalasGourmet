module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brown: {
        200: "#FFF9EF",
        600: "#80470F",
      },
      red: {
        200: "#FF678B",
        400: "#FF538B",
        600: "#F23A3A",
      },
      pink: {
        100: "#FF86D1",
        400: "#FF86D1",
        600: "#EB56AD",
      },
    },
    fontFamily: {
      dancingscript: ["Dancing Script", "cursive", "system-ui", "-apple-system"],
      poppins: ["Poppins", "sans-serif", "system-ui", "-apple-system"],
      comfortaa: ["Comfortaa", "monospace", "sans-serif", "system-ui", "-apple-system"],
    },
    extend: {},
  },
  plugins: [],
};
