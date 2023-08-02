/* eslint-disable no-undef */
module.exports = {
  title: "Nepal Address Pickers",
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/mhnpd/nepal-address-pickers',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub'
  },
  sections: [
    {
      name: 'Introduction', // Name of the section
      content: 'docs/intro.md', // Path to your Markdown or JSX intro file
    },
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
    },
    // ... other sections
  ],
  pagePerSection: true,
  skipComponentsWithoutExample: true,
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