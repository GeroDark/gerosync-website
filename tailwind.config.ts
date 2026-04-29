import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        navy: "#081a2f",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
        steel: "#91a6c3"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 211, 238, 0.16)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.2) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
