const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const alias = require("./../config/alias");

const SCRIPT_REG = /\.(ts|js)x?$/
const STYLE_REG = /\.css$/i

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: SCRIPT_REG,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: STYLE_REG,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: { ...alias },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ],
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, '..', './build')
  }
}