/*!
 * @project        nystudio107
 * @name           redirects-table-legacy.b9fa1fc8717ab5d5e4d5.js
 * @author         andrew@nystudio107.com
 * @build          Wed, Sep 12, 2018 7:10 PM ET
 * @release        c94caf5ce7c99a9fbd560f54d94c42e1f73f82e9 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9,11,13],{117:function(t,e,r){t.exports={default:r(118),__esModule:!0}},118:function(t,e,r){r(39),r(38),t.exports=r(119)},119:function(t,e,r){var n=r(25),a=r(1)("iterator"),i=r(5);t.exports=r(2).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(n(e))}},120:function(t,e,r){t.exports={default:r(121),__esModule:!0}},121:function(t,e,r){r(39),r(38),t.exports=r(122)},122:function(t,e,r){var n=r(3),a=r(40);t.exports=r(2).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},15:function(t,e,r){"use strict";function n(t,e,r,n,a,i,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}r.d(e,"a",function(){return n})},88:function(t,e,r){"use strict";e.__esModule=!0;var n=i(r(117)),a=i(r(120));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,l=(0,a.default)(t);!(n=(s=l.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},89:function(t,e,r){"use strict";e.a=[{name:"redirectSrcUrl",sortField:"redirectSrcUrl",title:"Legacy URL Pattern",titleClass:"center",dataClass:"center",callback:"srcUrlFormatter"},{name:"redirectDestUrl",sortField:"redirectDestUrl",title:"Redirect To",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"redirectMatchType",sortField:"redirectMatchType",title:"Match Type",titleClass:"text-left",dataClass:"text-left",callback:"matchFormatter"},{name:"redirectHttpCode",sortField:"redirectHttpCode",title:"Status",titleClass:"text-left",dataClass:"text-left"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteRedirectFormatter"}]}}]);
//# sourceMappingURL=redirects-table-legacy.b9fa1fc8717ab5d5e4d5.js.map