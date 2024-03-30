import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "--my--color--1": "#d1f19c",
      "--my--color--2": "#f79d9c",
      "--my--color--3": "#e7bbfc",
      "--my--color--4": "#d371d3",
      "--my--color--5": "#f9c58a",
      "--my--color--6": "#fad637",
      "--my--color--7": "#fdeeb1",
      "--my--color--8": "#bfdafd",
      "--my--color--9": "#a8ffff",
      "--my--color--10": "#41a0e0",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
