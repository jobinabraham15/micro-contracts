var glob = require("glob");
const path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
    entry: {
      contracts: glob.sync("./contracts/*"),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.json'
      }
  };