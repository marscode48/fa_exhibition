class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.hamburger = document.querySelector('.header__hamburger');
    this.DOM.navi = document.querySelector('.header__navi');
    // console.log(this.DOM.navi)
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.hamburger.classList.toggle('active');
    this.DOM.navi.classList.toggle('active');
  }

  _addEvent() {
    this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.navi.addEventListener(this.eventType, this._toggle.bind(this));    
  }
}