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
          ivory: "#fcfcfb",
          peach: "#f7bea9",
          coral: "#ef98a7",
          lavender: "#807094",
          plum: "#604f71",
          deep: "#1e1628",
          darkplum: "#2d203a",
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
        plum: "0 4px 20px -2px rgba(96, 79, 113, 0.12)",
        "plum-glow": "0 0 30px -4px rgba(239, 152, 167, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
