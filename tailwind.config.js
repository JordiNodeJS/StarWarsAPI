/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme:  {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        mytheme: {
          primary: '#7ee58f',

          secondary: '#0e88a0',

          accent: '#3ca8ea',

          neutral: '#342C3A',

          'base-100': '#3E4346',

          info: '#93B1F6',

          success: '#2AC0AA',

          warning: '#EFD357',

          error: '#E56F57',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
