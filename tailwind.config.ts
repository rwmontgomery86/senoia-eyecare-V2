import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c2724",
        paper: "#fbf8f2",
        cream: "#f6f1e8",
        rule: "#e6dec9",
        muted: "#7a6f63",
        accent: {
          DEFAULT: "#a8893f",
          deep: "#8a6f30",
        },
        "inverted-text": "#fbf8f2",
        "inverted-muted": "#cabea7",
        "inverted-rule": "#4a423d",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        wide2: "0.18em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawOn: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        drawOn: "drawOn 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scrollHint: "scrollHint 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
