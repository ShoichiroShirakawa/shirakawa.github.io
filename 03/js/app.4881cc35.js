(function(){"use strict";var t={7594:function(t,e,a){var s=a(8935),i=a(2521),o=a.n(i);s["default"].use(o());var n=new(o().Store)({state:{checkMatches:window.matchMedia("(max-width: 600px)"),showMenu:!0,themeColor:"#16b8f3",modalOpacity:!0,imageAssets:[{id:101,img:a(35),categoly:"staff"},{id:102,img:a(9737),categoly:"staff"},{id:201,img:a(2283),categoly:"introduction"},{id:202,img:a(8447),categoly:"introduction"},{id:203,img:a(1514),categoly:"introduction"},{id:204,img:a(5679),categoly:"introduction"},{id:301,img:a(8929),categoly:"banner"},{id:302,img:a(198),categoly:"banner"},{id:303,img:a(6573),categoly:"banner"},{id:401,img:a(2156),categoly:"comment"},{id:501,img:a(1171),categoly:"trailerImg"},{id:502,img:a(1171),categoly:"trailerImg"},{id:503,img:a(8088),categoly:"trailerImg"},{id:901,img:a(9574),categoly:"logo"}],imageVideos:[{id:1001,video:a(1174),categoly:"trailer"},{id:9001,video:a(7073),categoly:"background"}]},mutations:{mutationsMatches(t){t.checkMatches=!t.checkMatches},mutationsMenu(t){t.showMenu=!t.showMenu},mutationsModal(t){t.modalOpacity=!t.modalOpacity}},actions:{actionsMatches({commit:t}){t("mutationsMatches")},actionsMenu({commit:t}){t("mutationsMenu")},actionsModal({commit:t}){t("mutationsModal")}},modules:{}}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PreLoad"),a("FirstViewModal"),a("GlobalMenu"),a("ScrollTopButton"),a("LogoArea"),a("ViewsWrap"),a("BackGroundVideo"),a("Footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-wrap"},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?t._e():s("div",{staticClass:"bg-filter"})]),s("video",{staticClass:"bg-video",attrs:{src:a(7073),muted:"",autoplay:"",loop:""},domProps:{muted:!0}})],1)},d=[],m={name:"BackGroundVideo"},u=m,p=a(1001),h=(0,p.Z)(u,c,d,!1,null,"5bfa2c02",null),f=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!1,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n    background: rgba(0,0,0,0);\n    border-radius: 0px;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n  "}},[s("div",{staticClass:"modal-body"},[s("video",{attrs:{src:a(1174),poster:a(4063),controls:"",preload:"auto"}}),s("button",{staticClass:"modal-close",on:{click:t.hide}},[s("BatsuIcon")],1)])]),s("transition",{attrs:{name:"modalTransition",mode:"out-in",appear:""}},[this.$store.state.modalOpacity?s("div",{staticClass:"modal-back-full"}):t._e()])],1)},g=[],_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"batsu-icon"})])}],C={name:"BatsuIcon"},w=C,k=(0,p.Z)(w,_,b,!1,null,"f1961f6e",null),x=k.exports,y={name:"FirstViewModal",data(){return{backOpacity:!0}},mounted(){this.$modal.show("first-modal"),document.body.className="lock"},methods:{hide:function(){this.$modal.hide("first-modal"),document.body.className=""}},components:{BatsuIcon:x}},T=y,E=(0,p.Z)(T,v,g,!1,null,"fcb2ebb4",null),$=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-footer"},[a("footer",[a("div",{staticClass:"text-area-footer"},[a("p",{staticClass:"catch-footer"},[t._v(' 世界が絶賛した、未来への"記録" ')]),a("p",{staticClass:"other-text-footer"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),a("SnsArea"),a("p",{staticClass:"copyright"},[t._v("© 2022 Shoichirou-Shirakawa")])],1)])])},S=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sns-wrap"},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)},L=[],B={name:"SnsArea"},P=B,N=(0,p.Z)(P,I,L,!1,null,"056ce2be",null),Z=N.exports,A={name:"Footer",components:{SnsArea:Z}},O=A,U=(0,p.Z)(O,M,S,!1,null,"17df8ac2",null),V=U.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"global-nav"},[a("button",{attrs:{id:"hamburger"},on:{click:t.changeShowMenu}},[a("HamburgerIcon")],1),this.$store.state.showMenu?a("div",{staticClass:"wrap-router"},[a("router-link",{attrs:{to:"/"}},[t._v("Top")]),a("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),a("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),a("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),a("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),a("router-link",{attrs:{to:"/trailer"}},[t._v("Trailer")]),a("router-link",{attrs:{to:"/news"}},[t._v("News")])],1):t._e()])])},F=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-ham"},[a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"})])}],z={name:"Hamburger"},G=z,q=(0,p.Z)(G,j,W,!1,null,"0e366e74",null),R=q.exports,D={name:"GlobalMenu",data(){return{checkWidth:this.$store.state.checkMatches}},mounted(){window.addEventListener("popstate",this.popStateMenu),this.$nextTick((()=>{this.checkShowHam(this.checkWidth),this.checkWidth.addEventListener("change",this.checkShowHam),this.checkWidth.addEventListener("change",this.changeBreak)}))},beforeDestroy(){window.removeEventListener("popstate",this.popStateMenu)},methods:{checkShowHam(t){t.matches?(this.$store.state.showMenu=!1,document.getElementById("hamburger").style.visibility="visible",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,0)"):(document.getElementById("hamburger").style.visibility="hidden",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,.8)",this.$store.state.showMenu=!0)},popStateMenu(){this.checkWidth.matches&&(this.$store.state.showMenu=!1)},changeBreak(){this.$store.dispatch("actionsMatches")},changeShowMenu(){this.$store.dispatch("actionsMenu")}},watch:{showMenu:{handler(){this.showMenu?document.body.className="lock":document.body.className=""}}},components:{HamburgerIcon:R}},Q=D,X=(0,p.Z)(Q,H,F,!1,null,"7faaecea",null),J=X.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logoarea"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{id:"site-logo",alt:"Site logo",src:a(9574),type:"”image/svg+xml”"}})])],1)},Y=[],tt={name:"LogoArea"},et=tt,at=(0,p.Z)(et,K,Y,!1,null,"f4080dec",null),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.preLoading?a("div",{attrs:{id:"first-loading"}},[a("div",{staticClass:"fullview"},[a("div",{staticClass:"loading-spacer"}),t.showLoading?a("Loading"):t._e(),t.showLoading?a("div",{staticClass:"wrap-progress"},[a("div",{staticClass:"progress",style:t.progressUp})]):t._e()],1),a("div",{attrs:{id:"load-wrap"}},[t._l(t.vForImages,(function(e){return a("img",{key:e.id,attrs:{src:e.img},on:{load:t.loadCountUp}})})),t._l(t.vForVideos,(function(t){return a("video",{key:t.id,staticClass:"load-video",attrs:{src:t.video,muted:"muted",autoplay:""},domProps:{muted:!0}})}))],2)]):t._e()},ot=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"load",appear:""}},[a("div",{staticClass:"wrap-load"},[a("div",{staticClass:"spinner",style:t.spinStyles},[a("div",{staticClass:"spin-core"})])])])},rt=[],lt={name:"Loading",data(){return{isLoading:!1}},computed:{spinStyles(){return{background:"linear-gradient(0deg, rgba(22, 184, 243, .1) 33%, rgba(22, 184, 243, 1) 100%)"}}}},ct=lt,dt=(0,p.Z)(ct,nt,rt,!1,null,"42cb87aa",null),mt=dt.exports,ut={name:"PreLoad",data(){return{loadCounter:0,vForImages:this.$store.state.imageAssets,vForVideos:this.$store.state.imageVideos,videoTags:[],showLoading:!0,preLoading:!0}},methods:{loadCountUp(){this.loadCounter++}},mounted(){this.videoTags=document.getElementsByClassName("load-video");for(let t=0;t<this.videoTags.length;t++)this.videoTags[t].addEventListener("canplay",this.loadCountUp),this.videoTags[t].addEventListener("progress",this.loadCountUp),this.videoTags[t].addEventListener("loadeddata",this.loadCountUp),this.videoTags[t].addEventListener("suspend",this.loadCountUp);window.onload=()=>{this.showLoading=!1,setTimeout((()=>{this.preLoading=!1,setTimeout((()=>{this.$store.dispatch("actionsModal")}),3e3)}),2e3)}},computed:{progressUp(){let t=this.$store.state.imageAssets.length+4*this.$store.state.imageVideos.length;return{"background-color":this.$store.state.themeColor,width:this.loadCounter/t*100+"%"}}},Destroyed(){for(let t=0;t<this.videoTags.length;t++)this.videoTags[t].removeEventListener("canplay",this.loadCountUp),this.videoTags[t].removeEventListener("progress",this.loadCountUp),this.videoTags[t].removeEventListener("loadeddata",this.loadCountUp),this.videoTags[t].removeEventListener("suspend",this.loadCountUp)},components:{Loading:mt}},pt=ut,ht=(0,p.Z)(pt,it,ot,!1,null,"27537ad4",null),ft=ht.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-wrap"},[a("CampaignArea"),a("article",[a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[a("router-view")],1)],1)],1)},gt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[this.$route.path.match(/\/$/)?a("div",{staticClass:"campaign-area"},[a("ul",t._l(t.banners,(function(t){return a("li",{key:t},[a("img",{attrs:{src:t,alt:"banner"}})])})),0)]):t._e()])},bt=[],Ct={name:"CampaignArea",data(){return{tweetWidget:document.createElement("script"),banners:[a(8929),a(198),a(6573)]}}},wt=Ct,kt=(0,p.Z)(wt,_t,bt,!1,null,"656e2c56",null),xt=kt.exports,yt={name:"ViewsWrap",components:{CampaignArea:xt}},Tt=yt,Et=(0,p.Z)(Tt,vt,gt,!1,null,"4d7a3ad4",null),$t=Et.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkShowButton,expression:"checkShowButton"}],staticClass:"wrap-scroll"},[a("button",{staticClass:"scroll-top-button",on:{click:t.scrollTop}},[a("angleUpIcon")],1)])])},St=[],It=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-up"},[a("span",{staticClass:"angle-up-icon"})])}],Bt={name:"AngleUpIcon"},Pt=Bt,Nt=(0,p.Z)(Pt,It,Lt,!1,null,"da28f886",null),Zt=Nt.exports,At={name:"PageTopButton",data(){return{checkShowButton:!1}},mounted(){window.addEventListener("pointermove",this.moveCheck)},methods:{moveCheck(){this.checkShowButton=!0},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{checkShowButton:{handler(){this.checkShowButton&&setTimeout((()=>{this.checkShowButton=!0}),5e3)}}},components:{AngleUpIcon:Zt}},Ot=At,Ut=(0,p.Z)(Ot,Mt,St,!1,null,"cf165e5e",null),Vt=Ut.exports,Ht={components:{BackGroundVideo:f,FirstViewModal:$,Footer:V,GlobalMenu:J,LogoArea:st,PreLoad:ft,ViewsWrap:$t,ScrollTopButton:Vt}},Ft=Ht,jt=(0,p.Z)(Ft,r,l,!1,null,null,null),Wt=jt.exports,zt=a(2809),Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views top"},[t._m(0),t._v(" "+t._s(t.$store.state.checkMatches)+" "+t._s(t.testBreak)+" "),a("p",[t._v("各リファレンス(随時追加)")]),t._m(1)])},qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"saiyuusen"},[a("p",[t._v("来週以降:観念してVuex対応")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("p",[t._v("Webサイト")]),a("li",[a("a",{attrs:{href:"https://synca.jp/biglittle/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ビッグ・リトル・ファーム」公式サイト ")])]),a("li",[a("a",{attrs:{href:"https://ineistudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 株式会社INEI 公式サイト ")])]),a("li",[a("a",{attrs:{href:"https://gaga.ne.jp/seasons/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「シーズンズ」公式サイト ")])]),a("br"),a("p",[t._v("PV、動画など")]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=sIoFigkSR0k",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「ライフ」予告 ")])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=S9mIOlzK-nU",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 映画「オーシャンズ」予告 ")])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=PQtRXqBQETA",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Serj Tankian「Harakiri」PV ")])]),a("li",[t._v("test")]),a("li",[t._v("aa")]),a("li",[t._v("xd")]),a("li",[t._v("af")]),a("li",[t._v("awd")]),a("li",[t._v("awda")]),a("li",[t._v("sef")]),a("li",[t._v("daw")]),a("li",[t._v("fes")]),a("li",[t._v("sef")]),a("li",[t._v("test")]),a("li",[t._v("aa")]),a("li",[t._v("xd")]),a("li",[t._v("af")]),a("li",[t._v("awd")]),a("li",[t._v("awda")]),a("li",[t._v("sef")]),a("li",[t._v("daw")]),a("li",[t._v("fes")]),a("li",[t._v("sef")])])}],Rt={name:"Top",data(){return{testBreak:""}},mounted(){this.$nextTick((()=>{this.checkBreak(),this.picShow=!1}))},methods:{checkBreak(){this.$store.state.checkMatches?this.testBreak="True!!":this.testBreak="False!!"}}},Dt=Rt,Qt=(0,p.Z)(Dt,Gt,qt,!1,null,"0f49e767",null),Xt=Qt.exports,Jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"in-views introduction"},[s("transition",{attrs:{name:"intoleft",appear:""}},[s("h2",{staticClass:"heading2"},[s("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[s("p",{staticClass:"sub"},[t._v("イントロダクション")])]),s("p",[t._v("Introduction")])],1)]),s("div",{ref:"slideArea",attrs:{id:"slide-area"}},[s("hooper",{attrs:{id:"intro-hooper",settings:t.hooperSettings}},[s("slide",{staticClass:"hooper-slide page1"},[s("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。 何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。 吾輩はここで始めて人間というものを見た。 ")])])]),s("img",{staticClass:"slide-img",attrs:{src:a(2283)}})],1),s("slide",{staticClass:"hooper-slide page2"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" 木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、 あるところは数十間の深さに臨む木曾川の岸であり、 あるところは山の尾をめぐる谷の入り口である。 一筋の街道はこの深い森林地帯を貫いていた。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(8447)}})]),s("slide",{staticClass:"hooper-slide page3"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" しかし、私はあなたに喜びを非難し、痛みを賞賛するというこの誤った考えが どのように生まれたかを説明しなければなりません、そして私はあなたに システムの完全な説明を与え、真実の偉大な探検家、人間の幸福のマスタービルダー。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(1514)}})]),s("slide",{staticClass:"hooper-slide page4"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。 広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、 蟋蟀が一匹とまっている。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(5679)}})]),s("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),s("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"},[s("AngleUpIcon",{attrs:{slot:"hooper-prev"},slot:"hooper-prev"}),s("AngleUpIcon",{attrs:{slot:"hooper-next"},slot:"hooper-next"})],1)],1)],1)],1)},Kt=[],Yt=a(5681),te={name:"Introduction",data(){return{name:"",slideResizeCheck:window.matchMedia("(max-width: 600px)"),hooperSettings:{itemToShow:1,infiniteScroll:!0,wheelControl:!1}}},mounted(){this.$nextTick((()=>{this.slideSize(),this.slideResizeCheck.addEventListener("change",this.slideSize)}))},methods:{slideSize(){const t=document.getElementsByClassName("views-wrap")[0],e=document.getElementsByClassName("views-wrap")[0].offsetHeight,a=window.getComputedStyle(t),s=a.getPropertyValue("margin-top"),i=Number(s.replace(/px/g,"")),o=document.getElementsByClassName("global-nav")[0].offsetHeight,n=e+o+2*i;document.getElementById("slide-area").style.height=n+"px"}},components:{Hooper:Yt.dB,Slide:Yt.Mi,HooperPagination:Yt.tl,HooperNavigation:Yt.W_,AngleUpIcon:Zt}},ee=te,ae=(0,p.Z)(ee,Jt,Kt,!1,null,"744bf7e6",null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views staff"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("スタッフ")])]),a("p",[t._v("Staff")])],1)]),a("div",{staticClass:"staff-list"},[t._l(t.staffLists,(function(e){return[a("div",{key:e.staffId,staticClass:"staff-area"},[a("div",{staticClass:"staff-prof-wrap"},[a("div",{staticClass:"staff-name-area"},[a("p",{staticClass:"staff-name-sub"},[t._v(" "+t._s(e.staffNameSub)+" ")]),a("div",{staticClass:"staff-name-wrap"},[a("p",{staticClass:"staff-name"},[t._v(" "+t._s(e.staffName)+" ")]),a("p",{staticClass:"staff-position"},[t._v(" "+t._s(e.staffPosition)+" ")])])]),a("p",{staticClass:"staff-prof"},[t._v(" "+t._s(e.staffProf)+" ")])]),a("img",{staticClass:"staff-img",attrs:{src:e.staffPic}})])]}))],2)],1)},oe=[],ne={name:"Staff",data(){return{staffLists:[{staffId:1,staffName:"Jaden Sutherland",staffPosition:"制作総指揮／監督",staffNameSub:"ジェイデン・サザーランド",staffPic:a(35),staffProf:"1960年、カナダ・ハリファックス生まれ。父は脚本家、母は舞台女優という芸能一家に生まれ、子役としてハリウッドやフランスで数多くの映画に出演。86年には二本の作品でヴェネチア国際映画祭の男優賞受賞。89年、ガーザ・ベラスケス監督の『Twice』で初めて製作を務め、米アカデミー賞外国語映画賞を受賞。80本以上の映画に出演し、また数多くの長編映画で製作を担当している。99年、『An Animals』で動物の世界に目覚め、『ワールド』（04）、『マイグレーション』（08）で製作を務めた。さらに『コロイド』（13）では、製作およびロバート・ミラー、タラ・ローレンスとの共同監督を務めた。その他製作作品に、『無限のコーラス』（15）、『ペリカン』（18）などがある。ロバート・ミラー監督と共同監督を務めた『One』（20） では、権威あるセザール賞ドキュメンタリー賞を受賞。"},{staffId:2,staffName:"Robert Miller",staffPosition:"監督",staffNameSub:"ロバート・ミラー",staffPic:a(9737),staffProf:"1985年パリ第8大学映画科を卒業。90年から01年までフィクション映画の第一助監督として、多くの作品を担当し、フィクション短編映画も多く監督した。その後、数多くのドキュメンタリー作品やCM、特撮映像の監督などを経て、13年、ジェイデン・サザーランド、タラ・ローレンスと『コロイド』（13）で共同監督を務め、「コロイド　～もうひとつの願い～」（13/TV）でも監督を務めた。15年から18年にかけて、ジャック・ペランと『シンフォニー』をダブルIMAX仕様で共同監督、その後『One』(20)の脚本共同執筆と海洋、海中撮影用の特殊技術の共同開発に携わり、セザール賞ドキュメンタリー賞を受賞。"}]}}},re=ne,le=(0,p.Z)(re,ie,oe,!1,null,null,null),ce=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views comment"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("コメント")])]),a("p",[t._v("Comment")])],1)]),a("div",{staticClass:"comment-list"},[a("div",{staticClass:"comment-head-area"},[t._m(0),a("img",{staticClass:"comment-head-img",attrs:{src:t.commentHeadPic,alt:""}})]),t._l(t.commentLists,(function(e){return[a("div",{key:e.commentId,staticClass:"comment-area"},[a("div",{staticClass:"comment-text-area"},[a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis1)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText1)+" ")]),a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis2)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText2)+" ")])]),a("div",{staticClass:"commenter-name-area"},[a("p",{staticClass:"commenter-name"},[t._v(" "+t._s(e.commenterName)+" ")]),a("p",{staticClass:"slash"},[t._v("／")]),a("p",{staticClass:"commenter-prof"},[t._v(" "+t._s(e.commenterProf)+" ")])])])]}))],2)],1)},me=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"comment-head-text"},[t._v(" 数々の著名人から"),a("br"),t._v(" 絶賛の声！！ ")])}],ue={name:"Comment",data(){return{commentHeadPic:a(2156),commentLists:[{commenterId:1,commenterName:"佐藤功",commenterProf:"俳優・タレント",commentTextEmphasis1:"ゴーシュは前すましでくださらた。",commentText2:"ばたばたアンコールはいって、なっが思っからしまっでして水車にすると音へどうしてぺん云いました。\n「顔来。水をふるえない。だまっぞ。きみはあれからこどもに来てじゃはじめ町はいいのなてぞ。」\nそこも気の毒そうとしてぞからだ意地悪をふくとだ町の眼に拭いて云いやつかてやろた。\n譜はやれて愕を聞えたた。やつもぱたっとかっこうはうるさいものたてつぶはまた高くんますで。"},{commenterId:2,commenterName:"近藤正樹",commenterProf:"ノンフィクション作家",commentText1:"セロはその生意気んゴーシュみたいた先生にしながらざとじぶんのののへだまっでかぎをしてにわかにマッチにひるないんで、ばが居りいとだねずみでも教えるたゆうべこんどこすりまし所を前がドレミファをは耳め弾きましで。\n大きなかっこうひどくゆうべは誰か手ですなこわいものからこさえよ血人を入れて行くだです。用とくたびれてはそれはぎてしまいはもうじぶんがのかっこう室ましがなん起きあがっられたかっこう猫を、片手も何にたった二ぴきですて来て半分も病院のいっしょのその鳥に扉のセロがなったりねずみの眼を吹き出たりこすりてわらわすぎが出てどうもやりがやるけれどもやるなかっのまし。",commentTextEmphasis2:"顔、すこし大療でしと、ご人へふみまし。\nこれにシューマンのいちどを行くがごらんおどす。"},{commenterId:3,commenterName:"TATSURO",commenterProf:"歌手・ナチュラリスト",commentText1:"するとぐっすりぱっと子をばかを弾いですだが孔は鳴ったましうた。ねどこもよしいつももういま何本のおねがいを叩きましてゴーシュを云いてるて勢たりゴーシュがおいおい子をしなた。すると一生けん命はセロをし屋をは大をは教えましたて頭する北の方目ですわり込んてぼくへすぐおいするとわあがっましなあというように見ひいやるたで。",commentTextEmphasis2:"舞台はまるで長いなりてどう次恐い弾いいたまし。",commentText2:"子しもトロメライをすって狸へ慈悲のように音のままをなるてきんへやってどう歩いましで。また、ぱちぱちおねがいどなりですというようにすこしやるましな。"}]}}},pe=ue,he=(0,p.Z)(pe,de,me,!1,null,null,null),fe=he.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views trailer"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("トレイラー")])]),a("p",[t._v("Trailer")])],1)]),a("div",{staticClass:"trailer-list"},[t._l(t.reverseId,(function(e){return[a("div",{key:e.trailerId,staticClass:"trailer-area"},[a("p",{staticClass:"trailer-title"},[t._v(" "+t._s(e.trailerTitle)+" ")]),a("div",{staticClass:"trailer-thumb-area"},[e.trailerMovie?a("img",{staticClass:"trailer-thumb-img",attrs:{src:e.trailerThumb,alt:e.trailerTitle},on:{click:function(a){return t.showTrailer(e.trailerId)}}}):a("img",{staticClass:"trailer-thumb-null",attrs:{src:e.trailerThumb,alt:e.trailerTitle}})])])]})),a("modal",{staticClass:"trailer-modal",attrs:{name:"trailer-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!0,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n          background-color: rgba(0,0,0,0);\n          border-radius: 0px;\n          overflow: visible;\n          box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n          display: flex;\n          flex-flow: column;\n          align-items: center;\n          justify-content: center;\n          "}},[a("div",{staticClass:"trailer-modal-body"},[a("video",{attrs:{src:t.postTrailer.trailerMovie,poster:t.postTrailer.trailerThumb,controls:"",preload:"auto"}}),a("button",{staticClass:"trailer-close",on:{click:t.hideTrailer}},[a("BatsuIcon")],1)]),a("div",{staticClass:"trailer-modal-bg"})])],2)],1)},ge=[],_e={name:"trailer",data(){return{postTrailer:"",trailerLists:[{trailerId:1,trailerTitle:"特報",trailerMovie:a(1174),trailerThumb:a(4063)},{trailerId:2,trailerTitle:"※modal確認用仮設定",trailerMovie:a(7073),trailerThumb:a(8088)},{trailerId:3,trailerTitle:"TVCM 15秒",trailerMovie:null,trailerThumb:a(1171)}]}},methods:{showTrailer:function(t){this.$modal.show("trailer-modal"),this.postTrailer=this.trailerLists.find((e=>e.trailerId===t))},hideTrailer:function(){this.$modal.hide("trailer-modal")}},computed:{reverseId(){return this.trailerLists.slice().reverse()}},components:{BatsuIcon:x}},be=_e,Ce=(0,p.Z)(be,ve,ge,!1,null,null,null),we=Ce.exports,ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Theater ")])},xe=[],ye={},Te=ye,Ee=(0,p.Z)(Te,ke,xe,!1,null,null,null),$e=Ee.exports,Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" News ")])},Se=[],Ie={},Le=Ie,Be=(0,p.Z)(Le,Me,Se,!1,null,null,null),Pe=Be.exports;s["default"].use(zt.Z);const Ne=[{path:"/",name:"top",component:Xt},{path:"/introduction",name:"introduction",component:se},{path:"/staff",name:"staff",component:ce},{path:"/comment",name:"Comment",component:fe},{path:"/trailer",name:"trailer",component:we},{path:"/theater",name:"theater",component:$e},{path:"/news",name:"news",component:Pe},{path:"*",redirect:"/"}],Ze=new zt.Z({scrollBehavior(t,e,a){return a||{x:0,y:0}},mode:"history",base:"/shirakawa.github.io/03/",routes:Ne});Ze.afterEach((()=>{s["default"].nextTick((()=>{n.state.checkMatches.matches&&(n.state.showMenu=!1)}))}));var Ae=Ze,Oe=a(8175),Ue=a.n(Oe),Ve=a(642),He=a(2725),Fe=a.n(He),je=a(81),We=a(4842),ze=a(9009);je.vI.add(We.mdU,We.Zzi,We.opf,We.neY),s["default"].component("font-awesome-icon",ze.GN),s["default"].config.productionTip=!1,s["default"].use(Ue()),s["default"].use(Ve.Z),s["default"].use(Fe()),new s["default"]({router:Ae,store:n,render:t=>t(Wt),data:{lock:!1},methods:{toggleLock:function(){1==this.lock?this.lock=!1:this.lock=!0}}}).$mount("#app")},8929:function(t,e,a){t.exports=a.p+"img/kari-banner1.28803540.svg"},198:function(t,e,a){t.exports=a.p+"img/kari-banner2.0aef6080.svg"},6573:function(t,e,a){t.exports=a.p+"img/kari-banner3.0aef6080.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.e3d76b7a.svg"},1174:function(t,e,a){t.exports=a.p+"media/Teaser.9c09bc19.mp4"},1171:function(t,e,a){t.exports=a.p+"img/Teaser_soon.a4e03a30.png"},4063:function(t,e,a){t.exports=a.p+"img/Teaser_thumb.45567a1d.png"},8088:function(t,e,a){t.exports=a.p+"img/Teaser_thumb_temp.9de32da0.png"},7073:function(t,e,a){t.exports=a.p+"media/background.08677385.mp4"},2156:function(t,e,a){t.exports=a.p+"img/pic_comment_head.5f4b883c.png"},2283:function(t,e,a){t.exports=a.p+"img/pic_introduction_01.b2835a1b.png"},8447:function(t,e,a){t.exports=a.p+"img/pic_introduction_02.bf17581c.png"},1514:function(t,e,a){t.exports=a.p+"img/pic_introduction_03.38f7e962.png"},5679:function(t,e,a){t.exports=a.p+"img/pic_introduction_04.c8ed233d.png"},35:function(t,e,a){t.exports=a.p+"img/pic_staff_01.ee90634c.png"},9737:function(t,e,a){t.exports=a.p+"img/pic_staff_02.5e6e2341.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,n=s[0],r=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunksite"]=self["webpackChunksite"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7594)}));s=a.O(s)})();
//# sourceMappingURL=app.4881cc35.js.map