import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf8f3",
        sand: "#f1ece1",
        cream: "#fdfbf6",
        ink: "#262523",
        charcoal: "#211f1c",
        coal: "#1a1815",
        amber: "#e8a23d",
        gold: "#f0b860",
        rust: "#b26a12",
        ochre: "#c07a1e",
        soil: "#4a4640",
        stone: "#6b655c",
        mist: "#8c8577",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
