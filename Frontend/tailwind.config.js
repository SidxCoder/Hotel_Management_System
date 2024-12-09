/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",'./public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'slider-bg': "url('/new pic2.jpeg')",
        'Auth-bg':"url('/image (2).jpg')",
        'landing-bg':"url('/landing2.jpeg')"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
      
    },
  },
  plugins: [],
}

