// 画面スライドチェックボックスの変数
let checkSlide = document.getElementById("mb_menu");
// 商品スペックチェックボックスの変数
let checkSpec = document.getElementById("items_spec");
// メディアクエリを引数にしてmatch状況を格納する変数
let nowWidth = window.matchMedia('(min-width: 900px)');

// matchがtrueの場合、チェックボックスを強制的にfalse
const checkOut = function(nowWidth){
	if(nowWidth.matches){
		checkSlide.checked = false;
		checkSpec.checked = false;
	}
}

// メディアクエリが切り替わるタイミングでイベントリスナーを設定
nowWidth.addEventListener(("change"), checkOut);

//念のため初回時に関数を実行
checkOut(nowWidth);
