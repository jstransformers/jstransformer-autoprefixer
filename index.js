'use strict'

var autoprefixer = require('autoprefixer')
var postcss = require('jstransformer-postcss')
var objectAssign = require('object-assign')

exports.name = 'autoprefixer'
exports.inputFormats = ['autoprefixer', 'css']
exports.outputFormat = 'css'

exports.render = function (str, options) {
  return postcss.render(str, objectAssign({
    plugins: [
      autoprefixer(options)
    ]
  }, options))
}

exports.renderAsync = function (str, options) {
  return postcss.renderAsync(str, objectAssign({
    plugins: [
      autoprefixer(options)
    ]
  }, options))
}
