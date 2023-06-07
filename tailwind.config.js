/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        '3%': '-29%',
        '3l': '-12.7rem',
        '3i': '-0.8rem',

      },
      padding: {
        '5re': '6rem',
        '7re': '6.7rem',
      },
      left : {
        '24%': '24%',
      },
    },
  },
  plugins: [],
}
