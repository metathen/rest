'use strict';

const preloader = document.querySelector('[data-preload]');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 600)
    }, 2000);
})