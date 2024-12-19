import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Put custom values / themes / classes here */
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
        serif: ["'Merriweather'", "serif"],
      },
      colors: {
        chesnut: {
          dark: '#a64439',
          light: '#af574d',
        },
        battleshipGray: {
          dark: '#778682',
          light: '#bbc3c1',
        },
        trueBlue: {
          dark: '#47699f', 
          light: '#a3b4cf',
        }
      },
    },
  },
  plugins: [],
};
export default config;
