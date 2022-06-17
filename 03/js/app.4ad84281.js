(function(){"use strict";var t={1544:function(t,e,n){var o={};n.r(o);var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FirstViewModal"),n("GrobalMenu"),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1),n("div",{staticClass:"bg-z-index"},[n("BackGroundVideo")],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-wrap"},[o("video",{staticClass:"bg-video",attrs:{src:n(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})])},s=[],u={name:"BackGroundVideo"},c=u,d=n(1001),f=(0,d.Z)(c,l,s,!1,null,"4b04b3a8",null),m=f.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{load:"fade",mode:"out-in",appear:""}},[o("Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1),o("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!0,resizable:!1,adaptive:!0}},[o("div",{staticClass:"modal-body"},[o("video",{attrs:{src:n(7073),controls:"",preload:"auto"}}),o("button",{on:{click:t.hide}},[t._v("閉じる")])])])],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("div",[n("div",{staticClass:"fullview"},[n("div",{staticClass:"loading-spacer"}),n("vue-loading",{attrs:{type:"spin",color:"#16b8f3",size:{width:"100px",height:"100px"}}})],1)]):t._e()},_=[],g=n(2725),b={name:"isLoading",data(){return{isLoading:!0}},components:{VueLoading:g.VueLoading}},w=b,x=(0,d.Z)(w,h,_,!1,null,null,null),y=x.exports,k={name:"FirstViewModal",data:()=>({isLoading:!0}),mounted(){console.log("モーダルマウント"),this.$modal.show("first-modal"),setTimeout((()=>{this.isLoading=!1}),3e3)},methods:{hide:function(){this.$modal.hide("first-modal")}},components:{Loading:y}},$=k,E=(0,d.Z)($,v,p,!1,null,"ed16ee94",null),Z=E.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("router-link",{attrs:{to:"/"}},[n("LogoAtoms")],1),n("div",{staticClass:"spacer"}),n("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),n("router-link",{attrs:{to:"/story"}},[t._v("Story")]),n("router-link",{attrs:{to:"/cast"}},[t._v("Cast")]),n("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),n("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),n("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),n("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),n("router-link",{attrs:{to:"/news"}},[t._v("News")])],1)])},L=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{attrs:{alt:"Site logo",src:n(9574),type:"”image/svg+xml”"}})])}],S={name:"LogoAtoms"},V=S,j=(0,d.Z)(V,O,M,!1,null,"502fbe8e",null),T=j.exports,G={name:"GrobalMenu",components:{LogoAtoms:T}},P=G,F=(0,d.Z)(P,C,L,!1,null,null,null),z=F.exports,A={components:{BackGroundVideo:m,FirstViewModal:Z,GrobalMenu:z}},B=A,N=(0,d.Z)(B,i,a,!1,null,null,null),I=N.exports,H=n(2809),q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("直近の作業予定")]),n("ul",[n("li",[t._v("Githubの容量制限で動画をアップロードできないので方法を考える")]),n("li",[t._v("初回遷移時のモーダルとそのための動画作成 "),n("ul",[n("li",[t._v("ロード中から動画表示の切り替えにトランジションを加える")])])]),n("li",[t._v("その他内容物の作成")])])])}],J={name:"HomeView"},K=J,Q=(0,d.Z)(K,q,D,!1,null,"645d05f1",null),R=Q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Introduction ")])},W=[],X={},Y=X,tt=(0,d.Z)(Y,U,W,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Story ")])},ot=[],rt={},it=rt,at=(0,d.Z)(it,nt,ot,!1,null,null,null),lt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Cast ")])},ut=[],ct={},dt=ct,ft=(0,d.Z)(dt,st,ut,!1,null,null,null),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Staff ")])},pt=[],ht={},_t=ht,gt=(0,d.Z)(_t,vt,pt,!1,null,null,null),bt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Comment ")])},xt=[],yt={},kt=yt,$t=(0,d.Z)(kt,wt,xt,!1,null,null,null),Et=$t.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Movie ")])},Ct=[],Lt={},Ot=Lt,Mt=(0,d.Z)(Ot,Zt,Ct,!1,null,null,null),St=Mt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Theater ")])},jt=[],Tt={},Gt=Tt,Pt=(0,d.Z)(Gt,Vt,jt,!1,null,null,null),Ft=Pt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" News ")])},At=[],Bt={},Nt=Bt,It=(0,d.Z)(Nt,zt,At,!1,null,null,null),Ht=It.exports;r["default"].use(H.Z);const qt=[{path:"/",name:"home",component:R},{path:"/introduction",name:"introduction",component:et},{path:"/story",name:"story",component:lt},{path:"/cast",name:"cast",component:mt},{path:"/staff",name:"staff",component:bt},{path:"/comment",name:"Comment",component:Et},{path:"/movie",name:"movie",component:St},{path:"/theater",name:"theater",component:Ft},{path:"/news",name:"news",component:Ht},{path:"*",redirect:"/"}],Dt=new H.Z({mode:"history",base:"/shirakawa.github.io/03/",routes:qt});var Jt=Dt,Kt=n(8175),Qt=n.n(Kt);r["default"].use(Qt()),r["default"].config.productionTip=!1,new r["default"]({router:Jt,css:o["default"],render:t=>t(I)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.5120eb8b.svg"},7073:function(t,e,n){t.exports=n.p+"media/background.08677385.mp4"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],l=o[1],s=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(e&&e(o);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunksite"]=self["webpackChunksite"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1544)}));o=n.O(o)})();
//# sourceMappingURL=app.4ad84281.js.map