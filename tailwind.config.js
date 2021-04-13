module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white-smoke": "#f8f8f8",
        white: "#ffffff",
        "menu-item": "linear-gradient(118deg,#7367f0,rgba(115,103,240,.7))",
        primary: "#7367f0",
        "modal-bg": "#00000040",
      },
      width: {
        "260px": "260px",
        "500px": "500px",
      },
      height: {},
      borderWidth: {},
      padding: {},
      margin: {
        "260px": "260px",
      },
      spacing: {},
      fontSize: {},
      keyframes: {
        rightTo: {
          "0%": {
            right: "-100%",
          },
          "100%": {
            right: "0",
          },
        },
        leftTo: {
          "0%": {
            left: "-100%",
          },
          "100%": {
            left: "0",
          },
        },
      },
      animation: {
        rightTo: "rightTo 0.75s ease-in-out",
        leftTo: "leftTo 0.75s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
