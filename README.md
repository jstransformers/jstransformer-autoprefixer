# jstransformer-autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-foo/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-foo?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-autoprefixer

## API

```js
var autoprefixer = require('jstransformer')(require('jstransformer-autoprefixer'))

var css = 'a { transition: transform 1s }';

autoprefixer.render(css).body
// => a { -webkit-transition: -webkit-transform 1s; transition: transform 1s }
```

## License

MIT
