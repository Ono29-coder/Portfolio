  const modalButton = document.querySelector('.js-modal-button');
  const modalContainer = document.getElementById('modal-container');
  
  // モーダルを読み込み、メインHTMLに挿入する
  const loadModal = async () => {
    try {
      const response = await fetch('./modal.html'); // modal.html を読み込む
      if (!response.ok) throw new Error('Modal HTML failed to load');
      
      const modalHTML = await response.text();
      modalContainer.innerHTML = modalHTML; // modal.html の内容を挿入
  
      // モーダルの要素を取得
      const modal = modalContainer.querySelector('.js-modal');
      const closeButton = modal.querySelector('.js-close-button');
  
      // モーダルを表示
      modalButton.addEventListener('click', () => {
        modal.classList.add('is-open');
      });
  
      // モーダルを閉じる
      closeButton.addEventListener('click', () => {
        modal.classList.remove('is-open');
      });
    } catch (error) {
      console.error(error);
    }
  };  

