const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: ['>0.5%', 'last 2 versions', 'not dead', 'not op_mini all']
    }),
    mqpacker()
  ]
})
