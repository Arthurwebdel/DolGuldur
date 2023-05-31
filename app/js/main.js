$(function () {
    $('.btn').on('click', function () {
        $('body').addClass('modal__open');
       });

    $('.modal__btn-close').on('click', function () {
        $('body').removeClass('modal__open');
       });   

    $(".menu [href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("current");
        }
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