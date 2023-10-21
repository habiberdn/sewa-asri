/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-400': '#40BF40',
        'primary-800': '#0D260D',
        'primary-700': '#1A4D1A', 
        'primary-600': '#267326',
        'primary-500': '#339933',
        'primary-300': '#66CC66',
        'primary-200': '#8CD98C', // Unique name
        'primary-0': '#339933',
        'neutral-500':'#808080'
      },
  },
  plugins: [],
}
