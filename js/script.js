$(document).ready(function(){
  $('.comment__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left__arrow.png" alt=""/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right__arrow.png" alt=""/></button>', 
  });
});