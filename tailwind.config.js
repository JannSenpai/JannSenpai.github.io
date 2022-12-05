/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        jasefin: ["Josefin Sans"],
        poppins: ["Poppins"],
      },
      boxShadow: {
        box: "0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",
      },
      colors: {
        cardColor: "#C147E9",
      },
      minWidth: {
        minCard: "",
      },
    },
  },
  plugins: [],
};
