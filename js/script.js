$(document).ready(function(){

  $('.portfolio-thumb-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.portfolio-item-slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    infinite: true
  });

  $('.portfolio-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.portfolio-thumb-slider',
    infinite: true
  });


  $('.present-blc__hover--first').click(function () {
    $('.present-blc__hide--first').toggleClass('swop-pop');
  });
  $('.present-blc__hover--second').click(function () {
    $('.present-blc__hide--second').toggleClass('swop-pop');
  });



  $('.main-nav__item a[href*="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
      e.preventDefault();
  });


  var hamburger = $('#hamburger-icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     $('.main-nav ul').toggleClass('show');
     return false;
  });





});