(function(){"use strict";var t={4012:function(t,e,a){var s=a(8935),i=a(2521),o=a.n(i);s["default"].use(o());var n=new(o().Store)({state:{checkMatches:window.matchMedia("(max-width: 600px)"),showMenu:!0,themeColor:"#16b8f3",modalOpacity:!0,imageAssets:[{id:101,img:a(35),categoly:"staff"},{id:102,img:a(9737),categoly:"staff"},{id:201,img:a(2283),categoly:"introduction"},{id:202,img:a(8447),categoly:"introduction"},{id:203,img:a(1514),categoly:"introduction"},{id:204,img:a(5679),categoly:"introduction"},{id:301,img:a(8929),categoly:"banner"},{id:302,img:a(198),categoly:"banner"},{id:303,img:a(6573),categoly:"banner"},{id:401,img:a(2156),categoly:"comment"},{id:501,img:a(4063),categoly:"trailerImg"},{id:502,img:a(1171),categoly:"trailerImg"},{id:503,img:a(8088),categoly:"trailerImg"},{id:504,img:a(4201),categoly:"trailerImg"},{id:901,img:a(9574),categoly:"logo"}],imageVideos:[{id:1001,video:a(1174),categoly:"trailer"},{id:9001,video:a(7073),categoly:"background"}]},mutations:{mutationsMatches(t){t.checkMatches=!t.checkMatches},mutationsMenu(t){t.showMenu=!t.showMenu},mutationsModal(t){t.modalOpacity=!t.modalOpacity}},actions:{actionsMatches({commit:t}){t("mutationsMatches")},actionsMenu({commit:t}){t("mutationsMenu")},actionsModal({commit:t}){t("mutationsModal")}},modules:{}}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PreLoad"),a("FirstViewModal"),a("GlobalMenu"),a("ScrollTopButton"),a("LogoArea"),a("ViewsWrap"),a("BackGroundVideo"),a("Footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-wrap"},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("div",{staticClass:"bg-filter"})]),s("video",{staticClass:"bg-video",attrs:{src:a(7073)+"#t=0.001",muted:"",autoplay:"",loop:"",playsinline:"",poster:a(4201)},domProps:{muted:!0}})],1)},d=[],m={name:"BackGroundVideo"},u=m,h=a(1001),p=(0,h.Z)(u,c,d,!1,null,"bba6a808",null),f=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("modal",{staticClass:"first-modal",attrs:{name:"first-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!1,transition:"modalTransition",overlayTransition:"modalTransition",width:"100%",height:"100%",styles:"\n    background: rgba(0,0,0,0);\n    border-radius: 0px;\n    box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n  "}},[s("div",{staticClass:"modal-body"},[s("video",{attrs:{src:a(1174),poster:a(4063),controls:"true",preload:"auto"}}),s("button",{staticClass:"modal-close",on:{click:t.hide}},[s("BatsuIcon")],1)])]),s("transition",{attrs:{name:"modalTransition",mode:"out-in",appear:""}},[this.$store.state.modalOpacity?s("div",{staticClass:"modal-back-full"}):t._e()])],1)},g=[],_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"batsu-icon"})])}],C={name:"BatsuIcon"},b=C,x=(0,h.Z)(b,_,w,!1,null,"f1961f6e",null),T=x.exports,k={name:"FirstViewModal",data(){return{backOpacity:!0}},mounted(){this.$modal.show("first-modal"),document.body.className="lock"},methods:{hide:function(){this.$modal.hide("first-modal"),document.body.className=""}},components:{BatsuIcon:T}},y=k,S=(0,h.Z)(y,v,g,!1,null,"e07f4cf2",null),E=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-footer"},[a("footer",[a("div",{staticClass:"text-area-footer"},[a("p",{staticClass:"catch-footer"},[t._v(' 世界が絶賛した、未来への"記録" ')]),a("p",{staticClass:"other-text-footer"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),a("SnsArea"),a("p",{staticClass:"copyright"},[t._v("© 2022 Shoichirou-Shirakawa")])],1)])])},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sns-wrap"},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)},I=[],$={name:"SnsArea"},L=$,B=(0,h.Z)(L,N,I,!1,null,"056ce2be",null),U=B.exports,V={name:"Footer",components:{SnsArea:U}},Z=V,A=(0,h.Z)(Z,P,M,!1,null,"5729073d",null),O=A.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"global-nav"},[a("button",{attrs:{id:"hamburger"},on:{click:t.changeShowMenu}},[a("HamburgerIcon")],1),this.$store.state.showMenu?a("div",{staticClass:"wrap-router"},[a("router-link",{attrs:{to:"/"}},[t._v("Top")]),a("router-link",{attrs:{to:"/introduction"}},[t._v("Introduction")]),a("router-link",{attrs:{to:"/staff"}},[t._v("Staff")]),a("router-link",{attrs:{to:"/comment"}},[t._v("Comment")]),a("router-link",{attrs:{to:"/theater"}},[t._v("Theater")]),a("router-link",{attrs:{to:"/trailer"}},[t._v("Trailer")]),a("router-link",{attrs:{to:"/news"}},[t._v("News")])],1):t._e()])])},R=[],F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-ham"},[a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"}),a("span",{staticClass:"hamburger-icon"})])}],G={name:"Hamburger"},W=G,z=(0,h.Z)(W,F,j,!1,null,"0e366e74",null),D=z.exports,q={name:"GlobalMenu",data(){return{checkWidth:this.$store.state.checkMatches}},mounted(){window.addEventListener("popstate",this.popStateMenu),this.$nextTick((()=>{this.checkShowHam(this.checkWidth),this.checkWidth.addEventListener("change",this.checkShowHam),this.checkWidth.addEventListener("change",this.changeBreak)}))},beforeDestroy(){window.removeEventListener("popstate",this.popStateMenu)},methods:{checkShowHam(t){t.matches?(this.$store.state.showMenu=!1,document.getElementById("hamburger").style.visibility="visible",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,0)"):(document.getElementById("hamburger").style.visibility="hidden",document.getElementsByClassName("global-nav")[0].style.backgroundColor="rgba(0,0,0,.8)",this.$store.state.showMenu=!0)},popStateMenu(){this.checkWidth.matches&&(this.$store.state.showMenu=!1)},changeBreak(){this.$store.dispatch("actionsMatches")},changeShowMenu(){this.$store.dispatch("actionsMenu")}},watch:{showMenu:{handler(){this.$store.state.showMenu?document.body.className="lock":document.body.className=""}}},components:{HamburgerIcon:D}},Y=q,J=(0,h.Z)(Y,H,R,!1,null,"38ef1d70",null),X=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logoarea"},[s("router-link",{attrs:{to:"/"}},[s("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.showLogo,expression:"showLogo"}],attrs:{id:"site-logo",alt:"Site logo",src:a(9574),type:"”image/svg+xml”"}})])],1)],1)},Q=[],tt={name:"LogoArea",data(){return{showLogo:!0}},methods:{scrollY(){this.currentTop=window.scrollY,"/"===!this.$route.path&&!this.$store.state.checkMatches.matches&&window.scrollY>0?this.showLogo=!1:this.showLogo=!0}},mounted(){window.addEventListener("scroll",this.scrollY)}},et=tt,at=(0,h.Z)(et,K,Q,!1,null,"6d96426b",null),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.preLoading?a("div",{attrs:{id:"first-loading"}},[a("div",{staticClass:"fullview"},[t.showLoading?a("Spinner"):t._e(),t.showLoading?a("div",{staticClass:"wrap-progress"},[a("div",{staticClass:"progress",style:t.progressUp})]):t._e()],1),a("div",{attrs:{id:"load-wrap"}},[t._l(t.vForImages,(function(e){return a("img",{key:e.id,attrs:{src:e.img},on:{load:t.loadCountUp}})})),t._l(t.vForVideos,(function(t){return a("video",{key:t.id,staticClass:"load-video",attrs:{src:t.video,muted:"muted",autoplay:"",controls:""},domProps:{muted:!0}})}))],2)]):t._e()},ot=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"load",appear:""}},[a("div",{staticClass:"wrap-spinner"},[a("div",{staticClass:"spinner",style:t.spinStyles},[a("div",{staticClass:"spin-core"})])])])},rt=[],lt={name:"Spinner",computed:{spinStyles(){return{background:"linear-gradient(0deg, rgba(22, 184, 243, .1) 33%, rgba(22, 184, 243, 1) 100%)"}}}},ct=lt,dt=(0,h.Z)(ct,nt,rt,!1,null,"0f456aac",null),mt=dt.exports,ut={name:"PreLoad",data(){return{loadCounter:0,vForImages:this.$store.state.imageAssets,vForVideos:this.$store.state.imageVideos,videoTags:[],showLoading:!0,preLoading:!0}},methods:{loadCountUp(){this.loadCounter++}},mounted(){this.videoTags=document.getElementsByClassName("load-video");for(let t=0;t<this.videoTags.length;t++)this.videoTags[t].addEventListener("canplay",this.loadCountUp),this.videoTags[t].addEventListener("progress",this.loadCountUp),this.videoTags[t].addEventListener("loadeddata",this.loadCountUp),this.videoTags[t].addEventListener("suspend",this.loadCountUp);window.onload=()=>{this.loadCounter++,this.showLoading=!1,setTimeout((()=>{this.preLoading=!1,setTimeout((()=>{this.$store.dispatch("actionsModal")}),3e3)}),1500)}},computed:{progressUp(){let t=this.$store.state.imageAssets.length+4*this.$store.state.imageVideos.length;return{"background-color":this.$store.state.themeColor,width:(this.loadCounter-1)/t*100+"%"}}},Destroyed(){for(let t=0;t<this.videoTags.length;t++)this.videoTags[t].removeEventListener("canplay",this.loadCountUp),this.videoTags[t].removeEventListener("progress",this.loadCountUp),this.videoTags[t].removeEventListener("loadeddata",this.loadCountUp),this.videoTags[t].removeEventListener("suspend",this.loadCountUp)},components:{Spinner:mt}},ht=ut,pt=(0,h.Z)(ht,it,ot,!1,null,"3e0139e8",null),ft=pt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-wrap"},[a("article",[a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[a("router-view")],1)],1)])},gt=[],_t={name:"ViewsWrap"},wt=_t,Ct=(0,h.Z)(wt,vt,gt,!1,null,"2f8bcd0c",null),bt=Ct.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkShowButton,expression:"checkShowButton"}],staticClass:"wrap-scroll"},[a("button",{staticClass:"scroll-top-button",on:{click:t.scrollTop}},[a("angleUpIcon")],1)])])},Tt=[],kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-up"},[a("span",{staticClass:"angle-up-icon"})])}],St={name:"AngleUpIcon"},Et=St,Pt=(0,h.Z)(Et,kt,yt,!1,null,"da28f886",null),Mt=Pt.exports,Nt={name:"PageTopButton",data(){return{checkShowButton:!1}},mounted(){window.addEventListener("pointermove",this.moveCheck)},methods:{moveCheck(){this.checkShowButton=!0},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{checkShowButton:{handler(){this.checkShowButton&&setTimeout((()=>{this.checkShowButton=!1}),5e3)}}},components:{AngleUpIcon:Mt}},It=Nt,$t=(0,h.Z)(It,xt,Tt,!1,null,"61d4430c",null),Lt=$t.exports,Bt={components:{BackGroundVideo:f,FirstViewModal:E,Footer:O,GlobalMenu:X,LogoArea:st,PreLoad:ft,ViewsWrap:bt,ScrollTopButton:Lt}},Ut=Bt,Vt=(0,h.Z)(Ut,r,l,!1,null,null,null),Zt=Vt.exports,At=a(2809),Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views top"},[a("div",{staticClass:"top-area"},[a("CampaignArea")],1),t._m(0)])},Ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"guide"},[a("h2",[t._v("サイト内各要素について")]),a("p",[t._v("手動で画面幅を動かしレイアウトを変更した場合、お手数ですが再読み込みをお願いします。")]),a("h3",[t._v("ページ作成環境")]),a("ul",[a("li",[t._v("Vue2.6.14")]),a("li",[t._v("Vue Router")]),a("li",[t._v("Vuex")])]),a("h3",[t._v("ページ内各要素について")]),a("ul",[a("li",[t._v("ロード画面")]),a("ul",[a("li",[t._v(" 背景動画や特にIntroductionページにおいて、初回の遷移時にアセットの読み込みが発生し見た目がよくないと感じたため、それらのプリロードを行いたいと思った。 "),a("br"),t._v(" 方法を調べたところ、「HTMLタグとして一度配置するとメモリにキャッシュされる」というやり方があった。そのため「PreLoad」コンポーネントを作成しそこにアセットをv-forで配置、完了次第コンポーネントごと非表示にする動作とした。 "),a("br"),a("br")]),a("li",[t._v(" アセットを配置している状態は、黒背景の後ろで行うため通常は不可視。念のためそれらのwidthを1%にしている。CSSで作成したスピナーを表示することで読み込み中である事を明確にした。 "),a("br"),a("ul",[a("li",[t._v("ちなみにスピナーは元々SVGアニメーションを用いたVueプラグインを使うつもりだったが、onloadイベント中に回転しなかったためCSSで自作した。(アニメーションに限らず)CSSで実装できるものは極力そうするべきという学びを得た。")])]),a("br")]),a("li",[t._v("さらにこの段階で読み込むならプログレスバーを実装できると思い、作成した。仕組みとしてはプログレスバー本体の上に幅のない要素を配置し、styleをv-bindで紐づけて各アセットのloadイベントに応じてcomputedでwidthを伸ばしていく形となっている。これもいくつかのVueプラグインがあったがどれも上手く動作しなかったため自作することとなった。")])])]),a("br"),a("ul",[a("li",[t._v("サイトロゴ")]),a("ul",[a("li",[t._v("PCレイアウトの場合、画面スクロールで透明になる。元々ただposition:fixedしていただけだったが、ページ内容物に被ってしまうため実装した。今にして思えばスマホレイアウトと同様に画面外にスライドさせればよかったが、技術メモとして残している。")])])]),a("br"),a("ul",[a("li",[t._v("モーダルウィンドウ")]),a("ul",[a("li",[t._v("「vue-js-modal」というプラグインを使用している。苦労したのはstyleのカスタマイズの方法を調べることで、コンポーネントのカスタムタグに直接記述すると判明するまで作者のGitHubや英語のフォーラムを探し回ることとなった。")]),a("br"),a("li",[t._v("モーダルを閉じるための✕ボタンは、当初Font Awesomeを使う予定だったが無料で使えるものは太くて野暮ったいと感じ、これもCSSで自作した。コンポーネント名は「BatsuIcon」。そもそもVueでFont Awesomeを使うのがひと手間かかった挙げ句に結局使えないという事で何というか疲れていた記憶がある。Font Awesomeは無事フッターのSNSアイコンで使用されている。")])])]),a("br"),a("ul",[a("li",[t._v("スクロールトップボタン")]),a("ul",[a("li",[t._v("イベントリスナーにpointermoveを登録し、マウス移動や指での画面スライドでボタンが表示され、イベント停止後5秒で再度非表示になる。常に画面全体に画像なり動画なりが表示されるレイアウトなため、これは是非とも実装したい機能だった。応用すれば、数分間操作しないと背景動画以外の要素を非表示にする等もできる。")]),a("br"),a("li",[t._v("矢印アイコンはこれも例によってFont Awesomeがイマイチだったので自作した。このコンポーネントはIntroductionページ左右のスライドボタンにも再利用されている。")])])]),a("br"),a("ul",[a("li",[t._v("グローバルメニュー")]),a("ul",[a("li",[t._v("画面幅やメニューの開閉状態などの組み合わせで変わる動作が多く、結局それらをVuexで管理することとなった。これらは制作中に後から必要となったため、事前の仕様検討が足りていればもっとスマートな実装方法があったかもと反省している。")]),a("br"),a("li",[t._v("スマホレイアウトの場合、そのままだと画面遷移後やブラウザバック後メニューが開きっぱなしになる。そのためVue Routerのナビゲーションガードを使って対策を行った。")])])]),a("br"),a("ul",[a("li",[t._v("Introductionページ")]),a("ul",[a("li",[t._v("「Hooper」というVue向け画像スライダープラグインを使用している。カスタマイズ性がかなり高く素敵なプラグインだと思った。")]),a("br"),a("li",[t._v("問題は高さについてだった。グローバルメニューを半透明にしていることもあり「画面最上部からフッターの上部まで」としたが、それを実現するには各所に設定したmarginがネックとなった。結局のところ "),a("ul",[a("li",[t._v("router-viewを表示するクラスおよびそれのoffsetHeightの値")]),a("li",[t._v("上記クラスのCSSとそこからmargin-topの値(そのままでは文字列なので数値化)")]),a("li",[t._v("グローバルメニューの高さ")])]),t._v(" をそれぞれ取得し、まとめてmountedでstyleに渡すという直球な処理となった。これももっとスマートなやり方があったはずと反省している。 ")])])]),a("br"),a("ul",[a("li",[t._v("Staff、Comment、Theaterページ")]),a("ul",[a("li",[t._v("各項目ごとにv-forで回すためテキストも含めデータを配列に入れているが、Staffの画像以外のデータはそれぞれのページでしか使わないため、Vuexではなく各ページコンポーネントに持たせている。これはあらゆるVuexのチュートリアルで言及されている事柄で、それに倣った形。")])])]),a("br"),a("ul",[a("li",[t._v("Trailerページ")]),a("ul",[a("li",[t._v("ここのサムネイルも例によってstateから引っ張ってきたデータを参照しv-forで回して生成しているが、imgタグにv-ifを設定し「動画URLのデータが存在すれば@clickイベント付きのものを、そうでないならただのimgタグを生成する」動作となっている。 "),a("ul",[a("li",[t._v("公式のリファレンスをはじめ、v-forの失敗原因としてよく「v-forとv-ifは併用してはいけない」と挙げられるため勘違いしてしまっていたが、併用とは例えば一つのtemplateタグの中でv-forとv-ifを同時に使うのがよくないのであって、今回のようにv-forの中で表示の切り替えにv-ifを使うのは問題なく動作すると学んだ。")])])])])]),a("br"),a("ul",[a("li",[t._v("Newsページ")]),a("ul",[a("li",[t._v("ページネーションには「vue-paginate」というプラグインを使用している。似たような名前のプラグインがありそちらの方がメジャーなようだが、デフォルトスタイルの有無やパッと見の使い方のわかりやすさ等を考慮しこちらを採用した。これもカスタマイズ性が高く素敵なプラグインだと思った。")])])]),a("br"),a("ul",[a("li",[t._v("トレイラー動画")]),a("ul",[a("li",[t._v("PexelsとPixabayで見つけたそれっぽいフリー動画を、魔王魂で見つけたそれっぽいフリーBGMに合わせて、Adobe Premiereで何となくそれっぽく編集した。動画を編集する時間よりも、素材を探す時間のほうが多くかかったと思う。 "),a("ul",[a("li",[t._v("やろうと思えばもっと凝った内容も作れただろうが、流石にこれの制作に時間をかけるわけにもいかないのと、そもそもフリー素材の動画はどれも使い勝手が微妙で、その上あまり動画時間を長くするとGitHubへのアップロード制限に引っかかるためこの程度の内容となった。")])]),a("ul",[a("li",[t._v("一応、「一切のメッセージ性を排し、ただただ現代の美しい自然を未来に伝えるための記録映画」という設定があったりする。")])]),a("ul",[a("li",[t._v("Fictitious Entertainmentとはそのまま「架空のエンタメ会社」であり、DBC NATUREのDBCは「Decchiage Broad Cast」の略である。")])])])]),a("br"),a("ul",[a("li",[t._v("今後")]),a("ul",[a("li",[t._v("現在は趣味の一つであるTRPGで使えるような、立ち絵を生成できるWebアプリを制作しつつ、その構築のためVuetifyに入門している。あとReactもそろそろ何らかのチュートリアルを一通りなぞる程度はしておきたいと思っている。")])])])])])}],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[a("div",{staticClass:"campaign-area"},[a("h1",[a("p",[t._v("ついに日本上陸")])]),a("ul",t._l(t.banners,(function(t){return a("li",{key:t},[a("img",{attrs:{src:t,alt:"banner"}})])})),0)])])},Ft=[],jt={name:"CampaignArea",data(){return{tweetWidget:document.createElement("script"),banners:[a(8929),a(198),a(6573)]}}},Gt=jt,Wt=(0,h.Z)(Gt,Rt,Ft,!1,null,"d2bb9ffc",null),zt=Wt.exports,Dt={name:"Top",data(){return{testBreak:""}},mounted(){this.$nextTick((()=>{this.checkBreak()}))},methods:{checkBreak(){this.$store.state.checkMatches?this.testBreak="True!!":this.testBreak="False!!"}},components:{CampaignArea:zt}},qt=Dt,Yt=(0,h.Z)(qt,Ot,Ht,!1,null,"5f7a4c08",null),Jt=Yt.exports,Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"in-views introduction"},[s("transition",{attrs:{name:"intoleft",appear:""}},[s("h2",{staticClass:"heading2"},[s("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[s("p",{staticClass:"sub"},[t._v("イントロダクション")])]),s("p",[t._v("Introduction")])],1)]),s("div",{ref:"slideArea",attrs:{id:"slide-area"}},[s("hooper",{attrs:{id:"intro-hooper",settings:t.hooperSettings}},[s("slide",{staticClass:"hooper-slide page1"},[s("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。 何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。 吾輩はここで始めて人間というものを見た。 ")])])]),s("img",{staticClass:"slide-img",attrs:{src:a(2283)}})],1),s("slide",{staticClass:"hooper-slide page2"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" 木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、 あるところは数十間の深さに臨む木曾川の岸であり、 あるところは山の尾をめぐる谷の入り口である。 一筋の街道はこの深い森林地帯を貫いていた。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(8447)}})]),s("slide",{staticClass:"hooper-slide page3"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" しかし、私はあなたに喜びを非難し、痛みを賞賛するというこの誤った考えが どのように生まれたかを説明しなければなりません、そして私はあなたに システムの完全な説明を与え、真実の偉大な探検家、人間の幸福のマスタービルダー。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(1514)}})]),s("slide",{staticClass:"hooper-slide page4"},[s("div",{staticClass:"slide-text-area"},[s("p",{staticClass:"slide-text"},[t._v(" ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。 広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、 蟋蟀が一匹とまっている。 ")])]),s("img",{staticClass:"slide-img",attrs:{src:a(5679)}})]),s("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),s("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"},[s("AngleUpIcon",{attrs:{slot:"hooper-prev"},slot:"hooper-prev"}),s("AngleUpIcon",{attrs:{slot:"hooper-next"},slot:"hooper-next"})],1)],1)],1)],1)},Kt=[],Qt=a(5681),te={name:"Introduction",data(){return{name:"",slideResizeCheck:window.matchMedia("(max-width: 600px)"),hooperSettings:{itemToShow:1,infiniteScroll:!0,wheelControl:!1}}},mounted(){this.$nextTick((()=>{this.slideSize(),this.slideResizeCheck.addEventListener("change",this.slideSize)}))},methods:{slideSize(){const t=document.getElementsByClassName("views-wrap")[0],e=document.getElementsByClassName("views-wrap")[0].offsetHeight,a=window.getComputedStyle(t),s=a.getPropertyValue("margin-top"),i=Number(s.replace(/px/g,"")),o=document.getElementsByClassName("global-nav")[0].offsetHeight,n=e+o+2*i;document.getElementById("slide-area").style.height=n+"px"}},components:{Hooper:Qt.dB,Slide:Qt.Mi,HooperPagination:Qt.tl,HooperNavigation:Qt.W_,AngleUpIcon:Mt}},ee=te,ae=(0,h.Z)(ee,Xt,Kt,!1,null,"744bf7e6",null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views staff"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("スタッフ")])]),a("p",[t._v("Staff")])],1)]),a("div",{staticClass:"staff-list"},[t._l(t.staffLists,(function(e){return[a("div",{key:e.staffId,staticClass:"staff-area"},[a("img",{staticClass:"staff-img",attrs:{src:e.staffPic}}),a("div",{staticClass:"staff-prof-wrap"},[a("div",{staticClass:"staff-name-area"},[a("p",{staticClass:"staff-name-sub"},[t._v(" "+t._s(e.staffNameSub)+" ")]),a("div",{staticClass:"staff-name-wrap"},[a("p",{staticClass:"staff-name"},[t._v(" "+t._s(e.staffName)+" ")]),a("p",{staticClass:"staff-position"},[t._v(" "+t._s(e.staffPosition)+" ")])])]),a("p",{staticClass:"staff-prof"},[t._v(" "+t._s(e.staffProf)+" ")])])])]}))],2)],1)},oe=[],ne={name:"Staff",data(){return{staffLists:[{staffId:1,staffName:"Jaden Smith",staffPosition:"制作総指揮／監督",staffNameSub:"ジェイデン・スミス",staffPic:a(35),staffProf:"日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を"},{staffId:2,staffName:"Robert Miller",staffPosition:"監督",staffNameSub:"ロバート・ミラー",staffPic:a(9737),staffProf:"木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。名高い桟も、蔦のかずらを頼みにしたような危い場処ではなくなって、徳川時代の末にはすでに渡ることのできる橋であった。新規に新規にとできた道はだんだん谷の下の方の位置へと降って来た。"}]}}},re=ne,le=(0,h.Z)(re,ie,oe,!1,null,null,null),ce=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views comment"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("コメント")])]),a("p",[t._v("Comment")])],1)]),a("div",{staticClass:"comment-list"},[a("div",{staticClass:"comment-head-area"},[t._m(0),a("img",{staticClass:"comment-head-img",attrs:{src:t.commentHeadPic,alt:""}})]),t._l(t.commentLists,(function(e){return[a("div",{key:e.commentId,staticClass:"comment-area"},[a("div",{staticClass:"comment-text-area"},[a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis1)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText1)+" ")]),a("p",{staticClass:"emphasis-text"},[t._v(" "+t._s(e.commentTextEmphasis2)+" ")]),a("p",{staticClass:"comment-text"},[t._v(" "+t._s(e.commentText2)+" ")])]),a("div",{staticClass:"commenter-name-area"},[a("p",{staticClass:"commenter-name"},[t._v(" "+t._s(e.commenterName)+" ")]),a("p",{staticClass:"slash"},[t._v("／")]),a("p",{staticClass:"commenter-prof"},[t._v(" "+t._s(e.commenterProf)+" ")])])])]}))],2)],1)},me=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"comment-head-text"},[t._v(" 数々の著名人から"),a("br"),t._v(" 絶賛の声！！ ")])}],ue={name:"Comment",data(){return{commentHeadPic:a(2156),commentLists:[{commenterId:1,commenterName:"佐藤功",commenterProf:"俳優・タレント",commentTextEmphasis1:"ゴーシュは前すましでくださらた。",commentText2:"ばたばたアンコールはいって、なっが思っからしまっでして水車にすると音へどうしてぺん云いました。\n「顔来。水をふるえない。だまっぞ。きみはあれからこどもに来てじゃはじめ町はいいのなてぞ。」\nそこも気の毒そうとしてぞからだ意地悪をふくとだ町の眼に拭いて云いやつかてやろた。\n譜はやれて愕を聞えたた。やつもぱたっとかっこうはうるさいものたてつぶはまた高くんますで。"},{commenterId:2,commenterName:"近藤正樹",commenterProf:"ノンフィクション作家",commentText1:"セロはその生意気んゴーシュみたいた先生にしながらざとじぶんのののへだまっでかぎをしてにわかにマッチにひるないんで、ばが居りいとだねずみでも教えるたゆうべこんどこすりまし所を前がドレミファをは耳め弾きましで。\n大きなかっこうひどくゆうべは誰か手ですなこわいものからこさえよ血人を入れて行くだです。用とくたびれてはそれはぎてしまいはもうじぶんがのかっこう室ましがなん起きあがっられたかっこう猫を、片手も何にたった二ぴきですて来て半分も病院のいっしょのその鳥に扉のセロがなったりねずみの眼を吹き出たりこすりてわらわすぎが出てどうもやりがやるけれどもやるなかっのまし。",commentTextEmphasis2:"顔、すこし大療でしと、ご人へふみまし。\nこれにシューマンのいちどを行くがごらんおどす。"},{commenterId:3,commenterName:"TATSURO",commenterProf:"歌手・ナチュラリスト",commentText1:"するとぐっすりぱっと子をばかを弾いですだが孔は鳴ったましうた。ねどこもよしいつももういま何本のおねがいを叩きましてゴーシュを云いてるて勢たりゴーシュがおいおい子をしなた。すると一生けん命はセロをし屋をは大をは教えましたて頭する北の方目ですわり込んてぼくへすぐおいするとわあがっましなあというように見ひいやるたで。",commentTextEmphasis2:"舞台はまるで長いなりてどう次恐い弾いいたまし。",commentText2:"子しもトロメライをすって狸へ慈悲のように音のままをなるてきんへやってどう歩いましで。また、ぱちぱちおねがいどなりですというようにすこしやるましな。"}]}}},he=ue,pe=(0,h.Z)(he,de,me,!1,null,null,null),fe=pe.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views trailer"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("トレイラー")])]),a("p",[t._v("Trailer")])],1)]),a("div",{staticClass:"trailer-list"},[t._l(t.reverseId,(function(e){return[a("div",{key:e.trailerId,staticClass:"trailer-area"},[a("div",{staticClass:"trailer-thumb-area"},[e.trailerMovie?a("img",{staticClass:"trailer-thumb-img",attrs:{src:e.trailerThumb,alt:e.trailerTitle},on:{click:function(a){return t.showTrailer(e.trailerId)}}}):a("img",{staticClass:"trailer-thumb-null",attrs:{src:e.trailerThumb,alt:e.trailerTitle}}),a("p",{staticClass:"trailer-title"},[t._v(" "+t._s(e.trailerTitle)+" ")])])])]})),a("modal",{staticClass:"trailer-modal",attrs:{name:"trailer-modal",draggable:!1,resizable:!1,adaptive:!0,clickToClose:!0,transition:"modalTransition",overlayTransition:"modalTransition",width:"50%",height:"50%",styles:"\n          background-color: rgba(0,0,0,0);\n          border-radius: 0px;\n          overflow: visible;\n          box-shadow: 0 0px 0px 0 rgba(0,0,0,0);\n          display: flex;\n          flex-flow: column;\n          align-items: center;\n          justify-content: center;\n          "}},[a("div",{staticClass:"trailer-modal-body"},[a("video",{attrs:{src:t.postTrailer.trailerMovie,poster:t.postTrailer.trailerThumb,controls:"",preload:"auto"}}),a("button",{staticClass:"trailer-close",on:{click:t.hideTrailer}},[a("BatsuIcon")],1)]),a("div",{staticClass:"trailer-modal-bg"})])],2)],1)},ge=[],_e={name:"trailer",data(){return{postTrailer:"",trailerLists:[{trailerId:1,trailerTitle:"特報",trailerMovie:a(1174),trailerThumb:a(4063)},{trailerId:2,trailerTitle:"※modal確認用仮設定",trailerMovie:a(7073),trailerThumb:a(8088)},{trailerId:3,trailerTitle:"TVCM 15秒",trailerMovie:null,trailerThumb:a(1171)}]}},methods:{showTrailer:function(t){this.$modal.show("trailer-modal"),this.postTrailer=this.trailerLists.find((e=>e.trailerId===t))},hideTrailer:function(){this.$modal.hide("trailer-modal")}},computed:{reverseId(){return this.trailerLists.slice().reverse()}},components:{BatsuIcon:T}},we=_e,Ce=(0,h.Z)(we,ve,ge,!1,null,null,null),be=Ce.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views theater"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("劇場情報")])]),a("p",[t._v("Theater")])],1)]),a("div",{staticClass:"wrap-theater"},[a("div",{staticClass:"wrap-anchor"},t._l(t.theaterLists,(function(e){return a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+e.theaterRegion,duration:500,easing:"ease-out",offset:-150},expression:"{\n        el: '#' + theaterList.theaterRegion,\n        duration: 500,\n        easing: 'ease-out',\n        offset: -150,\n      }"}],key:e.index,staticClass:"page-anchor"},[t._v(t._s(e.theaterRegion)+" "),a("p",{staticClass:"angle"},[t._v("››")])])})),0),a("div",{staticClass:"theater-index"},[a("div",{staticClass:"top-spacer"}),t._l(t.theaterLists,(function(e){return[a("div",{key:e.index,staticClass:"wrap-theater-info"},[a("a",{staticClass:"theater-region",attrs:{id:e.theaterRegion}},[t._v(t._s(e.theaterRegion))]),a("table",[a("thead",{staticClass:"info-head"},[a("td"),a("tr",t._l(t.indexHeaders,(function(e){return a("th",{key:e.index},[t._v(" "+t._s(e)+" ")])})),0)]),a("tr",{staticClass:"table-spacer"}),t._l(e.theaterIndex,(function(e){return a("tbody",{key:e.theaterPref},[a("tr",[a("td",[t._v(t._s(e.theaterPref))]),a("td",[a("a",{attrs:{href:e.theaterUrl}},[t._v(" "+t._s(e.theaterName)+" ")])]),a("td",[t._v(t._s(e.theaterPhone))]),a("td",[t._v(t._s(e.theaterNote))])])])})),a("tr",{staticClass:"table-spacer"})],2)])]})),a("div",{staticClass:"bottom-spacer"})],2)])],1)},Te=[],ke={name:"Theater",data(){return{indexHeaders:["都道府県","劇場名","電話番号","備考"],theaterLists:[{theaterRegion:"北海道",theaterIndex:[{theaterName:"札幌シネマフロンティア",theaterPref:"北海道",theaterUrl:"https://www.cinemafrontier.net/cgi-bin/pc/index.cgi",theaterPhone:"011-209-5400",theaterNote:"4DX吹替版上映中"}]},{theaterRegion:"東北",theaterIndex:[{theaterName:"イオンシネマ弘前",theaterPref:"青森",theaterUrl:"https://www.aeoncinema.com/cinema/hirosaki/",theaterPhone:"0172-26-1113",theaterNote:"このtableは全体的にv-forで生成しているので"},{theaterName:"TOHOシネマズ仙台",theaterPref:"宮城",theaterUrl:"https://hlo.tohotheater.jp/net/schedule/078/TNPI2000J01.do",theaterPhone:"050-6868-5065",theaterNote:"データを変更すればtableも自動的に更新されます"}]},{theaterRegion:"関東",theaterIndex:[{theaterName:"新宿ピカデリー",theaterPref:"東京",theaterUrl:"https://www.smt-cinema.com/site/shinjuku/",theaterPhone:"050-6861-3011",theaterNote:""},{theaterName:"川崎チネチッタ",theaterPref:"神奈川",theaterUrl:"https://cinecitta.co.jp/",theaterPhone:"044-223-3190",theaterNote:""}]},{theaterRegion:"中部",theaterIndex:[{theaterName:"イオンシネマ金沢",theaterPref:"石川",theaterUrl:"https://www.aeoncinema.com/cinema/kanazawa/",theaterPhone:"076-258-7575",theaterNote:""}]},{theaterRegion:"関西",theaterIndex:[{theaterName:"TOHOシネマズ二条",theaterPref:"京都",theaterUrl:"https://hlo.tohotheater.jp/net/schedule/023/TNPI2000J01.do",theaterPhone:"050-6868-5035",theaterNote:""},{theaterName:"大阪ステーションシティシネマ",theaterPref:"大阪",theaterUrl:"https://www.osakastationcitycinema.com/site/oscc/",theaterPhone:"050-6861-8100",theaterNote:""}]},{theaterRegion:"中国・四国",theaterIndex:[{theaterName:"イオンシネマ岡山",theaterPref:"岡山",theaterUrl:"https://www.aeoncinema.com/cinema/okayama/",theaterPhone:"086-235-0139",theaterNote:""}]},{theaterRegion:"九州・沖縄",theaterIndex:[{theaterName:"ユナイテッド・シネマ長崎",theaterPref:"長崎",theaterUrl:"https://www.unitedcinemas.jp/nagasaki/index.html",theaterPhone:"0570-783-282",theaterNote:""}]}]}}},ye=ke,Se=(0,h.Z)(ye,xe,Te,!1,null,"3ad33911",null),Ee=Se.exports,Pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"in-views news"},[a("transition",{attrs:{name:"intoleft",appear:""}},[a("h2",{staticClass:"heading2"},[a("transition",{attrs:{name:"intoleft",mode:"out-in",appear:""}},[a("p",{staticClass:"sub"},[t._v("ニュース")])]),a("p",[t._v("News")])],1)]),a("div",{staticClass:"news-list"},[a("paginate",{attrs:{name:"paginate-log",list:t.reverseNews,per:4}},[t._l(t.paginated("paginate-log"),(function(e){return[a("div",{key:e.no,staticClass:"news-area"},[a("transition",{key:"views",attrs:{name:"fade",mode:"out-in",appear:""}},[a("div",{staticClass:"wrap-news"},[a("p",{staticClass:"news-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"news-date"},[t._v(t._s(e.date))]),e.image?a("img",{staticClass:"news-image",attrs:{src:e.image,alt:"News画像"}}):t._e(),e.video?a("video",{staticClass:"news-video",attrs:{src:e.video,controls:"",preload:"auto"}}):t._e(),a("read-more",{staticClass:"news-content",attrs:{"more-str":"記事全文を読む","less-str":"記事を折りたたむ",text:e.content,link:"#","max-chars":300}})],1)])],1)]}))],2),a("paginate-links",{attrs:{for:"paginate-log",classes:{".left-arrow > a":"prev"},"show-step-links":!0}})],1)],1)},Me=[],Ne={data(){return{readMore:!1,newsLists:[{no:1,title:"タイトル1",date:"2022年1月1日",content:"TestTestTestTestTest",image:"",video:""},{no:2,title:"タイトル2",date:"2022年1月2日",content:"TestTestTestTestTest",image:"",video:""},{no:3,title:"タイトル3",date:"2022年1月3日",content:"TestTestTestTestTest",image:"",video:""},{no:4,title:"タイトル4",date:"2022年1月4日",content:"TestTestTestTestTest",image:"",video:""},{no:5,title:"タイトル5",date:"2022年1月5日",content:"TestTestTestTestTest",image:"",video:""},{no:6,title:"タイトル6",date:"2022年1月6日",content:"TestTestTestTestTest",image:"",video:""},{no:7,title:"タイトル7",date:"2022年1月7日",content:"木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。名高い桟も、蔦のかずらを頼みにしたような危い場処ではなくなって、徳川時代の末にはすでに渡ることのできる橋であった。新規に新規にとできた道はだんだん谷の下の方の位置へと降って来た。道の狭いところには、木を伐って並べ、藤づるでからめ、それで街道の狭いのを補った。長い間にこの木曾路に起こって来た変化は、いくらかずつでも嶮岨な山坂の多いところを歩きよくした。そのかわり、大雨ごとにやって来る河水の氾濫が旅行を困難にする。そのたびに旅人は最寄り最寄りの宿場に逗留して、道路の開通を待つこともめずらしくない。この街道の変遷は幾世紀にわたる封建時代の発達をも、その制度組織の用心深さをも語っていた。鉄砲を改め女を改めるほど旅行者の取り締まりを厳重にした時代に、これほどよい要害の地勢もないからである。この谿谷の最も深いところには木曾福島の関所も隠れていた。木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。名高い桟も、蔦のかずらを頼みにしたような危い場処ではなくなって、徳川時代の末には",image:"",video:a(1174)},{no:8,title:"寿限無寿限無タイトル8",date:"2022年1月8日",content:"吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わ",image:a(1514),video:""},{no:9,title:"タイトル9タイトル9タイトル9タイトル9タイトル9タイトル9",date:"2022年1月9日",content:"このページの内容もV-forで生成されており、1ページあたりの記事数など都度変更可能",image:"",video:""}],paginate:["paginate-log"]}},methods:{readMoreActive(){this.readMore=!0}},computed:{reverseNews(){return this.newsLists.slice().reverse()}}},Ie=Ne,$e=(0,h.Z)(Ie,Pe,Me,!1,null,"ec45a098",null),Le=$e.exports;s["default"].use(At.Z);const Be=[{path:"/",name:"top",component:Jt},{path:"/introduction",name:"introduction",component:se},{path:"/staff",name:"staff",component:ce},{path:"/comment",name:"Comment",component:fe},{path:"/trailer",name:"trailer",component:be},{path:"/theater",name:"theater",component:Ee},{path:"/news",name:"news",component:Le},{path:"*",redirect:"/"}],Ue=new At.Z({scrollBehavior(t,e,a){return a||{x:0,y:0}},mode:"history",base:"/shirakawa.github.io/03/",routes:Be});Ue.afterEach((()=>{s["default"].nextTick((()=>{n.state.checkMatches.matches&&(n.state.showMenu=!1)}))}));var Ve=Ue,Ze=a(8175),Ae=a.n(Ze),Oe=a(642),He=a(2725),Re=a.n(He),Fe=a(4142),je=a.n(Fe),Ge=a(7522),We=a.n(Ge),ze=a(2891),De=a(81),qe=a(4842),Ye=a(9009);De.vI.add(qe.mdU,qe.Zzi,qe.opf,qe.neY),s["default"].component("font-awesome-icon",Ye.GN),s["default"].config.productionTip=!1,s["default"].use(Ae()),s["default"].use(Oe.Z),s["default"].use(Re()),s["default"].use(je()),s["default"].use(We()),s["default"].use(ze.Z),new s["default"]({router:Ve,store:n,render:t=>t(Zt),data:{lock:!1},methods:{toggleLock:function(){1==this.lock?this.lock=!1:this.lock=!0}}}).$mount("#app")},8929:function(t,e,a){t.exports=a.p+"img/kari-banner1.28803540.svg"},198:function(t,e,a){t.exports=a.p+"img/kari-banner2.0aef6080.svg"},6573:function(t,e,a){t.exports=a.p+"img/kari-banner3.0aef6080.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.e3d76b7a.svg"},4201:function(t,e,a){t.exports=a.p+"img/Poster.24c0a0b5.png"},1174:function(t,e,a){t.exports=a.p+"media/Teaser.9c09bc19.mp4"},1171:function(t,e,a){t.exports=a.p+"img/Teaser_soon.a4e03a30.png"},4063:function(t,e,a){t.exports=a.p+"img/Teaser_thumb.45567a1d.png"},8088:function(t,e,a){t.exports=a.p+"img/Teaser_thumb_temp.9de32da0.png"},7073:function(t,e,a){t.exports=a.p+"media/background.b44efec3.mp4"},2156:function(t,e,a){t.exports=a.p+"img/pic_comment_head.5f4b883c.png"},2283:function(t,e,a){t.exports=a.p+"img/pic_introduction_01.b2835a1b.png"},8447:function(t,e,a){t.exports=a.p+"img/pic_introduction_02.bf17581c.png"},1514:function(t,e,a){t.exports=a.p+"img/pic_introduction_03.38f7e962.png"},5679:function(t,e,a){t.exports=a.p+"img/pic_introduction_04.c8ed233d.png"},35:function(t,e,a){t.exports=a.p+"img/pic_staff_01.ee90634c.png"},9737:function(t,e,a){t.exports=a.p+"img/pic_staff_02.aa09139d.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,n=s[0],r=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunksite"]=self["webpackChunksite"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(4012)}));s=a.O(s)})();
//# sourceMappingURL=app.9d43f466.js.map