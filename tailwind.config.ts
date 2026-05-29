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
          DEFAULT: "hsl(0 0% 100%)",
          secondary: "hsl(210 40% 96%)",
          dark: "hsl(222 47% 8%)",
        },
        foreground: {
          DEFAULT: "hsl(222 47% 11%)",
          secondary: "hsl(215 16% 47%)",
          muted: "hsl(215 20% 65%)",
        },
        surface: {
          DEFAULT: "hsl(0 0% 100%)",
          secondary: "hsl(210 40% 96%)",
          dark: "hsl(222 47% 11%)",
        },
        brand: {
          trust: "hsl(221 83% 53%)",
          operational: "hsl(174 72% 40%)",
          governance: "hsl(45 93% 47%)",
          warning: "hsl(38 92% 50%)",
          danger: "hsl(0 84% 60%)",
        },
        text: {
          primary: "hsl(222 47% 11%)",
          secondary: "hsl(215 16% 47%)",
          muted: "hsl(215 20% 65%)",
          dark: {
            primary: "hsl(210 40% 98%)",
            secondary: "hsl(215 20% 65%)",
            muted: "hsl(215 16% 47%)",
          },
        },
        primary: {
          DEFAULT: "hsl(221 83% 53%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(222 47% 11%)",
        },
        accent: {
          DEFAULT: "hsl(174 72% 40%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(215 16% 47%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(210 40% 98%)",
        },
        border: "hsl(214 32% 91%)",
        input: "hsl(214 32% 91%)",
        ring: "hsl(221 83% 53%)",
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 47% 11%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 47% 11%)",
        },
        warning: "hsl(38 92% 50%)",
        error: "hsl(0 84% 60%)",
        success: "hsl(142 72% 36%)",
        tertiary: "hsl(174 72% 40%)",
        gray: {
          50: "hsl(210 40% 98%)",
          100: "hsl(210 40% 96%)",
          200: "hsl(214 32% 91%)",
          300: "hsl(215 20% 65%)",
          400: "hsl(215 16% 55%)",
          500: "hsl(215 16% 47%)",
          600: "hsl(215 20% 35%)",
          700: "hsl(222 47% 20%)",
          800: "hsl(222 47% 15%)",
          900: "hsl(222 47% 11%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
        elevated:
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        modal:
          "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "heading-xl": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        "heading-lg": ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "heading-md": ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.005em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
