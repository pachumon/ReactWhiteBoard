const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  //this is needed for a good debugging exprience in devtools
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
        // query: {
        //     presets: ["@babel/preset-env","@babel/preset-react"]
        // this is needed only if there is no .babelrc
        // }
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
        // query: {
        //     presets: ["@babel/preset-env","@babel/preset-react"]
        // this is needed only if there is no .babelrc
        // }
      }
    ]
  }
};
