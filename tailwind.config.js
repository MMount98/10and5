// Importing defaultTheme from Tailwind CSS
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
        architects: ['"Architects Daughter"', ...defaultTheme.fontFamily.sans],
        oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
        span: ['"Span"', ...defaultTheme.fontFamily.sans],
        spanlight: ['"SpanLight"', ...defaultTheme.fontFamily.sans],
        napzer: ['"Napzer"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "13xl": "13rem",
      },
      width: {
        128: "32rem",
        144: "36rem",
        112: "28rem",
      },
      height: {
        128: "32rem",
        144: "36rem",
        1112: "28rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        mydefault: {
          primary: "#242424",
          secondary: "#242424",
          accent: "#242424",
          neutral: "#2b2d42",
          success: "#52b788",
          warning: "#f77f00",
          error: "#d62828",
          "base-100": "#242424",
          "base-content": "#FFFFFF",
        },
      },
      {
        mylight: {
          primary: "#FDF9F4",
          secondary: "#FDF9F4",
          accent: "#FDF9F4",
          neutral: "#2b2d42",
          success: "#52b788",
          warning: "#f77f00",
          error: "#d62828",
          "base-100": "#FDF9F4",
          "base-content": "#000000",
        },
      },
    ],
  },
};
