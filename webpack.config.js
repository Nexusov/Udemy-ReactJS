'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './Food_dist/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Food_dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
