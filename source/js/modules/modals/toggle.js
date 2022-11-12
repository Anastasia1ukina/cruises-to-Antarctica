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

window.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!target.closest('.main-nav') && !target.closest('.main-nav__toggle')) {
    navMain.classList.remove('main-nav--opened');
    pageBody.style.position = '';
    pageBody.classList.remove('body--opened-modal');
  }
});
