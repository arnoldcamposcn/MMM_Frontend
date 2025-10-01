// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: "#1A1A1A", 
        grayTestimonials: "#DEDEE0",   // gris usado en algunos fondos
        white: "#FFFFFF",         // override o usar el default
        headerText: "#D8D4DE",    // color de texto header
        accent: "#45F6FF", 
        // colorTransparent: "transparent",       // color del borde del botón
        grayTransparent10: "rgba(131, 131, 131, 0.1)",
        lightGray: "#DEDEE0",
        gold: "#FF9E2A", // Added gold color
        lightGrayBreadcrum: "#838383",
        transparent: "transparent",
      },
      boxShadow: {
        custom: "0px 4px 20px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(64deg, rgba(0, 216, 173, 0.80) 0%, rgba(69, 246, 255, 0.10) 100%)",
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        abeezee: ['"ABeeZee"', 'sans-serif'],
      },
      mixBlendMode: {
        luminosity: 'luminosity',
      },
    },
  },
  plugins: [],
}
