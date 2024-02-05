// $(function () {
  const pagetop = $('.to_top');
  // ボタン非表示
  pagetop.hide();
  // 100pxスクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 800);
  });
// });

$(window).on('load', function () {
  $('body').removeClass('nav_op');
});

var state = false;
var scrollpos;
$('.g_nav_toggle').on('click', function () {
  //    $('body').toggleClass('nav_op');
  // $(this).toggleClass('open');
  if (state == false) {
    scrollpos = $(window).scrollTop();
    $('body').addClass('nav_op').css({ top: -scrollpos });
    state = true;
  } else {
    $('body').removeClass('nav_op').css({ top: 0 });
    window.scrollTo(0, scrollpos);
    state = false;
  }
});
