/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Whitebg: " hsl(0, 0%, 100%)",
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        LightGrayishBlue: "hsl(227, 47%, 96%)",
        DarkGrayishBlue: "hsl(228, 12%, 44%)",
        VeryDarkBlue: "hsl(230, 17%, 14%)",
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",

        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Instagram: "hsl(37, 97%, 70%) ",
        InstagramII: "hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",
      },
      screens: {
        sm: "480px",
        md: "768px",

        lg: "1024px",
        xl: "1400px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
