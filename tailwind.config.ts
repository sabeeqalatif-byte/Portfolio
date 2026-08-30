import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        palette: {
          mint: "#bafdc5",
          celadon: "#94ca9d",
          forest: "#2c3c2f",
          pistachio: "#c9efce",
          sage: "#58795e",
          darkforest: "#152018",
          cardforest: "#1e2e22",
        },
        background: "var(--bg-primary)",
        surface: "var(--bg-secondary)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        border: "var(--border-color)",
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
        sage: "0 4px 20px -2px rgba(44, 60, 47, 0.12)",
        "mint-glow": "0 0 30px -4px rgba(186, 253, 197, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
