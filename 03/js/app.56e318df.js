(function(){"use strict";var t={4984:function(t,e,n){var a=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FirstViewModal"),n("GlobalMenu"),n("ScrollTopButton"),n("LogoArea"),n("ViewsWrap"),n("BackGroundVideo"),n("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-wrap"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?t._e():a("div",{staticClass:"bg-filter"})]),a("video",{staticClass:"bg-video",attrs:{src:n(7073),muted:"",autoplay:"",loop:"",preload:"none"},domProps:{muted:!0}})],1)},r=[],l={name:"BackGroundVideo"},c=l,u=n(1001),d=(0,u.Z)(c,s,r,!1,null,"628f3873",null),p=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!1,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n    background-color: rgba(0,0,0,0);\n    border-radius: 0px;\n    overflow: visible;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n    "}},[a("div",{staticClass:"modal-body"},[t.isLoading?a("Loading"):t._e(),a("transition",{attrs:{name:"modalTransition"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-bg"})]),a("video",{attrs:{src:n(1174),poster:n(4063),controls:"",preload:"auto"}}),a("button",{staticClass:"modal-close",on:{click:t.hide}},[a("BatsuIcon")],1)],1)])],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"load",appear:""}},[t.isLoading?n("div",{staticClass:"wrap-load"},[n("div",{staticClass:"fullview"},[n("div",{staticClass:"loading-spacer"}),n("vue-loading",{attrs:{type:"spin",color:"#16b8f3",size:{width:"100px",height:"100px"}}})],1)]):t._e()])},v=[],g=n(2725),_={name:"Loading",data(){return{isLoading:!0}},components:{VueLoading:g.VueLoading}},w=_,b=(0,u.Z)(w,h,v,!1,null,"3a9806c2",null),x=b.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"batsu-icon"})])}],y={name:"BatsuIcon"},E=y,S=(0,u.Z)(E,C,k,!1,null,"f1961f6e",null),$=S.exports,T={name:"FirstViewModal",data:()=>({isLoading:!0}),mounted(){this.$modal.show("first-modal"),document.body.className="lock",setTimeout((()=>{this.isLoading=!1}),1e3)},methods:{hide:function(){this.$modal.hide("first-modal"),document.body.className=""}},components:{Loading:x,BatsuIcon:$}},B=T,Z=(0,u.Z)(B,m,f,!1,null,"7305a1f6",null),I=Z.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-footer"},[n("footer",[n("SnsArea"),t._m(0)],1)])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-area-footer"},[n("p",{staticClass:"catch-footer"},[t._v(' 世界が絶賛した、未来への"記録" ')]),n("p",{staticClass:"other-text-footer"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),n("p",{staticClass:"copyright"},[t._v("© 2022 Shoichirou-Shirakawa")])])}],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sns-wrap"},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),n("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)},A=[],V={name:"SnsArea"},O=V,j=(0,u.Z)(O,N,A,!1,null,"0e1e488a",null),P=j.exports,z={name:"Footer",components:{SnsArea:P}},H=z,U=(0,u.Z)(H,M,L,!1,null,"9f312354",null),F=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"global-nav"},[n("button",{attrs:{id:"hamburger"},on:{click:function(e){t.showMenu=!t.showMenu}}},[n("HamburgerIcon")],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showMenu?n("div",{staticClass:"wrap-router"},[n("router-link",{attrs:{to:"/"}},[t._v("Top")]),n("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),n("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),n("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),n("router-link",{attrs:{to:"/movie"}},[t._v("Movie")]),n("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),n("router-link",{attrs:{to:"/news"}},[t._v("News")])],1):t._e()])],1)])},G=[],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-ham"},[n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"}),n("span",{staticClass:"hamburger-icon"})])}],Q={name:"Hamburger"},D=Q,K=(0,u.Z)(D,q,R,!1,null,"0e366e74",null),X=K.exports,Y={name:"GlobalMenu",data(){return{showMenu:!0,checkWidth:window.matchMedia("(max-width: 600px)")}},mounted(){this.$nextTick((()=>{this.func(this.checkWidth),this.checkWidth.addEventListener("change",this.func)}))},methods:{func(t){t.matches?(this.showMenu=!1,document.getElementById("hamburger").style.visibility="visible",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,0)"):(document.getElementById("hamburger").style.visibility="hidden",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,.8)",this.showMenu=!0)}},watch:{showMenu:{handler(){this.showMenu?document.body.className="lock":document.body.className=""}}},components:{HamburgerIcon:X}},J=Y,tt=(0,u.Z)(J,W,G,!1,null,"7653196d",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoarea"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{id:"site-logo",alt:"Site logo",src:n(9574),type:"”image/svg+xml”"}})])],1)},at=[],ot={name:"LogoArea"},it=ot,st=(0,u.Z)(it,nt,at,!1,null,"f4080dec",null),rt=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"views-wrap"},[n("CampaignArea"),n("article",[n("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1)],1)],1)},ct=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?n("div",{staticClass:"campaign-area"},[n("ul",t._l(t.banners,(function(t){return n("li",{key:t},[n("img",{attrs:{src:t,alt:"banner"}})])})),0)]):t._e()])},dt=[],pt={name:"CampaignArea",data:()=>({banners:[n(8929),n(198),n(6573)]})},mt=pt,ft=(0,u.Z)(mt,ut,dt,!1,null,"56210f5a",null),ht=ft.exports,vt={name:"ViewsWrap",components:{CampaignArea:ht}},gt=vt,_t=(0,u.Z)(gt,lt,ct,!1,null,"b1851d44",null),wt=_t.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkShowButton,expression:"checkShowButton"}],staticClass:"wrap-scroll"},[n("button",{staticClass:"scroll-top-button",on:{click:t.scrollTop}},[n("angleUpIcon")],1)])])},xt=[],Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-up"},[n("span",{staticClass:"angle-up-icon"})])}],yt={name:"AngleUpIcon"},Et=yt,St=(0,u.Z)(Et,Ct,kt,!1,null,"da28f886",null),$t=St.exports,Tt={name:"PageTopButton",data(){return{checkShowButton:!1}},mounted(){window.addEventListener("pointermove",this.moveCheck)},methods:{moveCheck(){this.checkShowButton=!0},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{checkShowButton:{handler(){this.checkShowButton&&setTimeout((()=>{this.checkShowButton=!1}),5e3)}}},components:{AngleUpIcon:$t}},Bt=Tt,Zt=(0,u.Z)(Bt,bt,xt,!1,null,"22b37e19",null),It=Zt.exports;console.log("幅600px以下で初回読み込み時エラーが発生しますが仕様上問題はありません。\nデータを扱うならどんだけ小規模な見込みでもとりあえずVuexは入れておいたほうがよさそう。");var Mt={components:{BackGroundVideo:p,FirstViewModal:I,Footer:F,GlobalMenu:et,LogoArea:rt,ViewsWrap:wt,ScrollTopButton:It}},Lt=Mt,Nt=(0,u.Z)(Lt,o,i,!1,null,null,null),At=Nt.exports,Vt=n(2809),Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"in-views top"},[n("p",[t._v("直近の作業予定")]),n("ul",[n("li",{staticClass:"saiyuusen"},[t._v("8/26 完成")]),n("li",[t._v("内容物を作成し完成させる")]),n("ul",[n("li",[t._v("Top:他が完了次第完成")]),n("li",[t._v("Intro:レスポンシブまで完了")]),n("li",[t._v("Staff:着手中")])])]),n("p",[t._v("各リファレンス(随時追加)")]),n("ul",[n("p",[t._v("Webサイト")]),n("li",[n("a",{attrs:{href:"https://synca.jp/biglittle/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ビッグ・リトル・ファーム」公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://ineistudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 株式会社INEI 公式サイト ")])]),n("li",[n("a",{attrs:{href:"https://gaga.ne.jp/seasons/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「シーズンズ」公式サイト ")])]),n("br"),n("p",[t._v("PV、動画など")]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=sIoFigkSR0k",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ライフ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=S9mIOlzK-nU",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「オーシャンズ」予告 ")])]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=PQtRXqBQETA",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Serj Tankian「Harakiri」PV ")])]),n("li",[t._v("test")]),n("li",[t._v("aa")]),n("li",[t._v("xd")]),n("li",[t._v("af")]),n("li",[t._v("awd")]),n("li",[t._v("awda")]),n("li",[t._v("sef")]),n("li",[t._v("daw")]),n("li",[t._v("fes")]),n("li",[t._v("sef")]),n("li",[t._v("test")]),n("li",[t._v("aa")]),n("li",[t._v("xd")]),n("li",[t._v("af")]),n("li",[t._v("awd")]),n("li",[t._v("awda")]),n("li",[t._v("sef")]),n("li",[t._v("daw")]),n("li",[t._v("fes")]),n("li",[t._v("sef")])])])}],Pt={name:"Top"},zt=Pt,Ht=(0,u.Z)(zt,Ot,jt,!1,null,"4a534b0c",null),Ut=Ht.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views introduction"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("イントロダクション")])]),a("p",[t._v("Introduction")])],1)]),a("div",{ref:"slideArea",attrs:{id:"slide-area"}},[a("hooper",{attrs:{id:"intro-hooper",settings:t.hooperSettings}},[a("slide",{staticClass:"hooper-slide page1"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("div",{staticClass:"slide-text-area"},[a("p",{staticClass:"slide-text"},[t._v(" 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。 何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。 吾輩はここで始めて人間というものを見た。 ")])])]),a("transition",{attrs:{name:"intobottom",appear:""}},[a("img",{staticClass:"slide-img",attrs:{src:n(2283)}})])],1),a("slide",{staticClass:"hooper-slide page2"},[a("div",{staticClass:"slide-text-area"},[a("p",{staticClass:"slide-text"},[t._v(" 木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、 あるところは数十間の深さに臨む木曾川の岸であり、 あるところは山の尾をめぐる谷の入り口である。 一筋の街道はこの深い森林地帯を貫いていた。 ")])]),a("img",{staticClass:"slide-img",attrs:{src:n(8447)}})]),a("slide",{staticClass:"hooper-slide page3"},[a("div",{staticClass:"slide-text-area"},[a("p",{staticClass:"slide-text"},[t._v(" しかし、私はあなたに喜びを非難し、痛みを賞賛するというこの誤った考えが どのように生まれたかを説明しなければなりません、そして私はあなたに システムの完全な説明を与え、真実の偉大な探検家、人間の幸福のマスタービルダー。 ")])]),a("img",{staticClass:"slide-img",attrs:{src:n(1514)}})]),a("slide",{staticClass:"hooper-slide page4"},[a("div",{staticClass:"slide-text-area"},[a("p",{staticClass:"slide-text"},[t._v(" ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。 広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、 蟋蟀が一匹とまっている。 ")])]),a("img",{staticClass:"slide-img",attrs:{src:n(5679)}})]),a("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),a("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"},[a("AngleUpIcon",{attrs:{slot:"hooper-prev"},slot:"hooper-prev"}),a("AngleUpIcon",{attrs:{slot:"hooper-next"},slot:"hooper-next"})],1)],1)],1)],1)},Wt=[],Gt=n(5681),qt={name:"Introduction",data(){return{name:"",slideResizeCheck:window.matchMedia("(max-width: 600px)"),hooperSettings:{itemToShow:1,infiniteScroll:!0,wheelControl:!1}}},mounted(){this.$nextTick((()=>{this.slideSize(),this.slideResizeCheck.addEventListener("change",this.slideSize)}))},methods:{slideSize(){const t=document.getElementsByClassName("views-wrap")[0],e=document.getElementsByClassName("views-wrap")[0].offsetHeight,n=window.getComputedStyle(t),a=n.getPropertyValue("margin-top"),o=Number(a.replace(/px/g,"")),i=document.getElementsByClassName("global-nav")[0].offsetHeight,s=e+i+2*o;document.getElementById("slide-area").style.height=s+"px"}},components:{Hooper:Gt.dB,Slide:Gt.Mi,HooperPagination:Gt.tl,HooperNavigation:Gt.W_,AngleUpIcon:$t}},Rt=qt,Qt=(0,u.Z)(Rt,Ft,Wt,!1,null,"778492f9",null),Dt=Qt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Staff ")])},Xt=[],Yt={},Jt=Yt,te=(0,u.Z)(Jt,Kt,Xt,!1,null,null,null),ee=te.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Comment ")])},ae=[],oe={},ie=oe,se=(0,u.Z)(ie,ne,ae,!1,null,null,null),re=se.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Movie ")])},ce=[],ue={},de=ue,pe=(0,u.Z)(de,le,ce,!1,null,null,null),me=pe.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Theater ")])},he=[],ve={},ge=ve,_e=(0,u.Z)(ge,fe,he,!1,null,null,null),we=_e.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" News ")])},xe=[],Ce={},ke=Ce,ye=(0,u.Z)(ke,be,xe,!1,null,null,null),Ee=ye.exports;a["default"].use(Vt.Z);const Se=[{path:"/",name:"top",component:Ut},{path:"/introduction",name:"introduction",component:Dt},{path:"/staff",name:"staff",component:ee},{path:"/comment",name:"Comment",component:re},{path:"/movie",name:"movie",component:me},{path:"/theater",name:"theater",component:we},{path:"/news",name:"news",component:Ee},{path:"*",redirect:"/"}],$e=new Vt.Z({scrollBehavior(t,e,n){return n||{x:0,y:0}},mode:"history",base:"/shirakawa.github.io/03/",routes:Se});$e.afterEach((()=>{const t=window.matchMedia("(max-width: 600px)"),e=document.getElementById("hamburger");t.matches&&e.click()}));var Te=$e,Be=n(8175),Ze=n.n(Be),Ie=n(642),Me=n(81),Le=n(4842),Ne=n(9009);Me.vI.add(Le.mdU,Le.Zzi,Le.opf,Le.neY),a["default"].component("font-awesome-icon",Ne.GN),a["default"].use(Ze()),a["default"].use(Ie.Z),a["default"].config.productionTip=!1,new a["default"]({router:Te,render:t=>t(At),data:{lock:!1},methods:{toggleLock:function(){1==this.lock?this.lock=!1:this.lock=!0}}}).$mount("#app")},8929:function(t,e,n){t.exports=n.p+"img/kari-banner1.28803540.svg"},198:function(t,e,n){t.exports=n.p+"img/kari-banner2.0aef6080.svg"},6573:function(t,e,n){t.exports=n.p+"img/kari-banner3.0aef6080.svg"},9574:function(t,e,n){t.exports=n.p+"img/logo.e3d76b7a.svg"},1174:function(t,e,n){t.exports=n.p+"media/Teaser.9c09bc19.mp4"},4063:function(t,e,n){t.exports=n.p+"img/Teaser_thumb.6ef4a044.png"},7073:function(t,e,n){t.exports=n.p+"media/background.08677385.mp4"},2283:function(t,e,n){t.exports=n.p+"img/pic_introduction_01.b2835a1b.png"},8447:function(t,e,n){t.exports=n.p+"img/pic_introduction_02.bf17581c.png"},1514:function(t,e,n){t.exports=n.p+"img/pic_introduction_03.38f7e962.png"},5679:function(t,e,n){t.exports=n.p+"img/pic_introduction_04.c8ed233d.png"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],i=t[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,s=a[0],r=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var u=l(n)}for(e&&e(a);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunksite"]=self["webpackChunksite"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4984)}));a=n.O(a)})();
//# sourceMappingURL=app.56e318df.js.map