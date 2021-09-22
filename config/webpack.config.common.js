const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/main.js',
  },
  plugins: [
    // Uses index file as default html template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      minify: true
    }),

    // TODO: make it all be inside a static folder
    // Copies static files to build directory
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../videos'), to: 'videos' },
        { from: path.resolve(__dirname, '../images'), to: 'images' },
        { from: path.resolve(__dirname, '../_headers'), to: './' }
      ]
    }),

    // Resolves jquery dependency
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })

  ],
  module: {
    rules: [
      // CSS loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        [
            'babel-loader'
        ]
    },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};