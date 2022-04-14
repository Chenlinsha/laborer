const path = require('path');

const EndingConsolePlugin = require('./plugin.cjs');

module.exports = {
  entry: './index.js',
  // output: {
  //   filename: 'readme.md',
  //   path: path.resolve(__dirname, 'dist')
  // },
  plugins: [
   
      new EndingConsolePlugin({
        path: path.resolve(__dirname, 'dist')
      })
    
  ]
}

