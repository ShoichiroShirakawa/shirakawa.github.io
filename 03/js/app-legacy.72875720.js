(function(){"use strict";var t={8558:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("GrobalMenu"),e("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("router-view")],1),e("div",{staticClass:"bg-z-index"},[e("BackGroundVideo")],1)],1)},u=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",[e("router-link",{attrs:{to:"/"}},[e("LogoAtoms")],1),e("div",{staticClass:"spacer"}),e("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),e("router-link",{attrs:{to:"/story"}},[t._v("Story")]),e("router-link",{attrs:{to:"/cast"}},[t._v("Cast")]),e("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),e("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),e("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),e("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),e("router-link",{attrs:{to:"/news"}},[t._v("News")])],1)])},l=[],a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("img",{attrs:{alt:"Site logo",src:e(9574),type:"”image/svg+xml”"}})])}],c={name:"LogoAtoms"},f=c,v=e(1001),m=(0,v.Z)(f,a,s,!1,null,"502fbe8e",null),p=m.exports,d={name:"GrobalMenu",components:{LogoAtoms:p}},h=d,_=(0,v.Z)(h,i,l,!1,null,null,null),b=_.exports,g=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"bg-wrap"},[r("video",{staticClass:"bg-video",attrs:{src:e(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})])},x=[],w={name:"BackGroundVideo"},k=w,Z=(0,v.Z)(k,g,x,!1,null,"4b04b3a8",null),y=Z.exports,E={components:{GrobalMenu:b,BackGroundVideo:y}},$=E,C=(0,v.Z)($,o,u,!1,null,null,null),O=C.exports,j=e(2809),G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[t._v(" HomeView ")])},M=[],S={name:"HomeView"},T=S,V=(0,v.Z)(T,G,M,!1,null,null,null),A=V.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Introduction ")])},L=[],P={},H=P,I=(0,v.Z)(H,B,L,!1,null,null,null),N=I.exports,z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Story ")])},F=[],q={},D=q,J=(0,v.Z)(D,z,F,!1,null,null,null),K=J.exports,Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Cast ")])},R=[],U={},W=U,X=(0,v.Z)(W,Q,R,!1,null,null,null),Y=X.exports,tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Staff ")])},nt=[],et={},rt=et,ot=(0,v.Z)(rt,tt,nt,!1,null,null,null),ut=ot.exports,it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Comment ")])},lt=[],at={},st=at,ct=(0,v.Z)(st,it,lt,!1,null,null,null),ft=ct.exports,vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Movie ")])},mt=[],pt={},dt=pt,ht=(0,v.Z)(dt,vt,mt,!1,null,null,null),_t=ht.exports,bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Theater ")])},gt=[],xt={},wt=xt,kt=(0,v.Z)(wt,bt,gt,!1,null,null,null),Zt=kt.exports,yt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" News ")])},Et=[],$t={},Ct=$t,Ot=(0,v.Z)(Ct,yt,Et,!1,null,null,null),jt=Ot.exports;r.Z.use(j.Z);var Gt=[{path:"/",name:"home",component:A},{path:"/introduction",name:"introduction",component:N},{path:"/story",name:"story",component:K},{path:"/cast",name:"cast",component:Y},{path:"/staff",name:"staff",component:ut},{path:"/comment",name:"Comment",component:ft},{path:"/movie",name:"movie",component:_t},{path:"/theater",name:"theater",component:Zt},{path:"/news",name:"news",component:jt},{path:"*",redirect:"/"}],Mt=new j.Z({mode:"history",base:"/shirakawa.github.io/03/",routes:Gt}),St=Mt;r.Z.config.productionTip=!1,new r.Z({router:St,render:function(t){return t(O)}}).$mount("#app")},9574:function(t,n,e){t.exports=e.p+"img/logo.7c7bf14e.svg"},7073:function(t,n,e){t.exports=e.p+"media/background.08677385.mp4"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return t[r](u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,u){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],u=t[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(l=!1,u<i&&(i=u));if(l){t.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[r,o,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,u,i=r[0],l=r[1],a=r[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(a)var c=a(e)}for(n&&n(r);s<i.length;s++)u=i[s],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(c)},r=self["webpackChunksite"]=self["webpackChunksite"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(8558)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.72875720.js.map