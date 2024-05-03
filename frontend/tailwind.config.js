/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "321px",
        // => @media (min-width: 320px) { ... }
        md: "745px",
        // => @media (min-width: 744px) { ... }
        lg: "1025px",
        // => @media (min-width: 1024px) { ... }
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
        xxl: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}

