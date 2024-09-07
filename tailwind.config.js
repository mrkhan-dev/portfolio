/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serf",
        Roboto: "'Roboto' sans-serif",
        Playwrite: "'Playwrite FR Trad', cursive",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark"],
  },
};
