(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/register"],{90:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26);r(t(25));var o=r(t(91));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},91:function(e,n,t){"use strict";t.r(n);var r=t(92),o=t(94);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(96);var i,u=t(32),c=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);c.options.__file="pages/login/register/register.vue",n["default"]=c.exports},92:function(e,n,t){"use strict";t.r(n);var r=t(93);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},93:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,259))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,i=[];o._withStripped=!0},94:function(e,n,t){"use strict";t.r(n);var r=t(95),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},95:function(e,n,t){"use strict";(function(e,r){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(50)),i=o(t(52)),u=o(t(53)),c={data:function(){return{email:"",title:"picker",array:["——请选择年级——","2019","2020","2021","2022"],index:0,grade:"",token:""}},onLoad:function(){this.getToken()},methods:{getToken:function(){this.token=e.getStorageSync("token")},addAvatar:function(){e.chooseImage({count:1,success:function(n){console.log(n),e.uploadFile({url:u.default.host+"/common/upload",filePath:""+n.tempFilePaths[0],name:"file",formData:{user:"test"},header:{token:token},success:function(e){console.log(e);e.data}})}})},bindPickerChange:function(e){this.index=e.detail.value,this.grade=this.array[this.index]},getCaptcha:function(){var e=this;return(0,i.default)(a.default.mark((function n(){var t,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={email:e.email,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"}},n.next=3,r.$http.post(u.default.host+"/user/mail",t);case 3:if(o=n.sent,200!=o.code){n.next=8;break}return n.abrupt("return",r.showToast({title:"获取验证码成功，请查收邮件",duration:2e3,icon:"none"}));case 8:return n.abrupt("return",Error);case 9:case"end":return n.stop()}}),n)})))()},formSubmit:function(e){var n=this;return(0,i.default)(a.default.mark((function t(){var o,i,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),o={username:e.detail.value.username,name:e.detail.value.name,password:e.detail.value.password,email:e.detail.value.email,grade:n.grade,code:e.detail.value.code,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"},unToken:!0},r.showLoading({title:"注册中"}),t.next=5,r.$http.post(u.default.host+"/user/register",o);case 5:if(i=t.sent,c=i.data,"1"!=c.code){t.next=11;break}return t.abrupt("return",r.showToast({title:"注册成功",duration:2e3,icon:"none"}));case 11:"2"==c.code?r.showToast({title:"用户名已存在",duration:2e3,icon:"none"}):"3"==c.code?r.showToast({title:"验证码错误",duration:2e3,icon:"none"}):"0"==c.code&&r.showToast({title:"数据库存储失败",duration:2e3,icon:"none"});case 12:case"end":return t.stop()}}),t)})))()}}};n.default=c}).call(this,t(1)["default"],t(2)["default"])},96:function(e,n,t){"use strict";t.r(n);var r=t(97),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},97:function(e,n,t){}},[[90,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/register/register.js.map