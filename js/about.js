const menuButton = document.querySelector('.menu__button');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.nav__wrapper');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const footerImg = document.querySelector('.ending .img__wrapper img');
    footerImg.src = '../assets/images/icons/cck-logo-about.png';
  } else {
    const footerImg = document.querySelector('.ending .img__wrapper img');
    footerImg.src = '../assets/images/icons/cck-logo.png';
  }
});