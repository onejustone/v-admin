webpackJsonp([32],{1171:function(e,t,r){"use strict";var n=r(0);t.a={name:"Side",subscriptions:function(){var e=n.Observable.fromEvent(window,"keydown").pluck("key"),t=e.filter(function(e){return"ArrowLeft"===e}),r=e.filter(function(e){return"ArrowRight"===e}),s=n.Observable.merge(t.mapTo(-1),r.mapTo(1)).throttleTime(250).startWith(0).scan(function(e,t){return e+t});return{slide$:n.Observable.of(["Hi, I'm John Lindquist","egghead.io founder","vue-rx","RxJS isn't easy","I'm not smart",'"Badass: Making Users Awesome" - Kathy Sierra',"Perceptual Exposure","Your Brain Will Detect Patterns"]).combineLatest(s,function(e,t){return e[t]})}}}},1293:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[r("h1",{staticClass:"title"},[e._v("Side")]),r("h1",{staticClass:"title"},[e._v(e._s(e.slide$))])])},s=[],i={render:n,staticRenderFns:s};t.a=i},914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1171),s=r(1293),i=r(22),a=i(n.a,s.a,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=32.773e7c3e5b1c92da6276.js.map