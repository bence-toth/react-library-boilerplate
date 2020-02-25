/* eslint-disable fp/no-mutation */
/* eslint-disable import/no-unused-modules */
// TODO: See if these ↑↑↑ can be configured
// to be ignored in the webpack config

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    libraryTarget: 'umd'
  }
}
