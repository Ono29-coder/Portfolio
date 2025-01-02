function showImage(src) {
    const preview = document.getElementById("preview");
    preview.src = src; // src属性を更新して画像を変更
}

// ページ読み込み時に最初の画像を表示
window.onload = function () {
    showImage('./img/game-3.gif');
};
