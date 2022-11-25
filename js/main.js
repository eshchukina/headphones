$(function(){
    $('.headp_slider, .slider__items').slick({
      arrows: false,
      dots: true,
      fade:true,
      autoplay: true, 
      autoplaySpeed: 2000,

      });

      $(".menu, .headp__column").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }); 
}); 

 document.querySelector(".form__btn").addEventListener("click", function(event) {
  event.preventDefault();
});