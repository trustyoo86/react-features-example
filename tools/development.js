'use strict';

const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 4000,
    hot: true,
  },
});