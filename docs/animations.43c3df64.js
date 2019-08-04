// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\heading2-small.jpg":[["heading2-small.540b38d6.jpg","assets/img/heading2-small.jpg"],"assets/img/heading2-small.jpg"],"./..\\img\\bckg-experience.jpg":[["bckg-experience.9d9c3db1.jpg","assets/img/bckg-experience.jpg"],"assets/img/bckg-experience.jpg"],"./..\\img\\bg-01.jpg":[["bg-01.77e0e128.jpg","assets/img/bg-01.jpg"],"assets/img/bg-01.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/js/animations.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

window.onload = function () {
  document.querySelector('.preloader-wrapper').style.display = 'none';
};

var slideLeftItems = document.getElementsByClassName('slide-left');
var slideRightItems = document.getElementsByClassName('slide-right');
var titleIcon = document.getElementsByClassName('title-icon');
var skill = document.getElementsByClassName('skill');
var controller = new ScrollMagic.Controller();
Array.prototype.forEach.call(slideLeftItems, function (elem) {
  var tl = new TimelineMax();
  tl.fromTo(elem, 0.8, {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    ease: Power2.EaseInOut
  } // {x: 0, opacity: 1, ease: Power2.EaseInOut}
  );
  new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 0.9,
    reverse: false
  }).setTween(tl).addTo(controller);
});
Array.prototype.forEach.call(slideRightItems, function (elem) {
  var tl = new TimelineMax();
  tl.fromTo(elem, 0.8, {
    x: 100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    ease: Power2.EaseInOut
  });
  new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 1,
    reverse: false
  }).setTween(tl).addTo(controller);
});
Array.prototype.forEach.call(titleIcon, function (elem) {
  var tl = new TimelineMax();
  tl.fromTo(elem, 1, {
    y: -100,
    opacity: 1,
    scale: 0
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: Power2.EaseInOut
  });
  new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 1,
    reverse: false
  }).setTween(tl).addTo(controller);
});
Array.prototype.forEach.call(skill, function (elem) {
  console.log(elem.childNodes);
  var picture = null;
  var description = null;

  for (var i = 0; i < elem.childNodes.length; i++) {
    if (elem.childNodes[i].className === "skill__picture") {
      picture = elem.childNodes[i];
      break;
    }
  }

  for (var i = 0; i < elem.childNodes.length; i++) {
    if (elem.childNodes[i].className === "skill__description") {
      description = elem.childNodes[i];
      break;
    }
  }

  var tl = new TimelineMax();
  tl.from(picture, 2, {
    opacity: 0
  });
  tl.from(description, 0.5, {
    x: -100,
    opacity: 0
  }, '-=2');
  new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 0.8,
    reverse: false
  }).setTween(tl).addTo(controller);
});
var t2 = new TimelineMax();
t2.from('.background-box', 1, {
  x: -900
}); // t2.from('.go-back-wrapper', 0.5 , {y: -200});

t2.from('.description__heading', 0.5, {
  y: -40,
  opacity: 0
}, "-=0.8");
t2.from('.description__details', 0.5, {
  y: 40,
  opacity: 0
}, "-=0.8");
t2.from('.description__link', 0.5, {
  opacity: 0
}, "-=1");
t2.from('.card', 0.5, {
  x: -50,
  opacity: 0
}, "-=0.5"); // var slideLeft = TweenMax.from('.go-back-wrapper', 1, {
//     xPercent: -10,
//     opacity: 0,
//     ease: Back.easeOut
// });
//
// var card = TweenMax.from('.card', 1, {
//     yPercent: -50,
//     opacity: 0,
//     ease: Back.easeOut
// });
// var scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 100,
//     speedAsDuration: true,
//     easing: 'Linear'
// });
// var slideRight = TweenMax.from('.slide-right', 1, {
//     xPercent: 10,
//     opacity: 0,
//     ease: Back.easeOut
// });
// var slideTop = new TimelineMax({paused: true});
//
// var slideTop = TweenMax.from('.title-icon', 5, {
//     yPercent: -150,
//     opacity: 0,
//     ease: Back.easeOut
// });
// var scene = new ScrollMagic.Scene({
//     triggerElement: '.slide-left',
//     triggerHook: .9
// }).setTween(slideLeft)
//     .reverse(false)
//     .addTo(controller);
// var scene2 = new ScrollMagic.Scene({
//     triggerElement: '.slide-right',
//     triggerHook: .9
// }).setTween(slideRight)
//     .reverse(false)
//     .addTo(controller);
//
// var scene2 = new ScrollMagic.Scene({
//     triggerElement: '.title-icon',
//     triggerHook: .9
// }).setTween(slideTop)
//
//     .addTo(controller);
},{"../scss/main.scss":"assets/scss/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51778" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/animations.js"], null)
//# sourceMappingURL=/animations.43c3df64.js.map