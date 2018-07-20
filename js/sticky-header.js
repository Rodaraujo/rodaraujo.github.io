$(document).ready(function(){
  var navHeight = $("#rod-nav-bg").outerHeight();
  var distance = navHeight - 72;
  var isFaded = false;
  $(window).scroll(function() {
    if ($(document).scrollTop() > distance) {
      var newMargin = "-" + distance.toString() + "px";
      $("#rod-nav-bg").addClass("rod-sticky");
      $("#rod-nav-bg").css("top", newMargin);
      $("#rod-nav-spacer").height(navHeight);
    } else {
      $("#rod-nav-bg").removeClass("rod-sticky")
      $("#rod-nav-bg").css("top", "0");
      $("#rod-nav-spacer").height(0);

    }
    if ($(document).scrollTop() > distance/3 && !isFaded) {
$("#rod-title").animate({bottom: 20, opacity: 0.0}, 250);
      //$("#rod-title").fadeTo(3500, 0.01);
      isFaded = true;
    }
    if ($(document).scrollTop() < distance/3 && isFaded) {
      $("#rod-title").fadeTo(250, 1);
      $("#rod-title").css("bottom", 0);
      isFaded = false;
    }
  });

  $(window).resize(function(){
    var navHeight = $("#rod-nav-bg").outerHeight();
    var distance = navHeight - 72;
  });

  $(".rod-animate,:focus").hover (function(){
    $( this ).animate({bottom: 3 }, 150);
	$( this ).removeClass("shadow-out");
    $( this ).addClass("shadow-in");
  },
  function(){
    $( this ).animate({bottom: 0 }, 150);
    $( this ).removeClass("shadow-in");
	$( this ).addClass("shadow-out");
  });

});
