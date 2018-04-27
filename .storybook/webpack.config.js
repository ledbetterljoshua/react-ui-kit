const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
        }
      ]
    }]
  },
  resolve: {
    alias: {
      'grid-ui': path.resolve(__dirname, '../src/components'),
      'config': path.resolve(__dirname, '../config'),
      'storybook-custom-plugins': path.resolve(__dirname, '../storybook-custom-plugins')
    },
  }
};