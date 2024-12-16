/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   sm: "340px",
    //   md: "540px",
    //   lg: "768px",
    //   xl: "1180px",
    // },
    container:{
      center: true,
      width: {
        DEFAULT: "80vw",
        md: "90vw"
      }
    },
    extend: {},
   
  },
  plugins: [],
}