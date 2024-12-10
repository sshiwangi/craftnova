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
          900: "#0A0A0B",
        },
        lightgreen: "#77EA96",
        saffron: "#F4CB45",
        success: "#4CAF50",
      },
    },
  },
  plugins: [],
} satisfies Config;
