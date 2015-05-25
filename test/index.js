'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = 'a { transition: transform 1s }';
var expected = 'a { -webkit-transition: -webkit-transform 1s; transition: transform 1s }';

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test(transform.name, function () {
  var options = {
  	browsers: ['> 1%', 'ie 8']
  };
  var output = transform.render(input, options);
  assertEqual(output, expected);
});
