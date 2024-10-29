import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.tsx',
    './resources/**/*.vue',
    './resources/**/*.js',
    './resources/**/*.ts',
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
    },
  },
  plugins: [],
};
