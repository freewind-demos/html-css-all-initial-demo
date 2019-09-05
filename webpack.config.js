const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
}
