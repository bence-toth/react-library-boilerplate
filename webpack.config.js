// This is Webpack's configuration file.
// Read more:
// https://webpack.js.org/configuration/

module.exports = {
  module: {
    rules: [
      {
        // Process all `js` and `jsx`
        // imports with Babel.
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /\.stories\.(js|jsx)$/,
          /\.test\.(js|jsx)$/
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Load all `css` imports
        // with `style-loader` and `css-loader`.
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Autoprefixes CSS
          'postcss-loader'
        ]
      }
    ]
  },

  resolve: {
    // Look for `index.js` first,
    // then fall back to `index.jsx`.
    extensions: ['.js', '.jsx']
  },

  output: {
    // Main module will have a default export.
    libraryTarget: 'umd'
  }
}
