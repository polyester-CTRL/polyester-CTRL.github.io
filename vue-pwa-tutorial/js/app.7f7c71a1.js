(function(e){function t(t){for(var o,r,u=t[0],l=t[1],s=t[2],c=0,f=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"678916dd"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"ac6d4f56"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===o||c===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],c=s.getAttribute("data-href");if(c===o||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var f=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-pwa-tutorial/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"11a2":function(e,t,n){},"45f4":function(e,t,n){"use strict";var o=n("11a2"),r=n.n(o);r.a},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},l=Object(i["a"])(u,r,a,!1,null,null,null),s=l.exports,c=n("9483");Object(c["a"])("".concat("/vue-pwa-tutorial/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("To-do list")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("el-input",{attrs:{type:"text",clearable:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.addItem}},[n("i",{staticClass:"el-icon-edit"}),e._v(" 追加 ")])],1),n("ul",e._l(e.todos,(function(t,o){return n("li",{key:t.id,staticClass:"text"},[n("el-checkbox",{model:{value:t.isDone,callback:function(n){e.$set(t,"isDone",n)},expression:"todo.isDone"}},[n("span",{staticClass:"text",class:{done:t.isDone}},[e._v(" "+e._s(t.item)+" ")])]),n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteItem(o)}}},[n("i",{staticClass:"el-icon-delete"}),e._v(" 削除 ")])],1)})),0)])},v=[],h=(n("4160"),n("c975"),n("a434"),n("498a"),n("159b"),"version"),g="1.0";g!==localStorage.getItem(h)&&(localStorage.setItem(h,g),window.location.reload(!0));var b="vue-pwa-tutorial",w={fetch:function(){var e=JSON.parse(localStorage.getItem(b)||"[]");return e.forEach((function(e,t){e.id=t})),w.uid=e.length,e},save:function(e){localStorage.setItem(b,JSON.stringify(e))}},y={name:"app",data:function(){return{todos:w.fetch(),newItem:"",visibility:"all"}},watch:{todos:{handler:function(e){w.save(e)},deep:!0}},computed:{},filters:{pluralize:function(e){return 1===e?"item":"items"}},methods:{addItem:function(){var e=this.newItem&&this.newItem.trim();e&&(this.todos.push({id:w.uid++,item:e,isDone:!1}),this.newItem="")},deleteItem:function(e){this.todos.splice(this.todos.indexOf(e),1)}}},_=y,k=(n("45f4"),Object(i["a"])(_,m,v,!1,null,"1d4e9eaa",null)),O=k.exports,j={name:"Home",components:{HelloWorld:O}},x=j,S=Object(i["a"])(x,d,p,!1,null,null,null),I=S.exports;o["default"].use(f["a"]);var E=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new f["a"]({mode:"history",base:"/vue-pwa-tutorial/",routes:E}),A=C,N=n("2f62");o["default"].use(N["a"]);var P=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("5c96"),D=n.n(T);n("0fae");o["default"].config.productionTip=!1,o["default"].use(D.a),new o["default"]({el:"#app",router:A,store:P,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.7f7c71a1.js.map