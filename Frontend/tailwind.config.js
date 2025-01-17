/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",'./public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'slider-bg': "url('/new pic2.jpeg')",
        'Auth-bg':"url('/image (2).jpg')",
        'landing-bg':"url('/landing2.jpeg')",
        'register-bg': "url('/register.avif')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'logo': ["Pacifico", 'serif'],
    },
    colors: {
      secondary: "#12B7F2",
      priamry: "#3286DB",
      priamryBg: "#F4FAFF",
      borders: "#2F323A",
      bgColor: "#E2E1DF",
      secondaryC: "#FF9100",
      secondaryText: "#A69C88",
      card: "#C7C4C2",
      card2: "#C7C4C2"
    }, 
      
    },
  },
  plugins: [],
}

