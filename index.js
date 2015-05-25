'use strict';

var autoprefixer = require('autoprefixer-core');

exports.name = 'autoprefixer';
exports.outputFormat = 'css';

exports.render = function (str, options) {
  return autoprefixer(options).process(str).css;
};
