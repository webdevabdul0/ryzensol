import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
// @ts-expect-error
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {


      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",

        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },

        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },

      textStrokeWidth: {
        DEFAULT: "1px",
        sm: "0.5px",
        lg: "2px",
      },

      colors: {
        background: "var(--background)",
        primary: "rgba(var(--primary))",
        primaryText: "rgba(var(--primaryText))",
        textMuted: "rgba(var(--textMuted))",
        lightBorder: "rgba(var(--lightBorder))",
      },

      borderImage: {
        "custom-gradient": `linear-gradient(90deg, 
          rgba(202, 223, 139, 1) 0%, 
          rgba(248, 252, 207, 1) 16.67%, 
          rgba(247, 208, 127, 1) 33.33%, 
          rgba(225, 126, 113, 1) 50%, 
          rgba(237, 92, 87, 1) 66.67%, 
          rgba(112, 154, 219, 1) 83.33%, 
          rgba(121, 193, 225, 1) 100%)`,
      },
    
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
    function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".stroke-text": {
          WebkitTextStroke: "1px #0070f3", // Change stroke width and color as needed
          color: "transparent", // Optional: Makes only the stroke visible
        },
      });
    },
  ],
} satisfies Config;
