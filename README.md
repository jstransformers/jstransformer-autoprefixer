# jstransformer-autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-autoprefixer/master.svg)](https://travis-ci.org/jstransformers/jstransformer-autoprefixer)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-autoprefixer/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-autoprefixer?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-autoprefixer/master.svg)](http://david-dm.org/jstransformers/jstransformer-autoprefixer)
[![NPM version](https://img.shields.io/npm/v/jstransformer-autoprefixer.svg)](https://www.npmjs.org/package/jstransformer-autoprefixer)

## Installation

    npm install jstransformer-autoprefixer

## API

```js
var autoprefixer = require('jstransformer')(require('jstransformer-autoprefixer'))

var css = 'a { transition: transform 1s }';

// {} can contain any Autoprefixer and PostCSS options
autoprefixer.render(css, {}).body
// => a { -webkit-transition: -webkit-transform 1s; transition: transform 1s }
```

## License

MIT
