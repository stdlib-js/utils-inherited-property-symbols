// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,o,a,l,f,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t,n;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var F,N=Object.prototype,C=N.toString,$=N.__defineGetter__,B=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var L=F;function U(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";z=W()?function(r){var e,t,n,i,o;if(null==r)return X.call(r);t=r[D],o=D,e=null!=(i=r)&&Y.call(i,o);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)};var H=z,J=Number,K=J.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return Z(r)||rr(r)}U(er,"isPrimitive",Z),U(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return r<tr&&r>nr&&ir(e=r)===e;var e}function ar(r){return Z(r)&&or(r)}function cr(r){return rr(r)&&or(r.valueOf())}function ur(r){return ar(r)||cr(r)}function lr(r){return ar(r)&&r>0}function fr(r){return cr(r)&&r.valueOf()>0}function sr(r){return lr(r)||fr(r)}U(ur,"isPrimitive",ar),U(ur,"isObject",cr),U(sr,"isPrimitive",lr),U(sr,"isObject",fr);var pr,gr=void 0!==Object.getOwnPropertySymbols,dr=Object,br=dr.getOwnPropertySymbols;pr=gr?function(r){return br(dr(r))}:function(){return[]};var yr=pr,hr=/./;function vr(r){return"boolean"==typeof r}var wr=Boolean,mr=Boolean.prototype.toString;var jr=W();function _r(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Er(r){return vr(r)||_r(r)}function Or(){return new Function("return this;")()}U(Er,"isPrimitive",vr),U(Er,"isObject",_r);var Sr="object"==typeof self?self:null,xr="object"==typeof window?window:null,Ir="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},kr="object"==typeof Ir?Ir:null,Tr="object"==typeof globalThis?globalThis:null;var Ar=function(r){if(arguments.length){if(!vr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Or()}if(Tr)return Tr;if(Sr)return Sr;if(xr)return xr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Ar.document&&Ar.document.childNodes,Vr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Nr,Cr=/^\s*function\s*([^(]*)/i;U(Fr,"REGEXP",Cr),Nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var $r=Nr;function Br(r){return null!==r&&"object"==typeof r}var Rr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Br);function Gr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Cr.exec(n.toString()))return e[1]}return Br(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(Br,"isObjectLikeArray",Rr);var Lr="function"==typeof hr||"object"==typeof Vr||"function"==typeof Pr?function(r){return Gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Gr(r).toLowerCase():e};var Ur,Zr,Mr=Object.getPrototypeOf;Zr=Object.getPrototypeOf,Ur="function"===Lr(Zr)?Mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wr=Ur;function Xr(r){return null==r?null:(r=dr(r),Wr(r))}function Yr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function zr(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function qr(r,e){var t,n,i,o,a,c;if(arguments.length>1){if(!lr(e))throw new TypeError(Yr("1Up45,IB",e));o=e}else o=9007199254740991;if(null==r)return[];for(n=Xr(r),t=[],a=1;n&&a<=o;){for(i=yr(n),c=0;c<i.length;c++)!1===zr(t,i[c])&&t.push(i[c]);n=Xr(n),a+=1}return t}export{qr as default};
//# sourceMappingURL=mod.js.map
