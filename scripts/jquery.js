$(function() {


  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  $('.header__hamburger').on('click', function() {
    hamburger();
  });

  $('.header__navi a').on('click', function() {
    hamburger();
  });
});


/*=================================================
ハンバーガ―メニュー（共通処理）
===================================================*/function hamburger() {
  $('.header__hamburger').toggleClass('active');

  if ($('.header__hamburger').hasClass('active')) {
    $('.header__navi').addClass('active');
  } else {
    $('.header__navi').removeClass('active');
  }
}