const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    port: 9000
  },
  // so when we use debugger and see source code, we will see our development code and not the minified code
  devtool: "source-map"
});
