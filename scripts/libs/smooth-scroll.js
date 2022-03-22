class SmoothScroll {
  constructor(g) {
    this.DOM = {};
    this.g = g;
    this.DOM.trigger = document.querySelectorAll('a[href^="#"]');
    this._scroll();
  }

  _scroll() {
    for (let i = 0; i < this.DOM.trigger.length; i++) {
      this.DOM.trigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = this.DOM.trigger[i].getAttribute('href');
        console.log(href)
        let targetElement = document.getElementById(href.replace('#', ''));
        console.log(targetElement)
        // let targetElement = document.getElementById

        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = this.g;
        const target = rect + offset - gap;
        window.scrollTo( {
          top: target,
          behavior: "smooth"
        });
      });
    }
  }
}