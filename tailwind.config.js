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
    require('flowbite/plugin')
  ],
}