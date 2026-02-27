import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#08090d",
        panel: "#10131a",
        muted: "#8f98ac",
        accent: "#ef4444"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.14), transparent 30%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(239,68,68,0.2), 0 18px 45px rgba(0,0,0,0.4)"
      }
    }
  },
  plugins: []
};

export default config;
