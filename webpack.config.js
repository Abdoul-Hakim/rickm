// The configuration in this file tells Webpack to use babel-loader for every file that has the .js
//  extension and excludes files in the node_modules directory for the Babel compiler.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESlintPlugin = require('eslint-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // note webpack reads settings from right to left
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new ESlintPlugin()
  ],
};
