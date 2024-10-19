import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1360px',
        '3xl': '1420px',
        '4xl': '1680px',
        '5xl': '2000px',
        '6xl': '2200px',
      },
      colors: {
        mainDark: "#210716",
        mainLight: "white",
        secondary: "#22577A",
        prim: "#9DFBFA",
        subText: "#5090A0",
        purplee: "#862078"
      },
     fontSize:{
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '13': '13px',
      '15': '15px',
      '17': '17px'
     },
      height:{
        "13": "50px"
      },
      padding:{
        2.5: "10px"
      }
    },
  },
  plugins: [],
};
export default config;
