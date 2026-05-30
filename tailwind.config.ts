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
          DEFAULT: "#F7F9FB",
          on: "#191C1E",
        },
        surface: {
          background: "#F7F9FB",
          white: "#FFFFFF",
          dim: "#D8DADC",
          variant: "#E0E3E5",
          tint: "#515F78",
          on: "#191C1E",
          "on-variant": "#44474D",
          container: {
            lowest: "#FFFFFF",
            low: "#F2F4F6",
            DEFAULT: "#ECEEF0",
            high: "#E6E8EA",
            highest: "#E0E3E5",
          },
          inverse: {
            DEFAULT: "#2D3133",
            on: "#EFF1F3",
          },
        },
        primary: {
          DEFAULT: "#0D1C32",
          on: "#FFFFFF",
          container: "#0D1C32",
          "on-container": "#76849F",
          fixed: "#D6E3FF",
          "fixed-dim": "#B9C7E4",
          "on-fixed": "#0D1C32",
          "on-fixed-variant": "#39475F",
          inverse: "#B9C7E4",
          hover: "#162842",
        },
        secondary: {
          DEFAULT: "#006C49",
          on: "#FFFFFF",
          container: "#6CF8BB",
          "on-container": "#00714D",
          fixed: "#6FFBBE",
          "fixed-dim": "#4EDEA3",
          "on-fixed": "#002113",
          "on-fixed-variant": "#005236",
        },
        tertiary: {
          container: "#0B1C30",
          "on-container": "#75859D",
          fixed: "#D3E4FE",
          "fixed-dim": "#B7C8E1",
          "on-fixed": "#0B1C30",
          "on-fixed-variant": "#38485D",
        },
        error: {
          DEFAULT: "#BA1A1A",
          on: "#FFFFFF",
          container: "#FFDAD6",
          "on-container": "#93000A",
        },
        border: {
          DEFAULT: "#E2E8F0",
          variant: "#C5C6CD",
        },
        outline: {
          DEFAULT: "#75777E",
          variant: "#C5C6CD",
        },
        text: {
          primary: "#191C1E",
          secondary: "#64748B",
          muted: "#94A3B8",
        },
        status: {
          success: {
            bg: "#DCFCE7",
            text: "#166534",
            border: "#BBF7D0",
          },
          neutral: {
            bg: "#F1F5F9",
            text: "#475569",
            border: "#E2E8F0",
          },
          error: {
            bg: "#FEE2E2",
            text: "#991B1B",
            border: "#FECACA",
          },
          warning: {
            bg: "#FEF3C7",
            text: "#92400E",
            border: "#FDE68A",
          },
          info: {
            bg: "#DBEAFE",
            text: "#1E40AF",
            border: "#BFDBFE",
          },
        },
        hover: {
          DEFAULT: "#F1F5F9",
          primary: "#162842",
        },
        ring: "#0D1C32",
        input: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "title-md": [
          "18px",
          { lineHeight: "24px", fontWeight: "600" },
        ],
        "body-lg": [
          "16px",
          { lineHeight: "24px", fontWeight: "400" },
        ],
        "body-md": [
          "14px",
          { lineHeight: "20px", fontWeight: "400" },
        ],
        "label-md": [
          "12px",
          { lineHeight: "16px", fontWeight: "500", letterSpacing: "0.05em" },
        ],
        caption: [
          "12px",
          { lineHeight: "16px", fontWeight: "500" },
        ],
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      boxShadow: {
        subtle: "0px 4px 12px rgba(10, 25, 47, 0.08)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
        modal: "0px 4px 12px rgba(10, 25, 47, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
