document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    new MenuOpen();
    new SmoothScroll(0);
  }
}

