'use strict';

// idで値を取得
const text = document.getElementById('todo-text');
const register = document.getElementById('register');
const list = document.getElementById('todo-list');

// 登録ボタンクリック時の挙動
register.addEventListener('click', (event) => {
  event.preventDefault();
  add();
});

function add() {
  if (text.value) {
    const li = document.createElement('li');
    let todo = document.createTextNode(text.value);
    // 入力値をクリアにする
    text.value = '';

    li.appendChild(todo);
    list.appendChild(li);

    // 削除ボタン作詞
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    li.appendChild(deleteBtn);

    // 削除ボタンクリック時の挙動
    deleteBtn.addEventListener('click', () => {
      const selectBtn = deleteBtn.closest('li');
      list.removeChild(selectBtn);
    });
  }
}