import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2F8",
          100: "#D0D9E8",
          200: "#B1C0D8",
          300: "#8BA0C5",
          400: "#6180B0",
          500: "#4A6A9A",
          600: "#3A5480",
          700: "#2A3D66",
          800: "#0F1B42",
          900: "#09102C",
          950: "#040916",
        },
        accent: {
          50: "#FFFDF0",
          100: "#FFF9D6",
          200: "#FFF2A8",
          300: "#FFE874",
          400: "#FFD940",
          500: "#F2C40D",
          600: "#D4A804",
          700: "#B08C04",
          800: "#8E7006",
          900: "#735B08",
        },
        green: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#C8F5D6",
          300: "#A8EDB8",
          400: "#7DE097",
          500: "#4AD06B",
          600: "#2EB84F",
          700: "#22943D",
          800: "#1E7534",
          900: "#1A5F2C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(15, 27, 66, 0.06)",
        medium: "0 4px 30px rgba(15, 27, 66, 0.08)",
        strong: "0 8px 40px rgba(15, 27, 66, 0.12)",
        glow: "0 0 20px rgba(15, 27, 66, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-brand":
          "linear-gradient(135deg, #0F1B42 0%, #1C2D6B 50%, #2A3D66 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #EEF2F8 0%, #D0D9E8 50%, #FFFFFF 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #0F1B42 0%, #D0D9E8 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
