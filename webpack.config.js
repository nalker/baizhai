const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './assets/'
          }
        },
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ]
  }
};
