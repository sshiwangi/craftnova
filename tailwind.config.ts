import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FCFDFA",
          100: "#F1EEE6",
          700: "#545453",
          800: "#121520",
        },
        lightgreen: "#77EA96",
        saffron: "#F4CB45",
      },
    },
  },
  plugins: [],
} satisfies Config;
