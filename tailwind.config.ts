import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFF",
        secondary: {
          light: "#154C79",
          dark: "#1C1B5D",
        },
        accent: {
          violet: "#705DC6",
          grey: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
