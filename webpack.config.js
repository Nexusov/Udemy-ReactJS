'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: 'E:/My Projects/udemy/Udemy-ReactJS/webpack/src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: /* __dirname + */ 'E:/My Projects/udemy/Udemy-ReactJS/webpack/'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
