const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: { loader: "ts-loader" } },
      { test: /\.scss$/, use:[
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader", options: { includePaths: ["node_modules"] } }
      ]},
      { test: /\.html$/, use: { loader: "html-loader", options: { minimize: true } } }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
