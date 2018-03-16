const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");

module.exports = function(env, argv) {
  return {
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
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: "./index.html",
        template: "./src/index.html"
      }),
      ...(argv.mode === "production"
        ? [new WebappWebpackPlugin("./src/assets/icon.png")]
        : [])
    ]
  };
};
