parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ORu+":[function(require,module,exports) {
var define;
var e;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}console.log("TETSTASDASDAS")(function(n,o){"function"==typeof e&&e.amd?e(o):"object"===("undefined"==typeof exports?"undefined":t(exports))?module.exports=o():n.ScrollMagic=o()}(this,function(){"use strict";var e=function(){r.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.5",window.addEventListener("mousewheel",function(){});e.Controller=function(t){var o,i,l="ScrollMagic.Controller",s=n.defaults,a=this,c=r.extend({},s,t),u=[],f=!1,d=0,p="PAUSED",g=!0,h=0,v=!0,m=function(){c.refreshInterval>0&&(i=window.setTimeout(T,c.refreshInterval))},y=function(){return c.vertical?r.get.scrollTop(c.container):r.get.scrollLeft(c.container)},w=function(){return c.vertical?r.get.height(c.container):r.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?g?window.scrollTo(r.get.scrollLeft(),e):c.container.scrollTop=e:g?window.scrollTo(e,r.get.scrollTop()):c.container.scrollLeft=e},E=function(){if(v&&f){var e=r.type.Array(f)?f:u.slice(0);f=!1;var t=d,n=(d=a.scrollPos())-t;0!==n&&(p=n>0?"FORWARD":"REVERSE"),"REVERSE"===p&&e.reverse(),e.forEach(function(t,n){F(3,"updating Scene "+(n+1)+"/"+e.length+" ("+u.length+" total)"),t.update(!0)}),0===e.length&&c.loglevel>=3&&F(3,"updating 0 Scenes (nothing added to controller)")}},R=function(){o=r.rAF(E)},b=function(e){F(3,"event fired causing an update:",e.type),"resize"==e.type&&(h=w(),p="PAUSED"),!0!==f&&(f=!0,R())},T=function(){if(!g&&h!=w()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(e)}u.forEach(function(e,t){e.refresh()}),m()},F=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this._options=c;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(r.type.Array(t))t.forEach(function(e,t){a.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==a)t.addTo(a);else if(u.indexOf(t)<0){for(var n in u.push(t),u=O(u),t.on("shift.controller_sort",function(){u=O(u)}),c.globalSceneOptions)t[n]&&t[n].call(t,c.globalSceneOptions[n]);F(3,"adding Scene (now "+u.length+" total)")}}else F(1,"ERROR: invalid argument supplied for '.addScene()'");return a},this.removeScene=function(e){if(r.type.Array(e))e.forEach(function(e,t){a.removeScene(e)});else{var t=u.indexOf(e);t>-1&&(e.off("shift.controller_sort"),u.splice(t,1),F(3,"removing Scene (now "+u.length+" left)"),e.remove())}return a},this.updateScene=function(t,n){return r.type.Array(t)?t.forEach(function(e,t){a.updateScene(e,n)}):n?t.update(!0):!0!==f&&t instanceof e.Scene&&(-1==(f=f||[]).indexOf(t)&&f.push(t),f=O(f),R()),a},this.update=function(e){return b({type:"resize"}),e&&E(),a},this.scrollTo=function(t,n){if(r.type.Number(t))S.call(c.container,t,n);else if(t instanceof e.Scene)t.controller()===a?a.scrollTo(t.scrollOffset(),n):F(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if(r.type.Function(t))S=t;else{var o=r.get.elements(t)[0];if(o){for(;o.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)o=o.parentNode;var i=c.vertical?"top":"left",l=r.get.offset(c.container),s=r.get.offset(o);g||(l[i]-=a.scrollPos()),a.scrollTo(s[i]-l[i],n)}else F(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",t)}return a},this.scrollPos=function(e){return arguments.length?(r.type.Function(e)?y=e:F(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),a):y.call(a)},this.info=function(e){var t={size:h,vertical:c.vertical,scrollPos:d,scrollDirection:p,container:c.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void F(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(c.loglevel!=e&&(c.loglevel=e),a):c.loglevel},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,a.updateScene(u,!0)),a):v},this.destroy=function(e){window.clearTimeout(i);for(var t=u.length;t--;)u[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),r.cAF(o),F(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in c)s.hasOwnProperty(t)||(F(2,'WARNING: Unknown option "'+t+'"'),delete c[t]);if(c.container=r.get.elements(c.container)[0],!c.container)throw F(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";(g=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),h=w(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b),c.refreshInterval=parseInt(c.refreshInterval)||s.refreshInterval,m(),F(3,"added new "+l+" controller (v"+e.version+")")}(),a};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(t){var n,i,l="ScrollMagic.Scene",s=o.defaults,a=this,c=r.extend({},s,t),u="BEFORE",f=0,d={start:0,end:0},p=0,g=!0,h={};this.on=function(e,t){return r.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),o=n[0],r=n[1];"*"!=o&&(h[o]||(h[o]=[]),h[o].push({namespace:r||"",callback:t}))}):v(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),a},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach(function(e,n){var o=e.split("."),r=o[0],i=o[1]||"";("*"===r?Object.keys(h):[r]).forEach(function(e){for(var n=h[e]||[],o=n.length;o--;){var r=n[o];!r||i!==r.namespace&&"*"!==i||t&&t!=r.callback||n.splice(o,1)}n.length||delete h[e]})}),a):(v(1,"ERROR: Invalid event name supplied."),a)},this.trigger=function(t,n){if(t){var o=t.trim().split("."),r=o[0],i=o[1],l=h[r];v(3,"event fired:",r,n?"->":"",n||""),l&&l.forEach(function(t,o){i&&i!==t.namespace||t.callback.call(a,new e.Event(r,t.namespace,a,n))})}else v(1,"ERROR: Invalid event name supplied.");return a},a.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&a.update())}).on("shift.internal",function(e){w(),a.update()});var v=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?i!=t&&(i&&i.removeScene(a),i=t,T(),S(!0),E(!0),w(),i.info("container").addEventListener("resize",R),t.addScene(a),a.trigger("add",{controller:i}),v(3,"added "+l+" to controller"),a.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),a},this.enabled=function(e){return arguments.length?(g!=e&&(g=!!e,a.update(!0)),a):g},this.remove=function(){if(i){i.info("container").removeEventListener("resize",R);var e=i;i=void 0,e.removeScene(a),a.trigger("remove"),v(3,"removed "+l+" from controller")}return a},this.destroy=function(e){return a.trigger("destroy",{reset:e}),a.remove(),a.off("*.*"),v(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(i)if(e)if(i.enabled()&&g){var t,n=i.info("scrollPos");t=c.duration>0?(n-d.start)/(d.end-d.start):n>=d.start?1:0,a.trigger("update",{startPos:d.start,endPos:d.end,scrollPos:n}),a.progress(t)}else m&&"DURING"===u&&x(!0);else i.updateScene(a,!1);return a},this.refresh=function(){return S(),E(),a},this.progress=function(e){if(arguments.length){var t=!1,n=u,o=i?i.info("scrollDirection"):"PAUSED",r=c.reverse||e>=f;if(0===c.duration?(t=f!=e,u=0===(f=e<1&&r?0:1)?"BEFORE":"DURING"):e<0&&"BEFORE"!==u&&r?(f=0,u="BEFORE",t=!0):e>=0&&e<1&&r?(f=e,u="DURING",t=!0):e>=1&&"AFTER"!==u?(f=1,u="AFTER",t=!0):"DURING"!==u||r||x(),t){var l={progress:f,state:u,scrollDirection:o},s=u!=n,d=function(e){a.trigger(e,l)};s&&"DURING"!==n&&(d("enter"),d("BEFORE"===n?"start":"end")),d("progress"),s&&"DURING"!==u&&(d("BEFORE"===u?"start":"end"),d("leave"))}return a}return f};var m,y,w=function(){d={start:p+c.offset},i&&c.triggerElement&&(d.start-=i.info("size")*c.triggerHook),d.end=d.start+c.duration},S=function(e){if(n){F("duration",n.call(a))&&!e&&(a.trigger("change",{what:"duration",newval:c.duration}),a.trigger("shift",{reason:"duration"}))}},E=function(e){var t=0,n=c.triggerElement;if(i&&n){for(var o=i.info(),l=r.get.offset(o.container),s=o.vertical?"top":"left";n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n=n.parentNode;var u=r.get.offset(n);o.isDocument||(l[s]-=i.scrollPos()),t=u[s]-l[s]}var f=t!=p;p=t,f&&!e&&a.trigger("shift",{reason:"triggerElementPosition"})},R=function(e){c.triggerHook>0&&a.trigger("shift",{reason:"containerResize"})},b=r.extend(o.validate,{duration:function(e){if(r.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return i?i.info("size")*t:0}}if(r.type.Function(e)){n=e;try{e=parseFloat(n())}catch(o){e=-1}}if(e=parseFloat(e),!r.type.Number(e)||e<0)throw n?(n=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),T=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(e,t){var n;if(b[e])try{n=b[e](c[e])}catch(i){n=s[e];var o=r.type.String(i)?[i]:i;r.type.Array(o)?(o[0]="ERROR: "+o[0],o.unshift(1),v.apply(this,o)):v(1,"ERROR: Problem executing validation callback for option '"+e+"':",i.message)}finally{c[e]=n}})},F=function(e,t){var n=!1,o=c[e];return c[e]!=t&&(c[e]=t,T(e),n=o!=c[e]),n},O=function(e){a[e]||(a[e]=function(t){return arguments.length?("duration"===e&&(n=void 0),F(e,t)&&(a.trigger("change",{what:e,newval:c[e]}),o.shifts.indexOf(e)>-1&&a.trigger("shift",{reason:e})),a):c[e]})};this.controller=function(){return i},this.state=function(){return u},this.scrollOffset=function(){return d.start},this.triggerPosition=function(){var e=c.offset;return i&&(c.triggerElement?e+=p:e+=i.info("size")*a.triggerHook()),e},a.on("shift.internal",function(e){var t="duration"===e.reason;("AFTER"===u&&t||"DURING"===u&&0===c.duration)&&x(),t&&C()}).on("progress.internal",function(e){x()}).on("add.internal",function(e){C()}).on("destroy.internal",function(e){a.removePin(e.reset)});var x=function(e){if(m&&i){var t=i.info(),n=y.spacer.firstChild;if(e||"DURING"!==u){var o={position:y.inFlow?"relative":"absolute",top:0,left:0},l=r.css(n,"position")!=o.position;y.pushFollowers?c.duration>0&&("AFTER"===u&&0===parseFloat(r.css(y.spacer,"padding-top"))?l=!0:"BEFORE"===u&&0===parseFloat(r.css(y.spacer,"padding-bottom"))&&(l=!0)):o[t.vertical?"top":"left"]=c.duration*f,r.css(n,o),l&&C()}else{"fixed"!=r.css(n,"position")&&(r.css(n,{position:"fixed"}),C());var s=r.get.offset(y.spacer,!0),a=c.reverse||0===c.duration?t.scrollPos-d.start:Math.round(f*c.duration*10)/10;s[t.vertical?"top":"left"]+=a,r.css(y.spacer.firstChild,{top:s.top,left:s.left})}}},C=function(){if(m&&i&&y.inFlow){var e="DURING"===u,t=i.info("vertical"),n=y.spacer.firstChild,o=r.isMarginCollapseType(r.css(y.spacer,"display")),l={};y.relSize.width||y.relSize.autoFullWidth?e?r.css(m,{width:r.get.width(y.spacer)}):r.css(m,{width:"100%"}):(l["min-width"]=r.get.width(t?m:n,!0,!0),l.width=e?l["min-width"]:"auto"),y.relSize.height?e?r.css(m,{height:r.get.height(y.spacer)-(y.pushFollowers?c.duration:0)}):r.css(m,{height:"100%"}):(l["min-height"]=r.get.height(t?n:m,!0,!o),l.height=e?l["min-height"]:"auto"),y.pushFollowers&&(l["padding"+(t?"Top":"Left")]=c.duration*f,l["padding"+(t?"Bottom":"Right")]=c.duration*(1-f)),r.css(y.spacer,l)}},A=function(){i&&m&&"DURING"===u&&!i.info("isDocument")&&x()},I=function(){i&&m&&"DURING"===u&&((y.relSize.width||y.relSize.autoFullWidth)&&r.get.width(window)!=r.get.width(y.spacer.parentNode)||y.relSize.height&&r.get.height(window)!=r.get.height(y.spacer.parentNode))&&C()},N=function(e){i&&m&&"DURING"===u&&!i.info("isDocument")&&(e.preventDefault(),i._setScrollPos(i.info("scrollPos")-((e.wheelDelta||e[i.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=r.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=r.get.elements(e)[0]))return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),a;if("fixed"===r.css(e,"position"))return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),a;if(m){if(m===e)return a;a.removePin()}var n=(m=e).parentNode.style.display,o=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var i="absolute"!=r.css(m,"position"),l=r.css(m,o.concat(["display"])),s=r.css(m,["width","height"]);m.parentNode.style.display=n,!i&&t.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){m&&0===c.duration&&t.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=m.parentNode.insertBefore(document.createElement("div"),m),f=r.extend(l,{position:i?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(i||r.extend(f,r.css(m,["width","height"])),r.css(u,f),u.setAttribute("data-scrollmagic-pin-spacer",""),r.addClass(u,t.spacerClass),y={spacer:u,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&i&&r.isMarginCollapseType(l.display)},pushFollowers:t.pushFollowers,inFlow:i},!m.___origStyle){m.___origStyle={};var d=m.style;o.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=d[e]||""})}return y.relSize.width&&r.css(u,{width:s.width}),y.relSize.height&&r.css(u,{height:s.height}),u.appendChild(m),r.css(m,{position:i?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(y.relSize.width||y.relSize.autoFullWidth)&&r.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",A),window.addEventListener("resize",A),window.addEventListener("resize",I),m.addEventListener("mousewheel",N),m.addEventListener("DOMMouseScroll",N),v(3,"added pin"),x(),a},this.removePin=function(e){if(m){if("DURING"===u&&x(!0),e||!i){var t=y.spacer.firstChild;if(t.hasAttribute("data-scrollmagic-pin-spacer")){var n=y.spacer.style;margins={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){margins[e]=n[e]||""}),r.css(t,margins)}y.spacer.parentNode.insertBefore(t,y.spacer),y.spacer.parentNode.removeChild(y.spacer),m.parentNode.hasAttribute("data-scrollmagic-pin-spacer")||(r.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",A),window.removeEventListener("resize",A),window.removeEventListener("resize",I),m.removeEventListener("mousewheel",N),m.removeEventListener("DOMMouseScroll",N),m=void 0,v(3,"removed pin (reset: "+(e?"true":"false")+")")}return a};var z,P=[];return a.on("destroy.internal",function(e){a.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=r.get.elements(e);return 0!==n.length&&r.type.String(t)?(P.length>0&&a.removeClassToggle(),z=t,P=n,a.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?r.addClass:r.removeClass;P.forEach(function(e,n){t(e,z)})}),a):(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),a)},this.removeClassToggle=function(e){return e&&P.forEach(function(e,t){r.removeClass(e,z)}),a.off("start.internal_class end.internal_class"),z=void 0,P=[],a},function(){for(var e in c)s.hasOwnProperty(e)||(v(2,'WARNING: Unknown option "'+e+'"'),delete c[e]);for(var t in s)O(t);T()}(),a};var o={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!r.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=r.get.elements(e)[0];if(!t)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(r.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!r.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,n,r,i){t in o.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(o.defaults[t]=n,o.validate[t]=r,i&&o.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,o){for(var r in o=o||{})this[r]=o[r];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var r=e._util=function(e){var n,o={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},l=function(t,n,o,l){if((n=n===document?e:n)===e)l=!1;else if(!h.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var s=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&l){var a=i(n);s+="Height"===t?r(a.marginTop)+r(a.marginBottom):r(a.marginLeft)+r(a.marginRight)}return s},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};o.extend=function(e){for(e=e||{},n=1;n<arguments.length;n++)if(arguments[n])for(var t in arguments[n])arguments[n].hasOwnProperty(t)&&(e[t]=arguments[n][t]);return e},o.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,c=["ms","moz","webkit","o"],u=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(n=0;!u&&n<c.length;++n)u=e[c[n]+"RequestAnimationFrame"],f=e[c[n]+"CancelAnimationFrame"]||e[c[n]+"CancelRequestAnimationFrame"];u||(u=function(t){var n=(new Date).getTime(),o=Math.max(0,16-(n-a)),r=e.setTimeout(function(){t(n+o)},o);return a=n+o,r}),f||(f=function(t){e.clearTimeout(t)}),o.rAF=u.bind(e),o.cAF=f.bind(e);var d=["error","warn","log"],p=e.console||{};for(p.log=p.log||function(){},n=0;n<d.length;n++){var g=d[n];p[g]||(p[g]=p.log)}o.log=function(e){(e>d.length||e<=0)&&(e=d.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),o=d[e-1],r=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(p[o],p);r.unshift(n),i.apply(p,r)};var h=o.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};h.String=function(e){return"string"===h(e)},h.Function=function(e){return"function"===h(e)},h.Array=function(e){return Array.isArray(e)},h.Number=function(e){return!h.Array(e)&&e-parseFloat(e)+1>=0},h.DomElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":t(HTMLElement))?e instanceof HTMLElement:e&&"object"===t(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var v=o.get={};return v.elements=function(t){var n=[];if(h.String(t))try{t=document.querySelectorAll(t)}catch(l){return n}if("nodelist"===h(t)||h.Array(t))for(var o=0,r=n.length=t.length;o<r;o++){var i=t[o];n[o]=h.DomElement(i)?i:v.elements(i)}else(h.DomElement(t)||t===document||t===e)&&(n=[t]);return n},v.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},v.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},v.width=function(e,t,n){return l("width",e,t,n)},v.height=function(e,t,n){return l("height",e,t,n)},v.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var o=e.getBoundingClientRect();n.top=o.top,n.left=o.left,t||(n.top+=v.scrollTop(),n.left+=v.scrollLeft())}return n},o.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},o.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},o.css=function(e,t){if(h.String(t))return i(e)[s(t)];if(h.Array(t)){var n={},o=i(e);return t.forEach(function(e,t){n[e]=o[s(e)]}),n}for(var r in t){var l=t[r];l==parseFloat(l)&&(l+="px"),e.style[s(r)]=l}},o}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e}));
},{}]},{},["ORu+"], null)
//# sourceMappingURL=/ScrollMagic.c14d1e62.js.map