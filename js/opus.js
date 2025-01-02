function showImage1(src) {
    const preview1 = document.getElementById("preview1");
    preview1.src = src; // src属性を更新して画像を変更
}

function showImage2(src) {
    const preview2 = document.getElementById("preview2");
    preview2.src = src; // src属性を更新して画像を変更
}


// ページ読み込み時に最初の画像を表示
window.onload = function () {
    showImage1('./img/game-3.gif');

    showImage2('./img/game-3.gif');

};
