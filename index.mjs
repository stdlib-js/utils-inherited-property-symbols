// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(t,s){var e;for(e=0;e<t.length;e++)if(t[e]===s)return!0;return!1}function o(o,m){var d,l,p,f,h,j;if(arguments.length>1){if(!s(m))throw new TypeError(i("1Up45",m));f=m}else f=t;if(null==o)return[];for(l=r(o),d=[],h=1;l&&h<=f;){for(p=e(l),j=0;j<p.length;j++)!1===n(d,p[j])&&d.push(p[j]);l=r(l),h+=1}return d}export{o as default};
//# sourceMappingURL=index.mjs.map