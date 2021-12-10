const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  // module: {
  //     rules: [],
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin()], // generates html file and injects bundle.js into it
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
  
};
