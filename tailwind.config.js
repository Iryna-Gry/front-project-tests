/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '390px',
      // => @media (min-width: 390px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1100px',
      // => @media (min-width: 1100px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      // will be changed
      inter: ['var(--font-inter)'],
      manrope: ['var(--font-manrope)'],
      exo_2: ['var(--font-exo-2)'],
      gugi: ['var(--font-gugi)'],
    },
    extend: {},
  },
  plugins: [],
};
