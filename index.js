'use strict';

var autoprefixer = require('autoprefixer');
var postcss = require('jstransformer-postcss');

exports.name = 'autoprefixer';
exports.inputFormats = ['autoprefixer', 'css'];
exports.outputFormat = 'css';

exports.render = function (str, options) {
  options.plugins = [
    autoprefixer(options)
  ];
  return postcss.render(str, options);
};

exports.renderAsync = function (str, options) {
  options.plugins = [
    autoprefixer(options)
  ];
  return postcss.renderAsync(str, options);
};
