(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/faceMod/faceMod"],{251:function(e,t,n){"use strict";(function(e,t){var a=n(4);n(26);a(n(25));var r=a(n(252));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n(1)["default"],n(2)["createPage"])},252:function(e,t,n){"use strict";n.r(t);var a=n(253),r=n(255);for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n(257);var o,u=n(32),s=Object(u["default"])(r["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],o);s.options.__file="pages/login/faceMod/faceMod.vue",t["default"]=s.exports},253:function(e,t,n){"use strict";n.r(t);var a=n(254);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},254:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},c=!1,o=[];r._withStripped=!0},255:function(e,t,n){"use strict";n.r(t);var a=n(256),r=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=r.a},256:function(e,t,n){"use strict";(function(e,a){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(50)),o=r(n(52)),u=r(n(53)),s={data:function(){return{src:"",faceBase:""}},methods:{getImageBase64_canvas:function(t){var n=this;return(0,o.default)(c.default.mark((function t(){var r,o,u,s;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.src),t.next=3,e.getImageInfo({src:n.src});case 3:return r=t.sent,o=r.width,u=r.height,t.next=8,new Promise((function(t){var a=e.createSelectorQuery();a.select("#myCanvas").fields({node:!0}).exec((function(e){var a=e[0].node,r=a.getContext("2d"),c=a.createImage();console.log(c),c.src=n.src,c.onload=function(){r.drawImage(c,0,0,o,u),t(a.toDataURL())}}))}));case 8:s=t.sent,n.faceBase=s?s.slice(22):0,a.setStorage({key:"base64",data:n.faceBase,success:function(){console.log("success")}});case 11:case"end":return t.stop()}}),t)})))()},takePhoto:function(){var e=this,t=a.createCameraContext();t.takePhoto({quality:"high",success:function(t){e.src=t.tempImagePath}})},error:function(e){console.log(e.detail)},Reg:function(){var e=this;return(0,o.default)(c.default.mark((function t(){var n,r,o;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getImageBase64_canvas();case 2:return n={faceBase:e.faceBase,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"}},a.showLoading({title:"Loading"}),t.next=6,a.$http.put(u.default.host+"/face/update",n);case 6:if(r=t.sent,o=r.data,"1"!=o.code){t.next=11;break}return console.log(o.message),t.abrupt("return");case 11:a.showToast({title:"失败",duration:2e3,icon:"none"});case 12:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n(1)["default"],n(2)["default"])},257:function(e,t,n){"use strict";n.r(t);var a=n(258),r=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=r.a},258:function(e,t,n){}},[[251,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/faceMod/faceMod.js.map