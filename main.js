let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    menu.classList.remove('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


let sun = document.querySelector(".bx-sun");
let moon = document.querySelector(".bx-moon");
let homeElem = document.getElementById("home")
let body = document.getElementById("body")


moon.addEventListener("click", function(){
    homeElem.classList.add("home-dark");
    body.classList.add("dark-theme");
    moon.classList.add("bxm");
    sun.classList.remove("bxs")

});

sun.addEventListener("click", function(){
    homeElem.classList.remove("home-dark");
    body.classList.remove("dark-theme");
    moon.classList.remove("bxm");
    sun.classList.add("bxs")
});