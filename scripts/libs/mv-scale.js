class MvScaleChange {
  constructor() {
    this.DOM = {};
    this.DOM.elems = document.querySelectorAll('.main__img')
    this._mvScale();
  }

  _mvScale() {
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      const innerWidth = window.innerWidth;
  
      if (innerWidth > 900) {
        this.DOM.elems.forEach(elem => elem.style.width = 100/3 + scrollY/10 + '%');
      } else {
        this.DOM.elems.forEach(elem => elem.style.width = 100 - scrollY/10 + '%');
      }
    }.bind(this));
  }
}