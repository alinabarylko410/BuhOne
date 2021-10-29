'use strict';

var header = document.querySelector('header');
var burgermenu = document.getElementById('burger-menu');

burgermenu.onclick = function() {
	header.classList.toggle('opened');
}

$(function(){

    $('.home__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="home-slick-btn slick-btn slick-prev"><img src="img/arrow_prev.svg" alt=""></img></button>',
        nextArrow: '<button type="button" class="home-slick-btn slick-btn slick-next"><img src="img/arrow_next.svg" alt=""></img></button>', 
        Infinity: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll:1
    });

});


$(function(){
    $('.clients__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="clients-slick-btn slick-btn slick-prev"><img src="img/arrow_prev.svg" alt=""></img></button>',
        nextArrow: '<button type="button" class="clients-slick-btn slick-btn slick-next"><img src="img/arrow_next.svg" alt=""></img></button>', 
        Infinity: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll:2,
        responsive: [
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
                breakpoint: 740,
                settings: {
                  slidesToShow: 2,
                  
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                
              }
            }
        ]
    });
});

$(function(){
    $('.reviews__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="reviews-slick-btn slick-btn slick-prev"><img src="img/arrow_prev.svg" alt=""></img></button>',
        nextArrow: '<button type="button" class="reviews-slick-btn slick-btn slick-next"><img src="img/arrow_next.svg" alt=""></img></button>',
        Infinity: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll:1
    });
});