(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d47":function(t,e,n){},1174:function(t,e,n){},"2bca":function(t,e,n){"use strict";n("1174")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r=(n("d55d"),n("2877")),i={},c=Object(r["a"])(i,s,o,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=n("8c4f"),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("sidebar"),e("div",{staticClass:"main__container"},[e("div",{staticClass:"main__tasks"},t._l(t.arr,(function(n,a){return e("div",{key:a,staticClass:"main__task"},[e("h3",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.deadline))]),t._l(n.tags,(function(n){return e("p",[t._v(" "+t._s(n)+" ")])})),e("p",[t._v(t._s(n.date))])],2)})),0),e("div",{staticClass:"main__form"},[e("h3",[t._v("Добавить новую задачу")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tasks.title,expression:"tasks.title"}],staticClass:"main__title",attrs:{placeholder:"Введите задачу",type:"text"},domProps:{value:t.tasks.title},on:{input:function(e){e.target.composing||t.$set(t.tasks,"title",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tasks.deadline,expression:"tasks.deadline"}],attrs:{type:"date"},domProps:{value:t.tasks.deadline},on:{input:function(e){e.target.composing||t.$set(t.tasks,"deadline",e.target.value)}}}),e("div",{staticClass:"main__tag"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],attrs:{placeholder:"Введите подзадачу",type:"text"},domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}}),e("button",{on:{click:t.addTag}},[t._v("+")])]),e("div",{staticClass:"main__tags"},t._l(t.tasks.tags,(function(n,a){return e("div",{key:a,staticClass:"main__item"},[e("p",[t._v(t._s(n))]),e("button",{on:{click:function(e){t.deleteTag(a)}}},[t._v("-")])])})),0),e("button",{staticClass:"main__addTask",on:{click:t.addTask}},[t._v("Добавить")])])])],1)},p=[],g=(n("e9c4"),n("a434"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("router-link",{staticClass:"sidebar__link",attrs:{to:"/"}},[t._v("Задачи")])],1)}),v=[],m=(n("2bca"),{}),_=Object(r["a"])(m,g,v,!1,null,"f3d14fbe",null),h=_.exports,b={components:{Sidebar:h},data:function(){return{tag:"",tasks:{title:"",date:new Date,deadline:"",tags:[]},arr:[]}},methods:{printDate:function(){return(new Date).toLocaleDateString()},addTask:function(){var t=JSON.parse(localStorage.getItem("tasks"));t.push(this.tasks),localStorage.setItem("tasks",JSON.stringify(t))},addTag:function(){this.tasks.tags.push(this.tag)},deleteTag:function(t){this.tasks.tags.splice(t,1),this.tags.splice(t,1)},tagsUpdate:function(){console.log(localStorage.getItem("tasks")),localStorage.getItem("tasks")&&(this.arr=JSON.parse(localStorage.getItem("tasks")),console.log(this.arr))}},computed:{},mounted:function(){this.tagsUpdate()}},k=b,w=(n("c007"),Object(r["a"])(k,f,p,!1,null,"3f4d0550",null)),y=w.exports;a["a"].use(d["a"]);var O=[{path:"/",name:"Task",component:y}],S=new d["a"]({mode:"history",base:"/",routes:O}),j=S,x=n("2f62");a["a"].use(x["a"]);var C=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:j,store:C,render:function(t){return t(l)}}).$mount("#app")},"99f1":function(t,e,n){},c007:function(t,e,n){"use strict";n("99f1")},d55d:function(t,e,n){"use strict";n("0d47")}});
//# sourceMappingURL=app.b9708529.js.map