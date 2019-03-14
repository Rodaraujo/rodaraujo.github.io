 
$(document).ready(function(){
  var st = 0;
  var lastScrollTop = 0;
  var canFadeIn = true; 
  var isMenuHidden = false;
  var titleHeight = 40;
  $("#rod-nav").fadeOut(0);
  $("#rod-nav").addClass("rod-nav");


  $(window).scroll(function() {
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
    lastScrollTop = st;
  });
});

