parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u+/D":[function(require,module,exports) {

},{"./..\\img\\heading2.jpg":[["heading2.bd77e152.jpg","U8Xk"],"U8Xk"],"./..\\img\\about-bckg.jpg":[["about-bckg.e61d9ad1.jpg","b3vH"],"b3vH"],"./..\\img\\bckg-experience.jpg":[["bckg-experience.7c03eb89.jpg","5Dwq"],"5Dwq"]}],"FVPG":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=document.querySelectorAll(".nav-btn a"),t=document.querySelectorAll("section"),n=document.getElementsByClassName("nav-wrapper")[0];function o(e,t){var n=!1;return function(){n||(e.call(),n=!0,setTimeout(function(){n=!1},t))}}function c(){document.body.scrollTop>50||document.documentElement.scrollTop>50?n.classList.add("nav-scrolled"):n.classList.remove("nav-scrolled")}function r(e,t){var n=document.querySelector(e).getBoundingClientRect().top+window.scrollY-40,o=window.pageYOffset,c=n-o,r=null;requestAnimationFrame(function e(n){null===r&&(r=n);var a=n-r,i=l(a,o,c,t);window.scrollTo(0,i),a<t&&requestAnimationFrame(e),s()})}function l(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function s(){var t=window.scrollY;e.forEach(function(e){var n=document.querySelector(e.hash);n.offsetTop-60<=t&&n.offsetTop-60+n.offsetHeight>t?e.classList.add("current"):e.classList.remove("current")})}function a(){e.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),r(e.hash,200)})})}function i(){document.querySelectorAll(".nav-btn > a").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".nav-btns-wrapper").classList.toggle("active"),document.querySelector(".hamburger-toggle").classList.toggle("active")})})}function u(){document.querySelector(".hamburger-toggle").addEventListener("click",function(){var e=document.querySelector(".nav-btns-wrapper");if(document.querySelector(".hamburger-toggle").classList.toggle("active"),e.classList.toggle("active"),!e.classList.contains("active")){var t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}})}window.onload=function(){a(),i(),u()},window.addEventListener("scroll",o(function(){c(),s()},100));
},{"../scss/main.scss":"u+/D"}]},{},["FVPG"], null)
//# sourceMappingURL=main.e2424e44.js.map