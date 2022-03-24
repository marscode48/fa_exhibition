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


  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });


  /*=================================================
  フェード表示
  ===================================================*/
  $(".inview").on("inview", function (event, isInView) {
    // console.log(event)
    if (isInView) {
      $(this).stop().addClass("show");
    }
  });


  /*=================================================
  スクロール時のイベント
  ===================================================*/
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();


    
  });


  /*=================================================
  画面読み込み時と画面幅変更時のイベント
  ===================================================*/
  $(window).on('load resize', function() {
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
    console.log(scroll);      
  });
});


/*=================================================
ハンバーガ―メニュー（共通処理）
===================================================*/
function hamburger() {
  $('.header__hamburger').toggleClass('active');

  if ($('.header__hamburger').hasClass('active')) {
    $('.header__navi').addClass('active');
  } else {
    $('.header__navi').removeClass('active');
  }
}


