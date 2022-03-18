const universitetSelect = document.querySelector(".universitet-select__div");
const universitet__menu = document.querySelector(".universitet__menu");
const ul__links = document.querySelector(".ul__links");
const menus = document.querySelector(".menus");
const nav__logo = document.querySelector(".nav__logo");
const nav___div = document.querySelector(".nav___div");
const nav = document.querySelector("nav");
const closedd = document.querySelector(".closedd");
const body = document.querySelector("body");
const header__closed__btn = document.querySelector(".header__closed__btn");
const header__burger = document.querySelector('.header__burger');
const burger__qizgish1 = document.querySelector(".burger__qizgish1");
const burger__qizgish2 = document.querySelector(".burger__qizgish2");
const burger__qizgish3 = document.querySelector(".burger__qizgish3");


window.addEventListener("click", (e) => {
    if (e.target.closest(".universitet__menu")) {
        universitetSelect.classList.toggle("hidden");
    } else {
        universitetSelect.classList.add("hidden");
    }
});


// header__burger.addEventListener('click', () => {
//     header__burger.classList.toggle('toggle');
// })




window.addEventListener("click", (e) => {
    if (e.target.closest(".menus")) {
        ul__links.classList.toggle("active");
        header__burger.classList.toggle('toggle');
        burger__qizgish1.classList.toggle("bg__oq");
        burger__qizgish2.classList.toggle("bg__oq");
        burger__qizgish3.classList.toggle("bg__oq");
    }
    else {
        ul__links.classList.remove("active");
        header__burger.classList.remove('toggle');
        burger__qizgish1.classList.remove("bg__oq");
        burger__qizgish2.classList.remove("bg__oq");
        burger__qizgish3.classList.remove("bg__oq");
        // header__burger.classList.toggle('toggle');
    }
});




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2000,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
    },
    thumbs: {
        swiper: swiper,
    },
});




