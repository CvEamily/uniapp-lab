(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/faceReg/faceReg"],{229:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26);r(n(25));var a=r(n(230));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},230:function(e,t,n){"use strict";n.r(t);var r=n(231),a=n(233);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n(235);var o,u=n(32),s=Object(u["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);s.options.__file="pages/login/faceReg/faceReg.vue",t["default"]=s.exports},231:function(e,t,n){"use strict";n.r(t);var r=n(232);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},232:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},c=!1,o=[];a._withStripped=!0},233:function(e,t,n){"use strict";n.r(t);var r=n(234),a=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=a.a},234:function(e,t,n){"use strict";(function(e,r){var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(50)),o=a(n(52)),u=a(n(53)),s={data:function(){return{src:"",faceBase:""}},methods:{getImageBase64_canvas:function(t){var n=this;return(0,o.default)(c.default.mark((function t(){var a,o,u,s;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.src),t.next=3,e.getImageInfo({src:n.src});case 3:return a=t.sent,o=a.width,u=a.height,t.next=8,new Promise((function(t){var r=e.createSelectorQuery();r.select("#myCanvas").fields({node:!0}).exec((function(e){var r=e[0].node,a=r.getContext("2d"),c=r.createImage();console.log(c),c.src=n.src,c.onload=function(){a.drawImage(c,0,0,o,u),t(r.toDataURL())}}))}));case 8:s=t.sent,n.faceBase=s?s.slice(22):0,r.setStorage({key:"base64",data:n.faceBase,success:function(){console.log("success")}});case 11:case"end":return t.stop()}}),t)})))()},takePhoto:function(){var e=this,t=r.createCameraContext();t.takePhoto({quality:"high",success:function(t){e.src=t.tempImagePath}})},error:function(e){console.log(e.detail)},Reg:function(){var e=this;return(0,o.default)(c.default.mark((function t(){var n,a,o;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getImageBase64_canvas();case 2:return n={faceBase:e.faceBase,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"}},r.showLoading({title:"Loading"}),t.next=6,r.$http.post(u.default.host+"/face/register",n);case 6:if(a=t.sent,o=a.data,"1"!=o.code){t.next=11;break}return console.log(o.message),t.abrupt("return");case 11:r.showToast({title:"失败",duration:2e3,icon:"none"});case 12:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n(1)["default"],n(2)["default"])},235:function(e,t,n){"use strict";n.r(t);var r=n(236),a=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=a.a},236:function(e,t,n){}},[[229,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/faceReg/faceReg.js.map