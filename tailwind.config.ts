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
        "custom-teal" : "#edf3f2",
        "custom-light-green" : "#c2fa6b",
        "custom-green" : "#38a67e",
        "custom-dark-green" : "#004d3f",
        "custom-super-light-green" : "#e7fac9",
        "custom-black" : "#0F2028",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
