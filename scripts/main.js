document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
    this._scrollInit();
  }

  _init() {
    new MenuOpen();
    new SmoothScroll(0);
  }

  _inviewAnimation(el, inview) {
    console.log(el)
    console.log(inview)
    if(inview) {
      el.classList.add('show');
    }
  }

  _scrollInit() {
    new ScrollObserver('.inview', this._inviewAnimation);
  }
}


