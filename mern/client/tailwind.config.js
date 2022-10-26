/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        umber: "#68534D",
        rmetalic: "#81726A",
        sage: "#BBB896",
        bone: "#DDDCCB",
        cultured: "#F5F5F5",
      },
    },
  },
  mode: "jit",
  plugins: [],
};
