const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // relative path to our entry file
  // webpack will pick up on this by default
  // we just want to be explicit here
  entry: "./src/index.js",
  output: {
    // path needs an absolute path
    path: path.join(__dirname, "dist"),
    // filename for output
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        // which module does this rule apply to
        test: /\.jsx?$/,
        // what compilers to use to create javascript that can work with older browsers
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: ["last 2 versions", "not dead", "not < 2%"],
                useBuiltIns: "entry"
              }
            ],
            "@babel/preset-react"
          ],
          // used for class components where state is defined state = { count: 0 }
          plugins: [
            // useful for applying changes without resetting any state
            // when running hot reload
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/,
        // you use 'use instead of loader when theres more than 1'
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  // webpack auto creates an index.html file on build
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
