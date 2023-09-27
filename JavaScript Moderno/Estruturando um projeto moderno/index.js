// src/index.js

import './styles/index.css'

const hello = () => console.log(`It works!`)

hello()

// babel.config.js

module.exports = {
  presets: [
    ['@babel/preset-env']
  ]
}

// webpack.config.js

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /.js$/,
      use: ['babel-loader']
    }]
  },
  output: {
    filename: '[name].min.js'
  }
}

// package.json

// ...
"scripts": {
  "build": "webpack"
},
// ...

