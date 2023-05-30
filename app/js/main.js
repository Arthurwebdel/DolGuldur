$(function () {
    $(".menu [href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("current");
        }
    });
    $('.hero__background-box').slick({
        fade:true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    var mixer = mixitup('.works__gallery');
   $('.works__gallery').mixitup({

   });
});