/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-bg)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        title: ["Cinzel", "serif"],
        body: ["Lora", "serif"],
        hightlight: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
