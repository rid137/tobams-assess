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
            DEFAULT: '#571244',
          },
          dark: {
            DEFAULT: '#151515',
            // 1: '#161313',
            // 2: '#101828',
            // 3: '#475467'
          },
          gray: {
            DEFAULT: "#696969",
            1: "#F9F9F9",
            2: "#1515150F",
          },
          danger: {
            DEFAULT: '#EF4353',
          },
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;