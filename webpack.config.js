var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "lib");
var APP_DIR = path.resolve(__dirname, "src");

module.exports = {
     entry: APP_DIR + "/app.jsx",
     output: {
         path: BUILD_DIR,
         filename: "app.bundle.js"
     },
     module: {
         loaders: [{
             test: /\.js$/,
             include: APP_DIR,
             exclude: /node_modules/,
             loader: "babel-loader",
         }, {
             test: /\.jsx$/,
             include: APP_DIR,
             exclude: /node_modules/,
             loader: "babel-loader",
         }]
     },
     resolve: {
        extensions: ["", ".js", ".jsx"]
    }
 };