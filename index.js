const menuToggle = document.querySelector('.menu__dropDown');
const menuList = document.querySelector('.menu__list');
const menu = document.querySelector('.nav__menu');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--visible');
    menu.classList.toggle('nav__menu--expanded');
    menu.style.width = menu.style.width === '40%' ? '12%' : '40%';
    menu.style.height = menu.style.height === '38rem' ? '3rem' : '38rem';
    menu.style.transition = 'width 0.3s ease, height 0.3s ease';
    menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
});
