webpackJsonp([6],{1215:function(t,e,n){"use strict";var a=n(1407);e.a={name:"Layout",components:{SideBar:a.c,NavBar:a.b,TagsView:a.d,AppMain:a.a}}},1216:function(t,e,n){"use strict";var a=n(43),i=n.n(a),r=n(147),s=n(1410);e.a={name:"SideBar",components:{SideBarItem:s.a},data:function(){return{openedsRoute:[]}},computed:i()({},Object(r.b)("permission/router",["routes","isCollapse"])),mounted:function(){console.log(this.routes)},methods:{handleOpen:function(t,e){},handleClose:function(t,e){}}}},1217:function(t,e,n){"use strict";e.a={name:"SideBarItem",props:{routes:{type:Array,default:function(){return[]}},depth:{type:Number,default:1}}}},1218:function(t,e,n){"use strict";e.a={name:"NavBar",components:{},data:function(){return{levelList:[]}},created:function(){this.getBreadcrumb()},watch:{$router:"getBreadcrumb"},methods:{getBreadcrumb:function(){var t=this.$router.currentRoute;console.log(t,"currentRoute");var e=t.matched.find(function(e){return e.name===t.name});e||(this.levelList=[]),console.log(e)}}}},1219:function(t,e,n){"use strict";e.a={name:"appMain",data:function(){return{transitionName:"el-zoom-in-top"}},watch:{$route:function(t,e){var n=t.path.split("/").length,a=e.path.split("/").length;this.transitionName=n<a?"el-zoom-in-center":"el-zoom-in-bottom"}}}},1220:function(t,e,n){"use strict";e.a={name:"TagsView"}},1407:function(t,e,n){"use strict";var a=n(1408),i=n(1413),r=n(1415),s=n(1418);n.d(e,"c",function(){return a.a}),n.d(e,"b",function(){return i.a}),n.d(e,"a",function(){return r.a}),n.d(e,"d",function(){return s.a})},1408:function(t,e,n){"use strict";function a(t){n(1409)}var i=n(1216),r=n(1412),s=n(22),l=a,c=s(i.a,r.a,!1,l,null,null);e.a=c.exports},1409:function(t,e){},1410:function(t,e,n){"use strict";var a=n(1217),i=n(1411),r=n(22),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},1411:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-item-wrap"},[t._l(t.routes,function(e,a){return[e.children&&1===e.children.length&&!e.children[0].children?n("router-link",{key:e.name,attrs:{to:e.children[0].path}},[n("el-menu-item",{attrs:{index:e.children[0].path}},[n("template",{slot:"title"},[e.children[0].meta&&e.children[0].meta.icon?n("i",{staticClass:"submenu-title-noDropdown",class:e.children[0].meta.icon}):t._e(),e.children[0].meta&&e.children[0].meta.title?n("span",[t._v(t._s(e.children[0].meta.title))]):t._e()])],2)],1):e.children&&e.children.length?n("el-submenu",{key:e.path,attrs:{index:e.name||e.path}},[e.meta&&e.meta.title?n("template",{slot:"title"},[e.meta&&e.meta.icon?n("i",{class:e.meta.icon}):t._e(),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])]):t._e(),t._l(e.children,function(e){return[e.children&&e.children.length?n("side-bar-item",{key:e.name,attrs:{routes:[e],depth:t.depth+1}}):n("router-link",{key:e.name,attrs:{to:e.path}},[n("el-menu-item",{key:e.path,attrs:{index:e.path}},[e.meta&&e.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))]):t._e()])],1)]})],2):e.path?n("router-link",{key:e.name,attrs:{to:e.path}},[n("el-menu-item",{key:e.path,attrs:{index:e.path}},[e.meta&&e.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))]):t._e()])],1):t._e()]})],2)},i=[],r={render:a,staticRenderFns:i};e.a=r},1412:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"side-bar",staticStyle:{height:"100%"}},[n("el-menu",{staticStyle:{height:"100%"},attrs:{mode:"vertical","default-active":t.$route.path,"default-openeds":t.openedsRoute,collapse:t.isCollapse,"background-color":"#304156","text-color":"white","active-text-color":"#409EFF"},on:{open:t.handleOpen,close:t.handleClose}},[n("side-bar-item",{attrs:{routes:t.routes}})],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},1413:function(t,e,n){"use strict";var a=n(1218),i=n(1414),r=n(22),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},1414:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav-bar"},[n("div",{staticClass:"toggle-menu"}),n("div",[t._v(t._s(t.levelList))])])},i=[],r={render:a,staticRenderFns:i};e.a=r},1415:function(t,e,n){"use strict";function a(t){n(1416)}var i=n(1219),r=n(1417),s=n(22),l=a,c=s(i.a,r.a,!1,l,"data-v-2cb6f800",null);e.a=c.exports},1416:function(t,e){},1417:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"app-main"})},i=[],r={render:a,staticRenderFns:i};e.a=r},1418:function(t,e,n){"use strict";var a=n(1220),i=n(1419),r=n(22),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},1419:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tags-view"},[n("span",[t._v("tags-view")])])}],r={render:a,staticRenderFns:i};e.a=r},1420:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lx-container",{staticStyle:{height:"100%"}},[n("lx-aside",{staticStyle:{height:"100%"}},[n("side-bar")],1),n("lx-container",{staticStyle:{height:"100%","overflow-y":"auto"},attrs:{direction:"vertical"}},[n("lx-main",[n("nav-bar"),n("tags-view"),n("keep-alive",[n("app-main")],1)],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},938:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1215),i=n(1420),r=n(22),s=r(a.a,i.a,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=6.84c74a3913c9009bae07.js.map