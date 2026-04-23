import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Deep Blue UI Design System - From Stitch Project 9835441796128002595
      // Institutional Clarity theme for NGO operations
      colors: {
        // Surface tones - tiered system for depth
        background: "#f7f9fb",
        surface: {
          DEFAULT: "#f7f9fb",
          bright: "#f7f9fb",
          dim: "#d8dadc",
          container: {
            lowest: "#ffffff",
            low: "#f2f4f6",
            DEFAULT: "#eceef0",
            high: "#e6e8ea",
            highest: "#e0e3e5",
          },
        },
        
        // Primary - Navy for authority and trust
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#ffffff",
          container: "#131b2e",
          fixed: "#dae2fd",
          fixedDim: "#bec6e0",
        },
        
        // Secondary - Royal Blue for actions
        secondary: {
          DEFAULT: "#2563EB",
          foreground: "#ffffff",
          container: "#316bf3",
          fixed: "#dbe1ff",
          fixedDim: "#b4c5ff",
        },
        
        // Tertiary - Professional Teal for success/impact
        tertiary: {
          DEFAULT: "#0D9488",
          foreground: "#ffffff",
          container: "#0c9488",
          fixed: "#89f5e7",
          fixedDim: "#6bd8cb",
        },
        
        // Semantic colors
        success: {
          DEFAULT: "#10B981",
          foreground: "#ffffff",
          container: "#D1FAE5",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#ffffff",
          container: "#FEF3C7",
        },
        error: {
          DEFAULT: "#EF4444",
          foreground: "#ffffff",
          container: "#FEE2E2",
        },
        info: {
          DEFAULT: "#3B82F6",
          foreground: "#ffffff",
          container: "#DBEAFE",
        },
        
        // Neutral grays
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
        
        // Borders and outlines
        border: "#E0E3E5",
        input: "#E0E3E5",
        ring: "#2563EB",
      },
      
      // Typography - Public Sans + Inter
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        data: ["Inter", "monospace"], // For tabular data
      },
      
      fontSize: {
        // Display sizes for hero metrics
        "display-lg": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-md": ["30px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-sm": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        
        // Heading sizes
        "h1": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["30px", { lineHeight: "1.2", fontWeight: "600" }],
        "h3": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "h4": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "h5": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "h6": ["16px", { lineHeight: "1.5", fontWeight: "600" }],
        
        // Body sizes
        "body-lg": ["18px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        
        // Label sizes
        "label-md": ["14px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "0.02em" }],
        "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "0.03em" }],
        
        // Data tabular for metrics
        "data-tabular": ["14px", { lineHeight: "1.4", fontWeight: "400", fontFeatureSettings: "'tnum'" }],
      },
      
      // Spacing - 4px baseline grid
      spacing: {
        unit: "4px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
        gutter: "20px",
        margin: "24px",
      },
      
      // Border radius - Soft (4px standard)
      borderRadius: {
        none: "0",
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        full: "9999px",
      },
      
      // Shadows - Subtle, professional
      boxShadow: {
        sm: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px -1px rgba(15, 23, 42, 0.1)",
        md: "0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1)",
        lg: "0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.1)",
        xl: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)",
        
        // Component specific
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.05)",
        "card-hover": "0 4px 12px rgba(15, 23, 42, 0.1)",
        dropdown: "0 10px 15px -3px rgba(15, 23, 42, 0.1)",
        modal: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
      },
      
      // Animation
      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      
      // Container max widths
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
