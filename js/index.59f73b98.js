(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],l=0,f=[];l<a.length;l++)c=a[l],o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={index:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("5779")},5779:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("e7e0");var r=n("52fc"),o=n.n(r),i=(n("5dd1"),n("1157")),c=n.n(i),a=n("c740"),s=n("2ef0"),u=(n("65e8"),n("b725"),n("2bb9"),n("f672")),d=(n("8f88"),840);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".loader");setTimeout(function(){e.classList.add("loader--loaded")},3e3);var t={itemSelectText:""};new o.a("#upper-domain",t);var n=document.querySelector(".main-nav__menu-open"),r=document.querySelector(".main-nav__list"),i=document.querySelector(".main-nav__overlay");n.addEventListener("click",function(e){e.preventDefault(),r.classList.add("shown"),i.classList.add("shown"),n.setAttribute("aria-expanded",!0),Object(a["disableBodyScroll"])(r)}),i.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("shown"),i.classList.remove("shown"),n.setAttribute("aria-expanded",!1),Object(a["enableBodyScroll"])(r)}),window.addEventListener("resize",Object(s["debounce"])(function(){window.innerWidth>d&&(r.classList.remove("shown"),i.classList.remove("shown"),n.setAttribute("aria-expanded",!1),Object(a["enableBodyScroll"])(r))},200));var l=document.querySelector(".page-footer__to-top");l.addEventListener("click",function(e){var t=e.target.getAttribute("href"),n=document.querySelector(t);n?Object(u["a"])(n):console.log("No jump target found")}),c()(".clients__people-list").on("destroy",function(e,t){var n=c()(this),r=Object(s["debounce"])(function(){t.activeBreakpoint<window.innerWidth||(n.slick(t.options),window.removeEventListener("resize",r))},250);window.addEventListener("resize",r)}).slick({infinite:!0,dots:!0,arrows:!1,focusOnSelect:!1,mobileFirst:!0,responsive:[{breakpoint:d,settings:"unslick"}]})})},e7e0:function(e,t,n){}});
//# sourceMappingURL=index.59f73b98.js.map