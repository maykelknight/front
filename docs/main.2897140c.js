parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u+/D":[function(require,module,exports) {

},{"./..\\img\\heading2.jpg":[["heading2.bd77e152.jpg","U8Xk"],"U8Xk"],"./..\\img\\about-bckg.jpg":[["about-bckg.e61d9ad1.jpg","b3vH"],"b3vH"],"./..\\img\\bckg-experience.jpg":[["bckg-experience.7c03eb89.jpg","5Dwq"],"5Dwq"]}],"FVPG":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=document.querySelectorAll(".nav-btn a"),n=document.querySelectorAll("section"),t=document.getElementsByClassName("nav-wrapper")[0];function c(e,n){var t=!1;return function(){t||(e.call(),t=!0,setTimeout(function(){t=!1},n))}}function o(){document.body.scrollTop>50||document.documentElement.scrollTop>50?t.classList.add("nav-scrolled"):t.classList.remove("nav-scrolled")}function r(e,n){var t=document.querySelector(e).getBoundingClientRect().top+window.scrollY-40,c=window.pageYOffset,o=t-c,r=null;requestAnimationFrame(function e(t){null===r&&(r=t);var i=t-r,a=u(i,c,o,n);window.scrollTo(0,a),i<n&&requestAnimationFrame(e),l()})}function u(e,n,t,c){return(e/=c/2)<1?t/2*e*e+n:-t/2*(--e*(e-2)-1)+n}function l(){var n=window.scrollY;e.forEach(function(e){var t=document.querySelector(e.hash);t.offsetTop-60<=n&&t.offsetTop-60+t.offsetHeight>n?e.classList.add("current"):e.classList.remove("current")})}function i(){e.forEach(function(e){e.addEventListener("click",function(n){n.preventDefault(),r(e.hash,200)})})}function a(){document.querySelectorAll(".nav-btn > a").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".hamburger-checkbox").checked=!1})})}function s(){document.querySelector(".hamburger-toggle").addEventListener("click",function(){var e=document.querySelector(".hamburger-checkbox").checked;document.querySelector(".hamburger-checkbox").checked=!!e})}window.onload=function(){i(),a(),s()},window.addEventListener("scroll",c(function(){o(),l()},100));
},{"../scss/main.scss":"u+/D"}]},{},["FVPG"], null)
//# sourceMappingURL=main.2897140c.js.map