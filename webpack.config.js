const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src/server"),
    filename: "index.js",
    publicPath: "/"
  },
  target: "node",
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
