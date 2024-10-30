import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'vitrin-gradient': 'linear-gradient(rgba(1, 121, 163, 0.64) 0%, rgba(5, 71, 82, 0) 100%)',
        'vitrin-image': 'linear-gradient(rgba(1, 121, 163, 0.64) 0%, rgba(5, 71, 82, 0) 100%), url(/images/vitrin.svg)',
      },
      colors: {
        'brand-dark': '#054652'
      }
    },
  },
  plugins: [],
};
