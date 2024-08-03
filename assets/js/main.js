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
let header = document.querySelector('.js-header');

const handleBlurHeader = () => {
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

/*=============== SHOW SCROLL UP ===============*/

const scrollUpEl = document.querySelector('.js-scroll-up');

const handleScrollUp = () => {
    window.scrollY >= 350 ? scrollUpEl.classList.add('scroll-up_active')
                          : scrollUpEl.classList.remove('scroll-up_active');
}

window.addEventListener('scroll', handleScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('.js-section');
header = document.querySelector('.js-header');

const handleNavActiveLink = () => {
    const scrollDown = window.scrollY;

    sections.forEach(section => {
        const sectionId = section.dataset.sectionId;

        if (sectionId === 'contact') return;

        const sectionHeight = section.offsetHeight,
            headerHeight = header.offsetHeight,
            sectionTop = section.offsetTop - headerHeight,
            navSectionLink = document.querySelector(`.js-nav-link[href*='#${sectionId}']`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            navSectionLink.classList.add('nav__link_active');
        } else {
            navSectionLink.classList.remove('nav__link_active');
        }
    });
}
 
window.addEventListener('scroll', handleNavActiveLink);