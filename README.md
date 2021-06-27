<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# inheritedPropertySymbols

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return an array of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inherited-property-symbols
```

</section>

<section class="usage">

## Usage

```javascript
var inheritedPropertySymbols = require( '@stdlib/utils-inherited-property-symbols' );
```

#### inheritedPropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ] );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ], 1 );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var inheritedPropertySymbols = require( '@stdlib/utils-inherited-property-symbols' );

var hasSymbols;
var symbols;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
}

obj = new Foo();
symbols = inheritedPropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-property-symbols.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-property-symbols

[test-image]: https://github.com/stdlib-js/utils-inherited-property-symbols/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-inherited-property-symbols/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-property-symbols/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-property-symbols?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-property-symbols.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-property-symbols/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-property-symbols/main/LICENSE

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor

</section>

<!-- /.links -->
