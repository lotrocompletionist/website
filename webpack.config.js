const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");

const production = process.env.NODE_ENV == 'production';

module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./public/index.html"
    }),
    ...(production ? [new WebappWebpackPlugin("./public/images/icon.png")] : [])
  ]
};
