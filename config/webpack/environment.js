const { environment } = require('@rails/webpacker')

// Shoelace config
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

// Add shoelace assets to webpack's build process
environment.plugins.append(
  'CopyPlugin',
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../../node_modules/@shoelace-style/shoelace/dist/assets'),
        to: path.resolve(__dirname, '../../public/packs/js/assets')
      }
    ]
  })
)

module.exports = environment
