document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.side = document.querySelector('#side-btn');
    this._init();
    this._scrollInit();
  }

  _init() {
    new MenuOpen();
    new MenuFadeIn(520);
    new SmoothScroll(0);
  }

  _inviewAnimation(el, inview) {
    // console.log(el)
    // console.log(inview)
    if(inview) {
      el.classList.add('show');
    }
  }

  _sideAnimation(el, inview) {
    // console.log(el)
    // console.log(inview)
    if(inview) {
      this.side.classList.add('inview');
    } else {
      this.side.classList.remove('inview')
    }
  }
  _scrollInit() {
    new ScrollObserver('.inview', this._inviewAnimation);
    new ScrollObserver('#gallery', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px 0px 0px"});
  }
}


