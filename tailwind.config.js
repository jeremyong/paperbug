module.exports = {
  content: [
    'index.html',
    './dist/*.txt',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  // plugins: [require('daisyui')],
  plugins: [
    // require('tw-elements/dist/plugin')
    // require('flowbite/plugin')
  ]
}
