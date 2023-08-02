module.exports = {
  title: "Awesome React Component",
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'http://example.com/',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub'
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}