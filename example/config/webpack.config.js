const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (p = '') {
  return path.resolve(__dirname, p)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('../build'),
    filename: 'babel-learn.min.js',
  },
  devServer: {
    port: 7001
  },
  module: {
    rules: [{
      test: /\.(css|less)$/i,
      use: ['css-loader', 'style-loader', 'less-loader']
    }, {
      test: /\.(ts|tsx)$/i,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}