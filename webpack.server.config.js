const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jp(e*)g|svg)$/,
        use: ["file-loader"]
      }
    ]
  },
  externals: [webpackNodeExternals()]
};
