/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
    colors: {
      azulButton: '#4993bc',
      hoverAzulButton: '#4993bce6'
    }
  },
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
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
