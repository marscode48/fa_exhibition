document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.side = document.querySelector('#side-btn');
    this.bg = document.querySelector('.bg');
    this._init();
    this._scrollInit();
  }

  _init() {
    new MvScaleChange();
    new MenuOpen();
    new MenuFadeIn(520);
    new SmoothScroll(0);
  }

  _galleryAnimation(el, inview) {
    if(inview) {
      el.classList.add('show');
    }
  }

  _sideAnimation(el, inview) {
    if(inview) {
      this.side.classList.add('inview');
    } else {
      this.side.classList.remove('inview')
    }
  }

  _fadeInAnimation(el, inview) {
    if(inview) {
      this.bg.classList.add('inview');
    } else {
      this.bg.classList.remove('inview');
    }
  }

  _scrollInit() {
    new ScrollObserver('.inview', this._galleryAnimation);
    new ScrollObserver('#gallery', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px 0px 0px"});
    new ScrollObserver('#access', this._fadeInAnimation.bind(this), {once: false, rootMargin: "-300px 0px 0px 0px"});
  }
}
