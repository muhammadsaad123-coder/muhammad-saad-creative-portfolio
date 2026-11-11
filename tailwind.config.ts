import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0A0A0A",
        bgSecondary: "#111111",
        cardDark: "#171717",
        borderDark: "#292929",
        primaryText: "#F5F5F5",
        secondaryText: "#A1A1AA",
        accent: {
          DEFAULT: "#C7F36B",
          hover: "#b7e55a",
          dark: "#9ec943",
          muted: "rgba(199, 243, 107, 0.12)",
          border: "rgba(199, 243, 107, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        card: "0 4px 24px -2px rgba(0, 0, 0, 0.6)",
        accentGlow: "0 0 25px -5px rgba(199, 243, 107, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
