"use strict";var m=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=m(function(d,v){
var p=require('@stdlib/constants-float64-max-safe-integer/dist'),g=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,h=require('@stdlib/utils-property-symbols/dist'),s=require('@stdlib/utils-get-prototype-of/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function c(t,r){var e;for(e=0;e<t.length;e++)if(t[e]===r)return!0;return!1}function q(t,r){var e,i,o,a,u,n;if(arguments.length>1){if(!g(r))throw new TypeError(l('1Up45',r));a=r}else a=p;if(t==null)return[];for(i=s(t),e=[],u=1;i&&u<=a;){for(o=h(i),n=0;n<o.length;n++)c(e,o[n])===!1&&e.push(o[n]);i=s(i),u+=1}return e}v.exports=q
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
