import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        background: "#05070D",
        panel: "#0B1020",
        ink: "#F8FAFC",
        muted: "#A1A8B8",
        line: "rgba(255,255,255,0.10)",
        brand: {
          blue: "#3B82F6",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          green: "#19B08A",
          deep: "#0B1F33",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(34,211,238,0.12)",
        card: "0 18px 60px rgba(0,0,0,0.32)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,.18), transparent 34%), radial-gradient(circle at 80% 0%, rgba(139,92,246,.14), transparent 32%), linear-gradient(180deg, #05070D 0%, #070A12 46%, #05070D 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.38" },
          "50%": { opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3.6s ease-in-out infinite",
        "pulse-line": "pulseLine 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
