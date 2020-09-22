 
$(document).ready(function(){
  var st = 0;
  var lastScrollTop = 0;
  var canFadeIn = true; 
  var isMenuHidden = false;
  var titleHeight = 10;
  var blurClass = "bg-rod-light-blur";
  var solidClass = "bg-rod-light";

  $("#rod-nav").fadeOut(0);
  $("#rod-nav").addClass("rod-nav");

  if($("#rod-nav").hasClass(solidClass)){
    if (navigator.userAgent.indexOf("Safari") > -1) {
      $("#rod-nav").removeClass(solidClass);
      $("#rod-nav").addClass(blurClass);
    }
  }

  function fadeNav() {
    st = $(document).scrollTop();


    if (st > titleHeight){
      if (canFadeIn){
        $("#rod-nav").fadeIn(150);
        canFadeIn = false;
      }

    } else {
      if (!canFadeIn){
        $("#rod-nav").fadeOut(150);
        canFadeIn = true;
      }
    }
    lastScrollTop = st
  }

  fadeNav();

  $(window).scroll(function() {
    fadeNav();
  });
});

