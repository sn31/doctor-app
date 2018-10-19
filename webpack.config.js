const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(["dist"]),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: "doctor-app",
      template: "./src/index.html",
      inject: "body"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/,
      use: [
          'file-loader',
      {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        }
      }]
    },
      {
        test: /\.js$/,
        exclude: [/node_modules/,/spec/],
        loader: "eslint-loader"
      },
      {                         
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }

    ]
  }
  
  
};
