const universitetSelect = document.querySelector(".universitet-select__div");
const universitet__menu = document.querySelector(".universitet__menu");
const ul__links = document.querySelector(".ul__links");
const menus = document.querySelector(".menus");
const nav__logo = document.querySelector(".nav__logo");
const nav___div = document.querySelector(".nav___div");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const header__closed__btn = document.querySelector(".header__closed__btn");

window.addEventListener("click", (e) => {
    if (e.target.closest(".universitet__menu")) {
        universitetSelect.classList.toggle("hidden");
    } else {
        universitetSelect.classList.add("hidden");
    }
});


menus.addEventListener("click", () => {
    ul__links.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
})



// window.addEventListener("click", (e) => {
//     if (e.target.closest(".menus")) {
//         ul__links.classList.toggle("active");
//     }
//     else {
//         ul__links.classList.remove("active");
//     }
// });


