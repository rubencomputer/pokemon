import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "128": "32rem",
      },
      width: {
        "128": "420px",
      },
      colors: {
        main: "#566CD6",
        mainDisabled: "#3b4c9c",
        buttons: "#7789DF",
        mainText: "#40415E",
        gradientStart: "#F2F4FF",
        gradientEnd: "#FBFCFF",
        searchBarShadow: "#566CD6",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
