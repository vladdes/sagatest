module.exports = {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };