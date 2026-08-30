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
        background: "#0a0f1d",
        surface: "#0f172a",
        "surface-glass": "rgba(15, 23, 42, 0.65)",
        card: "rgba(19, 29, 51, 0.6)",
        "card-hover": "rgba(28, 41, 71, 0.8)",
        border: "rgba(129, 140, 248, 0.16)",
        "border-hover": "rgba(129, 140, 248, 0.38)",
        "border-subtle": "rgba(99, 102, 241, 0.12)",
        accent: {
          DEFAULT: "#6366f1", // Soft Indigo / Iris
          hover: "#4f46e5",   // Deep Indigo
          light: "#818cf8",   // Calming Lavender / Periwinkle
          bright: "#a5b4fc",  // Soft Lilac
          sky: "#38bdf8",     // Calming Sky Blue
          cyan: "#22d3ee",    // Soft Cyan
          glow: "rgba(99, 102, 241, 0.22)",
          subtle: "rgba(99, 102, 241, 0.12)",
        },
        qa: {
          emerald: "#34d399",
          mint: "#6ee7b7",
          subtle: "rgba(52, 211, 153, 0.12)",
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
        "glass-glow": "0 0 30px -4px rgba(99, 102, 241, 0.25)",
        "aurora-glow": "0 0 40px -6px rgba(56, 189, 248, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
