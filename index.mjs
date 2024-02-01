// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(t,e){var s;for(s=0;s<t.length;s++)if(t[s]===e)return!0;return!1}function o(o,m){var d,l,f,p,a,g;if(arguments.length>1){if(!e(m))throw new TypeError(i("invalid argument. Second argument must be a positive integer. Value: `%s`.",m));p=m}else p=t;if(null==o)return[];for(l=r(o),d=[],a=1;l&&a<=p;){for(f=s(l),g=0;g<f.length;g++)!1===n(d,f[g])&&d.push(f[g]);l=r(l),a+=1}return d}export{o as default};
//# sourceMappingURL=index.mjs.map
