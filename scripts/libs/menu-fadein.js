class MenuFadeIn {
  constructor(y) {
    this.y = y;
    this.DOM = {};
    this.DOM.logo = document.querySelector('.header__logo');
    this.DOM.hamburger = document.querySelector('.header__hamburger');
    this._getPageScroll();
  }

  _add() {
    this.DOM.logo.classList.add('fadein');
    this.DOM.hamburger.classList.add('fadein');
  }

  _remove() {
    this.DOM.logo.classList.remove('fadein');
    this.DOM.hamburger.classList.remove('fadein');
  }

  _getPageScroll() {
    window.addEventListener('scroll', function() {
      const pageScroll = window.pageYOffset;
      // console.log(pageScroll)
      pageScroll > this.y ? this._add() : this._remove();
    }.bind(this));
  }
}