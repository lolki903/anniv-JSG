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
        'first': '-170px',

      },
      padding: {
        '5re': '6rem',
        '7re': '6.7rem',
        '4.7re': '4.7rem',
        '8re':'8.6rem'
      },
      left : {
        '24%': '24%',
        '50%': '50%',
      },
      backgroundColor: {
        'rose':'#DF80AC',
        'blues': '#579FF4',
        'yellows':'#FCB325',
        'greens':'#098E27',
      },
      spacing: {
        '246': '70%',
        '267':'89%'
      },
      borderRadius: {
        '7xl': '7.5rem',
      },
      animation: {
        spin: 'spin 4s linear infinite',
      },
      width: {
        '3/10': '40%',
        '19':'19%'
      },
    },
  },
  plugins: [],
}
