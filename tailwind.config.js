/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'archive-bg-0': '#7cb2ff',
        'archive-bg-1': '#4dffff',
        'archive-bg-2': '#9ac78b',
        'archive-bg-3': '#80f1b0',
        'archive-bg-4': '#ff1344',
        'archive-bg-5': '#ffb24a',
        'archive-bg-6': '#3c00ff',
      },
    },
  },
  plugins: [],
}
