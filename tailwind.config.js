/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        sourceSans: ['"Source Sans 3"', 'sans-serif'],
      },
      backgroundImage: {
        'vitrin-gradient': 'linear-gradient(rgba(1, 121, 163, 0.64) 0%, rgba(5, 71, 82, 0) 100%)',
        'vitrin-image': 'linear-gradient(rgba(1, 121, 163, 0.64) 0%, rgba(5, 71, 82, 0) 100%), url(/images/vitrin.svg)',
      },
      colors: {
        'primary': '#3b82f6',
        'primary-dark': '#054652',
      }
    },
  },
  plugins: [],
};
