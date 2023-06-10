$(function () {
    $('.mobile-menu__btn-open').on('click', function () {
        $('.mobile-menu').addClass('mobile-menu--active');
        $('body').addClass('lock');

    });
    $('.mobile-menu__btn-close').on('click', function () {
        $('.mobile-menu').removeClass('mobile-menu--active');
        $('body').removeClass('lock');

    });
   
    $('.btn-modal').on('click', function () {
        $('body').addClass('lock');
       });

    $('.modal__btn-close').on('click', function () {
        $('body').removeClass('lock');
       });   

    $('.hero__background-box').slick({
        fade:true,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 3000
    });
    var mixer = mixitup('.works__gallery');
    $('.works__gallery').mixitup({
 
    });

   
   
});