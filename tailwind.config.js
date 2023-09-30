/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#FEE9FF",
        indigo: "#9A4EE6",
        pastel: "#BC9FD2",
        pastelop: "rgba(188,159,210, 0.6)",
        sheen: "#62BAAC",
        violet: "#7E00FF",
        rajah: "#F6B258",
        lightgreen: "#67ff45",
        orange: "#D57457",
        // sd: "#3fede2",
      },
      fontFamily: {
        primary: "Rubik",
        secondary: "Poppins",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        skill: "repeat(2, 350px)",
      },
    },
    plugins: [require("daisyui")],
  },
};
