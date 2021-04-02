$(document).ready(function(){
  $('.comment__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left__arrow.png" alt=""/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right__arrow.png" alt=""/></button>', 
  });
});