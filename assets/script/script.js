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
/*___________________MOBILE MENU_________________*/

/*______________HEADER SLICK________________*/
const header = document.querySelector('.header');
const backToTop = document.querySelector('[data-back-top-btn]');
let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    console.log(lastScrollPos + '   окно: ' + window.scrollY)
    if(isScrollBottom) header.classList.add('hide');
    else header.classList.remove('hide');
    lastScrollPos = window.scrollY;
}
window.addEventListener('scroll', () => {
    if(window.scrollY >= 50) {
        header.classList.add('active');
        backToTop.classList.add('active');
        hideHeader();
    } else {
        header.classList.remove('active');
        backToTop.classList.remove('active');
    }
})
/*______________HEADER SLICK________________*/

/*______________SECTION 1 SLIDER________________*/
const heroSlider = document.querySelector('[data-hero-slider]');
const heroSliderItems = document.querySelectorAll('[data-hero-slide]');
const heroPrevBtn = document.querySelector('[data-prev-btn]');
const heroNextBtn = document.querySelector('[data-next-btn]');

let currentSlidePos = 0;
let lastActiveSlide = heroSliderItems[0];
let autoSlideInterval;

const updateSlidePos = function () {
    lastActiveSlide.classList.remove('active');
    heroSliderItems[currentSlidePos].classList.add('active');
    lastActiveSlide = heroSliderItems[currentSlidePos];
}
const slideNext = function () {
    if(currentSlidePos >= heroSliderItems.length - 1)  {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }
    updateSlidePos();
}
const slidePrev = function () {
    if(currentSlidePos <= 0)  {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }
    updateSlidePos();
}
const autoSlide = function () {
    // autoSlideInterval = setInterval(() => {
    //     slideNext();
    // }, 15000)
}
window.addEventListener('click', (e) => {
    if(e.target.closest('[data-prev-btn]')) {
        clearInterval(autoSlideInterval);
        slideNext();
    }
    if(e.target.closest('[data-next-btn]')) {
        slidePrev();
    }
})
window.addEventListener('mouseout', autoSlide);
window.addEventListener('load', autoSlide);
/*______________SECTION 1 SLIDER________________*/

/*______________PARALLAX________________________*/
const parallax = document.querySelectorAll('[data-parallax-item]');
let a, b;
window.addEventListener('mousemove', (e) => {
    a = (e.clientX / window.innerWidth * 10) - 5;
    b = (e.clientY / window.innerHeight * 10) - 5;
    a = a - (a * 2);
    b = b - (b * 2);
    for(let i = 0; i < parallax.length; i++) {
        a = a * Number(parallax[i].dataset.parallaxSpeed);
        b = b * Number(parallax[i].dataset.parallaxSpeed);
        parallax[i].style.transform = `translate3d(${a}px, ${b}px, 0px)`;
    }
})
/*______________PARALLAX________________________*/