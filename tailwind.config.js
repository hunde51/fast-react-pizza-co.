/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // custom font family
      sans: ["Roboto Mono", "monospace"],
    },
    // when WE want override everything in here
    extend: {
      // here to extend or updating
      fontSize: {
        // huge custom text size
        huge: ["8rem", { lineHeight: "1" }],
      },
      height: {
        // fix mobile viewport height
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
