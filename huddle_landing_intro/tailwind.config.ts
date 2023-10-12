import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      popins: "var(--pop)",
      open_sans: "var(--open_sans)",
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        soft_magneta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
export default config;
