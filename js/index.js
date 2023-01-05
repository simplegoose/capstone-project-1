const menuButton = document.querySelector('.menu__button');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.nav__wrapper');
const featuredWrapper = document.querySelector('.featured__products');
const moreButton = document.querySelector('.featured__more');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});