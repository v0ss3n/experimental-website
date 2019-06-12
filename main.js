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

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

