$(function () {
   
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