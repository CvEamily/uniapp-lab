(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/check/check"],{131:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26);r(n(25));var a=r(n(132));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},132:function(e,t,n){"use strict";n.r(t);var r=n(133),a=n(135);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(137);var o,c=n(32),u=Object(c["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);u.options.__file="pages/user/check/check.vue",t["default"]=u.exports},133:function(e,t,n){"use strict";n.r(t);var r=n(134);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},134:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=!1,o=[];a._withStripped=!0},135:function(e,t,n){"use strict";n.r(t);var r=n(136),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},136:function(e,t,n){"use strict";(function(e,r){var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(50)),o=a(n(52)),c={data:function(){return{email:"",title:"picker",array:["——请选择年级——","2019","2020","2021","2022"],index:0,grade:"",token:"",img:"https://ts1.cn.mm.bing.net/th/id/R-C.20dc03ef0ee10f50f8ccba5c38e6ac7d?rik=7dzyx%2bhMuJu73g&riu=http%3a%2f%2fwww.gx8899.com%2fuploads%2fallimg%2f2018040709%2frhilmrbilow.jpg&ehk=V9Dt0TaIN2I%2fhzL3NDXhpRzfZ7eNx8lLv6f1iw9AjG0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",user_info:[]}},onLoad:function(){this.getToken(),this.getUser()},methods:{getUser:function(){this.user_info=e.getStorageSync("user_info"),console.log(this.user_info)},getToken:function(){this.token=e.getStorageSync("token")},gotoRevise:function(){r.navigateTo({url:"../revise/revise"})},bindPickerChange:function(e){this.index=e.detail.value,this.grade=this.array[this.index]},getCaptcha:function(){var e=this;return(0,o.default)(i.default.mark((function t(){var n,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={email:e.email,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"}},t.next=3,r.$http.post("http://ckittx.natappfree.cc/user/mail",n);case 3:if(a=t.sent,200!=a.code){t.next=8;break}return t.abrupt("return",r.showToast({title:"获取验证码成功，请查收邮件",duration:2e3,icon:"none"}));case 8:return t.abrupt("return",Error);case 9:case"end":return t.stop()}}),t)})))()},formSubmit:function(e){var t=this;return(0,o.default)(i.default.mark((function n(){var a,o,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),a={username:e.detail.value.username,name:e.detail.value.name,password:e.detail.value.password,email:e.detail.value.email,grade:t.grade,code:e.detail.value.code,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"}},r.showLoading({title:"注册中"}),n.next=5,r.$http.post("http://ckittx.natappfree.cc/user/registerwx",a);case 5:if(o=n.sent,c=o.data,"1"!=c.code){n.next=11;break}return n.abrupt("return",r.showToast({title:"注册成功",duration:2e3,icon:"none"}));case 11:"2"==c.code?r.showToast({title:"用户名已存在",duration:2e3,icon:"none"}):"3"==c.code?r.showToast({title:"验证码错误",duration:2e3,icon:"none"}):"0"==c.code&&r.showToast({title:"数据库存储失败",duration:2e3,icon:"none"});case 12:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n(1)["default"],n(2)["default"])},137:function(e,t,n){"use strict";n.r(t);var r=n(138),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},138:function(e,t,n){}},[[131,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/check/check.js.map