$(".tabs-wrapper").each((a, tabsWrapperEl) => {
  const $tabsWrapperEl = $(tabsWrapperEl);
  $tabsWrapperEl.find(".tab__title").each((i, titleWrapperEl) => {
    const $title = $(titleWrapperEl);
    $title.on("click", () => {
      $tabsWrapperEl.find(".tab__content").hide();

      $tabsWrapperEl
        .find(".tab__content")
        .eq(i)
        .show();

      $tabsWrapperEl
        .find(".tab__title--active")
        .removeClass("tab__title--active");

      $title.toggleClass("tab__title--active");
    });
  });
});

$(document).ready(function() {
  $(".photoshoot").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
  $(".portfolio-images").slick({
    autoplay: true
  });
  }

  $(".lookwrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true
  });

  $(".look__specs-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

    $(".moulage-carousel1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2700
    });

      $(".moulage-carousel2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });

      $(".moulage-carousel3").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
      });

      $(".moulage-carousel4").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3100
      });
});


var firstScene = document.getElementById('first-scene');
var firstParallax = new Parallax(firstScene);

var secondScene = document.getElementById('second-scene');
var secondParallax = new Parallax(secondScene);

var thirdScene = document.getElementById('third-scene');
var thirdParallax = new Parallax(thirdScene);

var fourthScene = document.getElementById('fourth-scene');
var fourthParallax = new Parallax(fourthScene);

var fifthScene = document.getElementById('fifth-scene');
var fifthParallax = new Parallax(fifthScene);

// var sixthScene = document.getElementById('sixth-scene');
// var sixthParallax = new Parallax(sixthScene);

var moulageScene1 = document.getElementById('moulage-scene1');
var moulageParallax1 = new Parallax(moulageScene1);

var moulageScene2 = document.getElementById('moulage-scene2');
var moulageParallax2 = new Parallax(moulageScene2);

var moulageScene3 = document.getElementById('moulage-scene3');
var moulageParallax3 = new Parallax(moulageScene3);

var moulageScene4 = document.getElementById('moulage-scene4');
var moulageParallax4 = new Parallax(moulageScene4);

var moulageScene5 = document.getElementById('moulage-scene5');
var moulageParallax5 = new Parallax(moulageScene5);

var moulageScene6 = document.getElementById('moulage-scene6');
var moulageParallax6 = new Parallax(moulageScene6);

var moulageScene7 = document.getElementById('moulage-scene7');
var moulageParallax7 = new Parallax(moulageScene7);

var moulageScene8 = document.getElementById('moulage-scene8');
var moulageParallax8 = new Parallax(moulageScene8);

jQuery(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
		$('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
		$('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
	}
 
 }); 