/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.js-nav-menu');
const navClose = document.querySelector('.js-nav-close');
const navToggle = document.querySelector('.js-nav-toggle');

const handleShowMenu = () => navMenu.classList.add('nav__menu_active');

const handleHideMenu = () => navMenu.classList.remove('nav__menu_active');

if (navToggle) {
    navToggle.addEventListener('click', handleShowMenu);
}

if (navClose) {
    navClose.addEventListener('click', handleHideMenu);
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.js-nav-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', handleHideMenu);
})

