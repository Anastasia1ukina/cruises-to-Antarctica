let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
const pageBody = document.querySelector('body');

if (document.querySelector('.main-nav--no-js')) {
  navMain.classList.remove('main-nav--no-js');
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (navMain.classList.contains('main-nav--opened')) {
      pageBody.style.position = '';
      navMain.classList.remove('main-nav--opened');
    }
    if (pageBody.classList.contains('body--opened-modal')) {
      pageBody.style.position = '';
      pageBody.classList.remove('body--opened-modal');
    }
  }
});

navToggle.addEventListener('click', (evt) => {
  if (pageBody.style.position === '') {
    evt.preventDefault();
    navMain.classList.toggle('main-nav--opened');
    pageBody.style.position = 'fixed';
  } else {
    navMain.classList.remove('main-nav--opened');
    pageBody.style.position = '';
  }
});

window.addEventListener('click', (evt) => { // при клике в любом месте окна браузера
  const target = evt.target; // находим элемент, на котором был клик
  if (!target.closest('.main-nav') && !target.closest('.main-nav__toggle')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    navMain.classList.remove('main-nav--opened'); // добавляем класс открытого состояния навигации
    pageBody.style.position = '';
    pageBody.classList.remove('body--opened-modal');
  }
});
