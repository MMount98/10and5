// Importing defaultTheme from Tailwind CSS
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Make sure the font names match exactly with those imported from Google Fonts
        bricolage: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
        architects: ['"Architects Daughter"', ...defaultTheme.fontFamily.sans],
        oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
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
