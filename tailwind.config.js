/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #B8D2F1, #F289AA, #C68BF0, #D164DA, #C963E8, #BFC2E8, #FFC999, #D0D8C9, #CED8CB, #FFFFFF00)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
      },
      boxShadow: {
        'custom-orange': '0px 10px 15px -3px #DF6951, -13px -19px 13px -13px rgba(0,0,0,0.1)', // Customize the spread and opacity as needed
      },
      colors: {
        primary: '#DF6951',
        secondary: '#F1A501',
      },
    },
  },
  plugins: [
    // Custom plugin for pseudo-elements removed
  ],
};
