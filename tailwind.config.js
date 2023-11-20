/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        cursive: ["Dancing Script Variable", "sans-serif"],
      },
      height: {
        screen: "100svh",
      },
      minHeight: {
        screen: "100svh",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        layout: "auto 1fr auto",
      },
      transitionProperty: {
        size: "height, max-height, width, max-width",
      },
    },
  },
  plugins: [],
};
