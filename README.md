<<<<<<< HEAD
# jstransformer-autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-autoprefixer/master.svg)](https://travis-ci.org/jstransformers/jstransformer-autoprefixer)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-autoprefixer/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-autoprefixer?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-autoprefixer/master.svg)](http://david-dm.org/jstransformers/jstransformer-autoprefixer)
[![NPM version](https://img.shields.io/npm/v/jstransformer-autoprefixer.svg)](https://www.npmjs.org/package/jstransformer-autoprefixer)
=======
# JSTransformer Boilerplate

Use JSTransformer Boilerplate to create and update transformers.

1. Visit [the Boilerplate Wiki](https://github.com/jstransformers/boilerplate/wiki) on how to get started
2. Remove this top notice from any transformers

# jstransformer-foo

[Foo](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)
>>>>>>> c3f5dea729824052d0e5c585d768cedeed935de5

## Installation

    npm install jstransformer-autoprefixer

## API

```js
<<<<<<< HEAD
var autoprefixer = require('jstransformer')(require('jstransformer-autoprefixer'))

var css = 'a { transition: transform 1s }';
=======
var foo = require('jstransformer')(require('jstransformer-foo'));
>>>>>>> c3f5dea729824052d0e5c585d768cedeed935de5

// {} can contain any Autoprefixer and PostCSS options
autoprefixer.render(css, {}).body
// => a { -webkit-transition: -webkit-transform 1s; transition: transform 1s }
```

## License

MIT
