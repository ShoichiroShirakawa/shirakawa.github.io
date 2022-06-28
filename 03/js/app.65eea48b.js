(function(){"use strict";var t={6792:function(t,e,n){var r=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FirstViewModal"),n("GlobalMenu"),n("div",{staticClass:"views-wrap"},[n("CampaignArea"),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1)],1),n("SnsArea"),n("div",{staticClass:"bg-z-index"},[n("BackGroundVideo")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-wrap"},[r("video",{staticClass:"bg-video",attrs:{src:n(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})])},l=[],s={name:"BackGroundVideo"},u=s,c=n(1001),f=(0,c.Z)(u,i,l,!1,null,"4b04b3a8",null),m=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"campaign-area"},[n("LogoAtoms"),n("ul",t._l(t.banners,(function(t){return n("li",{key:t},[n("img",{attrs:{src:t,alt:"banner"}})])})),0)],1)},d=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{alt:"Site logo",src:n(9574),type:"”image/svg+xml”"}})])}],h={name:"LogoAtoms"},b=h,g=(0,c.Z)(b,v,_,!1,null,"5e02e23c",null),w=g.exports,x={name:"CampaignArea",data:()=>({banners:[n(8929),n(198)]}),components:{LogoAtoms:w}},k=x,y=(0,c.Z)(k,p,d,!1,null,"27627230",null),C=y.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n    background-color: rgba(0,0,0,0);\n    border-radius: 0px;\n    overflow: visible;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0)\n    "}},[r("div",{staticClass:"modal-body"},[t.isLoading?r("Loading"):t._e(),r("video",{attrs:{src:n(7073),controls:"",preload:"auto"}}),r("button",{staticClass:"modal-close",on:{click:t.hide}},[r("BatsuIcon")],1)],1)])],1)},$=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"load",appear:""}},[t.isLoading?n("div",[n("div",{staticClass:"fullview"},[n("div",{staticClass:"loading-spacer"}),n("vue-loading",{attrs:{type:"spin",color:"#16b8f3",size:{width:"100px",height:"100px"}}})],1)]):t._e()])},S=[],O=n(2725),T={name:"Loading",data(){return{isLoading:!0}},components:{VueLoading:O.VueLoading}},L=T,I=(0,c.Z)(L,Z,S,!1,null,"2944a9d9",null),M=I.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"batsu-icon"})])}],A={name:"BatsuIcon"},G=A,P=(0,c.Z)(G,j,V,!1,null,"f1961f6e",null),B=P.exports,F={name:"FirstViewModal",data:()=>({isLoading:!0}),mounted(){this.$modal.show("first-modal"),setTimeout((()=>{this.isLoading=!1}),1e3)},methods:{hide:function(){this.$modal.hide("first-modal")}},components:{Loading:M,BatsuIcon:B}},H=F,z=(0,c.Z)(H,E,$,!1,null,"5a9384b4",null),N=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"global-nav"},[n("button",{staticClass:"hamburger"},[n("HamburgerIcon")],1),n("div",{staticClass:"wrap-router"},[n("router-link",{attrs:{to:"/"}},[t._v("Top")]),n("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),n("router-link",{attrs:{to:"/story"}},[t._v("Story")]),n("router-link",{attrs:{to:"/cast"}},[t._v("Cast")]),n("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),n("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),n("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),n("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),n("router-link",{attrs:{to:"/news"}},[t._v("News")])],1)])])},R=[],U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-ham"},[n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"})])}],K={name:"Hamburger"},W=K,X=(0,c.Z)(W,U,q,!1,null,"6d559410",null),D=X.exports,J={name:"GlobalMenu",components:{HamburgerIcon:D}},Y=J,tt=(0,c.Z)(Y,Q,R,!1,null,"ad61cdf0",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sns-wrap"},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)},rt=[],at={name:"SnsArea"},ot=at,it=(0,c.Z)(ot,nt,rt,!1,null,"0f74fc58",null),lt=it.exports,st={components:{BackGroundVideo:m,CampaignArea:C,FirstViewModal:N,GlobalMenu:et,SnsArea:lt}},ut=st,ct=(0,c.Z)(ut,a,o,!1,null,null,null),ft=ct.exports,mt=n(2809),pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("直近の作業予定")]),n("ul",[n("li",[t._v("Githubの容量制限で動画をアップロードできないので方法を考える")]),n("li",[t._v("初回遷移時のモーダルとそのための動画作成")]),n("li",[t._v("そろそろ観念してレスポンシブ対応を進める")]),n("ul",[n("li",[t._v("横幅600px、GlobalMenuは加えて1200px")]),n("li",[t._v("スマホレイアウト時のスクロールバー対応")])]),n("li",[t._v("その他内容物の作成")])]),n("p",[t._v("各リファレンス(随時追加)")]),n("ul",[n("p",[t._v("Webサイト")]),n("li",[n("a",{attrs:{href:"https://synca.jp/biglittle/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ビッグ・リトル・ファーム」公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://ineistudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 株式会社INEI 公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://gaga.ne.jp/seasons/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「シーズンズ」公式サイト ")])]),n("br"),n("p",[t._v("PV、動画など")]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=sIoFigkSR0k",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ライフ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=S9mIOlzK-nU",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「オーシャンズ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=PQtRXqBQETA",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Serj Tankian「Harakiri」PV ")])])])])}],vt={name:"HomeView"},_t=vt,ht=(0,c.Z)(_t,pt,dt,!1,null,"16322bf8",null),bt=ht.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Introduction ")])},wt=[],xt={},kt=xt,yt=(0,c.Z)(kt,gt,wt,!1,null,null,null),Ct=yt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Story ")])},$t=[],Zt={},St=Zt,Ot=(0,c.Z)(St,Et,$t,!1,null,null,null),Tt=Ot.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Cast ")])},It=[],Mt={},jt=Mt,Vt=(0,c.Z)(jt,Lt,It,!1,null,null,null),At=Vt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Staff ")])},Pt=[],Bt={},Ft=Bt,Ht=(0,c.Z)(Ft,Gt,Pt,!1,null,null,null),zt=Ht.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Comment ")])},Qt=[],Rt={},Ut=Rt,qt=(0,c.Z)(Ut,Nt,Qt,!1,null,null,null),Kt=qt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Movie ")])},Xt=[],Dt={},Jt=Dt,Yt=(0,c.Z)(Jt,Wt,Xt,!1,null,null,null),te=Yt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Theater ")])},ne=[],re={},ae=re,oe=(0,c.Z)(ae,ee,ne,!1,null,null,null),ie=oe.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" News ")])},se=[],ue={},ce=ue,fe=(0,c.Z)(ce,le,se,!1,null,null,null),me=fe.exports;r["default"].use(mt.Z);const pe=[{path:"/",name:"home",component:bt},{path:"/introduction",name:"introduction",component:Ct},{path:"/story",name:"story",component:Tt},{path:"/cast",name:"cast",component:At},{path:"/staff",name:"staff",component:zt},{path:"/comment",name:"Comment",component:Kt},{path:"/movie",name:"movie",component:te},{path:"/theater",name:"theater",component:ie},{path:"/news",name:"news",component:me},{path:"*",redirect:"/"}],de=new mt.Z({mode:"history",base:"/shirakawa.github.io/03/",routes:pe});var ve=de,_e=n(8175),he=n.n(_e),be=n(81),ge=n(6978),we=n(4842),xe=n(9009);be.vI.add(ge.xiG,we.mdU),r["default"].component("font-awesome-icon",xe.GN),r["default"].use(he()),r["default"].config.productionTip=!1,new r["default"]({router:ve,render:t=>t(ft)}).$mount("#app")},8929:function(t,e,n){t.exports=n.p+"img/kari-banner1.28803540.svg"},198:function(t,e,n){t.exports=n.p+"img/kari-banner2.0aef6080.svg"},9574:function(t,e,n){t.exports=n.p+"img/logo.5120eb8b.svg"},7073:function(t,e,n){t.exports=n.p+"media/background.08677385.mp4"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(e&&e(r);u<i.length;u++)o=i[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunksite"]=self["webpackChunksite"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6792)}));r=n.O(r)})();
//# sourceMappingURL=app.65eea48b.js.map