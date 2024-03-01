/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#5C7394",
        "darkish-blue": "#292C33",
        "dark-blue": "#00659E",
        green: "#4EAD8E",
      },
      boxShadow: {
        custom: "10px 6px 20px 2px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        lora: "lora",
      },
    },
  },
  plugins: [],
};
