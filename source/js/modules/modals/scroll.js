const anchors = document.querySelectorAll('a[href*="#"]');
const pageBody = document.querySelector('body');
let navMain = document.querySelector('.main-nav');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    pageBody.style.position = '';
    navMain.classList.remove('main-nav--opened');
    pageBody.classList.remove('body-overlay--background');
    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
