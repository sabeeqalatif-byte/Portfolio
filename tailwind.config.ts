import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#081216",
        surface: "#0c1b20",
        "surface-glass": "rgba(12, 27, 32, 0.65)",
        card: "rgba(16, 34, 40, 0.55)",
        "card-hover": "rgba(22, 46, 54, 0.75)",
        border: "rgba(45, 212, 191, 0.15)",
        "border-hover": "rgba(45, 212, 191, 0.35)",
        "border-subtle": "rgba(20, 184, 166, 0.1)",
        accent: {
          DEFAULT: "#14b8a6", // Sea green / Teal 500
          hover: "#0d9488",   // Teal 600
          light: "#2dd4bf",   // Sea green light / Teal 400
          bright: "#5eead4",  // Teal 300
          glow: "rgba(45, 212, 191, 0.2)",
          subtle: "rgba(20, 184, 166, 0.12)",
        },
        qa: {
          emerald: "#10b981",
          sea: "#2dd4bf",
          subtle: "rgba(45, 212, 191, 0.1)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "Consolas",
          '"Fira Code"',
          "monospace",
        ],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-glow": "0 0 25px -3px rgba(45, 212, 191, 0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
