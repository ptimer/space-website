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
/*=============== ADD BLUR HEADER ===============*/
const handleBlurHeader = () => {
    const header = document.querySelector('.js-header');

    window.scrollY >= 50 ? header.classList.add('header_blur') 
                         : header.classList.remove('header_blur');
}

window.addEventListener('scroll', handleBlurHeader);

/*=============== SWIPER PLANETS ===============*/ 
const swiperTravel = new Swiper('.js-travel-swiper', {
    loop: true,
    spaceBetween: '32',
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    pagination: {
        el: '.js-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    }
})

