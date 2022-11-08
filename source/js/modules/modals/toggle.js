let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
const pageBody = document.querySelector('body');

// if (navMain) {
//   navToggle.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     pageBody.style.position = 'fixed';
//     navMain.classList.toggle('main-nav--opened');
//     pageBody.classList.toggle('body--opened-modal');
//     // nameInput.focus();
//   });
//   navToggle.addEventListener('click', () => {
//     navMain.classList.toggle('main-nav--opened');
//     pageBody.classList.toggle('body--opened-modal');
//   });
//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       if (navMain.classList.contains('main-nav--opened')) {
//         pageBody.style.position = '';
//         navMain.classList.remove('main-nav--opened');
//       }
//       if (pageBody.classList.contains('body--opened-modal')) {
//         pageBody.style.position = '';
//         pageBody.classList.remove('body--opened-modal');
//       }
//     }
//   });
//   navMain.addEventListener('click', (evt) => {
//     const target = evt.target;
//     pageBody.style.position = '';
//     if (!target.closest('.main-nav__wrapper')) {
//       pageBody.style.position = '';
//       navMain.classList.remove('main-nav--opened');
//       pageBody.classList.remove('body--opened-modal');
//     }
//   });
//   inputLast.addEventListener('focus', () => {
//     navToggle.focus();
//   });
//   inputFirst.addEventListener('focus', () => {
//     approvalInput.focus();
//   });
// }


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
  if (navMain) {
    evt.preventDefault();
    pageBody.style.position = 'fixed';
    navMain.classList.toggle('main-nav--opened');

    if (pageBody.classList.contains('body--opened-modal')) {
      pageBody.style.position = '';
      pageBody.classList.remove('body--opened-modal');
    }
  }
});

// navMain.addEventListener('click', (evt) => {
//   const target = evt.target;
//   pageBody.style.position = 'fixed';
//   if (!target.closest('.main-nav')) {
//     pageBody.style.position = '';
//     navMain.classList.remove('main-nav--opened');
//     pageBody.classList.remove('body--opened-modal');
//   }
// });
