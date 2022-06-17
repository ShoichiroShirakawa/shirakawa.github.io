(function(){"use strict";var t={578:function(t,e,n){var o={};n.r(o);var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loading"),n("FirstViewModal"),n("GrobalMenu"),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1),n("div",{staticClass:"bg-z-index"},[n("BackGroundVideo")],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-wrap"},[o("video",{staticClass:"bg-video",attrs:{src:n(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})])},u=[],s={name:"BackGroundVideo"},c=s,f=n(1001),d=(0,f.Z)(c,l,u,!1,null,"4b04b3a8",null),v=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!0,resizable:!1,adaptive:!0}},[o("div",{staticClass:"modal-body"},[o("video",{attrs:{src:n(7073),controls:"",preload:"auto"}}),o("button",{on:{click:t.hide}},[t._v("閉じる")])])]),o("button",{on:{click:function(e){return t.show()}}},[t._v("モーダルテスト")])],1)},p=[],h={name:"FirstViewModal",methods:{show:function(){this.$modal.show("first-modal")},hide:function(){this.$modal.hide("first-modal")}}},_=h,g=(0,f.Z)(_,m,p,!1,null,"423a8ad5",null),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return!0===t.isLoading?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"loading"},[n("vue-loading",{attrs:{type:"spin",color:"#333",size:{width:"50px",height:"50px"}}})],1)]):t._e()},x=[],y=n(2725),k={props:{isLoading:Boolean},components:{VueLoading:y.VueLoading}},$=k,E=(0,f.Z)($,w,x,!1,null,"27e3e8fc",null),Z=E.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("router-link",{attrs:{to:"/"}},[n("LogoAtoms")],1),n("div",{staticClass:"spacer"}),n("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),n("router-link",{attrs:{to:"/story"}},[t._v("Story")]),n("router-link",{attrs:{to:"/cast"}},[t._v("Cast")]),n("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),n("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),n("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),n("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),n("router-link",{attrs:{to:"/news"}},[t._v("News")])],1)])},O=[],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{attrs:{alt:"Site logo",src:n(9574),type:"”image/svg+xml”"}})])}],L={name:"LogoAtoms"},V=L,j=(0,f.Z)(V,M,S,!1,null,"502fbe8e",null),G=j.exports,T={name:"GrobalMenu",components:{LogoAtoms:G}},P=T,B=(0,f.Z)(P,C,O,!1,null,null,null),F=B.exports,z={components:{BackGroundVideo:v,FirstViewModal:b,Loading:Z,GrobalMenu:F}},A=z,I=(0,f.Z)(A,i,a,!1,null,null,null),N=I.exports,H=n(2809),q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("直近の作業予定")]),n("ul",[n("li",[t._v("Githubの容量制限で動画をアップロードできないので方法を考える")]),n("li",[t._v("ロード画面および読み込みを待ってから表示する処理")]),n("li",[t._v("初回遷移時のモーダルとそのための動画作成")]),n("li",[t._v("その他内容物の作成")])])])}],J={name:"HomeView"},K=J,Q=(0,f.Z)(K,q,D,!1,null,"759e2088",null),R=Q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Introduction ")])},W=[],X={},Y=X,tt=(0,f.Z)(Y,U,W,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Story ")])},ot=[],rt={},it=rt,at=(0,f.Z)(it,nt,ot,!1,null,null,null),lt=at.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Cast ")])},st=[],ct={},ft=ct,dt=(0,f.Z)(ft,ut,st,!1,null,null,null),vt=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Staff ")])},pt=[],ht={},_t=ht,gt=(0,f.Z)(_t,mt,pt,!1,null,null,null),bt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Comment ")])},xt=[],yt={},kt=yt,$t=(0,f.Z)(kt,wt,xt,!1,null,null,null),Et=$t.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Movie ")])},Ct=[],Ot={},Mt=Ot,St=(0,f.Z)(Mt,Zt,Ct,!1,null,null,null),Lt=St.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Theater ")])},jt=[],Gt={},Tt=Gt,Pt=(0,f.Z)(Tt,Vt,jt,!1,null,null,null),Bt=Pt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" News ")])},zt=[],At={},It=At,Nt=(0,f.Z)(It,Ft,zt,!1,null,null,null),Ht=Nt.exports;r["default"].use(H.Z);const qt=[{path:"/",name:"home",component:R},{path:"/introduction",name:"introduction",component:et},{path:"/story",name:"story",component:lt},{path:"/cast",name:"cast",component:vt},{path:"/staff",name:"staff",component:bt},{path:"/comment",name:"Comment",component:Et},{path:"/movie",name:"movie",component:Lt},{path:"/theater",name:"theater",component:Bt},{path:"/news",name:"news",component:Ht},{path:"*",redirect:"/"}],Dt=new H.Z({mode:"history",base:"/shirakawa.github.io/03/",routes:qt});var Jt=Dt,Kt=n(8175),Qt=n.n(Kt);r["default"].use(Qt()),r["default"].config.productionTip=!1,new r["default"]({router:Jt,css:o["default"],render:t=>t(N)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.5120eb8b.svg"},7073:function(t,e,n){t.exports=n.p+"media/background.08677385.mp4"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(e&&e(o);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunksite"]=self["webpackChunksite"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(578)}));o=n.O(o)})();
//# sourceMappingURL=app.b287330b.js.map