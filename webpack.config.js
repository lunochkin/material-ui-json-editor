const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: "babel-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/src/index.html'
    })
  ]
}