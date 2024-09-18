/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBlack: "#291063", // For the main background
        deepPurple: "#7258AE",
        containerBg: "#F0F0F0", // Light gray for the container background
        textPrimary: "#291063", // Dark blue for primary text
        textSecondary: "#7258AE", // Light purple for secondary text
        textAccent: "#E63946", // Accent color for numbers or highlighted text (red)
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
