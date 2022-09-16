(function(){"use strict";var t={5749:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(8935),s=a(2521),i=a.n(s);n["default"].use(i());var o=new(i().Store)({state:{checkMatches:window.matchMedia("(max-width: 600px)"),showMenu:!0,themeColor:"#16b8f3",modalOpacity:!0,imageAssets:[{id:101,img:a(35),categoly:"staff"},{id:102,img:a(9737),categoly:"staff"},{id:201,img:a(2283),categoly:"introduction"},{id:202,img:a(8447),categoly:"introduction"},{id:203,img:a(1514),categoly:"introduction"},{id:204,img:a(5679),categoly:"introduction"},{id:301,img:a(8929),categoly:"banner"},{id:302,img:a(198),categoly:"banner"},{id:303,img:a(6573),categoly:"banner"},{id:401,img:a(2156),categoly:"comment"},{id:501,img:a(4063),categoly:"trailerImg"},{id:502,img:a(1171),categoly:"trailerImg"},{id:503,img:a(8088),categoly:"trailerImg"},{id:504,img:a(4201),categoly:"trailerImg"},{id:901,img:a(9574),categoly:"logo"}],imageVideos:[{id:1001,video:a(1174),categoly:"trailer"},{id:9001,video:a(7073),categoly:"background"}]},mutations:{mutationsMatches:function(t){t.checkMatches=!t.checkMatches},mutationsMenu:function(t){t.showMenu=!t.showMenu},mutationsModal:function(t){t.modalOpacity=!t.modalOpacity}},actions:{actionsMatches:function(t){var e=t.commit;e("mutationsMatches")},actionsMenu:function(t){var e=t.commit;e("mutationsMenu")},actionsModal:function(t){var e=t.commit;e("mutationsModal")}},modules:{}}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PreLoad"),a("FirstViewModal"),a("GlobalMenu"),a("ScrollTopButton"),a("LogoArea"),a("ViewsWrap"),a("BackGroundVideo"),a("Footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-wrap"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?t._e():n("div",{staticClass:"bg-filter"})]),n("video",{staticClass:"bg-video",attrs:{src:a(7073),muted:"",autoplay:"",loop:"",playsinline:"",poster:a(4201)},domProps:{muted:!0}})],1)},d=[],u={name:"BackGroundVideo"},m=u,h=a(1001),p=(0,h.Z)(m,c,d,!1,null,"d4022c08",null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!1,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n    background: rgba(0,0,0,0);\n    border-radius: 0px;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n  "}},[n("div",{staticClass:"modal-body"},[n("video",{attrs:{src:a(1174),poster:a(4063),controls:"true",preload:"auto"}}),n("button",{staticClass:"modal-close",on:{click:t.hide}},[n("BatsuIcon")],1)])]),n("transition",{attrs:{name:"modalTransition",mode:"out-in",appear:""}},[this.$store.state.modalOpacity?n("div",{staticClass:"modal-back-full"}):t._e()])],1)},g=[],_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"batsu-icon"})])}],b={name:"BatsuIcon"},C=b,x=(0,h.Z)(C,_,w,!1,null,"f1961f6e",null),k=x.exports,y={name:"FirstViewModal",data:function(){return{backOpacity:!0}},mounted:function(){this.$modal.show("first-modal"),document.body.className="lock"},methods:{hide:function(){this.$modal.hide("first-modal"),document.body.className=""}},components:{BatsuIcon:k}},T=y,E=(0,h.Z)(T,v,g,!1,null,"43605116",null),$=E.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-footer"},[a("footer",[a("div",{staticClass:"text-area-footer"},[a("p",{staticClass:"catch-footer"},[t._v(' 世界が絶賛した、未来への"記録" ')]),a("p",{staticClass:"other-text-footer"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),a("SnsArea"),a("p",{staticClass:"copyright"},[t._v("© 2022 Shoichirou-Shirakawa")])],1)])])},M=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sns-wrap"},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)},S=[],N={name:"SnsArea"},L=N,B=(0,h.Z)(L,P,S,!1,null,"056ce2be",null),U=B.exports,O={name:"Footer",components:{SnsArea:U}},Z=O,A=(0,h.Z)(Z,I,M,!1,null,"79e1cf3e",null),V=A.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"global-nav"},[a("button",{attrs:{id:"hamburger"},on:{click:t.changeShowMenu}},[a("HamburgerIcon")],1),this.$store.state.showMenu?a("div",{staticClass:"wrap-router"},[a("router-link",{attrs:{to:"/"}},[t._v("Top")]),a("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),a("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),a("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),a("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),a("router-link",{attrs:{to:"/trailer"}},[t._v("Trailer")]),a("router-link",{attrs:{to:"/news"}},[t._v("News")])],1):t._e()])])},R=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-ham"},[a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"})])}],W={name:"Hamburger"},z=W,G=(0,h.Z)(z,j,F,!1,null,"0e366e74",null),q=G.exports,Y={name:"GlobalMenu",data:function(){return{checkWidth:this.$store.state.checkMatches}},mounted:function(){var t=this;window.addEventListener("popstate",this.popStateMenu),this.$nextTick((function(){t.checkShowHam(t.checkWidth),t.checkWidth.addEventListener("change",t.checkShowHam),t.checkWidth.addEventListener("change",t.changeBreak)}))},beforeDestroy:function(){window.removeEventListener("popstate",this.popStateMenu)},methods:{checkShowHam:function(t){t.matches?(this.$store.state.showMenu=!1,document.getElementById("hamburger").style.visibility="visible",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,0)"):(document.getElementById("hamburger").style.visibility="hidden",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,.8)",this.$store.state.showMenu=!0)},popStateMenu:function(){this.checkWidth.matches&&(this.$store.state.showMenu=!1)},changeBreak:function(){this.$store.dispatch("actionsMatches")},changeShowMenu:function(){this.$store.dispatch("actionsMenu")}},watch:{showMenu:{handler:function(){this.$store.state.showMenu?document.body.className="lock":document.body.className=""}}},components:{HamburgerIcon:q}},D=Y,J=(0,h.Z)(D,H,R,!1,null,"38ef1d70",null),X=J.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logoarea"},[n("router-link",{attrs:{to:"/"}},[n("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.showLogo,expression:"showLogo"}],attrs:{id:"site-logo",alt:"Site logo",src:a(9574),type:"”image/svg+xml”"}})])],1)],1)},K=[],tt={name:"LogoArea",data:function(){return{showLogo:!0}},methods:{scrollY:function(){this.currentTop=window.scrollY,!this.$store.state.checkMatches.matches&&window.scrollY>0?this.showLogo=!1:this.showLogo=!0}},mounted:function(){window.addEventListener("scroll",this.scrollY)}},et=tt,at=(0,h.Z)(et,Q,K,!1,null,"418eeaf6",null),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.preLoading?a("div",{attrs:{id:"first-loading"}},[a("div",{staticClass:"fullview"},[t.showLoading?a("Spinner"):t._e(),t.showLoading?a("div",{staticClass:"wrap-progress"},[a("div",{staticClass:"progress",style:t.progressUp})]):t._e()],1),a("div",{attrs:{id:"load-wrap"}},[t._l(t.vForImages,(function(e){return a("img",{key:e.id,attrs:{src:e.img},on:{load:t.loadCountUp}})})),t._l(t.vForVideos,(function(t){return a("video",{key:t.id,staticClass:"load-video",attrs:{src:t.video,muted:"muted",autoplay:"",controls:""},domProps:{muted:!0}})}))],2)]):t._e()},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"load",appear:""}},[a("div",{staticClass:"wrap-spinner"},[a("div",{staticClass:"spinner",style:t.spinStyles},[a("div",{staticClass:"spin-core"})])])])},rt=[],lt={name:"Spinner",computed:{spinStyles:function(){return{background:"linear-gradient(0deg, rgba(22, 184, 243, .1) 33%, rgba(22, 184, 243, 1) 100%)"}}}},ct=lt,dt=(0,h.Z)(ct,ot,rt,!1,null,"0f456aac",null),ut=dt.exports,mt={name:"PreLoad",data:function(){return{loadCounter:0,vForImages:this.$store.state.imageAssets,vForVideos:this.$store.state.imageVideos,videoTags:[],showLoading:!0,preLoading:!0}},methods:{loadCountUp:function(){this.loadCounter++}},mounted:function(){var t=this;this.videoTags=document.getElementsByClassName("load-video");for(var e=0;e<this.videoTags.length;e++)this.videoTags[e].addEventListener("canplay",this.loadCountUp),this.videoTags[e].addEventListener("progress",this.loadCountUp),this.videoTags[e].addEventListener("loadeddata",this.loadCountUp),this.videoTags[e].addEventListener("suspend",this.loadCountUp);window.onload=function(){t.loadCounter++,t.showLoading=!1,setTimeout((function(){t.preLoading=!1,setTimeout((function(){t.$store.dispatch("actionsModal")}),3e3)}),1500)}},computed:{progressUp:function(){var t=this.$store.state.imageAssets.length+4*this.$store.state.imageVideos.length;return{"background-color":this.$store.state.themeColor,width:(this.loadCounter-1)/t*100+"%"}}},Destroyed:function(){for(var t=0;t<this.videoTags.length;t++)this.videoTags[t].removeEventListener("canplay",this.loadCountUp),this.videoTags[t].removeEventListener("progress",this.loadCountUp),this.videoTags[t].removeEventListener("loadeddata",this.loadCountUp),this.videoTags[t].removeEventListener("suspend",this.loadCountUp)},components:{Spinner:ut}},ht=mt,pt=(0,h.Z)(ht,st,it,!1,null,"19473f2c",null),ft=pt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-wrap"},[a("CampaignArea"),a("article",[a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[a("router-view")],1)],1)],1)},gt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?a("div",{staticClass:"campaign-area"},[a("ul",t._l(t.banners,(function(t){return a("li",{key:t},[a("img",{attrs:{src:t,alt:"banner"}})])})),0)]):t._e()])},wt=[],bt={name:"CampaignArea",data:function(){return{tweetWidget:document.createElement("script"),banners:[a(8929),a(198),a(6573)]}}},Ct=bt,xt=(0,h.Z)(Ct,_t,wt,!1,null,"fa9beaec",null),kt=xt.exports,yt={name:"ViewsWrap",components:{CampaignArea:kt}},Tt=yt,Et=(0,h.Z)(Tt,vt,gt,!1,null,"4d7a3ad4",null),$t=Et.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkShowButton,expression:"checkShowButton"}],staticClass:"wrap-scroll"},[a("button",{staticClass:"scroll-top-button",on:{click:t.scrollTop}},[a("angleUpIcon")],1)])])},Mt=[],Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-up"},[a("span",{staticClass:"angle-up-icon"})])}],Nt={name:"AngleUpIcon"},Lt=Nt,Bt=(0,h.Z)(Lt,Pt,St,!1,null,"da28f886",null),Ut=Bt.exports,Ot={name:"PageTopButton",data:function(){return{checkShowButton:!1}},mounted:function(){window.addEventListener("pointermove",this.moveCheck)},methods:{moveCheck:function(){this.checkShowButton=!0},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{checkShowButton:{handler:function(){var t=this;this.checkShowButton&&setTimeout((function(){t.checkShowButton=!1}),5e3)}}},components:{AngleUpIcon:Ut}},Zt=Ot,At=(0,h.Z)(Zt,It,Mt,!1,null,"61d4430c",null),Vt=At.exports,Ht={components:{BackGroundVideo:f,FirstViewModal:$,Footer:V,GlobalMenu:X,LogoArea:nt,PreLoad:ft,ViewsWrap:$t,ScrollTopButton:Vt}},Rt=Ht,jt=(0,h.Z)(Rt,r,l,!1,null,null,null),Ft=jt.exports,Wt=a(2809),zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views top"},[t._m(0),t._v(" "+t._s(t.$store.state.checkMatches)+" "+t._s(t.testBreak)+" "),a("p",[t._v("各リファレンス(随時追加)")]),t._m(1)])},Gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"saiyuusen"},[a("p",[t._v("来週以降:観念してVuex対応")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("p",[t._v("Webサイト")]),a("li",[a("a",{attrs:{href:"https://synca.jp/biglittle/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ビッグ・リトル・ファーム」公式サイト ")])]),a("li",[a("a",{attrs:{href:"https://ineistudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 株式会社INEI 公式サイト ")])]),a("li",[a("a",{attrs:{href:"https://gaga.ne.jp/seasons/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「シーズンズ」公式サイト ")])]),a("br"),a("p",[t._v("PV、動画など")]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=sIoFigkSR0k",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ライフ」予告 ")])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=S9mIOlzK-nU",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「オーシャンズ」予告 ")])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=PQtRXqBQETA",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Serj Tankian「Harakiri」PV ")])]),a("li",[t._v("test")]),a("li",[t._v("aa")]),a("li",[t._v("xd")]),a("li",[t._v("af")]),a("li",[t._v("awd")]),a("li",[t._v("awda")]),a("li",[t._v("sef")]),a("li",[t._v("daw")]),a("li",[t._v("fes")]),a("li",[t._v("sef")]),a("li",[t._v("test")]),a("li",[t._v("aa")]),a("li",[t._v("xd")]),a("li",[t._v("af")]),a("li",[t._v("awd")]),a("li",[t._v("awda")]),a("li",[t._v("sef")]),a("li",[t._v("daw")]),a("li",[t._v("fes")]),a("li",[t._v("sef")])])}],qt={name:"Top",data:function(){return{testBreak:""}},mounted:function(){var t=this;this.$nextTick((function(){t.checkBreak()}))},methods:{checkBreak:function(){this.$store.state.checkMatches?this.testBreak="True!!":this.testBreak="False!!"}}},Yt=qt,Dt=(0,h.Z)(Yt,zt,Gt,!1,null,"30f8a67e",null),Jt=Dt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"in-views introduction"},[n("transition",{attrs:{name:"intoleft",appear:""}},[n("h2",{staticClass:"heading2"},[n("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[n("p",{staticClass:"sub"},[t._v("イントロダクション")])]),n("p",[t._v("Introduction")])],1)]),n("div",{ref:"slideArea",attrs:{id:"slide-area"}},[n("hooper",{attrs:{id:"intro-hooper",settings:t.hooperSettings}},[n("slide",{staticClass:"hooper-slide page1"},[n("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[n("div",{staticClass:"slide-text-area"},[n("p",{staticClass:"slide-text"},[t._v(" 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。 何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。 吾輩はここで始めて人間というものを見た。 ")])])]),n("img",{staticClass:"slide-img",attrs:{src:a(2283)}})],1),n("slide",{staticClass:"hooper-slide page2"},[n("div",{staticClass:"slide-text-area"},[n("p",{staticClass:"slide-text"},[t._v(" 木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、 あるところは数十間の深さに臨む木曾川の岸であり、 あるところは山の尾をめぐる谷の入り口である。 一筋の街道はこの深い森林地帯を貫いていた。 ")])]),n("img",{staticClass:"slide-img",attrs:{src:a(8447)}})]),n("slide",{staticClass:"hooper-slide page3"},[n("div",{staticClass:"slide-text-area"},[n("p",{staticClass:"slide-text"},[t._v(" しかし、私はあなたに喜びを非難し、痛みを賞賛するというこの誤った考えが どのように生まれたかを説明しなければなりません、そして私はあなたに システムの完全な説明を与え、真実の偉大な探検家、人間の幸福のマスタービルダー。 ")])]),n("img",{staticClass:"slide-img",attrs:{src:a(1514)}})]),n("slide",{staticClass:"hooper-slide page4"},[n("div",{staticClass:"slide-text-area"},[n("p",{staticClass:"slide-text"},[t._v(" ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。 広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、 蟋蟀が一匹とまっている。 ")])]),n("img",{staticClass:"slide-img",attrs:{src:a(5679)}})]),n("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),n("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"},[n("AngleUpIcon",{attrs:{slot:"hooper-prev"},slot:"hooper-prev"}),n("AngleUpIcon",{attrs:{slot:"hooper-next"},slot:"hooper-next"})],1)],1)],1)],1)},Qt=[],Kt=(a(9653),a(4916),a(5306),a(5681)),te={name:"Introduction",data:function(){return{name:"",slideResizeCheck:window.matchMedia("(max-width: 600px)"),hooperSettings:{itemToShow:1,infiniteScroll:!0,wheelControl:!1}}},mounted:function(){var t=this;this.$nextTick((function(){t.slideSize(),t.slideResizeCheck.addEventListener("change",t.slideSize)}))},methods:{slideSize:function(){var t=document.getElementsByClassName("views-wrap")[0],e=document.getElementsByClassName("views-wrap")[0].offsetHeight,a=window.getComputedStyle(t),n=a.getPropertyValue("margin-top"),s=Number(n.replace(/px/g,"")),i=document.getElementsByClassName("global-nav")[0].offsetHeight,o=e+i+2*s;document.getElementById("slide-area").style.height=o+"px"}},components:{Hooper:Kt.dB,Slide:Kt.Mi,HooperPagination:Kt.tl,HooperNavigation:Kt.W_,AngleUpIcon:Ut}},ee=te,ae=(0,h.Z)(ee,Xt,Qt,!1,null,"744bf7e6",null),ne=ae.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views staff"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("スタッフ")])]),a("p",[t._v("Staff")])],1)]),a("div",{staticClass:"staff-list"},[t._l(t.staffLists,(function(e){return[a("div",{key:e.staffId,staticClass:"staff-area"},[a("div",{staticClass:"staff-prof-wrap"},[a("div",{staticClass:"staff-name-area"},[a("p",{staticClass:"staff-name-sub"},[t._v(" "+t._s(e.staffNameSub)+" ")]),a("div",{staticClass:"staff-name-wrap"},[a("p",{staticClass:"staff-name"},[t._v(" "+t._s(e.staffName)+" ")]),a("p",{staticClass:"staff-position"},[t._v(" "+t._s(e.staffPosition)+" ")])])]),a("p",{staticClass:"staff-prof"},[t._v(" "+t._s(e.staffProf)+" ")])]),a("img",{staticClass:"staff-img",attrs:{src:e.staffPic}})])]}))],2)],1)},ie=[],oe={name:"Staff",data:function(){return{staffLists:[{staffId:1,staffName:"Jaden Sutherland",staffPosition:"制作総指揮／監督",staffNameSub:"ジェイデン・サザーランド",staffPic:a(35),staffProf:"1960年、カナダ・ハリファックス生まれ。父は脚本家、母は舞台女優という芸能一家に生まれ、子役としてハリウッドやフランスで数多くの映画に出演。86年には二本の作品でヴェネチア国際映画祭の男優賞受賞。89年、ガーザ・ベラスケス監督の『Twice』で初めて製作を務め、米アカデミー賞外国語映画賞を受賞。80本以上の映画に出演し、また数多くの長編映画で製作を担当している。99年、『An Animals』で動物の世界に目覚め、『ワールド』（04）、『マイグレーション』（08）で製作を務めた。さらに『コロイド』（13）では、製作およびロバート・ミラー、タラ・ローレンスとの共同監督を務めた。その他製作作品に、『無限のコーラス』（15）、『ペリカン』（18）などがある。ロバート・ミラー監督と共同監督を務めた『One』（20） では、権威あるセザール賞ドキュメンタリー賞を受賞。"},{staffId:2,staffName:"Robert Miller",staffPosition:"監督",staffNameSub:"ロバート・ミラー",staffPic:a(9737),staffProf:"1985年パリ第8大学映画科を卒業。90年から01年までフィクション映画の第一助監督として、多くの作品を担当し、フィクション短編映画も多く監督した。その後、数多くのドキュメンタリー作品やCM、特撮映像の監督などを経て、13年、ジェイデン・サザーランド、タラ・ローレンスと『コロイド』（13）で共同監督を務め、「コロイド　～もうひとつの願い～」（13/TV）でも監督を務めた。15年から18年にかけて、ジャック・ペランと『シンフォニー』をダブルIMAX仕様で共同監督、その後『One』(20)の脚本共同執筆と海洋、海中撮影用の特殊技術の共同開発に携わり、セザール賞ドキュメンタリー賞を受賞。"}]}}},re=oe,le=(0,h.Z)(re,se,ie,!1,null,null,null),ce=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views comment"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("コメント")])]),a("p",[t._v("Comment")])],1)]),a("div",{staticClass:"comment-list"},[a("div",{staticClass:"comment-head-area"},[t._m(0),a("img",{staticClass:"comment-head-img",attrs:{src:t.commentHeadPic,alt:""}})]),t._l(t.commentLists,(function(e){return[a("div",{key:e.commentId,staticClass:"comment-area"},[a("div",{staticClass:"comment-text-area"},[a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis1)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText1)+" ")]),a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis2)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText2)+" ")])]),a("div",{staticClass:"commenter-name-area"},[a("p",{staticClass:"commenter-name"},[t._v(" "+t._s(e.commenterName)+" ")]),a("p",{staticClass:"slash"},[t._v("／")]),a("p",{staticClass:"commenter-prof"},[t._v(" "+t._s(e.commenterProf)+" ")])])])]}))],2)],1)},ue=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"comment-head-text"},[t._v(" 数々の著名人から"),a("br"),t._v(" 絶賛の声！！ ")])}],me={name:"Comment",data:function(){return{commentHeadPic:a(2156),commentLists:[{commenterId:1,commenterName:"佐藤功",commenterProf:"俳優・タレント",commentTextEmphasis1:"ゴーシュは前すましでくださらた。",commentText2:"ばたばたアンコールはいって、なっが思っからしまっでして水車にすると音へどうしてぺん云いました。\n「顔来。水をふるえない。だまっぞ。きみはあれからこどもに来てじゃはじめ町はいいのなてぞ。」\nそこも気の毒そうとしてぞからだ意地悪をふくとだ町の眼に拭いて云いやつかてやろた。\n譜はやれて愕を聞えたた。やつもぱたっとかっこうはうるさいものたてつぶはまた高くんますで。"},{commenterId:2,commenterName:"近藤正樹",commenterProf:"ノンフィクション作家",commentText1:"セロはその生意気んゴーシュみたいた先生にしながらざとじぶんのののへだまっでかぎをしてにわかにマッチにひるないんで、ばが居りいとだねずみでも教えるたゆうべこんどこすりまし所を前がドレミファをは耳め弾きましで。\n大きなかっこうひどくゆうべは誰か手ですなこわいものからこさえよ血人を入れて行くだです。用とくたびれてはそれはぎてしまいはもうじぶんがのかっこう室ましがなん起きあがっられたかっこう猫を、片手も何にたった二ぴきですて来て半分も病院のいっしょのその鳥に扉のセロがなったりねずみの眼を吹き出たりこすりてわらわすぎが出てどうもやりがやるけれどもやるなかっのまし。",commentTextEmphasis2:"顔、すこし大療でしと、ご人へふみまし。\nこれにシューマンのいちどを行くがごらんおどす。"},{commenterId:3,commenterName:"TATSURO",commenterProf:"歌手・ナチュラリスト",commentText1:"するとぐっすりぱっと子をばかを弾いですだが孔は鳴ったましうた。ねどこもよしいつももういま何本のおねがいを叩きましてゴーシュを云いてるて勢たりゴーシュがおいおい子をしなた。すると一生けん命はセロをし屋をは大をは教えましたて頭する北の方目ですわり込んてぼくへすぐおいするとわあがっましなあというように見ひいやるたで。",commentTextEmphasis2:"舞台はまるで長いなりてどう次恐い弾いいたまし。",commentText2:"子しもトロメライをすって狸へ慈悲のように音のままをなるてきんへやってどう歩いましで。また、ぱちぱちおねがいどなりですというようにすこしやるましな。"}]}}},he=me,pe=(0,h.Z)(he,de,ue,!1,null,null,null),fe=pe.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views trailer"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("トレイラー")])]),a("p",[t._v("Trailer")])],1)]),a("div",{staticClass:"trailer-list"},[t._l(t.reverseId,(function(e){return[a("div",{key:e.trailerId,staticClass:"trailer-area"},[a("div",{staticClass:"trailer-thumb-area"},[e.trailerMovie?a("img",{staticClass:"trailer-thumb-img",attrs:{src:e.trailerThumb,alt:e.trailerTitle},on:{click:function(a){return t.showTrailer(e.trailerId)}}}):a("img",{staticClass:"trailer-thumb-null",attrs:{src:e.trailerThumb,alt:e.trailerTitle}}),a("p",{staticClass:"trailer-title"},[t._v(" "+t._s(e.trailerTitle)+" ")])])])]})),a("modal",{staticClass:"trailer-modal",attrs:{name:"trailer-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!0,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n          background-color: rgba(0,0,0,0);\n          border-radius: 0px;\n          overflow: visible;\n          box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n          display: flex;\n          flex-flow: column;\n          align-items: center;\n          justify-content: center;\n          "}},[a("div",{staticClass:"trailer-modal-body"},[a("video",{attrs:{src:t.postTrailer.trailerMovie,poster:t.postTrailer.trailerThumb,controls:"",preload:"auto"}}),a("button",{staticClass:"trailer-close",on:{click:t.hideTrailer}},[a("BatsuIcon")],1)]),a("div",{staticClass:"trailer-modal-bg"})])],2)],1)},ge=[],_e=(a(9826),a(1539),a(7042),{name:"trailer",data:function(){return{postTrailer:"",trailerLists:[{trailerId:1,trailerTitle:"特報",trailerMovie:a(1174),trailerThumb:a(4063)},{trailerId:2,trailerTitle:"※modal確認用仮設定",trailerMovie:a(7073),trailerThumb:a(8088)},{trailerId:3,trailerTitle:"TVCM 15秒",trailerMovie:null,trailerThumb:a(1171)}]}},methods:{showTrailer:function(t){this.$modal.show("trailer-modal"),this.postTrailer=this.trailerLists.find((function(e){return e.trailerId===t}))},hideTrailer:function(){this.$modal.hide("trailer-modal")}},computed:{reverseId:function(){return this.trailerLists.slice().reverse()}},components:{BatsuIcon:k}}),we=_e,be=(0,h.Z)(we,ve,ge,!1,null,null,null),Ce=be.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views theater"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("劇場情報")])]),a("p",[t._v("Theater")])],1)]),a("div",{staticClass:"wrap-theater"},[a("div",{staticClass:"wrap-anchor"},t._l(t.theaterLists,(function(e){return a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+e.theaterRegion,duration:500,easing:"ease-out",offset:-150},expression:"{\n        el: '#' + theaterList.theaterRegion,\n        duration: 500,\n        easing: 'ease-out',\n        offset: -150,\n      }"}],key:e.index,staticClass:"page-anchor"},[t._v(t._s(e.theaterRegion)+" "),a("p",{staticClass:"angle"},[t._v("››")])])})),0),a("div",{staticClass:"theater-index"},[a("div",{staticClass:"top-spacer"}),t._l(t.theaterLists,(function(e){return[a("div",{key:e.index,staticClass:"wrap-theater-info"},[a("a",{staticClass:"theater-region",attrs:{id:e.theaterRegion}},[t._v(t._s(e.theaterRegion))]),a("table",[a("thead",{staticClass:"info-head"},[a("td"),a("tr",t._l(t.indexHeaders,(function(e){return a("th",{key:e.index},[t._v(" "+t._s(e)+" ")])})),0)]),a("tr",{staticClass:"table-spacer"}),t._l(e.theaterIndex,(function(e){return a("tbody",{key:e.theaterPref},[a("tr",[a("td",[t._v(t._s(e.theaterPref))]),a("td",[a("a",{attrs:{href:e.theaterUrl}},[t._v(" "+t._s(e.theaterName)+" ")])]),a("td",[t._v(t._s(e.theaterPhone))]),a("td",[t._v(t._s(e.theaterNote))])])])})),a("tr",{staticClass:"table-spacer"})],2)])]})),a("div",{staticClass:"bottom-spacer"})],2)])],1)},ke=[],ye={name:"Theater",data:function(){return{indexHeaders:["都道府県","劇場名","電話番号","備考"],theaterLists:[{theaterRegion:"北海道",theaterIndex:[{theaterName:"札幌シネマフロンティア",theaterPref:"北海道",theaterUrl:"https://www.cinemafrontier.net/cgi-bin/pc/index.cgi",theaterPhone:"011-209-5400",theaterNote:"4DX吹替版上映中"}]},{theaterRegion:"東北",theaterIndex:[{theaterName:"イオンシネマ弘前",theaterPref:"青森",theaterUrl:"https://www.aeoncinema.com/cinema/hirosaki/",theaterPhone:"0172-26-1113",theaterNote:"このtableは全体的にv-forで生成しているので"},{theaterName:"TOHOシネマズ仙台",theaterPref:"宮城",theaterUrl:"https://hlo.tohotheater.jp/net/schedule/078/TNPI2000J01.do",theaterPhone:"050-6868-5065",theaterNote:"データを変更すればtableも自動的に更新されます"}]},{theaterRegion:"関東",theaterIndex:[{theaterName:"新宿ピカデリー",theaterPref:"東京",theaterUrl:"https://www.smt-cinema.com/site/shinjuku/",theaterPhone:"050-6861-3011",theaterNote:""},{theaterName:"川崎チネチッタ",theaterPref:"神奈川",theaterUrl:"https://cinecitta.co.jp/",theaterPhone:"044-223-3190",theaterNote:""}]},{theaterRegion:"中部",theaterIndex:[{theaterName:"イオンシネマ金沢",theaterPref:"石川",theaterUrl:"https://www.aeoncinema.com/cinema/kanazawa/",theaterPhone:"076-258-7575",theaterNote:""}]},{theaterRegion:"関西",theaterIndex:[{theaterName:"TOHOシネマズ二条",theaterPref:"京都",theaterUrl:"https://hlo.tohotheater.jp/net/schedule/023/TNPI2000J01.do",theaterPhone:"050-6868-5035",theaterNote:""},{theaterName:"大阪ステーションシティシネマ",theaterPref:"大阪",theaterUrl:"https://www.osakastationcitycinema.com/site/oscc/",theaterPhone:"050-6861-8100",theaterNote:""}]},{theaterRegion:"中国・四国",theaterIndex:[{theaterName:"イオンシネマ岡山",theaterPref:"岡山",theaterUrl:"https://www.aeoncinema.com/cinema/okayama/",theaterPhone:"086-235-0139",theaterNote:""}]},{theaterRegion:"九州・沖縄",theaterIndex:[{theaterName:"ユナイテッド・シネマ長崎",theaterPref:"長崎",theaterUrl:"https://www.unitedcinemas.jp/nagasaki/index.html",theaterPhone:"0570-783-282",theaterNote:""}]}]}}},Te=ye,Ee=(0,h.Z)(Te,xe,ke,!1,null,"13097bb6",null),$e=Ee.exports,Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" News ")])},Me=[],Pe={},Se=Pe,Ne=(0,h.Z)(Se,Ie,Me,!1,null,null,null),Le=Ne.exports;n["default"].use(Wt.Z);var Be=[{path:"/",name:"top",component:Jt},{path:"/introduction",name:"introduction",component:ne},{path:"/staff",name:"staff",component:ce},{path:"/comment",name:"Comment",component:fe},{path:"/trailer",name:"trailer",component:Ce},{path:"/theater",name:"theater",component:$e},{path:"/news",name:"news",component:Le},{path:"*",redirect:"/"}],Ue=new Wt.Z({scrollBehavior:function(t,e,a){return a||{x:0,y:0}},mode:"history",base:"/shirakawa.github.io/03/",routes:Be});Ue.afterEach((function(){n["default"].nextTick((function(){o.state.checkMatches.matches&&(o.state.showMenu=!1)}))}));var Oe=Ue,Ze=a(8175),Ae=a.n(Ze),Ve=a(642),He=a(2725),Re=a.n(He),je=a(4142),Fe=a.n(je),We=a(81),ze=a(4842),Ge=a(9009);We.vI.add(ze.mdU,ze.Zzi,ze.opf,ze.neY),n["default"].component("font-awesome-icon",Ge.GN),n["default"].config.productionTip=!1,n["default"].use(Ae()),n["default"].use(Ve.Z),n["default"].use(Re()),n["default"].use(Fe()),new n["default"]({router:Oe,store:o,render:function(t){return t(Ft)},data:{lock:!1},methods:{toggleLock:function(){1==this.lock?this.lock=!1:this.lock=!0}}}).$mount("#app")},8929:function(t,e,a){t.exports=a.p+"img/kari-banner1.28803540.svg"},198:function(t,e,a){t.exports=a.p+"img/kari-banner2.0aef6080.svg"},6573:function(t,e,a){t.exports=a.p+"img/kari-banner3.0aef6080.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.e3d76b7a.svg"},4201:function(t,e,a){t.exports=a.p+"img/Poster.24c0a0b5.png"},1174:function(t,e,a){t.exports=a.p+"media/Teaser.9c09bc19.mp4"},1171:function(t,e,a){t.exports=a.p+"img/Teaser_soon.a4e03a30.png"},4063:function(t,e,a){t.exports=a.p+"img/Teaser_thumb.45567a1d.png"},8088:function(t,e,a){t.exports=a.p+"img/Teaser_thumb_temp.9de32da0.png"},7073:function(t,e,a){t.exports=a.p+"media/background.b44efec3.mp4"},2156:function(t,e,a){t.exports=a.p+"img/pic_comment_head.5f4b883c.png"},2283:function(t,e,a){t.exports=a.p+"img/pic_introduction_01.b2835a1b.png"},8447:function(t,e,a){t.exports=a.p+"img/pic_introduction_02.bf17581c.png"},1514:function(t,e,a){t.exports=a.p+"img/pic_introduction_03.38f7e962.png"},5679:function(t,e,a){t.exports=a.p+"img/pic_introduction_04.c8ed233d.png"},35:function(t,e,a){t.exports=a.p+"img/pic_staff_01.ee90634c.png"},9737:function(t,e,a){t.exports=a.p+"img/pic_staff_02.aa09139d.png"}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,i){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],i=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var d=l(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},n=self["webpackChunksite"]=self["webpackChunksite"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5749)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.9bb966a8.js.map