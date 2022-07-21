(function(){"use strict";var t={8466:function(t,e,n){var a=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FirstViewModal"),n("GlobalMenu"),n("LogoArea"),n("ViewsWrap"),n("BackGroundVideo"),n("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-wrap"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?t._e():a("div",{staticClass:"bg-filter"})]),a("video",{staticClass:"bg-video",attrs:{src:n(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})],1)},s=[],l={name:"BackGroundVideo"},u=l,c=n(1001),d=(0,c.Z)(u,i,s,!1,null,"0900c36c",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!1,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n    background-color: rgba(0,0,0,0);\n    border-radius: 0px;\n    overflow: visible;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n    "}},[a("div",{staticClass:"modal-body"},[t.isLoading?a("Loading"):t._e(),a("transition",{attrs:{name:"modalTransition"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-bg"})]),a("video",{attrs:{src:n(1174),poster:n(4063),controls:"",preload:"auto"}}),a("button",{staticClass:"modal-close",on:{click:t.hide}},[a("BatsuIcon")],1)],1)])],1)},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"load",appear:""}},[t.isLoading?n("div",{staticClass:"wrap-load"},[n("div",{staticClass:"fullview"},[n("div",{staticClass:"loading-spacer"}),n("vue-loading",{attrs:{type:"spin",color:"#16b8f3",size:{width:"100px",height:"100px"}}})],1)]):t._e()])},h=[],_=n(2725),b={name:"Loading",data(){return{isLoading:!0}},components:{VueLoading:_.VueLoading}},g=b,w=(0,c.Z)(g,v,h,!1,null,"584f6644",null),x=w.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"batsu-icon"})])}],C={name:"BatsuIcon"},E=C,$=(0,c.Z)(E,k,y,!1,null,"f1961f6e",null),Z=$.exports,M={name:"FirstViewModal",data:()=>({isLoading:!0}),mounted(){this.$modal.show("first-modal"),document.body.className="lock",setTimeout((()=>{this.isLoading=!1}),1e3)},methods:{hide:function(){this.$modal.hide("first-modal"),document.body.className=""}},components:{Loading:x,BatsuIcon:Z}},T=M,L=(0,c.Z)(T,f,p,!1,null,"7798ca38",null),S=L.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-footer"},[n("footer",[n("SnsArea"),t._m(0)],1)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-area-footer"},[n("p",{staticClass:"catch-footer"},[t._v(' 世界が絶賛した、未来への"記録" ')]),n("p",{staticClass:"other-text-footer"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),n("p",{staticClass:"copyright"},[t._v("© 2022 Shoichirou-Shirakawa")])])}],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sns-wrap"},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),n("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)},B=[],j={name:"SnsArea"},N=j,A=(0,c.Z)(N,V,B,!1,null,"8598c396",null),F=A.exports,G={name:"Footer",components:{SnsArea:F}},P=G,q=(0,c.Z)(P,I,O,!1,null,"423b2be4",null),z=q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"global-nav"},[n("button",{attrs:{id:"hamburger"},on:{click:function(e){t.showMenu=!t.showMenu}}},[n("HamburgerIcon")],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showMenu?n("div",{staticClass:"wrap-router"},[n("router-link",{attrs:{to:"/top"}},[t._v("Top")]),n("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),n("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),n("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),n("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),n("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),n("router-link",{attrs:{to:"/news"}},[t._v("News")])],1):t._e()])],1)])},W=[],U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-ham"},[n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"})])}],R={name:"Hamburger"},D=R,K=(0,c.Z)(D,U,Q,!1,null,"78a6eb89",null),X=K.exports,Y={name:"GlobalMenu",data(){return{showMenu:!0}},mounted(){this.$nextTick((()=>{const t=window.matchMedia("(max-width: 600px)");this.func(t),t.addEventListener("change",this.func)}))},methods:{func(t){t.matches?(this.showMenu=!1,document.getElementById("hamburger").style.visibility="visible",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,0)"):(document.getElementById("hamburger").style.visibility="hidden",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,.8)",this.showMenu=!0)}},watch:{showMenu:{handler(){this.showMenu?document.body.className="lock":document.body.className=""}}},components:{HamburgerIcon:X}},J=Y,tt=(0,c.Z)(J,H,W,!1,null,"1af76c62",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoarea"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{alt:"Site logo",src:n(9574),type:"”image/svg+xml”"}})])],1)},at=[],ot={name:"LogoArea"},rt=ot,it=(0,c.Z)(rt,nt,at,!1,null,"e75ae5fc",null),st=it.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"views-wrap"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1)],1)},ut=[],ct={name:"ViewsWrap"},dt=ct,mt=(0,c.Z)(dt,lt,ut,!1,null,"47f2fbc0",null),ft=mt.exports,pt={components:{BackGroundVideo:m,FirstViewModal:S,Footer:z,GlobalMenu:et,LogoArea:st,ViewsWrap:ft}},vt=pt,ht=(0,c.Z)(vt,o,r,!1,null,null,null),_t=ht.exports,bt=n(2809),gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("CampaignArea"),t._m(0)],1)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("p",[t._v("直近の作業予定")]),n("ul",[n("li",[t._v("スマホレイアウト時の初回遷移のエラーを解消する")]),n("ul",[n("li",[t._v("原因：beforeEachのスマホレイアウト時の処理")]),n("li",[t._v("対応済み、エラーは出るが見た目は問題ない")])]),n("li",[t._v("内容物を作成し完成させる")]),n("li",[t._v("レスポンシブ対応を進める")]),n("ul",[n("li",[t._v("横幅600px、GlobalMenuは加えて1200px")])]),n("li",[t._v("routerのパスによる表示切り替え")])]),n("p",[t._v("各リファレンス(随時追加)")]),n("ul",[n("p",[t._v("Webサイト")]),n("li",[n("a",{attrs:{href:"https://synca.jp/biglittle/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ビッグ・リトル・ファーム」公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://ineistudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 株式会社INEI 公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://gaga.ne.jp/seasons/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「シーズンズ」公式サイト ")])]),n("br"),n("p",[t._v("PV、動画など")]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=sIoFigkSR0k",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ライフ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=S9mIOlzK-nU",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「オーシャンズ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=PQtRXqBQETA",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Serj Tankian「Harakiri」PV ")])]),n("li",[t._v("test")]),n("li",[t._v("aa")]),n("li",[t._v("xd")]),n("li",[t._v("af")]),n("li",[t._v("awd")]),n("li",[t._v("awda")]),n("li",[t._v("sef")]),n("li",[t._v("daw")]),n("li",[t._v("fes")]),n("li",[t._v("sef")]),n("li",[t._v("test")]),n("li",[t._v("aa")]),n("li",[t._v("xd")]),n("li",[t._v("af")]),n("li",[t._v("awd")]),n("li",[t._v("awda")]),n("li",[t._v("sef")]),n("li",[t._v("daw")]),n("li",[t._v("fes")]),n("li",[t._v("sef")])])])}],xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"campaign-area"},[n("ul",t._l(t.banners,(function(t){return n("li",{key:t},[n("img",{attrs:{src:t,alt:"banner"}})])})),0)])},kt=[],yt={name:"CampaignArea",data:()=>({banners:[n(8929),n(198),n(6573)]})},Ct=yt,Et=(0,c.Z)(Ct,xt,kt,!1,null,"6b99eb28",null),$t=Et.exports,Zt={name:"Top",components:{CampaignArea:$t}},Mt=Zt,Tt=(0,c.Z)(Mt,gt,wt,!1,null,"2e8f6fb6",null),Lt=Tt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Introduction ")])},It=[],Ot={},Vt=Ot,Bt=(0,c.Z)(Vt,St,It,!1,null,null,null),jt=Bt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Staff ")])},At=[],Ft={},Gt=Ft,Pt=(0,c.Z)(Gt,Nt,At,!1,null,null,null),qt=Pt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Comment ")])},Ht=[],Wt={},Ut=Wt,Qt=(0,c.Z)(Ut,zt,Ht,!1,null,null,null),Rt=Qt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Movie ")])},Kt=[],Xt={},Yt=Xt,Jt=(0,c.Z)(Yt,Dt,Kt,!1,null,null,null),te=Jt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Theater ")])},ne=[],ae={},oe=ae,re=(0,c.Z)(oe,ee,ne,!1,null,null,null),ie=re.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" News ")])},le=[],ue={},ce=ue,de=(0,c.Z)(ce,se,le,!1,null,null,null),me=de.exports;a["default"].use(bt.Z);const fe=[{path:"/",name:"top",component:Lt},{path:"/introduction",name:"introduction",component:jt},{path:"/staff",name:"staff",component:qt},{path:"/comment",name:"Comment",component:Rt},{path:"/movie",name:"movie",component:te},{path:"/theater",name:"theater",component:ie},{path:"/news",name:"news",component:me},{path:"*",redirect:"/"}],pe=new bt.Z({mode:"history",base:"/shirakawa.github.io/03/",routes:fe});pe.afterEach((()=>{const t=window.matchMedia("(max-width: 600px)"),e=document.getElementById("hamburger");t.matches&&e.click()}));var ve=pe,he=n(8175),_e=n.n(he),be=n(642),ge=n(81),we=n(4842),xe=n(9009);ge.vI.add(we.mdU,we.Zzi,we.opf,we.neY),a["default"].component("font-awesome-icon",xe.GN),a["default"].use(_e()),a["default"].use(be.Z),a["default"].config.productionTip=!1,new a["default"]({router:ve,render:t=>t(_t),data:{lock:!1},methods:{toggleLock:function(){1==this.lock?this.lock=!1:this.lock=!0}}}).$mount("#app")},8929:function(t,e,n){t.exports=n.p+"img/kari-banner1.28803540.svg"},198:function(t,e,n){t.exports=n.p+"img/kari-banner2.0aef6080.svg"},6573:function(t,e,n){t.exports=n.p+"img/kari-banner3.0aef6080.svg"},9574:function(t,e,n){t.exports=n.p+"img/logo.5120eb8b.svg"},1174:function(t,e,n){t.exports=n.p+"media/Teaser.9c09bc19.mp4"},4063:function(t,e,n){t.exports=n.p+"img/Teaser_thumb.6ef4a044.png"},7073:function(t,e,n){t.exports=n.p+"media/background.08677385.mp4"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(a);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunksite"]=self["webpackChunksite"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8466)}));a=n.O(a)})();
//# sourceMappingURL=app.d3b947a2.js.map