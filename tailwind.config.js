/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        "3%": "-29%",
        "3l": "-12.7rem",
        "3i": "-0.8rem",
        first: "-146px",
        84: "73%",
        80: "80%",
        "4l": "-0.6rem",
      },
      padding: {
        "5re": "5rem",
        "7re": "6.7rem",
        "4.7re": "4.7rem",
        "8re": "8rem",
      },
      left: {
        "24%": "24%",
        "50%": "50%",
      },
      backgroundColor: {
        rose: "#DF80AC",
        blues: "#579FF4",
        yellows: "#FCB325",
        greens: "#098E27",
      },
      spacing: {
        246: "70%",
        267: "92%",
      },
      borderRadius: {
        "7xl": "7.5rem",
      },
      animation: {
        spin: "spin 4s linear infinite",
      },
      width: {
        "3/10": "40%",
        19: "19%",
      },
    },
  },
  plugins: [],
};
