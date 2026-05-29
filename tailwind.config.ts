import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#07111F",
          secondary: "#0B1728",
        },
        foreground: "#F5F7FA",
        surface: {
          DEFAULT: "#13263D",
          secondary: "#162D47",
        },
        "surface-container-lowest": "#0B1728",
        "surface-container-low": "#0F1D33",
        "surface-container": "#13263D",
        brand: {
          trust: "#3B82F6",
          operational: "#14B8A6",
          governance: "#D4A017",
        },
        text: {
          primary: "#F5F7FA",
          secondary: "#A8B3C2",
          muted: "#7F8B99",
        },
        primary: {
          DEFAULT: "#F5F7FA",
          foreground: "#07111F",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          foreground: "#F5F7FA",
        },
        accent: {
          DEFAULT: "#14B8A6",
          foreground: "#07111F",
        },
        muted: {
          DEFAULT: "#162D47",
          foreground: "#A8B3C2",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F5F7FA",
        },
        border: "#162D47",
        input: "#162D47",
        ring: "#3B82F6",
        card: {
          DEFAULT: "#0B1728",
          foreground: "#F5F7FA",
        },
        popover: {
          DEFAULT: "#0B1728",
          foreground: "#F5F7FA",
        },
        warning: "#F59E0B",
        error: "#EF4444",
        success: "#22C55E",
        tertiary: "#14B8A6",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        heading: ["Inter Tight", "sans-serif"],
        body: ["Inter", "sans-serif"],
        data: ["IBM Plex Sans", "monospace"],
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
      },
      boxShadow: {
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        "executive": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
