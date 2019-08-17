'use strict';

const { resolve } = require('path');
const { SRC_PATH } = require('../app-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom'],
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
  
  resolve: {
    alias: {
      'components': resolve(SRC_PATH, 'components'),
      'containers': resolve(SRC_PATH, 'containers'),
      'style': resolve(SRC_PATH, 'style'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ]
};