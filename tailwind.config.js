/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: [
    'text-red-400',
    'text-green-400',
    'text-gray-300',
    'border-red-400',
    'border-gray-300',
    'border-green-400',
  ],
}
