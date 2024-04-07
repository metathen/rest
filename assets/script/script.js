'use strict';
const preloader = document.querySelector('[data-preload]');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 750)
    }, 2000);
})

/*___________________MOBILE MENU_________________*/
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
let navOpen = false;

const toggleNav = function(state) {
    if(state==true) {
        navbar.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('nav-active');
    } else {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('nav-active');
    }
}
window.addEventListener('click', (e) => {
    if(e.target.closest('[data-nav-close]')) {
        navOpen = false;
        return toggleNav(navOpen);
    }
    if(e.target.closest('[data-nav-toggler]')) {
        navOpen = true;
        return toggleNav(navOpen);
    }
})

/*______________HEADER SLICK________________*/
const header = document.querySelector('.header');
let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if(isScrollBottom) header.classList.add('hide');
    else header.classList.remove('hide');
    lastScrollPos = window.scrollY;
}
window.addEventListener('scroll', () => {
    if(window.scrollY >= 50) {
        header.classList.add('active');
        hideHeader();
    }
    else header.classList.remove('active');
})