'use strict';

var autoprefixer = require('autoprefixer');
var postcss = require('jstransformer-postcss');

exports.name = 'autoprefixer';
exports.inputFormats = ['css'];
exports.outputFormat = 'css';

exports.renderAsync = function (str, options) {
  var opts = {
    plugins: [
      autoprefixer(options)
    ]
  }
  return postcss.renderAsync(str, opts);
};
