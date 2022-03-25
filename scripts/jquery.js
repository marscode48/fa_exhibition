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


    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);


    /*=================================================
    ロゴ、ハンバーガーメニューの表示
    ===================================================*/
    if (scroll > 520) {
      $('.header__logo').fadeIn(500);
      $('.header__hamburger').fadeIn(500);
    } else {
      $('.header__logo').fadeOut(500);
      $('.header__hamburger').fadeOut(500);
    }


    /*=================================================
    サイドボタンを表示
    ===================================================*/
    let gallery_position = $('#gallery').offset().top - $(window).height();
    let access_position = $('#access').offset().top - $(window).height();

    if (window.innerWidth > 900) {
      if (scroll > gallery_position) {
        if (scroll < access_position) {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      } else {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }
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


/*=================================================
メインビジュアルの拡大・縮小（共通処理）
===================================================*/
function mv_scale(scroll) {
  console.log(scroll)
  console.log(window.innerWidth)

  if (window.innerWidth > 900) {
    $('.mainvisual img').css({
      'width': 100/3 + scroll/10 + '%'
    });
  } else {
    $('.mainvisual img').css({
      'width': 100 - scroll/10 + '%'
    });
  }
}