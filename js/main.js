var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.strelka',
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        }
    }

});


var menuButton = document.querySelector('.menu_button');
var menu = document.querySelector('.header');
menuButton.addEventListener ('click', function (){
    menuButton.classList.toggle('menu_button-active');
    menu.classList.toggle('header-active');
})