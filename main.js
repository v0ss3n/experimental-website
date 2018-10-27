
$('.tabs-wrapper').each((a, tabsWrapperEl) => {
  const $tabsWrapperEl = $(tabsWrapperEl);
  $tabsWrapperEl.find('.tab__title').each((i, titleWrapperEl) => {
    const $title = $(titleWrapperEl);
    $title.on('click', () => {
      $tabsWrapperEl
      .find('.tab__content')
      .hide();

      $tabsWrapperEl
        .find('.tab__content')
        .eq(i)
        .show();

      $tabsWrapperEl
      .find('.tab__title')
      .eq(i)
      .toggleClass('tab__title--active');
    });
  });
});