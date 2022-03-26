class ScrollObserver {
  constructor(els, cb, options) {
    // console.log(cb)
    this.els = document.querySelectorAll(els);
    // console.log(this.els)
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function(entries, observer) {
      // console.log(entries)
      // console.log(observer)
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.cb(entry.target, true);
          if(this.once) {
            // console.log(this.once)
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    this.io.POLL_INTERVAL = 100;

    this.els.forEach(el => this.io.observe(el));
  }
}