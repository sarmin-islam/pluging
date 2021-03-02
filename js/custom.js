

$(function(){
    jQuery('#demo1').skdslider({
       slideSelector: '.slide',
      delay:5000,
        animationSpeed:2000,
       showNextPrev:true,
        showPlayButton:true,
        autoSlide:true,
        animationType:'fading'

      });

 
     

});
$('.menu-list ul li a').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
   
$('.menu ul li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

var mixer = mixitup(".gallery");
$('.venobox').venobox({
  spinner:'wave',
  spinColor:'yellow',
  overlayColor:'pink',
}); 
var typed = new Typed('#typed', {
  // Waits 1000ms after typing "First"
  strings: ['who', 'we are'],
  typeSpeed: 300,
  smartBackspace: true,
  backSpeed: 500,
  loop: true,


});

$('.video-bg').parallax({
  
  imageSrc: 'images/pg2.jpg',
});

$('.picter').parallax({
  
  imageSrc: 'images/about1.jpg',
});
$(function(){

  $('.content-test').slick({
    autoplay:true,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  );

});
$(function(){
  var backToTOP=$('.back-to-top');
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();

  if(scrolling > 600){
      backToTOP.fadeIn()
  }else{
      backToTOP.fadeOut();
  }

  if(scrolling >600){
      $('.menu-bg').addClass('fixed-nav');
  }else{
      $('.menu-bg').removeClass('fixed-nav');
  }

  });

  backToTOP.click(function(){
      $('html,body').animate({
          scrollTop:0,  

      },1500);


  });

});
