// モーダル要素を取得
const modal = document.querySelector('.js-modal');
const modal2 = document.querySelector('.js-modal2');
// モーダルを開くボタンを取得
const modalButton = document.querySelector('.js-modal-button');
// モーダルを閉じるボタンを取得
const modalClose = document.querySelector('.js-close-button');

// モーダルを開く処理
modalButton.addEventListener('click', () => {
  modal.classList.add('is-open'); // is-openクラスを追加してモーダルを表示
});

// モーダルを閉じる処理
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open'); // is-openクラスを削除してモーダルを非表示
});


// モーダルを開く処理
modalButton.addEventListener('click', () => {
  modal2.classList.add('is-open'); // is-openクラスを追加してモーダルを表示
});

// モーダルを閉じる処理
modalClose.addEventListener('click', () => {
  modal2.classList.remove('is-open'); // is-openクラスを削除してモーダルを非表示
});
