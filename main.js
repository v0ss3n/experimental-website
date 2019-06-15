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
});


$(document).ready(function() {
  $(".lookwrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true
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

var fourthScene = document.getElementById('fifth-scene');
var fourthParallax = new Parallax(fifthScene);
