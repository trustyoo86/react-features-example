'use strict';

const { resolve } = require('path');
const { SRC_PATH } = require('../app-config');

module.exports = {
  entry: {
    'main': resolve(SRC_PATH, 'App.js'),
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};